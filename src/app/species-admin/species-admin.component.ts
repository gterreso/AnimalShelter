import { Component, OnInit } from '@angular/core';
import { SpeciesService } from '../species.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-species-admin',
  templateUrl: './species-admin.component.html',
  styleUrls: ['./species-admin.component.css']
})
export class SpeciesAdminComponent implements OnInit {
  
  species$:Observable<any>;

  constructor(private speciesService:SpeciesService) { }

  ngOnInit(): void {
    this.getAllSpecies();
  }

  getAllSpecies() {
    this.species$ = this.speciesService.getAll();
  }

  delete(id) {
    this.speciesService.delete(id).subscribe(res => {
     this.getAllSpecies();
      console.log(res);
    }
    );

  }

}
