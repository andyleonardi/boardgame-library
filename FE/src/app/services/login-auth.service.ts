import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';

import { userEndpoints } from 'src/endpoints';

@Injectable({
  providedIn: 'root',
})
export class LoginAuthService {
  isAdminAuth: boolean = false;
  
  constructor(
    private http: HttpClient,
    private cookieService: CookieService,
    private router: Router
  ) {}

  adminLogin(ldap: string, password: string) {
    const body = {
      ldap: ldap,
      password: password,
    };

    return this.http.post(userEndpoints.login(), body).subscribe(
      (res: any) => {
        const token = res.data.token;

        // Store token in cookie
        this.cookieService.set('authToken', token);

        // Update isAdminAuth
        this.isAdminAuth = true;

        this.router.navigate(['/admin/settings']);
      },
      (error) => {
        console.error(`Error: ${error.message}`);
      }
    );
  }

  getToken(): string | null {
    return this.cookieService.get('authToken');
  }

  checkAdminAuth() {
    return this.isAdminAuth;
  }

  adminLogout() {
    // Remove token from cookie
    this.cookieService.delete('authToken');
    this.isAdminAuth = false;

    this.router.navigate(['/']);
  }
}
