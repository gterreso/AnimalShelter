import { Component, OnInit, ElementRef } from '@angular/core';
import { AdminFilesService } from '../admin-files.service';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-admin-files',
  templateUrl: './admin-files.component.html',
  styleUrls: ['./admin-files.component.css']
})
export class AdminFilesComponent implements OnInit {

  animalId:number;
  files:Observable<any>;
  fileToUpload:any;
  resourcesUrl = "http://localhost:3000/resources/files/";
  selectedFile = {"filename":"", "url":"", "type": ""};

  constructor(private adminFilesService:AdminFilesService, private route: ActivatedRoute, private el: ElementRef) { 
    this.route.params.subscribe(params => {
      this.animalId =  params['id'];    
    });
  }

  ngOnInit(): void {
    this.getAll();
  }

  test(file) {
    console.log("aaa");
  }

  getFileType(name) {
    let splitted = name.split(".");
    let extension = splitted[splitted.length - 1].toLowerCase()

    if (extension == "jpg" || extension == "png") {
      return "image";
    }
  }


  getAll() {
    this.adminFilesService.getAll(this.animalId).subscribe((res) => {

      for (let i=0; i < res.body.length; i++) {
        let name = res.body[i];
       res.body[i] = {"filename":name, "url":this.resourcesUrl + this.animalId + "/" + name, "type": this.getFileType(name)};
      }

      this.files = res.body;
      }); 
  }

  uploadFiles() {
    let inputEl: HTMLInputElement =  this.el.nativeElement.querySelector('#file');
    let fileCount: number = inputEl.files.length;
    let formData = new FormData();
    if (fileCount > 0) { // a file was selected
        for (let i = 0; i < fileCount; i++) {
            formData.append('files', inputEl.files.item(i));
        }
        this.adminFilesService.upload(this.animalId,  formData).subscribe((res) => {
          this.getAll();
        });
  }
}

  ////////////////
  addedFile(event) {

    if (event.target.files && event.target.files[0]) {

        for (let i = 0; i <event.target.files.length; i++) {

                var reader = new FileReader();
   

                reader.onload = (event2) => {
                   this.fileToUpload = {"filename":event.target.files[i].name,"resource":event2.target.result}; 
                }

                reader.readAsDataURL(event.target.files[i]);
        }

    }

  }

  ///////////////

selectFile(event, file) {
  this.selectedFile = file;
  console.log(file);
}

deleteFile() {
  this.adminFilesService.delete(this.animalId, this.selectedFile).subscribe((res)=> {
    this.getAll();
  });
}

setMainImage() {
  this.adminFilesService.setMainImage(this.animalId, this.selectedFile.filename).subscribe((res)=> {
    this.getAll();
  });
}

}
