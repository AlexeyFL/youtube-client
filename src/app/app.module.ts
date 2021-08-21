import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { INTERCEPTOR_PROVIDERS } from './youtube/interceptors/providers';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AuthGuard } from './auth/guards/auth.guard';
import { AuthService } from './auth/services/auth.service';
import { CoreModule } from './core/core.module';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, AppRoutingModule, CoreModule],
  providers: [AuthService, AuthGuard, INTERCEPTOR_PROVIDERS],
  bootstrap: [AppComponent],
})
export class AppModule {}
