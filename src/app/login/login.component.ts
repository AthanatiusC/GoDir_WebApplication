import { Component, OnInit, OnDestroy } from '@angular/core';
import { AuthService } from '../auth.service';
import { Users } from '../users';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router, CanActivate } from '@angular/router';
import { MatSnackBar } from '@angular/material';
import { CookieService } from 'ngx-cookie-service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit,OnDestroy{
  isloading: boolean= false 
  username = new FormControl
  password = new FormControl

  constructor(private cookie:CookieService,private auth: AuthService,private router: Router,private snackBar: MatSnackBar) {}

  ngOnInit() {
    if (this.cookie.check("id")) {
      this.router.navigate(['/Dashboard'])
    }
  }
  ngOnDestroy() {
    // this.snackBar.dismiss()
  }

  login() {
    this.isloading = true
    if (this.username.valid && this.password.valid) {
      this.main()
    } else {
      this.isloading= false
      this.snackBar.open("Password and Username Required","Dismiss",{duration:2000})    
    }
  }

  async main() {
    this.auth.Authenticate(this.username.value, this.password.value).subscribe((res: any) => {
      if (res.Data != null) {
        this.auth.OnSuccess()
        this.router.navigate(["Dashboard"])
        this.isloading = false
        this.snackBar.open("Login Success, Welcome back "+this.username.value+"!","Dismiss",{duration:4000})
        this.cookie.set("key", res.Data.key,7,'/',null,false,"Strict")
        this.cookie.set("id", res.Data.Id,7,'/',null,false,"Strict")
        this.cookie.set("path", res.Data.RootPath,7,'/',null,false,"Strict")
      } else {
        this.isloading = false
        this.snackBar.open("Wrong Username or Password","Dismiss",{duration:2000})
      }
    }, err => {
        this.snackBar.open("Something is wrong","Dismiss",{duration:2000})
        this.isloading = false
    })
  }

}
