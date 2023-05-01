import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http'
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule } from '@angular/forms';
import { PatientListComponent } from './patient-components/patient-list/patient-list.component';
import { CreatePatientComponent } from './patient-components/create-patient/create-patient.component';
import { UpdatePatientComponent } from './patient-components/update-patient/update-patient.component';
import { PatientDetailsComponent } from './patient-components/patient-details/patient-details.component';

@NgModule({
  declarations: [
    AppComponent,
    PatientListComponent,
    CreatePatientComponent,
    UpdatePatientComponent,
    PatientDetailsComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
