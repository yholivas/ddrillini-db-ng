import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { Pack } from './pack';

@Injectable({
  providedIn: 'root'
})
export class PackService {
  private baseUrl = '/api/packs';

  constructor(private http: HttpClient) { }

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
