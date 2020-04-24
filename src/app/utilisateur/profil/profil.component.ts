import {Component, OnInit} from '@angular/core';
import {DataService} from '../../services/data.service';
import {Correspondant} from '../../models/data.model';

@Component({
  selector: 'app-profil',
  templateUrl: './profil.component.html',
  styleUrls: ['./profil.component.css']
})
export class ProfilComponent implements OnInit {
  correspondant: Correspondant[];

  constructor(private applicationService: DataService) {
  }

  ngOnInit() {
    this.ListCorrespondant();
  }

  private ListCorrespondant(): void {
    this.applicationService.getCorrespondant().subscribe((correspondant) => {
      this.correspondant = correspondant;
      console.log(correspondant);
    });
  }
}
