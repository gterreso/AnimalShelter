import { Component, OnInit } from '@angular/core';
import { AnimalService } from '../animal.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-public-animals-list',
  templateUrl: './public-animals-list.component.html',
  styleUrls: ['./public-animals-list.component.css']
})
export class PublicAnimalsListComponent implements OnInit {

  animals:Observable<any>;
  resourcesUrl = "http://localhost:3000/resources/files/";

  constructor(private animalService:AnimalService) { }

  ngOnInit(): void {
    this.animals = this.animalService.getAvailableList();
  }

}
