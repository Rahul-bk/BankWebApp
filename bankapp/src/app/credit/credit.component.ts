import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { DatabaseService } from '../services/database.service';

@Component({
  selector: 'app-credit',
  templateUrl: './credit.component.html',
  styleUrls: ['./credit.component.css']
})
export class CreditComponent implements OnInit {
  name:any
  accountno:any
  aadharcard:any
  salary:any
  pancard:any
  password:any
  Creditdatabase:any={}
  creditArray:any=[];

 


  constructor(private data:DatabaseService,private cre:FormBuilder) { }

  ngOnInit(): void {
  }

  creditcard=this.cre.group({
    name:['',[Validators.required,Validators.pattern('[a-zA-Z ]*')]],
    accountno:['',[Validators.required,Validators.pattern('[0-9 ]*')]],
    password:['',[Validators.required,Validators.pattern('[0-9 ]*')]],
    pancard:['',[Validators.required,Validators.pattern('[0-9 ]*')]],
    salary:['',[Validators.required,Validators.pattern('[0-9 ]*')]],
    aadharcard:['',[Validators.required,Validators.maxLength(10),Validators.pattern('[0-9 ]*')]]
  })

  Credit(){
    console.log("creditcard",this.creditcard);
    var name=this.creditcard.value.name
    var accountno:any=this.creditcard.value.accountno
    var pancard=this.creditcard.value.pancard
    var salary=this.creditcard.value.salary
    var aadharcard=this.creditcard.value.aadharcard
    var password=this.creditcard.value.password



    this.Creditdatabase[accountno]={
      username:name,
      accountNo:accountno,
      aadharCard:aadharcard,
      ssalary:salary,
      panacard:pancard,
      passwordd:password
    }
    console.log("data",this.Creditdatabase)
    this.creditArray.push(this.Creditdatabase[accountno])
    console.log("dat",this.Creditdatabase)
  }

}
