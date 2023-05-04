import { NoteService } from 'src/app/services/note.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Patient } from 'src/app/model/patient';
import { PatientService } from 'src/app/services/patient.service';
import { Note } from 'src/app/model/note';

@Component({
  selector: 'app-patient-details',
  templateUrl: './patient-details.component.html',
  styleUrls: ['./patient-details.component.css']
})
export class PatientDetailsComponent implements OnInit {
  patient!: Patient;
  id!: number;
  notes!: Note[];
  errorMessage: string = '';
  
  constructor(
    private patientService: PatientService,
    private route: ActivatedRoute,
    private router: Router,
    private noteService: NoteService) { }

  ngOnInit(): void {
    this.patient = new Patient();
    this.id = this.route.snapshot.params['id'];
    this.getPatientById(this.id).subscribe({
      next: data => this.patient = data,
      error: error => console.log(error)
    });

    this.getAllNoteByPatId(this.id);
  }
  getPatientById(id: number) {
    return this.patientService.getPatientById(id);
  }

  deletePatientById(id: number) {
    this.patientService.deleteById(this.id).subscribe({
      next: data => {
        console.log(data);
        this.router.navigate(['/patients']);
      },
      error: error => {
        console.log(error);
      }
    });
  }

  getAllNoteByPatId(patId: number) {
    this.noteService.getNotesByPatId(patId).subscribe({
      next: data => {
        this.notes = data;
      }, 
      error: err => {
        console.log(err);
        this.errorMessage = err.error;
      }
    })
  }

  updateNoteById(id: string) {

  }
  deleteNoteById(id: string) {
  }

  addNote() {
    
  }
}
