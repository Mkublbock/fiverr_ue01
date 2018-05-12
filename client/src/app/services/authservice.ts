import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { AuthenticationRequest } from '../models';
import { error } from 'util';

@Injectable()
export class AuthService {

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': 'my-auth-token'
    })
  };

  constructor(private http: HttpClient) {
  }

  login(credentials: AuthenticationRequest, callback: (access) => void) {
    let access = false;
    console.log('Authservice login called');
    this.http.post('http://localhost:8081/api/login', credentials, this.httpOptions).
      subscribe(data => {
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
