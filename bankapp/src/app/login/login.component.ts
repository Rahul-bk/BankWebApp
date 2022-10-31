import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { DatabaseService } from '../services/database.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  // accountnum:any
  // pass:any

  // database:any={
  //   1000:{accno:100,uname:'rahul',password:'rahul123'}
  // }

  loginForm = this.log.group({
    accountnum: ['', [Validators.required, Validators.pattern('[0-9]*')]],
    pass: ['', [Validators.required, Validators.pattern('[a-zA-Z 0-9]*')]],
  });

  constructor(private route: Router,private data: DatabaseService,private log: FormBuilder ) { }

  ngOnInit(): void { }

  Login() {
    var accno = this.loginForm.value.accountnum
    var password = this.loginForm.value.pass

    this.data.Login(accno, password)

      .subscribe((result: any) => {
          if (result) {
            alert(result.message)
            localStorage.setItem("currentaccountnumber", JSON.stringify(result.currentaccountno))
            localStorage.setItem("token", JSON.stringify(result.token))
            localStorage.setItem("username", JSON.stringify(result.username))
            this.route.navigateByUrl('homepage')
          }
        }, (result) => {
          alert(result.error.message);
        }
      )

    // let result=this.data.Login(this.loginForm.value.accountnum,this.loginForm.value.pass);
    // if(result){
    //   this.route.navigateByUrl('homepage')
    // }
  }
}