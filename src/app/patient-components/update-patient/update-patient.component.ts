import { PatientService } from 'src/app/services/patient.service';
import { Component, OnInit } from '@angular/core';
import { Patient } from 'src/app/model/patient';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-update-patient',
  templateUrl: './update-patient.component.html',
  styleUrls: ['./update-patient.component.css']
})
export class UpdatePatientComponent implements OnInit {
  patient!: Patient;
  id!: number;
  constructor(
    private patientService: PatientService,
    private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit(): void {
    this.patient = new Patient();
    this.id = this.route.snapshot.params['id'];
    this.getPatientById(this.id);
  }

  private getPatientById(id: number) {
    this.patientService.getPatientById(id).subscribe({
      next: data => {
        this.patient = data;
      },
      error: error => console.log(error)
    });
  }

  updatePatient() {
    this.patientService.updatePatientById(this.id, this.patient)
      .subscribe({
        next: data => {
          console.log(data);
          this.patient = new Patient();
        },

        error: error => console.log(error)
      });
  }

  goToList() {
    this.router.navigate(['/patients']);
  }

  onSubmit() {
    this.updatePatient();
    this.goToList();
  }
}
