import { Component, EventEmitter, Output } from '@angular/core';
import { AuthService } from 'src/app/auth/services/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
  togglingSettings: boolean;

  isAuthenticated: boolean;

  @Output() changeToggleSettings = new EventEmitter<boolean>();

  constructor(public authService: AuthService) {
    this.togglingSettings = false;
    this.isAuthenticated = false;
  }

  onToggleSettings(item: boolean) {
    this.togglingSettings = item;
  }
}
