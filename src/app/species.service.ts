import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { AuthService } from './auth.service';
import { Observable } from 'rxjs';

import {apiUrl} from './constants';

@Injectable({
  providedIn: 'root'
})
export class SpeciesService {

  constructor(private http:HttpClient, private authService:AuthService) { }

  
  getAll():Observable<any> {
    let headers = new HttpHeaders({
    'Cache-Control':  'no-cache, no-store, must-revalidate, post-check=0, pre-check=0',
    'Pragma': 'no-cache',
    'Expires': '0'
  });

    return this.http.get(apiUrl + "species/",{'headers':headers});
  }

  getById(id):Observable<any> {
    let headers = new HttpHeaders({
      'Cache-Control':  'no-cache, no-store, must-revalidate, post-check=0, pre-check=0',
      'Pragma': 'no-cache',
      'Expires': '0'
    });

    return this.http.get(apiUrl + "species/"+id,{'headers':headers});
  }


  add(species) {
    let headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization':'Bearer ' + this.authService.getToken()
    });

    return this.http.post<any>(apiUrl + "species/",species,{'headers':headers, observe: 'response'});
  }

  edit(species) {
    let headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization':'Bearer ' + this.authService.getToken()
    });
    return this.http.put<any>(apiUrl + "species/"+species.id,species,{'headers':headers, observe: 'response'});
  }

  delete(id) {
    let headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization':'Bearer ' + this.authService.getToken()
    });

    return this.http.delete<any>(apiUrl + "species/"+id, {'headers':headers, observe: 'response'});
  }
}
