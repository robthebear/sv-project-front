import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {JwtService} from '../../services/jwt.service';
import {Router} from '@angular/router';
import {DataService} from '../../services/data.service';
import {FeedbackService} from '../../services/feedback.service';
import {Habilitation} from '../../models/habilitation';

@Component({
  selector: 'app-connexion',
  templateUrl: './connexion.component.html',
  styleUrls: ['./connexion.component.css']
})
export class ConnexionComponent implements OnInit {
  loginForm: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private jwtService: JwtService,
    private router: Router,
    private dataService: DataService,
    private feedbackService: FeedbackService
  ) { }

  ngOnInit() {
    this.loginForm = this.formBuilder.group( {
      identifiant: ['', Validators.required],
      password: ['', Validators.required]
    });
  }
  onSubmit() {
    // const utilisateurConnected = new Habilitation();
    // utilisateurConnected.id = this.loginForm.controls.identifiant.value;
    // utilisateurConnected.motDePasse = this.loginForm.controls.password.value;
    this.jwtService.login( this.loginForm.controls.identifiant.value, this.loginForm.controls.password.value).subscribe(
      data => console.log(data)
    );
  }
}
