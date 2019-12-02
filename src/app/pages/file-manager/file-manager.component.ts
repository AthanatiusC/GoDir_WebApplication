import { Component, OnInit } from '@angular/core';
import { Directory } from 'src/app/directory';
import { Payload } from 'src/app/payload';
import { FileManagerService } from 'src/app/file-manager.service';
import { CookieService } from 'ngx-cookie-service';
import * as moment from 'moment'; // add this 1 of 4
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
  moment: any
  constructor(private cookie:CookieService,private FM:FileManagerService) { }

  ngOnInit() {
    this.isloading = true
    this.CurrentPath = this.cookie.get("path")
    this.GetDirectoryList()
    this.moment = moment
  }

  async GetDirectoryList() {
    await this.FM.GetDirectory(this.CurrentPath).toPromise().then((res:Payload) => {
      this.Directories = res.Data
    })
    this.isloading = false
  }

  cleanThePath(dirtypath:string) {
    let cleanpath: string;
    if (dirtypath.includes("//")) {
      cleanpath = dirtypath.replace("//", "/");
    } else {
      cleanpath = dirtypath;
    }

    return cleanpath
  }

  GetDirectory(name: string, type: string) {
    if (type == "Folder") {
      let splittedpath = this.CurrentPath.split("/")
      splittedpath.push(name)
      let dirtypath = splittedpath.join("/")
      let cleanpath = this.cleanThePath(dirtypath)
      
      this.CurrentPath = cleanpath
      this.cookie.set("path",this.CurrentPath)
      this.GetDirectoryList()
    }else{
      this.downloadFile(this.CurrentPath, name)
    }
  }

  downloadFile(path:string, filename: string) {
    let thePath = path+filename;
    thePath = this.cleanThePath(thePath )
    console.log("download bang "+path+filename);
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
 
  selectFolder(event){
    $('.folder').removeClass('folder-selected');
    $(event.target).parent('tr').toggleClass('folder-selected');
  }
}
