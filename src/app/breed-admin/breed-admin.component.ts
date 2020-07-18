import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { SpeciesService } from '../species.service';
import { BreedService } from '../breed.service';

@Component({
  selector: 'app-breed-admin',
  templateUrl: './breed-admin.component.html',
  styleUrls: ['./breed-admin.component.css']
})
export class BreedAdminComponent implements OnInit {
  breeds$:Observable<any>;

  constructor(private breedService:BreedService) { }

  ngOnInit(): void {
    this.getAllBreeds();
  }

  getAllBreeds() {
    this.breeds$ = this.breedService.getAll();
  }

  delete(id) {
    this.breedService.delete(id).subscribe(res => {
     this.getAllBreeds();
      console.log(res);
    }
    );

  }

}