import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { AuthenticationRequest, PasswordChangeRequest } from '../models';
import { error } from 'util';

@Injectable()
export class AuthService {

  isLoggedIn = false;

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  };

  constructor(private http: HttpClient) {
  }

  login(credentials: AuthenticationRequest, callback: (access) => void) {
    let access = false;
    console.log('Authservice login called');
    this.http.post('http://localhost:8081/api/login', credentials, this.httpOptions).
      subscribe(data => {
        console.log(data);
        if (data === true) {
          callback(access = true);
          this.isLoggedIn=true;
        }
      }, response => {
        console.log(response);
        if (response) {
          callback(access);
        }
      });
  }

  changePassword(credentials: PasswordChangeRequest, callback: (access) => void) {
    console.log('changepassword called');
    let access = false;
    this.http.post('http://localhost:8081/api/password', credentials, this.httpOptions).subscribe(data => {
      if (data === true) {
        callback(access = true);
      }
    }, response => {
      if (response) {
        callback(access);
      }
    });
  }
}
