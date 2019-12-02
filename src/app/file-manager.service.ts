import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Directory } from './directory';
import { Payload } from './payload';
import { environment } from 'src/environments/environment';
import { CookieService } from 'ngx-cookie-service';
import * as $ from 'jquery'
@Injectable({
  providedIn: 'root'
})
export class FileManagerService {
  private Directories: Observable<Directory[]>

  constructor(private http:HttpClient,private cookie:CookieService) { }

  GetDirectory(path:string){
    const Header = new HttpHeaders({
      'auth_key': this.cookie.get("key"),
      'user_id': this.cookie.get("id")
    });
    return this.http.post(environment.uri + "/directory", JSON.stringify({ "path": path }),{headers:Header})
  }

  CreateDirectory(path: string) {
    const Header = new HttpHeaders({
      'auth_key': this.cookie.get("key"),
      'user_id': this.cookie.get("id")
    });
    return this.http.post(environment.uri+"/directory/create",JSON.stringify({ "path": path }),{headers:Header})
  }

}
