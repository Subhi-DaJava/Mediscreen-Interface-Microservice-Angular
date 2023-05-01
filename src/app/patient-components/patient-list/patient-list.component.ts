import { Component, OnInit } from '@angular/core';
import { Patient } from '../../model/patient';
import { PatientService } from '../../services/patient.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-patient-list',
  templateUrl: './patient-list.component.html',
  styleUrls: ['./patient-list.component.css']
})
export class PatientListComponent implements OnInit {
  searchLastName: string = '';
  patients!: Patient[];
  errorMessage!: string;

  constructor(
    private patientService: PatientService,
    private router: Router) { }

  ngOnInit(): void {
    this.getPatientList();
  }

  private getPatientList() {
    this.patientService.getPatientList().subscribe(data => {
      this.patients = data;
    });
  }

  updatePatient(id: number) {
    this.router.navigate(['update-patient', id])
  }

  deletePatient(id: number) {
    this.patientService.deleteById(id).subscribe({
      next: data => console.log(data),
      error: error => console.log(error),
    });
    this.getPatientList();
  }

  showPatientDetails(id: number) {
    this.router.navigate(['patient-details', id]);
  }

  searchPatientByLastName() {
    if (!this.searchLastName) {
      this.errorMessage = "Last Name field is empty!";
      return;
    }
    this.patientService.getPatientByLastName(this.searchLastName).subscribe({
      next: patient => {
        this.router.navigate(['/patient-details', patient.id])
      },
      error: error => {
        console.log('Error while searching for patient by last name:', error);
        this.errorMessage = `No patient exists in DB with this last name :{${this.searchLastName}}`;
      }
    });
  }
}
