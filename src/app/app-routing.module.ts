import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { CreatePatientComponent } from './patient-components/create-patient/create-patient.component';
import { PatientDetailsComponent } from './patient-components/patient-details/patient-details.component';
import { PatientListComponent } from './patient-components/patient-list/patient-list.component';
import { UpdatePatientComponent } from './patient-components/update-patient/update-patient.component';


const routes: Routes = [
  { path: 'patients', component: PatientListComponent },
  { path: 'create-patient', component: CreatePatientComponent },
  { path: '', redirectTo: 'patients', pathMatch: 'full' },
  { path: 'update-patient/:id', component: UpdatePatientComponent },
  { path: 'patient-details/:id', component: PatientDetailsComponent },
];

@NgModule({
  declarations: [],
  imports: [CommonModule, RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
