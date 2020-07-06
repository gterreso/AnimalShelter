import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


import { LoginComponent }  from './login/login.component';
import { PublicAnimalsListComponent }  from './public-animals-list/public-animals-list.component';
import { AdministrationComponent }  from './administration/administration.component';
import { AdminAnimalComponent }  from './admin-animals/admin-animals.component';
import { AnimalAddComponent }  from './animal-add/animal-add.component';



const routes: Routes = [
  { path: '', redirectTo: '/animals', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'animals', component: PublicAnimalsListComponent },
  { path: 'admin/animal/add', component:AnimalAddComponent },
  { path: 'admin/animal/edit/:id', component:AnimalAddComponent },
  { path: 'admin/animal', component: AdminAnimalComponent },
  { path: 'admin', component: AdministrationComponent },
  
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}