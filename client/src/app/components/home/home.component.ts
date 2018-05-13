import {Component} from '@angular/core';
import {AuthService} from '../../services/authservice';
import {Router} from '@angular/router';
import {AuthenticationRequest} from '../../models';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html'
})
export class HomeComponent {
  credentials: AuthenticationRequest = {username: '', password: ''};
  showError = false;

  constructor(private auth: AuthService, private router: Router) {
  }


  login() {
    console.log(' Login called ');
    this.auth.login(this.credentials, access => {
      if (access) {
        this.showError = false;
        this.router.navigate(['/overview']);
      } else if (access === false) {
        this.showError = true;
      }
    });
  }
}
