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
    this.GetDirectoryList()
  }

  async GetDirectoryList() {
    await this.FM.GetDirectory("C:/").subscribe((res:Payload) => {
      console.log(res.Message)
      this.Directories = res.Data
    })
  }
}
