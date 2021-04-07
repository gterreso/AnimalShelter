import { Component, OnInit } from '@angular/core';
import { AnimalService } from '../animal.service';
import { Observable } from 'rxjs';
import { BreedService } from '../breed.service';

@Component({
  selector: 'app-public-animals-list',
  templateUrl: './public-animals-list.component.html',
  styleUrls: ['./public-animals-list.component.css']
})
export class PublicAnimalsListComponent implements OnInit {

  animals:Observable<any>;
  breeds:Observable<any>;

  resourcesUrl = "http://localhost:3000/resources/files/";

  constructor(private animalService:AnimalService, private breedService:BreedService) { }

  ngOnInit(): void {
    this.animals = this.animalService.getAvailableList();
    this.breeds = this.breedService.getAll();
  }

}
