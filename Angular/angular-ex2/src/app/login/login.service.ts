import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { API } from '../app.const';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http: HttpClient) { }

  getHeaders() {
    return new HttpHeaders({
      'Content-type': 'application/json'
    });
  }

  public login(credentials: any) {
    return this.http.post(API + 'login', JSON.stringify(credentials),
      { headers: this.getHeaders() }
    );
  }
}
