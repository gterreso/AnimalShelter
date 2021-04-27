import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { AuthService } from './auth.service';
import { Observable } from 'rxjs';

import {apiUrl} from './constants';

@Injectable({
  providedIn: 'root'
})
export class StateService {

  constructor(private http:HttpClient, private authService:AuthService) { }

  
  getAll():Observable<any> {
    let headers = new HttpHeaders({
      'Cache-Control':  'no-cache, no-store, must-revalidate, post-check=0, pre-check=0',
      'Pragma': 'no-cache',
      'Expires': '0'
    });

    return this.http.get(apiUrl + "state/",{'headers':headers});
  }

  getById(id):Observable<any> {
    return this.http.get(apiUrl + "state/"+id);
  }


  add(state) {
    let headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization':'Bearer ' + this.authService.getToken()
    });

    return this.http.post<any>(apiUrl + "state/",state,{'headers':headers, observe: 'response'});
  }

  edit(state) {
    let headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization':'Bearer ' + this.authService.getToken()
    });
    return this.http.put<any>(apiUrl + "state/"+state.id, state,{'headers':headers, observe: 'response'});
  }

  delete(id) {
    let headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization':'Bearer ' + this.authService.getToken(),
    });

    return this.http.delete<any>(apiUrl + "state/"+id, {'headers':headers, observe: 'response'});
  }
}
