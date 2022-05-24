import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';
import { API } from 'src/app/app.const';
import { Observable } from 'rxjs';
import { UserListResult } from './user.model';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { }

  // Obter todos os usuários da API
  public getAll(page?: number, perPage?: number): Observable<UserListResult> {
    let params = [];
    if (page) params.push(`page=${page}`);
    if (perPage) params.push(`per_page=${perPage}`);

    return this.http.get<UserListResult>(API + 'users'
      + ((params.length > 0) ? '?' + params.join('&') : '')
    );
  }
}
