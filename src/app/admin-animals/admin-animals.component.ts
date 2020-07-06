import { Component, OnInit } from '@angular/core';
import { AnimalService } from '../animal.service';
import { Observable, of } from 'rxjs';

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
    this.animals.subscribe(res=> console.log(res))
  }

  getAnimalsList() {
    this.animals = this.animalService.getAnimalsList();
  }

  delete(animal) {
    this.animalService.delete(animal).subscribe(res=> this.getAnimalsList());
  }

}
