import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { FormsModule,ReactiveFormsModule  } from '@angular/forms';
import { HttpClientModule }    from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { PublicAnimalsListComponent } from './public-animals-list/public-animals-list.component';
import { NavbarComponent } from './navbar/navbar.component';
import { AdministrationComponent } from './administration/administration.component';
import { AdminAnimalComponent } from './admin-animals/admin-animals.component';
import { CalculateAnimalYearsPipe } from './calculate-animal-years.pipe';
import { SpeciesAdminComponent } from './species-admin/species-admin.component';
import { SpeciesFormComponent } from './species-form/species-form.component';
import { BreedAdminComponent } from './breed-admin/breed-admin.component';
import { BreedFormComponent } from './breed-form/breed-form.component';
import { StateAdminComponent } from './state-admin/state-admin.component';
import { StateFormComponent } from './state-form/state-form.component';
import { AnimalFormComponent } from './animal-form/animal-form.component';



@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    PublicAnimalsListComponent,
    NavbarComponent,
    AdministrationComponent,
    AdminAnimalComponent,

    CalculateAnimalYearsPipe,

    SpeciesAdminComponent,
    SpeciesFormComponent,
    BreedAdminComponent,
    BreedFormComponent,
    StateAdminComponent,
    StateFormComponent,
    AnimalFormComponent, 
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    AppRoutingModule
   
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
