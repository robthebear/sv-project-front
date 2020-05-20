import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule} from '@angular/router';
import {RechercheComponent} from '../recherche/recherche.component';
import {ConnexionComponent} from '../utilisateur/connexion/connexion.component';
import {AppComponent} from '../app.component';
import {ProfilComponent} from '../utilisateur/profil/profil.component';
import {ContactComponent} from '../footer/contact/contact.component';
import {MentionsLegalesComponent} from '../footer/mentions-legales/mentions-legales.component';
import {ResultatsComponent} from '../resultats/resultats.component';
import {AdministrationComponent} from '../administration/administration.component';
import {AdminApplicationComponent} from '../administration/admin-application/admin-application.component';


const routes: Routes = [
  {path: 'recherche', component: RechercheComponent},
  {path: 'connexion', component: ConnexionComponent},
  {path: '', component: AppComponent},
  {path: 'profil', component: ProfilComponent},
  {path: 'contact', component: ContactComponent},
  {path: 'mentions legales', component: MentionsLegalesComponent},
  {path: 'resultats', component: ResultatsComponent},
  {path: 'administration', component: AdministrationComponent},
  {path: 'admin-gestion', component: AdminApplicationComponent}

];
@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes),
    CommonModule
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
