import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Directory } from './directory';
import { Payload } from './payload';

@Injectable({
  providedIn: 'root'
})
export class FileManagerService {
  private uri: string = "http://localhost:9000"
  private Directories: Observable<Directory[]>

  constructor(private http:HttpClient) { }

  GetDirectory(path:string){
    return this.http.post(this.uri + "/directory", JSON.stringify({ "path": path }))
  }

}
