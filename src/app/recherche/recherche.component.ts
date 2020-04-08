import {Component, OnInit} from '@angular/core';
import {Suivi} from '../models/suivi';
import {ApplicationService} from '../services/application.service';
import {Application} from '../models/application';

@Component({
  selector: 'app-recherche',
  templateUrl: './recherche.component.html',
  styleUrls: ['./recherche.component.css']
})
export class RechercheComponent implements OnInit {
  suivis: Suivi[];
  applications: Application[];

  constructor(
    private applicationService: ApplicationService,
  ) {
  }

  ngOnInit() {
    this.listSuivi();
    this.listApplication();
  }

  private listSuivi(): void {
    this.applicationService.getSuivi().subscribe(suivis => this.suivis = suivis);
  }

  private listApplication(): void {
    this.applicationService.getApplication().subscribe(applications => this.applications = applications);
  }
}
