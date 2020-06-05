import {Component, OnInit, ChangeDetectionStrategy} from '@angular/core';
import {DataService} from '../../services/data.service';
import {Application, Correspondant, WebService} from '../../models/data.model';
import {JwtService} from '../../services/jwt.service';
import {FormBuilder, FormGroup, ReactiveFormsModule} from '@angular/forms';
import {Router} from '@angular/router';
import {ResultatsComponent} from '../resultats/resultats.component';

@Component({
  selector: 'app-recherche',
  templateUrl: './recherche.component.html',
  styleUrls: ['./recherche.component.css']
})
export class RechercheComponent implements OnInit {
  correspondant: Correspondant;
  webServices: WebService[];
  marked = false;
  theCheckbox: boolean;
  selectedApp;
  selection: FormGroup;
  loadComponent: boolean;
  checkbox1: boolean;
  checkbox2: boolean;
  const;
  maDate: Date = new Date();
  maintenant = ((this.maDate.getDate() - 1) + '/' + (this.maDate.getMonth() + 1) + '/' + this.maDate.getFullYear());
  semaine = ((this.maDate.getDate() - 8) + '/' + (this.maDate.getMonth() + 1) + '/' + this.maDate.getFullYear());

  constructor(private dataService: DataService, private jwtService: JwtService, private reactiveFormsModule: ReactiveFormsModule, private fb: FormBuilder) {
  }

  ngOnInit() {
    this.listApplication();
    this.selection = this.fb.group({
      application: [],
      webService: '0',
      dateDebut: this.semaine,
      dateFin: this.maintenant,
    });


  }
private listApplication(): void {
    this.dataService.getCorrespondantById(this.jwtService.getId()).subscribe( (correspondant) => {
      this.correspondant = correspondant;
      // console.log(correspondant);
    });
}


  // private listApplication(): void {
  //   this.dataService.getApplication().subscribe((applications) => {
  //     this.applications = applications;
  //   });
  // }


  changement() {

    this.dataService.getWebServiceByApp(this.selectedApp).subscribe((webServices) => {
      this.webServices = webServices;
      // console.log(this.webServices);
    });
    this.selection.value.application = this.selectedApp;
  }


  toggleVisibility(e) {
    this.marked = e.target.checked;
  }
  loadMyChildComponent() {
    this.loadComponent = true;
  }


  recherche() {
    // this.router.navigate(['/resultats']);
    this.selection.value.application = this.selectedApp;
    console.log(this.selection.value);
  }
  selectedValue(value: any, event) {
    if (event.target.checked) {
      this.selection.value.dateDebut = value;

      console.log(value);
    }
  }




}
