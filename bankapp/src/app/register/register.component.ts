import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { BalanceComponent } from '../balance/balance.component';
import { DatabaseService } from '../services/database.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  // accountnum:any=""
  // pass:any=""
  // uname:any=""
  // registerArray:any


  registerForm=this.reg.group({
    uname:['',[Validators.required,Validators.pattern('[a-zA-Z ]*')]],
    accountnum:['',[Validators.required,,Validators.minLength(4),Validators.pattern('[0-9]*')]],
    pass:[''],
    balance:['']
  })

  
  constructor(private data:DatabaseService,private route:Router,private reg:FormBuilder) { }


  ngOnInit(): void {
  }

  Register(){

// console.log("Register Form",this.registerForm)

var uname:any=this.registerForm.value.uname
var accountnum:any=this.registerForm.value.accountnum
var pass:any=this.registerForm.value.pass
var balance:any=this.registerForm.value.balance

if(this.registerForm.valid){

this.data.register(uname,accountnum,pass,balance)     
.subscribe((result:any)=>{
  if(result){
    alert(result.message)
    this.route.navigateByUrl('login')
  }else{
    alert(result.error.message)
  }
})
}
}
}
