import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


import { LoginComponent }  from './login/login.component';
import { PublicAnimalsListComponent }  from './public-animals-list/public-animals-list.component';
import { AdministrationComponent }  from './administration/administration.component';
import { AdminAnimalComponent }  from './admin-animals/admin-animals.component';
import { SpeciesAdminComponent } from './species-admin/species-admin.component';
import { SpeciesFormComponent } from './species-form/species-form.component';
import { BreedAdminComponent } from './breed-admin/breed-admin.component';
import { BreedFormComponent } from './breed-form/breed-form.component';
import { StateAdminComponent } from './state-admin/state-admin.component';
import { StateFormComponent } from './state-form/state-form.component';
import { AnimalFormComponent } from './animal-form/animal-form.component';
import { AdminFilesComponent } from './admin-files/admin-files.component';


const routes: Routes = [
  { path: '', redirectTo: '/animals', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'animals', component: PublicAnimalsListComponent },
  { path: 'admin/animal/add', component:AnimalFormComponent },
  { path: 'admin/animal/edit/:id', component:AnimalFormComponent },
  { path: 'admin/animal', component: AdminAnimalComponent },
  { path: 'admin/species', component: SpeciesAdminComponent },
  { path: 'admin/species/add', component: SpeciesFormComponent },
  { path: 'admin/species/edit/:id', component: SpeciesFormComponent },
  { path: 'admin/breed', component: BreedAdminComponent },
  { path: 'admin/breed/add', component: BreedFormComponent },
  { path: 'admin/breed/edit/:id', component: BreedFormComponent },
  { path: 'admin/state', component: StateAdminComponent },
  { path: 'admin/state/add', component: StateFormComponent },
  { path: 'admin/state/edit/:id', component: StateFormComponent },
  { path: 'admin/animal/files/:id', component:AdminFilesComponent },
  { path: 'admin', component: AdministrationComponent },
  
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}