import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-auth-page',
  templateUrl: './auth-page.component.html',
  styleUrls: ['./auth-page.component.scss'],
})
export class AuthPageComponent {
  isLogin: boolean = true;

  isLoading: boolean = false;

  constructor(private authService: AuthService, private router: Router) {}

  onSwitchLogin() {
    this.isLogin = !this.isLogin;
  }

  onSubmit(form: NgForm) {
    if (!form.valid) {
      return;
    }
    /* const { email } = form.value;
    const { password } = form.value; */

    // this.isLoading = true;

    this.authService.login();

    /* setTimeout(() => {
      this.isLoading = false;
    }, 800); */

    form.reset();
  }

  login() {
    this.authService.login();
  }
}
