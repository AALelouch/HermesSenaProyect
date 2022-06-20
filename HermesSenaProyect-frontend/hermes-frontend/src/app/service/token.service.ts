import { Injectable } from '@angular/core';

const TOKEN_KEY = 'AuthToken';
const USER_KEY = 'AuthUser';

@Injectable({
  providedIn: 'root'
})
export class TokenService {

  constructor() { }

  public saveToken(token: string): void {
    window.sessionStorage.removeItem(TOKEN_KEY);
    window.sessionStorage.setItem(TOKEN_KEY, token);
  }

  public getToken(): string | null{
    return sessionStorage.getItem(TOKEN_KEY);
  }

  public setUser(user: string): void {
    window.sessionStorage.removeItem(USER_KEY);
    window.sessionStorage.setItem(USER_KEY, user);
  }

  public getUser(): string | null {
    return sessionStorage.getItem(USER_KEY);
  }

  public logOut(): void {
    window.sessionStorage.clear();
  }
}
