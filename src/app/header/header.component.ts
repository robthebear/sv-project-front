import {ChangeDetectorRef, Component, OnDestroy, OnInit} from '@angular/core';
import {MediaMatcher} from '@angular/cdk/layout';
import { JwtService} from '../services/jwt.service';
import {DataService} from '../services/data.service';
import {Correspondant} from '../models/data.model';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnDestroy, OnInit {
correspondant: Correspondant;

  mobileQuery: MediaQueryList;

  constructor(changeDetectorRef: ChangeDetectorRef, media: MediaMatcher, private jwtService: JwtService, private applicationService: DataService) {
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
  }
  private Correspondant(): void {
    this.applicationService.getCorrespondantById(this.jwtService.getId()).subscribe((correspondant) => {
      this.correspondant = correspondant;
      console.log(correspondant);
    });
  }
onLogout() {
    this.jwtService.logout();
}
}
