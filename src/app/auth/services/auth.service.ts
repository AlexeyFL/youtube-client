import { Injectable } from '@angular/core';
import { Observable, BehaviorSubject } from 'rxjs';

export type User = {
  id: string;
  email: string;
};

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  loggedIn$: Observable<boolean>;

  private loggedIn$$ = new BehaviorSubject(false);

  constructor() {
    this.loggedIn$ = this.loggedIn$$.asObservable();
  }

  login() {
    localStorage.setItem('formToken', this.generateToken());
    this.loggedIn$$.next(true);
  }

  logout() {
    localStorage.removeItem('formToken');
    this.loggedIn$$.next(false);
  }

  generateToken() {
    function rand() {
      return Math.random().toString(36).substr(2);
    }
    return rand() + rand();
  }
}
