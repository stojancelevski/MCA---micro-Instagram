import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {ActivatedRoute, Router} from "@angular/router";
import {PreloadService} from "../../services/preload/preload.service";
import {Photo} from "../../models/photo";
import {ApiService} from "../../services/api/api.service";
import {SnackbarService} from "../../services/snackbar/snackbar.service";

@Component({
  selector: 'app-form',
  templateUrl: './edit-item.component.html',
  styleUrls: ['./edit-item-component.css']
})
export class EditItemComponent implements OnInit {
  itemForm: FormGroup;
  id: string;
  item: Photo;

  constructor(private fb: FormBuilder,
              private snackbarService: SnackbarService,
              private api: PreloadService,
              private apiService: ApiService,
              private router: Router,
              private route: ActivatedRoute) {
  }

  ngOnInit(): void {

    this.route.paramMap.subscribe(snapshot => {
      const id = snapshot.get('id');
      this.item = this.api.getItemById(+id);
      this.itemForm = this.fb.group({
        id: [this.item.id, Validators.required],
        albumId: [this.item.albumId, Validators.required],
        title: [this.item.title, Validators.required],
        url: [this.item.url, Validators.required],
        thumbnailUrl: [this.item.thumbnailUrl, Validators.required]
      })
    })

  }

  submit() {

    this.apiService.updateItem(this.item.id, this.itemForm.value).subscribe(() => {
      this.router.navigateByUrl('/photos').then(() => {
        this.snackbarService.openSnackBar('Successfully Edited', 'EDIT');
      });
    }, error => {
      this.snackbarService.openSnackBar(error.message, 'ERROR');
    });
  }

}
