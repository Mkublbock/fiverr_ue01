import { Component } from '@angular/core';
import { PasswordChangeRequest } from '../../models';
import { AuthService } from '../../services/authservice';

@Component({
  selector: 'app-options',
  templateUrl: './options.component.html'
})
export class OptionsComponent {
  credentials: PasswordChangeRequest = { oldPassword: '', newPassword: '' };
  showError = false;
  newPassword;
  showWrongPassword = false;
  showSuccess = false;
  constructor(private auth: AuthService) { }

  saveSettings() {
    console.log(this.newPassword + ' ' + this.credentials.newPassword);
    if (this.newPassword === this.credentials.newPassword) {
      this.auth.changePassword(this.credentials, access => {
        if (access) {
          this.showSuccess = true;
          this.showError = false;
          this.showWrongPassword = false;
        } else {
          this.showWrongPassword = true;
        }
      });
    } else {
      this.showError = true;
    }
  }
}
