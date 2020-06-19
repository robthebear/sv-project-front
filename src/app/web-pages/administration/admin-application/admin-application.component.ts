import {Component, OnInit, TemplateRef} from '@angular/core';
import { Application} from '../../../models/data.model';
import {DataService} from '../../../services/data.service';
import {FormBuilder, FormGroup} from '@angular/forms';
import {BsModalRef, BsModalService} from 'ngx-bootstrap/modal';


@Component({
  selector: 'app-admin-application',
  templateUrl: './admin-application.component.html',
  styleUrls: ['./admin-application.component.css']
})
export class AdminApplicationComponent implements OnInit {
  applications: Application[];
  appliForm: FormGroup;
  selectedApp: string;
  nouvelleApplication: FormGroup;
  modalRef: BsModalRef;
  message: string;

  constructor(private dataService: DataService, private fb: FormBuilder, private modalService: BsModalService) { }

  ngOnInit() {
    this.Application();
    this.appliForm = this.fb.group({
      libelle: [],
      type: [],
    });
    this.nouvelleApplication = this.fb.group( {
      id: [],
      libelle: [],
      type: [],
    });

  }
  private Application(): void {
    this.dataService.getApplicationVide().subscribe((applications) => {
      this.applications = applications;
      for (let application of applications) {
        this.selectedApp = application.id;
        // this.Application();
      }

    });
  }
  miseAJourAppli(success: TemplateRef<any>) {
    this.dataService.mettreAJourApplication(this.selectedApp, this.appliForm.value).subscribe();


    console.log(this.selectedApp);
    console.log(this.appliForm.value);

    this.appliForm.reset();
    location.reload();
    this.modalRef.hide();
    this.modalRef = this.modalService.show(success, {class: 'modal-sm'});
  }

  ajoutApplication() {
    this.dataService.postApplication(this.nouvelleApplication.value).subscribe();
    console.log(this.nouvelleApplication.value);
    this.nouvelleApplication.reset();
  }
  decline(annule: TemplateRef<any>): void {
    this.modalRef.hide();
    this.modalRef = this.modalService.show(annule, {class: 'modal-sm'});


  }
  openModal(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(template, {class: 'modal-sm'});
  }

}
