import { Note } from './../model/note';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NoteService {
 
  getPatientByLastName(searchByLastName: string) {
    throw new Error('Method not implemented.');
  }
 
  private apiUrl: string = 'http://localhost:8082/api/notes';

  constructor(private http: HttpClient) { }

  getAllNotes(): Observable<Note[]> {
    return this.http.get<Note[]>(`${this.apiUrl}`);
  }

  createNewNote(note: Note): Observable<Note> {
    return this.http.post<Note>(`${this.apiUrl}/`, note);
  }

  getNoteById(id: string): Observable<Note> {
    return this.http.get<Note>(`${this.apiUrl}/${id}`);
  }

  updateNoteById(id: string, note: Note): Observable<Note> {
    return this.http.put<Note>(`${this.apiUrl}/${id}`, note);
  }

  deleteNoteById(id: string): Observable<Object> {
    return this.http.delete(`${this.apiUrl}/${id}`);
  }


  getNotesByLastName(lastName: string): Observable<Note[]> {
    return this.http.get<Note[]>(`${this.apiUrl}/by-lastName/${lastName}`);
  }
  getNotesByPatId(patId: number): Observable<Note[]> {
    return this.http.get<Note[]>(`${this.apiUrl}/by-patId/${patId}`);
  }

  addNoteToPatientByPatId(patId: number, note: string): Observable<Note> {
    return this.http.post<Note>(`${this.apiUrl}/${patId}?note=${note}`, {});
  }
}
