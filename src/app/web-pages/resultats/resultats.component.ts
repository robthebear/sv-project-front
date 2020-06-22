import {Component, Input, OnInit, ViewChild} from '@angular/core';
import {FormGroup} from '@angular/forms';
import {Resultats, SvErreur, SvSuivi, WebService} from '../../models/data.model';
import {RechercheComponent} from '../recherche/recherche.component';
import {DataService} from '../../services/data.service';
import {ChartErrorEvent, GoogleChartComponent} from 'angular-google-charts';
import { Router} from '@angular/router';
import {NgbCarouselConfig} from '@ng-bootstrap/ng-bootstrap';

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
  dateDebut;
  dateFin;


  pieChartOptions = {
    responsive: true
  };
  pieChartColor: any = [
    {
      backgroundColor: ['rgba(30, 169, 224, 0.8)',
        'rgba(255,165,0,0.9)',
        'rgba(139, 136, 136, 0.9)',
        'rgba(255, 161, 181, 0.9)',
        'rgba(255, 102, 0, 0.9)'
      ]
    }
  ];
  // pieChartLabels = ['Nombre de Connexion', 'Nombre d erreurs', 'temps de connexion', 'temps d erreur'];
  nomWebService: string;
  pieChartData: any = [
    {
      data: []
    }
  ];
  charts: Array<{
    title: string,
    type: string,
    data: Array<any>,
    options?: {}
  }> = [];
  @ViewChild('chart', {static: false})
  chart: GoogleChartComponent;

  constructor(private rechercheComponent: RechercheComponent, private dataService: DataService, private router: Router, config: NgbCarouselConfig) {
    config.interval = 2000;
    config.wrap = true;
    config.keyboard = false;
    config.pauseOnHover = false;
  }

  ngOnInit() {
    this.Webservice();
    // this.ListErreur();
    // this.ListSuivi();
    this.Resultat();

    this.dateDebut = this.selection.get('dateDebut').value.replace(/\//gi, '-');
    this.dateFin = this.selection.get('dateFin').value.replace(/\//gi, '-');
    // this.selection.reset();
  }

  private Webservice(): void {
    this.dataService.getWebServiceParId(this.selection.get('webService').value).subscribe((webService) => {
      this.webService = webService;
    });
  }


  // private ListErreur(): void {
  //   this.dataService.getSvErreurByDate(this.selection.get('webService').value, this.selection.get('dateDebut').value.replace(/\//gi, '-'), this.selection.get('dateFin').value.replace(/\//gi, '-')).subscribe((svErreurs) => {
  //     this.svErreurs = svErreurs;
  //     console.log(this.svErreurs);
  //   });
  // }
  //
  // private ListSuivi(): void {
  //   this.dataService.getSvSuiviByDate(this.selection.get('webService').value, this.selection.get('dateDebut').value.replace(/\//gi, '-'), this.selection.get('dateFin').value.replace(/\//gi, '-')).subscribe((svSuivis) => {
  //     this.svSuivis = svSuivis;
  //     console.log(this.svSuivis);
  //   });
  // }

  private Resultat(): void {
    this.dataService.getResultat(this.selection.get('application').value, this.selection.get('webService').value, this.selection.get('dateDebut').value.replace(/\//gi, '-'), this.selection.get('dateFin').value.replace(/\//gi, '-')).subscribe(resultats => {
      this.resultats = resultats;
      console.log(this.resultats);
      for (let resultat of resultats) {
        this.charts.push({
          title: resultat.webService,
          type: 'PieChart',
          data: [
            ['Nombre de connexions : ' + resultat.nbConnexion, resultat.nbConnexion],
            ['Nombre d\'\erreurs : ' + resultat.nbErreur, resultat.nbErreur],
            ['temps de connexions en Secondes : ' + (resultat.tpsConnexion / 1000) + ' s', (resultat.tpsConnexion / 1000)],
            ['temps d\'\erreurs en Secondes : ' + (resultat.tpsErreur / 1000) + ' s', (resultat.tpsErreur / 1000)]
          ],

        });



      }


    }, );

  }



}
