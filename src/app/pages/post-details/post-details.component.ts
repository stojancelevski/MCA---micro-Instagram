import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Photo } from '../../models/photo';
import { PreloadService } from '../../services/preload/preload.service';
import { MatDialog } from '@angular/material/dialog';
import { DialogComponent } from '../../components/dialog/dialog.component';
import { ApiService } from '../../services/api/api.service';
import { SnackbarService } from '../../services/snackbar/snackbar.service';

@Component({
  selector: 'app-post-details',
  templateUrl: './post-details.component.html',
  styleUrls: ['./post-details.component.css']
})
export class PostDetailsComponent implements OnInit {
  item: Photo;

  constructor(private route: ActivatedRoute,
              private apiService: ApiService,
              private snackbarService: SnackbarService,
              public dialog: MatDialog,
              private api: PreloadService,
              private router: Router) {
  }

  ngOnInit(): void {
    this.route.paramMap.subscribe(snapshot => {
      const id = snapshot.get('id');
      this.item = this.api.getItemById(+id);
    });
  }

  openDialog() {
    const dialogRef = this.dialog.open(DialogComponent);

    dialogRef.afterClosed().subscribe(result => {
      if ( result === true ) {
        this.apiService.deleteItem(this.item.id).subscribe(() => {
            this.router.navigateByUrl('/photos').then(() => {
              this.snackbarService.openSnackBar('Successfully Deleted', 'DELETE');
            });
          },
          error => {
            this.snackbarService.openSnackBar(error.message, 'ERROR');
          });
      } else {
        this.snackbarService.openSnackBar('Canceled Operation', 'CANCEL');

      }
    });
  }


}
