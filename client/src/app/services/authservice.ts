import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {AuthenticationRequest, PasswordChangeRequest} from '../models';
import {Observable} from 'rxjs';
import {tap, delay} from 'rxjs/operators';

@Injectable()
export class AuthService {

  isLoggedIn: Observable<boolean> = Observable.of(false);


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
    this.http.post('http://localhost:8081/api/login', credentials, this.httpOptions).subscribe(data => {
      console.log(data);
      if (data === true) {
        callback(access = true);
        this.isLoggedIn = Observable.of(true);
        console.log(this.isLoggedIn);
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

  logout(): void {
    this.isLoggedIn = Observable.of(false);
  }
}
