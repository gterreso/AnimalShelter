import { Component, OnInit } from '@angular/core';
import { Observable, of } from 'rxjs';

import { AnimalService } from '../animal.service';

@Component({
  selector: 'app-admin-animals',
  templateUrl: './admin-animals.component.html',
  styleUrls: ['./admin-animals.component.css']
})
export class AdminAnimalComponent implements OnInit {

  animals: Observable<any>;
  
  constructor(private animalService:AnimalService) { }

  ngOnInit(): void {
    this.getAnimalsList();
  }

  getAnimalsList() {
    this.animals = this.animalService.getAll();
  }

  delete(animal) {
    this.animalService.delete(animal).subscribe(res=> this.getAnimalsList());
  }

}
