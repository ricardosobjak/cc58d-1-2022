import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';
import { API } from 'src/app/app.const';
import { Observable } from 'rxjs';
import { UserListResult } from './user.model';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) {}

  // Obter todos os usuários da API
  public getAll(): Observable<UserListResult> {
    return this.http.get<UserListResult>(API + 'users');
  }
}
