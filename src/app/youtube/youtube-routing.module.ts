import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserCategoriesComponent } from './components/user-categories/user-categories.component';
import { DetailPageComponent } from './components/detail-page/detail-page.component';

const routes: Routes = [
  {
    path: '',
    component: UserCategoriesComponent,
  },
  {
    path: 'videos/:id',
    component: DetailPageComponent,
  },
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forChild(routes)],
})
export class YoutubeRoutingModule {}
