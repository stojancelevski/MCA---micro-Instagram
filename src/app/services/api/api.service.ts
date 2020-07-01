import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Photo } from '../../models/photo';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  url = 'http://jsonplaceholder.typicode.com/photos';

  constructor(private http: HttpClient) {
  }


  getItems(): Observable<Photo[]> {
    return this.http.get<Photo[]>(this.url);
  }

  createItem(body): Observable<any> {
    const header = this.resolveHeaders('application/json; charset=UTF-8');
    return this.http.post(this.url, {body}, {headers: header});
  }

  updateItem(id, body): Observable<any> {
    const header = this.resolveHeaders('application/json; charset=UTF-8');
    return this.http.put<any>(`${this.url}/${id}`, {body}, {headers: header});
  }

  deleteItem(id): Observable<any> {
    return this.http.delete(`${this.url}/${id}`);
  }

  resolveHeaders(acceptType) {
    let headers = new HttpHeaders();
    headers = headers.append('Content-Type', acceptType);

    return headers;
  }


}
