import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { RegisterRequest } from 'src/app/auth/types/register-request.interface';
import { CurrentUser } from 'src/app/shared/types/current-user.interface';
import { environment } from 'src/environments/environment';
import { AuthResponse } from 'src/app/auth/types/auth-response.interface';
import { LoginRequest } from '../types/login-request.interface';

@Injectable()
export class AuthService {
  constructor(private http: HttpClient) {}

  register(data: RegisterRequest): Observable<CurrentUser> {
    const url = environment.apiUrl + '/users';

    return this.http
      .post<AuthResponse>(url, data)
      .pipe(map((response: AuthResponse) => response.user));
  }

  login(data: LoginRequest): Observable<CurrentUser> {
    const url = environment.apiUrl + 'users/login';

    return this.http
      .post<AuthResponse>(url, data)
      .pipe(map((response: AuthResponse) => response.user));
  }

  getCurrentUser(): Observable<CurrentUser> {
    const url = environment.apiUrl + '/user';

    return this.http
      .get<AuthResponse>(url)
      .pipe(map((response: AuthResponse) => response.user));
  }
}
