import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  constructor(private _http: HttpClient) {}

  register(body: any) {
    return this._http.post('http://127.0.0.1:3000/users/register', body, {
      observe: 'body',
      headers: new HttpHeaders().append('Content-type', 'application/json'),
    });
  }

  login(body: any) {
    return this._http.post('http://127.0.0.1:3000/users/login', body, {
      observe: 'body',
      withCredentials: true,
      headers: new HttpHeaders().append('Content-type', 'application/json'),
    });
  }

  validatePhone(body: any) {
    return this._http.post('http://127.0.0.1:3000/users/validatePhone', body, {
      observe: 'body',
      withCredentials: true,
      headers: new HttpHeaders().append('Content-type', 'application/json'),
    });
  }

  generateOtp(body: any) {
    return this._http.post('http://127.0.0.1:3000/users/generateOtp', body, {
      observe: 'body',
      withCredentials: true,
      headers: new HttpHeaders().append('Content-type', 'application/json'),
    });
  }

  validateOtp(body: any) {
    return this._http.post('http://127.0.0.1:3000/users/validateOtp', body, {
      observe: 'body',
      withCredentials: true,
      headers: new HttpHeaders().append('Content-type', 'application/json'),
    });
  }

  user() {
    return this._http.get('http://127.0.0.1:3000/users/user', {
      observe: 'body',
      withCredentials: true,
      headers: new HttpHeaders().append('Content-type', 'application/json'),
    });
  }

  logout() {
    return this._http.get('http://127.0.0.1:3000/users/logout', {
      observe: 'body',
      withCredentials: true,
      headers: new HttpHeaders().append('Content-type', 'application/json'),
    });
  }
}
