import {Component, OnInit} from '@angular/core';
import {DataService} from '../services/data.service';
import {Application, SvSuivi, WebService} from '../models/data.model';
import {JwtService} from '../services/jwt.service';
import {FormBuilder, ReactiveFormsModule} from '@angular/forms';

@Component({
  selector: 'app-recherche',
  templateUrl: './recherche.component.html',
  styleUrls: ['./recherche.component.css']
})
export class RechercheComponent implements OnInit {
  suivis: SvSuivi[];
  applications: Application[];
  webServices: WebService;
  marked = false;
  theCheckbox = false;
  selectedApp;


  private loadComponent: boolean;

  constructor(
    private applicationService: DataService, private jwtService: JwtService, private reactiveFormsModule: ReactiveFormsModule, private fb: FormBuilder
  ) {
  }

  ngOnInit() {
    // this.listSuivi();
    this.listApplication();
    // this.listWebService();
  }

  private listSuivi(): void {
    this.applicationService.getSuivi().subscribe(suivis => this.suivis = suivis);
  }


  private listApplication(): void {
    this.applicationService.getApplication().subscribe((applications) => {
      this.applications = applications;
    });
  }


  private changement() {

    this.applicationService.getWebServiceByApp(this.selectedApp).subscribe((webServices) => {
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
