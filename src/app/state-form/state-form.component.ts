import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { StateService } from '../state.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-state-form',
  templateUrl: './state-form.component.html',
  styleUrls: ['./state-form.component.css']
})
export class StateFormComponent implements OnInit {

 stateForm = new FormGroup({
    id: new FormControl(''),
    name: new FormControl('',Validators.required),
  });
  

  editing:boolean


  constructor(private stateService:StateService, private router: Router,private route: ActivatedRoute,private location:Location) { 
    router.events.subscribe((val) => {
      if(location.path().indexOf('edit') != -1){
        this.editing = true;
        this.route.params.subscribe(params => {
          this.stateService.getById(params['id']).subscribe(state => {
            this.stateForm.patchValue({
              id:state.id,
              name:state.name,
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
    this.stateService.add(this.stateForm.value).subscribe( res => {
      if (res.status == 201) {
        this.router.navigate(['..'], { relativeTo: this.route });
      }
      });
  }

  edit() {
    this.stateService.edit(this.stateForm.value).subscribe( res => {
      if (res.status == 201) {
        this.router.navigate(['../..'], { relativeTo: this.route });
      }
      });
  }


}
