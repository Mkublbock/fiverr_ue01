import { Component } from '@angular/core';
import { AuthService } from '../../services/authservice';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent {
  credentials = { username: '', password: '' };
  showError = false;
  constructor(private auth: AuthService, private router: Router) { }

  login() {
    console.log(' Login called ');
    this.auth.login(this.credentials, validation => {
      if (validation) {
        //  GOTO OVERVIEW
      } else {
        this.showError = true;
      }
    });
  }
}
