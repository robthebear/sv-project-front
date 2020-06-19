import {Component, OnInit, TemplateRef, Type} from '@angular/core';
import {DataService} from '../../services/data.service';
import {Application, Correspondant, Habilitation} from '../../models/data.model';
import {FormBuilder} from '@angular/forms';
import {Router} from '@angular/router';

import {BsModalRef, BsModalService} from 'ngx-bootstrap/modal';

@Component({
  selector: 'app-administration',
  templateUrl: './administration.component.html',
  styleUrls: ['./administration.component.css']
})
export class AdministrationComponent implements OnInit {
  correspondants: Correspondant[];
  applications: Application[];
  selectCorrespondant;
  correspondant: Correspondant;
  idFormArray: Application[] = [];
  habilitation: Habilitation;
  modalRef: BsModalRef;
  message: string;

  constructor(private dataservice: DataService, private fb: FormBuilder, private router: Router, private modalService: BsModalService) {
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

  supprimerCorrespondant() {
    this.dataservice.suppressionCorrespondant(this.selectCorrespondant).subscribe();
  }


  validationChangements(success: TemplateRef<any>) {
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
    this.modalRef.hide();
    this.modalRef = this.modalService.show(success, {class: 'modal-sm'});

  }
  openModal(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(template, {class: 'modal-sm'});
  }



  decline(annule: TemplateRef<any>): void {
    this.modalRef.hide();
    this.modalRef = this.modalService.show(annule, {class: 'modal-sm'});


  }

}
