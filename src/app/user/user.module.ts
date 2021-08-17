import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserCategoriesComponent } from './components/user-categories/user-categories.component';
import { UserCardComponent } from './components/user-card/user-card.component';
import { ShortenPipe } from '../shared/pipes/shorten.pipe';
import { FilterByPipe } from '../shared/pipes/filter-by.pipe';
import { SortByPipe } from '../shared/pipes/sort-by.pipe';

@NgModule({
  declarations: [
    UserCategoriesComponent,
    UserCardComponent,
    ShortenPipe,
    FilterByPipe,
    SortByPipe,
  ],
  imports: [CommonModule],
  exports: [UserCategoriesComponent],
})
export class UserModule {}
