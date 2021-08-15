import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { HeaderComponent } from './components/header/header.component';
import { SearchComponent } from './components/search/search.component';
import { UserLoginComponent } from './components/user-login/user-login.component';
import { FooterComponent } from './components/footer/footer.component';
import { SortComponent } from './components/sort/sort.component';
import { YoutubeModule } from '../youtube/youtube.module';
import { NotFoundPageComponent } from './components/not-found-page/not-found-page.component';

@NgModule({
  declarations: [
    HeaderComponent,
    SearchComponent,
    UserLoginComponent,
    FooterComponent,
    SortComponent,
    NotFoundPageComponent,
  ],
  imports: [CommonModule, FormsModule, RouterModule, YoutubeModule],
  exports: [HeaderComponent, FooterComponent, SortComponent],
})
export class CoreModule {}
