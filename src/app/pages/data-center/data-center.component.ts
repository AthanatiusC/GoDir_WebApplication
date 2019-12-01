import { Component, OnInit } from '@angular/core';
import { UsersService } from 'src/app/users.service';
import { Payload } from 'src/app/payload';
import { Users } from 'src/app/users';

@Component({
  selector: 'app-data-center',
  templateUrl: './data-center.component.html',
  styleUrls: ['./data-center.component.css']
})
export class DataCenterComponent implements OnInit {
  Users: Users[]
  isloading:boolean=false
  constructor(private userapi:UsersService) { }

  ngOnInit() {
    this.isloading = true
    this.GetAllUsers()
  }

  async GetAllUsers() {
    await this.userapi.GetAllUsers().toPromise().then((res: Payload) => {
      this.Users = res.Data
    })
    console.log(this.Users)
    this.isloading = false
  }

}
