import {Component, Input, OnInit} from '@angular/core';
import {FormGroup} from '@angular/forms';
import {Resultats, SvErreur, SvSuivi, WebService} from '../models/data.model';
import {RechercheComponent} from '../recherche/recherche.component';
import {DataService} from '../services/data.service';
import {$} from 'protractor';

@Component({
  selector: 'app-resultats',
  templateUrl: './resultats.component.html',
  styleUrls: ['./resultats.component.css']
})
export class ResultatsComponent implements OnInit {
  @Input() selection: FormGroup;
  svErreurs: SvErreur[];
  svSuivis: SvSuivi[];
  webService: WebService;
  resultats: Resultats [];

  myType = 'PieChart';
  myData = [
    ['London', 8136000],
    ['New York', 8538000],
    ['Paris', 2244000],
    ['Berlin', 3470000],
    ['Kairo', 19500000]
  ];

  constructor(private rechercheComponent: RechercheComponent, private dataService: DataService) {
  }

  ngOnInit() {
    this.Webservice();
    this.ListErreur();
    this.ListSuivi();
    this.Resultat();


  }

  private Webservice(): void {
    this.dataService.getWebServiceParId(this.selection.get('webService').value).subscribe((webService) => {
      this.webService = webService;
    });
  }

  private ListErreur(): void {
    this.dataService.getSvErreurByDate(this.selection.get('webService').value, this.selection.get('dateDebut').value.replace(/\//gi, '-'), this.selection.get('dateFin').value.replace(/\//gi, '-')).subscribe((svErreurs) => {
      this.svErreurs = svErreurs;
      console.log(this.svErreurs);
    });
  }

  private ListSuivi(): void {
    this.dataService.getSvSuiviByDate(this.selection.get('webService').value, this.selection.get('dateDebut').value.replace(/\//gi, '-'), this.selection.get('dateFin').value.replace(/\//gi, '-')).subscribe((svSuivis) => {
      this.svSuivis = svSuivis;
      console.log(this.svSuivis);
    });
  }

  private Resultat(): void {
    this.dataService.getResultat(this.selection.get('application').value, this.selection.get('webService').value, this.selection.get('dateDebut').value.replace(/\//gi, '-'), this.selection.get('dateFin').value.replace(/\//gi, '-')).subscribe((resultats) => {
      this.resultats = resultats;
      console.log(this.resultats);
    });
  }



}
