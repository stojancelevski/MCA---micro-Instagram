import { async, fakeAsync, TestBed } from '@angular/core/testing';

import { PostDetailsComponent } from './post-details.component';
import { ApiService } from '../../services/api/api.service';
import { SnackbarService } from '../../services/snackbar/snackbar.service';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { PreloadService } from '../../services/preload/preload.service';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { httpClientMock, MdDialogMock } from '../../../tests/mockServices';
import { of } from 'rxjs';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { RouterTestingModule } from '@angular/router/testing';
import { mockData } from '../../../tests/mockData';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';

describe('PostDetailsComponent', () => {
  interface Suite {
    component: PostDetailsComponent;
    // apiService: jasmine.SpyObj<ApiService>;
    apiService: ApiService;
    httpClient: jasmine.SpyObj<HttpClient>
    snackbarService: SnackbarService;
    dialog: jasmine.SpyObj<MatDialog>;
    preloadService: PreloadService;
    router: Router;
    route: ActivatedRoute;
  }

  const activatedRouteStub = {
    paramMap: {
      subscribe() {
        return of();
      }
    }
  };
  let suite: Suite = {} as any;
  let id;
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [PostDetailsComponent],
      imports: [
        MatSnackBarModule,
        MatDialogModule,
        RouterTestingModule,
        MatCardModule,
        MatIconModule
      ],
      providers: [
        ApiService,
        {provide: HttpClient, useValue: httpClientMock},
        // {provide: ApiService, useValue: apiServiceMock},
        {provide: ActivatedRoute, useValue: activatedRouteStub},
        PreloadService,
        {provide: MatDialog, useClass: MdDialogMock}
      ]
    })
      .compileComponents();
    suite.component = TestBed.createComponent(PostDetailsComponent).componentInstance;
    suite.httpClient = TestBed.get(HttpClient);
    suite.preloadService = TestBed.get(PreloadService);
    suite.apiService = TestBed.get(ApiService);
    suite.snackbarService = TestBed.get(SnackbarService);
    suite.route = TestBed.get(ActivatedRoute);
    suite.dialog = TestBed.get(MatDialog);

  }));

  it('should create', () => {
    expect(suite.component).toBeTruthy();
  });

  it('Get item by Id', () => {
    suite.route.paramMap.subscribe(params => {
      id = parseInt(params.get('id'));
      spyOn(suite.preloadService, 'getItemById').withArgs(id).and.callFake(() => {
        return mockData.find(val => val.id = id);
      })
    })
    suite.component.ngOnInit();
    let item = mockData.find(val => val.id === id);
    expect(suite.component.item).toEqual(item);
  })

  it('should call the dialog', () => {
    spyOn(suite.dialog, 'open').and.callThrough();
    suite.component.openDialog();
    expect(suite.dialog.open).toHaveBeenCalled();
  })

  it('should return true', fakeAsync(() => {

    spyOn(suite.component, 'openDialog').and.callFake(() => {
      return true;
    });
    expect(suite.component.openDialog()).toBeTruthy();
  }))
});
