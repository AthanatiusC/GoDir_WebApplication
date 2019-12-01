import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { CanActivate, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Users } from './users';
import { MatSnackBar } from '@angular/material';
import { timeout } from 'rxjs/operators'
import { CookieService } from 'ngx-cookie-service';

@Injectable({
  providedIn: 'root'
})
export class AuthService implements CanActivate {
  public isAuthenticated: boolean = false
  private uri:string = "http://localhost:9000"

  constructor(private cookie:CookieService,private http:HttpClient,private router:Router,private snackBar: MatSnackBar) { }

  canActivate(): boolean {
    if (this.cookie.get('key') != null){
      return true
    } else {
      this.router.navigate(['/Login'])
      // window.location.href=""
    }
    // else if (this.isAuthenticated == true) {
    //   return true
    // }
    return false
  }

  Authenticate(username:string,password:string):Observable<Users>{
    return this.http.post<Users>(this.uri+"/auth", JSON.stringify({ "username": username, "password": password }))
  }

  LogOut() {
    this.cookie.deleteAll()
    // this.http.delete("http://localhost:9000/auth")
  }

  OnSuccess() {
    this.isAuthenticated = true
  }
}
