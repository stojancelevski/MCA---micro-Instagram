import { async, TestBed } from '@angular/core/testing';

import { HomeComponent } from './home.component';
import { PreloadService } from '../../services/preload/preload.service';
import { HttpClient } from '@angular/common/http';
import { httpClientMock } from '../../../tests/mockServices';
import { mockData } from '../../../tests/mockData';

describe('HomeComponent', () => {
  interface Suite {
    component: HomeComponent;
    preloadService: PreloadService;
    httpClient: jasmine.SpyObj<HttpClient>;
  }

  let suite: Suite = {} as any;
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [HomeComponent],
      providers: [
        PreloadService,
        {provide: HttpClient, useValue: httpClientMock}
      ]
    })
      .compileComponents();
    suite.component = TestBed.createComponent(HomeComponent).componentInstance;
    suite.preloadService = TestBed.get(PreloadService)
  }));


  it('should create Home Component and load data', () => {
    spyOn(suite.preloadService, 'getItems').and.returnValue(mockData);
    suite.component.ngOnInit();
    expect(suite.component).toBeTruthy();
    expect(suite.component.items).toEqual(mockData);
  });
});
