import { Injectable } from '@angular/core';

export type User = {
  id: string;
  email: string;
};

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  user = {};

  signup(email: string, password: string) {
    if (!localStorage.getItem('formToken')) {
      console.log('email', email, password);
      localStorage.setItem('formToken', this.generateToken());
      this.user = {
        id: '1',
        email,
      };
    }
    console.log('from serv', email, password);
  }

  generateToken() {
    function rand() {
      return Math.random().toString(36).substr(2);
    }
    return rand() + rand();
  }

  login(email: string, password: string) {
    if (localStorage.getItem('formToken')) {
      console.log('login');
    }
  }
}
