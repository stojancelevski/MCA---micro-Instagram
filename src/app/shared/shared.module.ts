import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from '../pages/home/home.component';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatCardModule } from '@angular/material/card';
import { PostDetailsComponent } from '../pages/post-details/post-details.component';
import { RouterModule } from '@angular/router';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatDialogModule } from '@angular/material/dialog';
import { OverlayModule } from '@angular/cdk/overlay';
import { DialogComponent } from '../components/dialog/dialog.component';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { EditItemComponent } from '../components/edit-item/edit-item.component';
import { InputComponent } from '../components/input/input.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { ReactiveFormsModule } from '@angular/forms';
import { CreateItemComponent } from '../components/create-item/create-item.component';
import { InfiniteScrollModule } from 'ngx-infinite-scroll';


@NgModule({
  declarations: [
    HomeComponent,
    PostDetailsComponent,
    DialogComponent,
    EditItemComponent,
    InputComponent,
    CreateItemComponent,


  ],
  imports: [
    CommonModule,
    MatGridListModule,
    MatCardModule,
    RouterModule,
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    OverlayModule,
    MatDialogModule,
    MatSnackBarModule,
    MatFormFieldModule,
    MatInputModule,
    ReactiveFormsModule,
    InfiniteScrollModule

  ],
  exports: [
    HomeComponent,
    PostDetailsComponent,
    MatToolbarModule,
    DialogComponent,
    EditItemComponent,
    InputComponent,
    MatFormFieldModule,
    MatInputModule,
    CreateItemComponent,
    MatIconModule,
    MatButtonModule,


  ],
  providers: []
})
export class SharedModule {
}
