import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { StoreModule } from '@ngrx/store';

import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { INTERCEPTOR_PROVIDERS } from './youtube/interceptors/providers';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AuthGuard } from './auth/guards/auth.guard';
import { AuthService } from './auth/services/auth.service';
import { CoreModule } from './core/core.module';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CoreModule,
    StoreModule.forRoot({}, {}),
    StoreDevtoolsModule.instrument({
      maxAge: 25,
    }),
  ],
  providers: [AuthService, AuthGuard, INTERCEPTOR_PROVIDERS],
  bootstrap: [AppComponent],
})
export class AppModule {}
