import {Component, OnInit} from '@angular/core';
import {DataService} from '../services/data.service';
import {Application, SvSuivi, WebService} from '../models/data.model';

@Component({
  selector: 'app-recherche',
  templateUrl: './recherche.component.html',
  styleUrls: ['./recherche.component.css']
})
export class RechercheComponent implements OnInit {
  suivis: SvSuivi[];
  applications: Application[];
  webServices: WebService[];
  marked = false;
  theCheckbox = false;
  private loadComponent: boolean;

  constructor(
    private applicationService: DataService,
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
    this.applicationService.getApplication().subscribe((applications) => {
      this.applications = applications;
      console.log(this.applications);
    });
  }
  private listWebService(): void {
    this.applicationService.getWebService().subscribe((webServices) => {
      this.webServices = webServices;
      console.log(this.webServices);
    });
  }

  toggleVisibility(e) {
    this.marked = e.target.checked;
  }
  loadMyChildComponent() {
    this.loadComponent = true;
  }
}
