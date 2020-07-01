import { PreloadService } from './preload.service';
import { ApiService } from '../api/api.service';
import { from } from 'rxjs';
import { mockData } from '../../../tests/mockData';
import { apiServiceMock, httpClientMock } from '../../../tests/mockServices';
import { HttpClient } from '@angular/common/http';
import { TestBed } from '@angular/core/testing';

describe('PreloadService', () => {
  interface Suite {
    preloadService: PreloadService;
    apiService: jasmine.SpyObj<ApiService>;
    httpClient: jasmine.SpyObj<HttpClient>
  }

  let suite: Suite = {} as any;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        PreloadService,
        {provide: HttpClient, useValue: httpClientMock},
        {provide: ApiService, useValue: apiServiceMock}
      ],
    }).compileComponents();
    suite.httpClient = TestBed.get(HttpClient);
    suite.preloadService = TestBed.inject(PreloadService);
    suite.apiService = TestBed.get(ApiService);

  });

  it('should be created preloadService', () => {
    expect(suite.preloadService).toBeTruthy();
  });

  it('should preload Data from Server', () => {
    // Arrange
    suite.apiService.getItems.and.callFake(() => {
      return from([mockData]);
    });
    // Act
    suite.preloadService.load();
    // Assert
    expect(suite.preloadService.items).toBe(mockData);
  });
  it('should get item by specified id', () => {
      let id = 1;
      //Arrange
      spyOn(suite.preloadService, 'getItemById').withArgs(id).and.callFake(() => {
        return mockData.find(val => val.id === id);
      });
      //Act
      let func = suite.preloadService.getItemById(id);
      let item = mockData.find(val => val.id === id);
      //assert
      expect(func).toEqual(item);
    }
  )
})
;
