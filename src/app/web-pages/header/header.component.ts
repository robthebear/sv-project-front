import {ChangeDetectorRef, Component, OnDestroy, OnInit} from '@angular/core';
import {MediaMatcher} from '@angular/cdk/layout';
import { JwtService} from '../../services/jwt.service';
import {DataService} from '../../services/data.service';
import {Application, Correspondant} from '../../models/data.model';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnDestroy, OnInit {
  correspondant: Correspondant;
  mobileQuery: MediaQueryList;
  applications: Application[];
  j: number;

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


  private Correspondant(): void {
    this.dataService.getCorrespondantById(this.jwtService.getId()).subscribe((correspondant) => {
      this.correspondant = correspondant;
    });
  }

  onLogout() {
    this.correspondant = undefined;

    this.jwtService.logout();
  }

  private Application(): void {
    this.dataService.getApplicationVide().subscribe((applications) => {
      this.applications = applications;
      for (let i = 0; i < applications.length; i++) {
        this.j = 1 + i;
        console.log(this.j);
      }

    });
  }
}
