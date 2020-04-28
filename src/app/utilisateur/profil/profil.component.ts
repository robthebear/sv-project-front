import {Component, OnInit} from '@angular/core';
import {DataService} from '../../services/data.service';
import {Correspondant} from '../../models/data.model';
import {JwtService} from '../../services/jwt.service';

@Component({
  selector: 'app-profil',
  templateUrl: './profil.component.html',
  styleUrls: ['./profil.component.css']
})
export class ProfilComponent implements OnInit {
  correspondant: Correspondant;

  constructor(private applicationService: DataService, private jwtService: JwtService) {
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
}
