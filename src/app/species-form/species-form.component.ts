import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { SpeciesService } from '../species.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-species-form',
  templateUrl: './species-form.component.html',
  styleUrls: ['./species-form.component.css']
})
export class SpeciesFormComponent implements OnInit {

  speciesForm = new FormGroup({
    id: new FormControl(''),
    name: new FormControl('',Validators.required),
  });
  

  editing:boolean


  constructor(private speciesService:SpeciesService,private router: Router,private route: ActivatedRoute,private location:Location) { 
    router.events.subscribe((val) => {
      if(location.path().indexOf('edit') != -1){
        this.editing = true;
        this.route.params.subscribe(params => {
          this.speciesService.getById(params['id']).subscribe(species => {
            this.speciesForm.patchValue({
              id:species.id,
              name:species.name
            });
          });
          
        });

      } else {
        this.editing = false;
      }
    });
  }

  ngOnInit(): void {
  }

  backButton() {
    this.location.back();
  }

  add() {
    this.speciesService.add(this.speciesForm.value).subscribe( res => {
      if (res.status == 201) {
        this.router.navigate(['..'], { relativeTo: this.route });
      }
      });
  }

  edit() {
    this.speciesService.edit(this.speciesForm.value).subscribe( res => {
      if (res.status == 201) {
        this.router.navigate(['../..'], { relativeTo: this.route });
      }
      });
  }

}
