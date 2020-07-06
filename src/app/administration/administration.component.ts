import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-administration',
  templateUrl: './administration.component.html',
  styleUrls: ['./administration.component.css']
})
export class AdministrationComponent implements OnInit {

  pages = [
    {'name':'Manage animals','url':'./admin/animal'},
    {'name':'Manage species','url':'./admin/species'},
    {'name':'Manage breeds','url':'./admin/breed'},
    {'name':'Manage State','url':'./admin/state'},
    {'name':'Manage users','url':'./admin/user'},

  ];

  constructor() { }

  ngOnInit(): void {
  }

}
