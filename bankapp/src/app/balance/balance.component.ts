import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DatabaseService } from '../services/database.service';

@Component({
  selector: 'app-balance',
  templateUrl: './balance.component.html',
  styleUrls: ['./balance.component.css']
})
export class BalanceComponent implements OnInit {
  dummyarray:any=[]
  // abc:any;
  // accountnumber: any;
  // name: any;
  // amounts: any;
  
  constructor(private http:HttpClient ) {
    var abc:any=JSON.parse(localStorage.getItem('currentaccno') ||'')
    this.http.post('http://localhost:3002/deleteacc',{"accNo":abc}).subscribe((result:any)=>{
      this.dummyarray.push(result.transaction)
    })
   }

  ngOnInit(): void {
    // var datab=this.data.database
    // console.log(datab)
    // this.abc=localStorage.getItem('accountnumber')
    // this.accountnumber=datab[this.abc]['accno']
    // this.name=datab[this.abc]['username']
    // this.amounts=datab[this.abc]['balance']

  }

    
 
}
