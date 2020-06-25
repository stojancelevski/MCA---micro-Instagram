import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {HomeComponent} from "./pages/home/home.component";
import {NotFoundComponent} from "./pages/not-found/not-found.component";
import {PostDetailsComponent} from "./pages/post-details/post-details.component";
import {EditItemComponent} from "./components/edit-item/edit-item.component";
import {CreateItemComponent} from "./components/create-item/create-item.component";


const routes: Routes = [
  {
    path: 'photos', component: HomeComponent,
  },
  {
    path: 'photos/:id', component: PostDetailsComponent
  },
  {
    path: 'photos/:id/edit',
    component: EditItemComponent
  },
  {
    path: 'create-item',
    component: CreateItemComponent
  },
  {
    path: '', pathMatch: 'full', redirectTo: 'photos'
  },
  {
    path: '**', component: NotFoundComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
