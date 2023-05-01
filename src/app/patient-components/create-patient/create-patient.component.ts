import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Patient } from 'src/app/model/patient';
import { PatientService } from 'src/app/services/patient.service';

@Component({
  selector: 'app-create-patient',
  templateUrl: './create-patient.component.html',
  styleUrls: ['./create-patient.component.css']
})
export class CreatePatientComponent implements OnInit {

  patient: Patient = new Patient();
  errorMessage: string = '';
  invalidPhoneNumber = false;

  constructor(
    private patientService: PatientService,
    private router: Router) { }

  ngOnInit(): void {

  }
  validatePhoneNumber() {
    const pattern = /^\d{3}-\d{3}-\d{4}$/;
    this.invalidPhoneNumber = !pattern.test(this.patient.phoneNumber);
  }
  addPatient() {
    if(!this.patient.firstName 
      || !this.patient.lastName 
      || !this.patient.dateOfBirth 
      || !this.patient.homeAddress
      || !this.patient.sex) {
        this.errorMessage = 'Field should not be empty.'
        return;
      }
    this.validatePhoneNumber();

    if (this.invalidPhoneNumber) {
      return;
    }
    
    this.patientService.createPatient(this.patient).subscribe({
      next: data => {
        console.log(data);
        this.goToPatientList();
      },
      error: error => {
        console.log(error);
        //this.errorMessage = error;
      }
    });
  }

  goToPatientList() {
    this.router.navigate(['/patients'])
  }

  onSubmit() {
    console.log(this.patient);
    this.addPatient();
  }
}


