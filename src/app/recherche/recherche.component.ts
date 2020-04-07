import { Component, OnInit } from '@angular/core';
import {Suivi} from '../models/suivi';
import {ApplicationService} from '../services/application.service';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-recherche',
  templateUrl: './recherche.component.html',
  styleUrls: ['./recherche.component.css']
})
export class RechercheComponent implements OnInit {
suivis: Suivi[];
  constructor(
    private applicationService: ApplicationService,
    private httpClient: HttpClient
  ) { }

  ngOnInit() {
    this.listSuivi();
  }

  private listSuivi(): void {
    this.applicationService.getSuivi().subscribe(suivis => this.suivis = suivis);

  }
}
