import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CommonModule } from '@angular/common';

import { AuthPageComponent } from './components/auth-page/auth-page.component';

const routes: Routes = [
  {
    path: '',
    component: AuthPageComponent,
  },
];

@NgModule({
  declarations: [],
  imports: [CommonModule, RouterModule.forChild(routes)],
})
export class AuthRoutingModule {}
