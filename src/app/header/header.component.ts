import {ChangeDetectorRef, Component, OnDestroy, OnInit} from '@angular/core';
import {MediaMatcher} from '@angular/cdk/layout';
import { JwtService} from '../services/jwt.service';
import {DataService} from '../services/data.service';
import {Application, Correspondant} from '../models/data.model';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnDestroy, OnInit {
correspondant: Correspondant;
application: Application;
  mobileQuery: MediaQueryList;

  constructor(changeDetectorRef: ChangeDetectorRef, media: MediaMatcher, private jwtService: JwtService, private dataService: DataService) {
    this.mobileQuery = media.matchMedia('(max-width: 700px');
    this.mobileQueryListener = () => changeDetectorRef.detectChanges();
    this.mobileQuery.addEventListener('change', this.mobileQueryListener);
  }

  public mobileQueryListener: () => void;


  ngOnDestroy() {
    this.mobileQuery.removeEventListener('change', this.mobileQueryListener);
  }
  ngOnInit() {
    this.Correspondant();
    this.Application();
  }
  private Application(): void {
    this.dataService.getApplicationVide().subscribe((application) => {
      this.application = application;
      console.log('ok');
      console.log(application);
    });
    console.log('ok');
  }

  private Correspondant(): void {
    this.dataService.getCorrespondantById(this.jwtService.getId()).subscribe((correspondant) => {
      this.correspondant = correspondant;
    });
  }
onLogout() {
  this.correspondant = undefined;

  this.jwtService.logout();
}
}
