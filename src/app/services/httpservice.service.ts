import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HttpserviceService {

  constructor(private _http: HttpClient) { }
  getUserInfo(){
    return this._http.get("http:/localhost:3000/users")
  }
}
