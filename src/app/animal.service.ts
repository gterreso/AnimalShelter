import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { AuthService } from './auth.service';



@Injectable({
  providedIn: 'root'
})
export class AnimalService {

  constructor(private http:HttpClient, private authService:AuthService) { }

  getAnimalsList():Observable<any> {
    return this.http.get("http://localhost:3000/api/animal");
  }

  getAnimalById(id):Observable<any> {
    return this.http.get("http://localhost:3000/api/animal/"+id);
  }

  getAvailableAnimalsList():Observable<any> {
    return this.http.get("http://localhost:3000/api/animal/available");
  }

  getSpeciesOptions():Observable<any> {
    return this.http.get("http://localhost:3000/api/species");
  }

  getBreedOptions():Observable<any> {
    return this.http.get("http://localhost:3000/api/breed");
  }

  getStateOptions():Observable<any> {
    return this.http.get("http://localhost:3000/api/state");
  }

  addAnimal(animal) {
    let headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization':'Bearer ' + this.authService.getToken()
    });

    return this.http.post<any>("http://localhost:3000/api/animal",animal,{'headers':headers});
  }

  delete(animal) {
    let headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization':'Bearer ' + this.authService.getToken()
    });

    return this.http.delete<any>("http://localhost:3000/api/animal/"+animal.id,{'headers':headers});
  }
}
