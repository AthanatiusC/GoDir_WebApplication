import { Component, OnInit } from '@angular/core';
import { Directory } from 'src/app/directory';
import { Payload } from 'src/app/payload';
import { FileManagerService } from 'src/app/file-manager.service';

@Component({
  selector: 'app-file-manager',
  templateUrl: './file-manager.component.html',
  styleUrls: ['./file-manager.component.css']
})
export class FileManagerComponent implements OnInit {
  CurrentPath:string
  Directories:Directory[]
  constructor(private FM:FileManagerService) { }

  ngOnInit() {
    this.CurrentPath = sessionStorage.getItem("path")
    this.GetDirectoryList()
  }

  async GetDirectoryList() {
    // console.log(this.CurrentPath)
    await this.FM.GetDirectory(this.CurrentPath).subscribe((res:Payload) => {
      // console.log(res.Message)
      this.Directories = res.Data
    })
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
      console.log(cleanpath)
      this.CurrentPath = cleanpath
      sessionStorage.setItem("path",this.CurrentPath)
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
    sessionStorage.setItem("path",this.CurrentPath)
    this.GetDirectoryList()
  }
}
