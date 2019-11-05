import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FileService {
  private baseUrl = 'api/fileserver';

  constructor(private http: HttpClient) { }

  public uploadFile(form: FormData): Observable<string> {
    return this.http.post(`${this.baseUrl}/upload`, form, {responseType: 'text'});
  }

  public recvBanner(banner: string): Observable<any> {
    return this.http.get(`${this.baseUrl}/download/${banner}`, {responseType: 'text'})
  }
}
