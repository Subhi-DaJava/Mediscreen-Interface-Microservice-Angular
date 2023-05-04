import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Note } from 'src/app/model/note';
import { NoteService } from 'src/app/services/note.service';

@Component({
  selector: 'app-create-note',
  templateUrl: './create-note.component.html',
  styleUrls: ['./create-note.component.css']
})
export class CreateNoteComponent implements OnInit {
  note: Note = new Note();
  noteByPatId: Note = new Note();
  patId!: number;

  constructor(
    private noteService: NoteService,
    private router: Router) { }

  ngOnInit(): void {}

  addNewNote() {
    this.noteService.createNewNote(this.note).subscribe({
      next: noteSaved => {
        console.log(noteSaved);
        this.goToNoteList();
      },
      error: error => {
        console.error(error)
      }
    });
  }

  goToNoteList() {
    this.router.navigate([`/note-list`]);
  }
  ngSubmit() {
    console.log(this.note);
    this.addNewNote();
  }

}
