import {Component, Input, OnInit} from '@angular/core';
import { RechercheComponent} from '../../recherche/recherche.component';
import {SvSuivi} from '../../models/data.model';
import {DataService} from '../../services/data.service';
import {FormGroup} from '@angular/forms';

@Component({
  selector: 'app-suivi',
  templateUrl: './suivi.component.html',
  styleUrls: ['./suivi.component.css']
})
export class SuiviComponent implements OnInit {
  @Input() selection: FormGroup;
  svSuivis: SvSuivi;

  constructor(private rechercheComponent: RechercheComponent, private  dataService: DataService) { }

  ngOnInit() {
    this.ListSuivi();
  }
private ListSuivi(): void {
    this.dataService.getSvSuiviByDate(this.selection.get('webService').value, this.selection.get('dateDebut').value.replace(/\//gi , '-'), this.selection.get('dateFin').value.replace(/\//gi, '-')).subscribe((svSuivis) => {
      this.svSuivis = svSuivis;
      console.log(this.svSuivis);
  })
}
}
