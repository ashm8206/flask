import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class FlaskServiceService {
  url:string = 'http:localhost:5002/'
  constructor(private http: HttpClient){ }
  getData(): Observable<any> {
    return this.http(this.url);
  }
}
