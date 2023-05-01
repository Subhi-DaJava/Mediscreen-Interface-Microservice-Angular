import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Patient } from 'src/app/model/patient';
import { PatientService } from 'src/app/services/patient.service';

@Component({
  selector: 'app-patient-details',
  templateUrl: './patient-details.component.html',
  styleUrls: ['./patient-details.component.css']
})
export class PatientDetailsComponent implements OnInit {
  patient!: Patient;
  id!: number;
  constructor(
    private patientService: PatientService,
    private route: ActivatedRoute,
    private router: Router) {}

  ngOnInit(): void {
    this.patient = new Patient();
    this.id = this.route.snapshot.params['id'];
    this.getPatientById(this.id).subscribe({
      next: data =>  this.patient = data,
      error: error => console.log(error)
    });    
  }
  getPatientById(id: number) {
     return this.patientService.getPatientById(id);
  }

  deletePatientById(id: number) {
    this.patientService.deleteById(this.id).subscribe({
      next: data => console.log(data),
      error: error => console.log(error)
    });
    this.router.navigate(['/patients']);
  }
}
