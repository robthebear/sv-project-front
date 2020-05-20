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
  selectedApp;


  constructor(private dataService: DataService, private fb: FormBuilder) { }

  ngOnInit() {
    this.Application();
    this.appliForm = this.fb.group({
      id: [this.selectedApp.value()],
      libelle: [],
      type: [],
    });
  }
  private Application(): void {
    this.dataService.getApplicationVide().subscribe((applications) => {
      this.applications = applications;
    });
  }
  miseAJourAppli() {
    console.log(this.appliForm.value);
  }
}
