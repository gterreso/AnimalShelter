import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class AdminFilesService {

  domain:string = "http://localhost:3000/api/";


  constructor(private http:HttpClient, private authService:AuthService) { }


  getAllImages() {

  }

  getAll(folderName):Observable<any> {
    let url = this.domain + "animal/files/" + folderName;


    let headers = new HttpHeaders({
      'Cache-Control':  'no-cache, no-store, must-revalidate, post-check=0, pre-check=0',
      'Pragma': 'no-cache',
      'Expires': '0',
      'Authorization':'Bearer ' + this.authService.getToken()
    });

    return this.http.get<any>(url, {'headers':headers, observe: 'response'});
  }


  
  upload(folderName, data):Observable<any> {

    let url = this.domain + "animal/files/" + folderName;

    let headers = new HttpHeaders({
      /*"Content-Type": "multipart/form-data",*/
      'Authorization':'Bearer ' + this.authService.getToken()
    });

    return this.http.post<any>(url, data,{'headers':headers, observe: 'response'});
  }

  delete(folderName,files) {

    let url = this.domain + "animal/files/" + folderName;

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

  setMainImage(folderName, imageName) {
    
    let url = this.domain + "animal/files/main/" + folderName;

    let headers = new HttpHeaders({
      /*"Content-Type": "multipart/form-data",*/
      'Authorization':'Bearer ' + this.authService.getToken()
    });

    let requestData = {"name": imageName};

    return this.http.post<any>(url, requestData,{'headers':headers, observe: 'response'});
  }

}
