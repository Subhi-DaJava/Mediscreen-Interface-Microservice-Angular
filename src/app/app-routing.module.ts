import { NoteListComponent } from './note-components/note-list/note-list.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { CreatePatientComponent } from './patient-components/create-patient/create-patient.component';
import { PatientDetailsComponent } from './patient-components/patient-details/patient-details.component';
import { PatientListComponent } from './patient-components/patient-list/patient-list.component';
import { UpdatePatientComponent } from './patient-components/update-patient/update-patient.component';
import { CreateNoteComponent } from './note-components/create-note/create-note.component';
import { UpdateNoteComponent } from './note-components/update-note/update-note.component';
import { NoteDetailsPatidComponent } from './note-components/note-details-patid/note-details-patid.component';
import { NoteDetailsLastnameComponent } from './note-components/note-details-lastname/note-details-lastname.component';

const routes: Routes = [
  { path: 'patients', component: PatientListComponent },
  { path: 'create-patient', component: CreatePatientComponent },
  { path: '', redirectTo: 'patients', pathMatch: 'full' },
  { path: 'update-patient/:id', component: UpdatePatientComponent },
  { path: 'patient-details/:id', component: PatientDetailsComponent },
  { path: 'note-list', component: NoteListComponent },
  { path: 'create-note', component: CreateNoteComponent },
  { path: 'update-note/:id', component: UpdateNoteComponent },
  { path: 'note-details-patid/:patid', component: NoteDetailsPatidComponent },
  { path: 'note-details-lastname/:lastname', component: NoteDetailsLastnameComponent }
  
];

@NgModule({
  declarations: [],
  imports: [CommonModule, RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
