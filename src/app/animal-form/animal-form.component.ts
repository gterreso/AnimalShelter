import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Observable } from 'rxjs';
import { Router, ActivatedRoute } from '@angular/router';
import { AnimalService } from '../animal.service';
import { SpeciesService } from '../species.service';
import { BreedService } from '../breed.service';
import { StateService } from '../state.service';

@Component({
  selector: 'app-animal-form',
  templateUrl: './animal-form.component.html',
  styleUrls: ['./animal-form.component.css']
})
export class AnimalFormComponent implements OnInit {

  imgBaseUrl = "http://localhost:3000/resources/img/"

  animalForm = new FormGroup({
    id: new FormControl(''),
    name: new FormControl('',Validators.required),
    species: new FormControl(''),
    breed: new FormControl(''),
    weight: new FormControl(''),
    birthDate: new FormControl(''),
    deathDate: new FormControl(''),
    vaccinated: new FormControl(''),
    sterilized: new FormControl(''),
    sex: new FormControl(''),
    state: new FormControl('')
  });

  temporalPhotos = [];

  editing:boolean;

  speciesOptions:Observable<any>;
  breedOptions:Observable<any>;
  stateOptions:Observable<any>;

  constructor(private router: Router,private route: ActivatedRoute, private location:Location, private animalService: AnimalService, private speciesService: SpeciesService, private breedService: BreedService, private stateService: StateService) {
    
    router.events.subscribe((val) => {
      if(location.path().indexOf('edit') != -1){
        this.editing = true;
        this.route.params.subscribe(params => {
          this.animalService.getById(params['id']).subscribe(res => {
            this.setAnimalForm(res);
          });
        });

      } else {
        this.editing = false;
      }
    });

  }

  ngOnInit(): void {
    this.getSpeciesOptions();
    this.getBreedOptions();
    this.getStateOptions();
  }

  backButton() {
    this.location.back();
  }

  setAnimalForm(res) {
    this.animalForm.setValue({
      id: res.id,
      name: res.name,
      species: res.breed.species.id,
      breed: res.breed.id,
      weight: res.weight,
      birthDate: res.birthDate,
      deathDate: res.deathDate,
      vaccinated: res.vaccinated,
      sterilized: res.sterilized,
      sex: res.sex,
      state: res.state.id
    });
  }

  add() {
    let animal = this.animalForm.value;
    delete animal.species;


    this.animalService.add(animal).subscribe(res => {
      if (res.status == 201) {
        this.router.navigate(['../..'], { relativeTo: this.route });

      }
    });
  }

  edit() {
    let animal = this.animalForm.value;
    delete animal.species;


    console.log(animal);
    this.animalService.edit(animal).subscribe(res => {
      if (res.status == 200) {
        this.router.navigate(['../..'], { relativeTo: this.route });

      }
    });
  }


  getSpeciesOptions() {
    this.speciesOptions =  this.speciesService.getAll();
  }

  getBreedOptions() {
    this.breedOptions = this.breedService.getAll();
  }

  getStateOptions() {
    this.stateOptions = this.stateService.getAll();
  }



}