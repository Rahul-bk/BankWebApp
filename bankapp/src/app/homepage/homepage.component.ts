import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { DatabaseService } from '../services/database.service';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent implements OnInit {
  dccounno: any;
  waccountno: any;

  dpassword: any;
  wpassword: any;

  damount: any;
  wamount: any;
  acc: any;

  accno: any;

  homepageForm = this.hom.group({
    dccounno: ['', [Validators.required, Validators.minLength(2), Validators.maxLength(10), Validators.pattern('[0-9]*')]],
    damount: ['', [Validators.required, Validators.pattern('[0-9]*'), Validators.maxLength(9)]],
    dpassword: ['', [Validators.required, Validators.maxLength(10), Validators.pattern('[0-9]*')]]
  })
  name: any;

  constructor(private route: Router, private data: DatabaseService, private hom: FormBuilder, private http: HttpClient) {
    this.accno = data.accno
  }

  ngOnInit(): void {
    var db = JSON.parse(localStorage.getItem("database") || "") //for getting local data
    var acc = JSON.parse(localStorage.getItem("accNo") || "")
    this.name = db[acc].username
    console.log(this.name)
  }
  balance() { 
    this.route.navigateByUrl('balance')
  }
  //----------------------------------------------------deposite-----------------------------------------------
  Deposit() {

    var accountno: any = this.homepageForm.value.dccounno;
    var dpassword: any = this.homepageForm.value.dpassword
    var balance: any = this.homepageForm.value.damount

    const data = {
      accountno,
      dpassword,
      balance
    }
    this.http.post('http://localhost:3002/deposit', data).subscribe((result: any) => {
      if (result) {
        alert(result.message)
      } 
    }, (result) => {
      alert(result.error.message)
    })
  }

  //-------------------------------------------withdraw---------------------------------------------------

  Withdraw() {

    var accountno: any = this.homepageForm.value.dccounno;
    var dpassword: any = this.homepageForm.value.dpassword
    var balance: any = this.homepageForm.value.damount

    const data = {
      accountno,
      dpassword,
      balance
    }
    this.http.post('http://localhost:3002/withdraw', data).subscribe((result: any) => {
      if (result) {
        alert(result.message)
      }
    }, (result) => {
      alert(result.error.message)
    })
  }


  //----------------------------------------delete--&--logout---------------------------------------------
  deleteAccount() {
    this.acc = JSON.parse(localStorage.getItem("currentaccountnumber") ||"");

  }
  cancelacc() {
    this.acc = "";

  }
  deleteacc(event: any) {
    this.data.delete(event).subscribe((result: any) => {
      if (result) {
        alert(result.message)
         localStorage.removeItem('currentaccountnumber')
        this.route.navigateByUrl('')
      }
    })
  }

  logout(){
    localStorage.removeItem('currentaccountnumber')
    this.route.navigateByUrl('')
  }
  //----------------------------------------------cancel-------------------------------------------------
}