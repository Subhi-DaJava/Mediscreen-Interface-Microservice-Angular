import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Report} from "../model/report";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class ReportService {
  report!: Report;

  private readonly apiUrl = "http://localhost:8080/report";
  //private readonly apiUrlPatient = "http://localhost:8081//api/patients";
  //private readonly apiUrlNote = "http://localhost:8082/api/notes/by-patId";

  constructor(private http: HttpClient) { }

  generateReportByPatId(patientId: number): Observable<Report> {
    return this.http.get<Report>(`${this.apiUrl}/by-id/${patientId}`);
  }

}
