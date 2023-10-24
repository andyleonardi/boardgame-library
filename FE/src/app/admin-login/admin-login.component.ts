import { Component } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

import { LoginAuthService } from '../services/login-auth.service';

@Component({
  selector: 'app-admin-login',
  templateUrl: './admin-login.component.html',
  styleUrls: ['./admin-login.component.css'],
})
export class AdminLoginComponent {
  admin: any;

  form: FormGroup = new FormGroup({
    ldap: new FormControl(''),
    password: new FormControl(''),
  });

  constructor(private loginAuthService: LoginAuthService) {}

  submit() {
    if (this.form.valid) {
      console.log('Submitted ', this.form.value);

      const ldap = this.form.value.ldap;
      const password = this.form.value.password;

      this.loginAuthService.adminLogin(ldap, password);      
    }
  }
}
