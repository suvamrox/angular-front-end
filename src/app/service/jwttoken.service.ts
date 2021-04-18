import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class JWTTokenService {

  constructor() { }

  setToken(key: string, value: string) {
    localStorage.setItem(key, value);
  }

  getToken(key: string) {
    return localStorage.getItem(key);
  }

  removeToken(key: string) {
    localStorage.removeItem(key);
  }

}
