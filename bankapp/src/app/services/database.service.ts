import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DatabaseService {
  database: any = {
    1000: { accno: 100, username: 'rahul', password: 'rahul123' }
  }

  accno: any;

  route: any;

  constructor(private http: HttpClient) { }


  register(username: any, accountnum: any, password: any, balance: any) {
    const data = {
      username,
      accountnum,
      password,
      balance
    }
    return this.http.post('http://localhost:3002/register', data)
  }


  Login(accountnum: any, pass: any) {

    const data = {
      accountnum,
      pass
    }
    return this.http.post('http://localhost:3002/Login', data)
  }

  delete(accno: any) {
    return this.http.delete('http://localhost:3002/deleteacc/'+accno)
  }
}
