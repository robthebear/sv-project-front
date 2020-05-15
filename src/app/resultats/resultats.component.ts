import {ChangeDetectionStrategy, Component, Input, OnInit} from '@angular/core';
import {FormGroup} from '@angular/forms';
import {SvErreur, SvSuivi, WebService} from '../models/data.model';
import {RechercheComponent} from '../recherche/recherche.component';
import {DataService} from '../services/data.service';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'app-resultats',
  templateUrl: './resultats.component.html',
  styleUrls: ['./resultats.component.css']
})
export class ResultatsComponent implements OnInit {
  @Input() selection: FormGroup;
  svErreurs: SvErreur[];
  svSuivis: SvSuivi[];
  webService: WebService;


  constructor(private rechercheComponent: RechercheComponent, private dataService: DataService) {
  }

  ngOnInit() {
    // this.ListErreur();
    // this.ListSuivi();
    // this.Webservice();

  }

  private Webservice(): void {
    this.dataService.getWebServiceParId(this.selection.get('webService').value).subscribe( (webService) => {
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
}
