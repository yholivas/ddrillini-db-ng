import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { Pack } from './pack';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  private baseUrl = '/api/packs';
  // add pack banners later once I know how images work
  constructor(private http: HttpClient) { }

  public getPacks(): Observable<any> {
    return this.http.get(`${this.baseUrl}`);
  }

  public createPack(pack: Pack): Observable<Pack> {
    return this.http.post<Pack>(`${this.baseUrl}`, pack);
  }
}
