import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Note } from 'src/app/model/note';
import { NoteService } from 'src/app/services/note.service';
import {PatientService} from "../../services/patient.service";
import {Patient} from "../../model/patient";

@Component({
  selector: 'app-create-note',
  templateUrl: './create-note.component.html',
  styleUrls: ['./create-note.component.css']
})
export class CreateNoteComponent implements OnInit {
  note: Note = new Note();
  patId!: number;
  patientDetails!: Patient;
  errorMessage!: string;
  errorMessages!: string[];

  constructor(
    private noteService: NoteService,
    private router: Router,
    private patientService: PatientService) { }

  ngOnInit(): void {}

  addNewNote() {
    this.noteService.createNewNote(this.note).subscribe({
      next: noteSaved => {
        console.log(noteSaved);
        this.goToNoteList();
      },
      error: error => {
        console.error(error)
        this.errorMessage = error.error.message;
        this.errorMessages = error.error.errors ? error.error.errors : 'An error occurred while validating the form';
      }
    });
  }

  goToNoteList() {
    this.router.navigate([`/note-list`]).then();
  }
  ngSubmit() {
    console.log(this.note);
    this.addNewNote();
  }

  getPatientDetails(patientId: number) {
    this.patientService.getPatientById(patientId).subscribe({
      next: patientById => {
        this.patientDetails = patientById;
      },
      error: err => {
        console.log(err);
        this.errorMessage = err.error.message;
      }
    });
  }

}
