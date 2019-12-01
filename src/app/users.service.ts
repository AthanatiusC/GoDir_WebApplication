import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Users } from './users';
import { Observable } from 'rxjs';
import { Payload } from './payload';
import { environment } from 'src/environments/environment';
import { CookieService } from 'ngx-cookie-service';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor(private http: HttpClient,private cookie:CookieService) { }

  GetAllUsers(){
    const headers = new HttpHeaders({
      'auth_key': this.cookie.get("key"),
      'user_id': this.cookie.get("id")
    });
    return this.http.get<Payload>(environment.uri + "/users",{headers:headers})
  }
}
