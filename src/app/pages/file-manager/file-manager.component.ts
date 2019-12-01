import { Component, OnInit } from '@angular/core';
import { Directory } from 'src/app/directory';
import { Payload } from 'src/app/payload';
import { FileManagerService } from 'src/app/file-manager.service';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-file-manager',
  templateUrl: './file-manager.component.html',
  styleUrls: ['./file-manager.component.css']
})
export class FileManagerComponent implements OnInit {
  CurrentPath:string
  Directories: Directory[]
  FolderName: string
  isloading:boolean=false
  constructor(private cookie:CookieService,private FM:FileManagerService) { }

  ngOnInit() {
    this.isloading = true
    this.CurrentPath = this.cookie.get("path")
    this.GetDirectoryList()
  }

  async GetDirectoryList() {
    await this.FM.GetDirectory(this.CurrentPath).toPromise().then((res:Payload) => {
      this.Directories = res.Data
    })
    this.isloading = false
  }

  GetDirectory(name: string, type: string) {
    if (type == "Folder") {
      let splittedpath = this.CurrentPath.split("/")
      splittedpath.push(name)
      let dirtypath = splittedpath.join("/")
      let cleanpath:string
      if (dirtypath.includes("//")) {
        cleanpath = dirtypath.replace("//","/")
      } else {
        cleanpath = dirtypath
      }
      this.CurrentPath = cleanpath
      this.cookie.set("path",this.CurrentPath)
      this.GetDirectoryList()
    }
  }

  GoBack() {
    let splittedpath = this.CurrentPath.split("/")
    splittedpath.pop()
    let path = splittedpath.join("/")
    if (!path.includes("/")) {
      this.CurrentPath = path+"/"
    } else {
      this.CurrentPath = path
    }
    this.cookie.set("path",this.CurrentPath)
    this.GetDirectoryList()
  }

  CreateFolder() {
    
  }
}
