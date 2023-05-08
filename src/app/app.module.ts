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
import { NoteListComponent } from './note-components/note-list/note-list.component';
import { CreateNoteComponent } from './note-components/create-note/create-note.component';
import { UpdateNoteComponent } from './note-components/update-note/update-note.component';
import { NoteDetailsLastnameComponent } from './note-components/note-details-lastname/note-details-lastname.component';
import { NoteDetailsPatidComponent } from './note-components/note-details-patid/note-details-patid.component';
import { AddNoteToPatientComponent } from './note-components/add-note-to-patient/add-note-to-patient.component';

@NgModule({
  declarations: [
    AppComponent,
    PatientListComponent,
    CreatePatientComponent,
    UpdatePatientComponent,
    PatientDetailsComponent,
    NoteListComponent,
    CreateNoteComponent,
    UpdateNoteComponent,
    NoteDetailsPatidComponent,
    NoteDetailsLastnameComponent,
    AddNoteToPatientComponent
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
