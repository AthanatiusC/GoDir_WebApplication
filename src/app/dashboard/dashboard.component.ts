import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';
import { FileManagerService } from '../file-manager.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  constructor(private auth: AuthService, private route: Router,private FM:FileManagerService) { }
  
  Menulist
  Name: string
  isloading:boolean = true

  ngOnInit() {
    this.isloading = true
    this.Name = "TEST"
    this.Menulist = [
      {"name":"Home","path":"/Dashboard/Home","icon":"dashboard"},
      {"name":"Data Center","path":"/Dashboard/DataCenter","icon":"center_focus_strong"},
      {"name":"File Manager","path":"FileManager","icon":"folder_shared"},
      {"name":"Profile","path":"Profile","icon":"person_pin"},
      {"name":"Setting","path":"Settings","icon":"settings_applications"},
    ]
    this.isloading = false
  }

  LogOut() {
    this.auth.LogOut()
    document.getElementById("close").click()
    this.route.navigate(["Login"])
  }
}