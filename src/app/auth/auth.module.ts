import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AuthPageComponent } from './components/auth-page/auth-page.component';
import { SharedModule } from '../shared/shared.module';
import { AuthRoutingModule } from './auth-routing.module';

@NgModule({
  declarations: [AuthPageComponent],
  imports: [CommonModule, FormsModule, SharedModule, AuthRoutingModule],
})
export class AuthModule {}
