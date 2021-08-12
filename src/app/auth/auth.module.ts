import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AuthPageComponent } from './components/auth-page/auth-page.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [AuthPageComponent],
  imports: [CommonModule, FormsModule, SharedModule],
})
export class AuthModule {}
