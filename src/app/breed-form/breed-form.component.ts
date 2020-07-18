import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Location } from '@angular/common';
import { Router, ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';

import { SpeciesService } from '../species.service';
import { BreedService } from '../breed.service';

@Component({
  selector: 'app-breed-form',
  templateUrl: './breed-form.component.html',
  styleUrls: ['./breed-form.component.css']
})
export class BreedFormComponent implements OnInit {

  breedForm = new FormGroup({
    id: new FormControl(''),
    name: new FormControl('',Validators.required),
    species: new FormControl('',Validators.required)
  });
  

  speciesOptions:Observable<any>;
  editing:boolean


  constructor(private speciesService:SpeciesService, private breedService:BreedService,private router: Router,private route: ActivatedRoute,private location:Location) { 
    router.events.subscribe((val) => {
      if(location.path().indexOf('edit') != -1){
        this.editing = true;
        this.route.params.subscribe(params => {
          this.breedService.getById(params['id']).subscribe(breed => {
            this.breedForm.patchValue({
              id:breed.id,
              name:breed.name,
              species: breed.species.id
            });
          });
          
        });

      } else {
        this.editing = false;
      }
    });
  }

  ngOnInit(): void {
    this.getSpeciesOptions();
  }

  getSpeciesOptions() {
    this.speciesOptions =  this.speciesService.getAll();
  }

  backButton() {
    this.location.back();
  }

  add() {
    this.breedService.add(this.breedForm.value).subscribe( res => {
      if (res.status == 201) {
        this.router.navigate(['..'], { relativeTo: this.route });
      }
      });
  }

  edit() {
    this.breedService.edit(this.breedForm.value).subscribe( res => {
      if (res.status == 200) {
        this.router.navigate(['../..'], { relativeTo: this.route });
      }
      });
  }


}
