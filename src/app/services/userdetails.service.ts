import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserdetailsService {

  constructor(private _http:HttpClient) { }

  getname(){
    return this._http.get('http://localhost:3000/Education');
  }
  putname(id:any,obj:any){
    return this._http.put('http://localhost:3000/Education',id,obj);
  }
  deletename(id:any){
    return this._http.delete('http://localhost:3000/Education/'+id);
  }
}
