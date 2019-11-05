import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { Song } from './song';

@Injectable({
  providedIn: 'root'
})
export class SongService {
  private baseUrl = '/api/songs';

  constructor(private http: HttpClient) { }

  public getSongsByPack(id: number): Observable<any> {
    return this.http.get(`${this.baseUrl}/pack/${id}`);
  }
}
