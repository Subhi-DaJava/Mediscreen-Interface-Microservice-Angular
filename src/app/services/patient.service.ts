import { Patient } from './../model/patient';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PatientService {
  
  private readonly apiUrl = "http://localhost:8081/api";

  constructor(private http: HttpClient) { }

  getPatientList(): Observable<Patient[]> {
    return this.http.get<Patient[]>(`${this.apiUrl}/patients`);
  }

  createPatient(patient: Patient): Observable<Patient> {
    return this.http.post<Patient>(`${this.apiUrl}/patients`, patient);
  }

  getPatientById(id: number): Observable<Patient> {
    return this.http.get<Patient>(`${this.apiUrl}/patients/${id}`);
  }

  getPatientByLastName(lastName: string): Observable<Patient> {
    return this.http.get<Patient>(`${this.apiUrl}/patient?lastName=${lastName}`);
  }

  updatePatientById(id: number, patient: Patient): Observable<Object> {
    return this.http.put(`${this.apiUrl}/patients/${id}`, patient);
  }

  deleteById(id: number): Observable<Object> {
    return this.http.delete(`${this.apiUrl}/patients/${id}`);
  }
}
