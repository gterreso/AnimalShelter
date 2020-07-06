import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import {Animal} from '../animal.interface';
import { AnimalService } from '../animal.service';
import { Observable } from 'rxjs';
import { Router,ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-animal-add',
  templateUrl: './animal-add.component.html',
  styleUrls: ['./animal-add.component.css']
})
export class AnimalAddComponent implements OnInit {

  constructor(private router: Router, private activatedRoute: ActivatedRoute, private location:Location, private animalService:AnimalService) { }

  animal = {'id':null,'name':'','species':'','breed':'','birthDate':'','deathDate':'','vaccinated':'','sex':'','sterilized':'','weight':'','state':''};
  speciesOptions:Observable<any>;
  breedOptions:Observable<any>;
  stateOptions:Observable<any>;

  ngOnInit(): void {
    this.getSpeciesOptions(); 
    this.getBreedOptions();
    this.getStateOptions();
  }



  backButton() {
    this.location.back();
  }

  getSpeciesOptions() {
    this.speciesOptions = this.animalService.getSpeciesOptions();
  }

  getBreedOptions() {
    this.breedOptions = this.animalService.getBreedOptions();
  }

  getStateOptions() {
    this.stateOptions = this.animalService.getStateOptions();
  }

  addAnimal() {
    this.animalService.addAnimal(this.animal).subscribe(res => console.log("res " + res));
  }

}
