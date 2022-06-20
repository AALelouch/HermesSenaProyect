import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { LoginRequest } from '../model/login-request';
import { JwtAuthResponse } from '../model/jwt-auth-response';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  authUrl = 'http://localhost:8080/auth/login';

  constructor(private http:HttpClient) { }

  public login(loginRequest:LoginRequest): Observable<JwtAuthResponse> {
    return this.http.post<JwtAuthResponse>(this.authUrl, loginRequest);
  }
}
