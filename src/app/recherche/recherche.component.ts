import {Component, OnInit} from '@angular/core';
import {Suivi} from '../models/suivi';
import {ApplicationService} from '../services/application.service';
import {Application} from '../models/application';
import {Webservice} from '../models/webservice';

@Component({
  selector: 'app-recherche',
  templateUrl: './recherche.component.html',
  styleUrls: ['./recherche.component.css']
})
export class RechercheComponent implements OnInit {
  suivis: Suivi[];
  applications: Application[];
  webServices: Webservice[];
  marked = false;
  theCheckbox = false;

  constructor(
    private applicationService: ApplicationService,
  ) {
  }

  ngOnInit() {
    this.listSuivi();
    this.listApplication();
    this.listWebService();
  }

  private listSuivi(): void {
    this.applicationService.getSuivi().subscribe(suivis => this.suivis = suivis);
  }

  private listApplication(): void {
    this.applicationService.getApplication().subscribe(applications => this.applications = applications);
  }
  private listWebService(): void {
    this.applicationService.getWebService().subscribe(webServices => this.webServices = webServices);
  }

  toggleVisibility(e) {
    this.marked = e.target.checked;
  }
}
