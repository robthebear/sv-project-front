import {Component, OnInit} from '@angular/core';
import {DataService} from '../services/data.service';
import {Application, Correspondant, Habilitation} from '../models/data.model';
import {FormBuilder, FormGroup} from '@angular/forms';
import {Router} from '@angular/router';

@Component({
  selector: 'app-administration',
  templateUrl: './administration.component.html',
  styleUrls: ['./administration.component.css']
})
export class AdministrationComponent implements OnInit {
  correspondants: Correspondant[];
  applications: Application[];
  selectCorrespondant;
  selectedApp;
  correspondant: Correspondant;
  selection: FormGroup;
  idFormArray: Application[] = [];
  habilitation: Habilitation;

  constructor(private dataservice: DataService, private fb: FormBuilder, private router: Router) {
  }


  ngOnInit() {
    this.ListCorrespondants();

  }

  onChange(id: Application, isChecked: boolean) {
    if (isChecked) {
      this.idFormArray.push(id);
    } else {
      const index = this.idFormArray.indexOf(id);
      this.idFormArray.splice(index, 1);
    }
  }

  duplicate() {
    console.log(this.idFormArray);
  }

  private ListCorrespondants(): void {
    this.dataservice.getCorrespondant().subscribe((correspondants) => {
      this.correspondants = correspondants;
      console.log(correspondants);
    });
  }

  changement() {

    this.dataservice.getCorrespondantById(this.selectCorrespondant).subscribe((correspondant) => {
      this.correspondant = correspondant;
      this.idFormArray = [];
      for (let application of correspondant.applications) {
        // @ts-ignore
        this.idFormArray.push(application.id);
      }

      console.log(this.selectCorrespondant);
    });
    this.dataservice.getApplicationFiltre(this.selectCorrespondant).subscribe((applications) => {
      this.applications = applications;
      console.log(applications);
    });
    this.dataservice.getRoleById(this.selectCorrespondant).subscribe((habilitation) => {
      this.habilitation = habilitation;
      console.log(this.habilitation.roleList);
    });

  }


  validationChangements() {
    this.dataservice.updateCorrespondant(this.correspondant.id, {applications: this.idFormArray})
      .subscribe((correspondant) => {
        this.correspondant = correspondant;
        this.idFormArray = [];
        for (let application of correspondant.applications) {
          // @ts-ignore
          this.idFormArray.push(application.id);
        }
      });
    this.dataservice.getApplicationFiltre(this.selectCorrespondant).subscribe((applications) => {
      this.applications = applications;
      console.log(applications);
    });
    this.router.navigate(['/administration']);
    console.log(this.correspondant.id, this.idFormArray);
    this.dataservice.getCorrespondantById(this.correspondant.id);
    // location.reload();
    // this.changement()
  }

}