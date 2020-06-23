import { Component, OnInit } from '@angular/core';
import { Application} from '../../models/data.model';
import {DataService} from '../../services/data.service';
import {FormBuilder, FormGroup} from '@angular/forms';


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


  constructor(private dataService: DataService, private fb: FormBuilder) { }

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
      }

    });
  }
  miseAJourAppli() {
    this.dataService.mettreAJourApplication(this.selectedApp, this.appliForm.value).subscribe();


    console.log(this.selectedApp);
    console.log(this.appliForm.value);
    this.Application();
    this.appliForm.reset();
  }

  ajoutApplication() {
    this.dataService.postApplication(this.nouvelleApplication.value).subscribe();
    console.log(this.nouvelleApplication.value);
    this.nouvelleApplication.reset();
  }
}
