import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class AdminFilesService {


  constructor(private http:HttpClient, private authService:AuthService) { }


  getAllImages() {

  }

  getAll(idAnimal):Observable<any> {
    let headers = new HttpHeaders({
      /*"Content-Type": "multipart/form-data",*/
      'Authorization':'Bearer ' + this.authService.getToken()
    });

    return this.http.get<any>("http://localhost:3000/api/animal/files/"+idAnimal,{'headers':headers, observe: 'response'});
  }


  
  upload(folderName,data):Observable<any> {
    let headers = new HttpHeaders({
      /*"Content-Type": "multipart/form-data",*/
      'Authorization':'Bearer ' + this.authService.getToken()
    });

    return this.http.post<any>("http://localhost:3000/api/animal/files/"+folderName,data,{'headers':headers, observe: 'response'});
  }

  delete(folderName,files) {

    let url = "http://localhost:3000/api/animal/files/" + folderName;

    //By now we can select 1 file, for this reason I create this array here, in the future this array must be deleted and used in component
    let filesArray = [files.filename];

    let headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization':'Bearer ' + this.authService.getToken()
    });

    const httpOptions = {
      headers: headers, 
      body: {"files":filesArray}
  };

    return this.http.delete<any>(url,httpOptions);
  }

}
