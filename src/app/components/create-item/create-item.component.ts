import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {ApiService} from "../../services/api/api.service";
import {Router} from "@angular/router";
import {SnackbarService} from "../../services/snackbar/snackbar.service";

@Component({
  selector: 'app-create-item',
  templateUrl: './create-item.component.html',
  styleUrls: ['./create-item.component.css']
})
export class CreateItemComponent implements OnInit {
  createForm: FormGroup;

  constructor(private fb: FormBuilder,
              private router: Router,
              private snackbarService: SnackbarService,
              private apiService: ApiService) {
  }

  ngOnInit(): void {
    this.createForm = this.fb.group({
      title: ['', Validators.required],
      url: ['', Validators.required],
      thumbnailUrl: ['', Validators.required]
    })
  }

  create() {
    this.apiService.createItem(this.createForm.value).subscribe(() => {
      this.router.navigateByUrl('/photos').then(() => {
        this.snackbarService.openSnackBar('Successfully Created', 'CREATE');
      })
    }, error => {
      this.snackbarService.openSnackBar(error.message, 'ERROR');
    })
  }

}
