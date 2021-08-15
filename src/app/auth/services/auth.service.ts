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

  loggedIn = false;

  isAuthenticated() {
    const promise = new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(this.loggedIn);
      }, 500);
    });

    return promise;
  }

  logout() {
    localStorage.removeItem('formToken');
    this.loggedIn = false;
  }

  generateToken() {
    function rand() {
      return Math.random().toString(36).substr(2);
    }
    return rand() + rand();
  }

  login() {
    if (!localStorage.getItem('formToken')) {
      localStorage.setItem('formToken', this.generateToken());
      this.loggedIn = true;
    }
  }
}
