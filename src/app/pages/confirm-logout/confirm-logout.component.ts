import { Component, OnInit, Inject } from '@angular/core';
import { MAT_BOTTOM_SHEET_DATA } from '@angular/material';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/auth.service';

@Component({
  selector: 'app-confirm-logout',
  templateUrl: './confirm-logout.component.html',
  styleUrls: ['./confirm-logout.component.css']
})
export class ConfirmLogoutComponent implements OnInit {
  Message:string

  constructor(@Inject(MAT_BOTTOM_SHEET_DATA) private data:any,private router:Router,private auth:AuthService) { }

  ngOnInit() {
    this.Message = this.data.Message
  }

  Yes() {
    this.auth.LogOut()
    this.router.navigate(["Login"])
  }

  Cancel() {
    
  }

}
