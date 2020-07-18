import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { AuthService } from './auth.service';
import { Observable } from 'rxjs';

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

    return this.http.get("http://localhost:3000/api/state/",{'headers':headers});
  }

  getById(id):Observable<any> {
    return this.http.get("http://localhost:3000/api/state/"+id);
  }


  add(state) {
    let headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization':'Bearer ' + this.authService.getToken()
    });

    return this.http.post<any>("http://localhost:3000/api/state/",state,{'headers':headers, observe: 'response'});
  }

  edit(state) {
    let headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization':'Bearer ' + this.authService.getToken()
    });
    return this.http.put<any>("http://localhost:3000/api/state/"+state.id, state,{'headers':headers, observe: 'response'});
  }

  delete(id) {
    let headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization':'Bearer ' + this.authService.getToken(),
    });

    return this.http.delete<any>("http://localhost:3000/api/state/"+id, {'headers':headers, observe: 'response'});
  }
}
