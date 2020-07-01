import { async, TestBed } from '@angular/core/testing';

import { CreateItemComponent } from './create-item.component';
import { ApiService } from '../../services/api/api.service';
import { FormBuilder } from '@angular/forms';
import { RouterTestingModule } from '@angular/router/testing';
import { SnackbarService } from '../../services/snackbar/snackbar.service';
import { Router } from '@angular/router';
import { routes } from '../../app-routing.module';
import { HomeComponent } from '../../pages/home/home.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('CreateItemComponent', () => {
  let component: CreateItemComponent;
  let service: ApiService;
  let snackbarService: SnackbarService;
  let router: Router;
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [RouterTestingModule.withRoutes(routes)],
      declarations: [
        HomeComponent
      ],
      providers: [
        HttpClientTestingModule
      ]
    })
    service = new ApiService(null);
    snackbarService = new SnackbarService(null);

    component = new CreateItemComponent(new FormBuilder(), router, snackbarService, service);
  }));


  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
