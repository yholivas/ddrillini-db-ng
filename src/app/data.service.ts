import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { Pack } from './pack';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  private baseUrl = '/api/packs';

  constructor(private http: HttpClient) { }

  // TODO: create separate service for packs and songs and files
  public uploadFile(form: FormData): Observable<string> {
    return this.http.post('/api/fileserver/upload', form, {responseType: 'text'});
  }

  public recvBanner(banner: string): Observable<any> {
    return this.http.get(`api/fileserver/download/${banner}`, {responseType: 'text'})
  }

  public getPacks(): Observable<any> {
    return this.http.get(`${this.baseUrl}`);
  }

  public getPack(id: number): Observable<any> {
    return this.http.get(`${this.baseUrl}/${id}`);
  }

  public createPack(pack: Pack): Observable<Pack> {
    return this.http.post<Pack>(`${this.baseUrl}`, pack);
  }
}
