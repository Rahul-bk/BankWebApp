import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-transaction',
  templateUrl: './transaction.component.html',
  styleUrls: ['./transaction.component.css']
})
export class TransactionComponent implements OnInit {
  dummyarray:any=[]


  constructor(private http:HttpClient) {
   
      var abc:any=JSON.parse(localStorage.getItem('currentaccountnumber') ||'')
      this.http.post('http://localhost:3002/transaction',{"accNo":abc}).subscribe((result:any)=>{
        this.dummyarray.push(result.transaction)
      })
     
   }

  ngOnInit(): void {
  }

}
