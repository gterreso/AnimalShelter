import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { AuthService } from './auth.service';



@Injectable({
  providedIn: 'root'
})
export class AnimalService {

  constructor(private http:HttpClient, private authService:AuthService) { }

  getAll():Observable<any> {
    let headers = new HttpHeaders({
      'Cache-Control':  'no-cache, no-store, must-revalidate, post-check=0, pre-check=0',
      'Pragma': 'no-cache',
      'Expires': '0'
    });

    return this.http.get("http://localhost:3000/api/animal",{'headers':headers});
  }

  getById(id):Observable<any> {
    let headers = new HttpHeaders({
      'Cache-Control':  'no-cache, no-store, must-revalidate, post-check=0, pre-check=0',
      'Pragma': 'no-cache',
      'Expires': '0'
    });
    return this.http.get("http://localhost:3000/api/animal/"+id,{'headers':headers});
  }

  getAvailableList():Observable<any> {
    let headers = new HttpHeaders({
      'Cache-Control':  'no-cache, no-store, must-revalidate, post-check=0, pre-check=0',
      'Pragma': 'no-cache',
      'Expires': '0'
    });
    return this.http.get("http://localhost:3000/api/animal/available",{'headers':headers});
  }


  add(animal) {
    let headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization':'Bearer ' + this.authService.getToken()
    });

    return this.http.post<any>("http://localhost:3000/api/animal/",animal,{'headers':headers, observe: 'response'});
  }

  edit(animal) {
    let headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization':'Bearer ' + this.authService.getToken()
    });
    return this.http.put<any>("http://localhost:3000/api/animal/"+animal.id,animal,{'headers':headers, observe: 'response'});
  }

  delete(animal) {
    let headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization':'Bearer ' + this.authService.getToken()
    });

    return this.http.delete<any>("http://localhost:3000/api/animal/"+animal.id,{'headers':headers, observe: 'response'});
  }

}
