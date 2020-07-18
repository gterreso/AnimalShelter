import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { StateService } from '../state.service';

@Component({
  selector: 'app-state-admin',
  templateUrl: './state-admin.component.html',
  styleUrls: ['./state-admin.component.css']
})
export class StateAdminComponent implements OnInit {

  states$:Observable<any>;

  constructor(private stateService:StateService) { }

  ngOnInit(): void {
    this.getAllStates();
  }

  getAllStates() {
    this.states$ = this.stateService.getAll();
    console.log("se piden estados")
  }

  delete(id) {
    this.stateService.delete(id).subscribe(res => {
     this.getAllStates();
      console.log(res);
    }
    );

  }

}