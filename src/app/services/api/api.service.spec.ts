import { TestBed } from '@angular/core/testing';

import { ApiService } from './api.service';
import { HttpClient } from '@angular/common/http';
import { httpClientMock } from '../../../tests/mockServices';

describe('ApiService', () => {
  interface Suite {
    apiService: ApiService;
    httpClient: jasmine.SpyObj<HttpClient>

  }

  let suite: Suite = {} as any;
  let spy = {toPromise: jasmine.createSpy('toPromise')};
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        ApiService,
        {provide: HttpClient, useValue: httpClientMock}
      ]
    });
    suite.apiService = TestBed.get(ApiService);
    suite.httpClient = TestBed.get(HttpClient);
  });

  it('should be created apiService', () => {
    expect(suite.apiService).toBeTruthy();
  });

  it('should get the Items', () => {

    suite.apiService.getItems();

    expect(suite.httpClient.get).toHaveBeenCalledWith(suite.apiService.url);
  })
  it('should create the Item', () => {
    suite.httpClient.post.and.returnValue(spy as any);

    suite.apiService.createItem({});

    expect(suite.httpClient.post).toHaveBeenCalled();
  })
  it('should update the Item', () => {
    suite.httpClient.put.and.returnValue(spy as any);

    suite.apiService.updateItem(0, {});

    expect(suite.httpClient.put).toHaveBeenCalled();
  });
  it('should delete the Item', () => {
    suite.httpClient.delete.and.returnValue(spy as any);

    suite.apiService.deleteItem(0);

    expect(suite.httpClient.delete).toHaveBeenCalled();
  })
});
