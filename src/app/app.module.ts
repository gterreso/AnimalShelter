import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule }    from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { PublicAnimalsListComponent } from './public-animals-list/public-animals-list.component';
import { NavbarComponent } from './navbar/navbar.component';
import { AdministrationComponent } from './administration/administration.component';
import { AdminAnimalComponent } from './admin-animals/admin-animals.component';
import { AnimalAddComponent } from './animal-add/animal-add.component';
import { CalculateAnimalYearsPipe } from './calculate-animal-years.pipe';
import { AnimalEditComponent } from './animal-edit/animal-edit.component';



@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    PublicAnimalsListComponent,
    NavbarComponent,
    AdministrationComponent,
    AdminAnimalComponent,
    AnimalAddComponent,
    CalculateAnimalYearsPipe,
    AnimalEditComponent,
    
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule
   
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
