import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header/header.component';
import { UserLoginComponent } from './header/user-login/user-login.component';
import { SearchComponent } from './search/search/search.component';
import { SortComponent } from './sort/sort/sort.component';
import { UserModule } from './user/user.module';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    UserLoginComponent,
    SearchComponent,
    SortComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, UserModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
