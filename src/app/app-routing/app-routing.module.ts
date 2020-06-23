import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule} from '@angular/router';
import {RechercheComponent} from '../web-pages/recherche/recherche.component';
import {ConnexionComponent} from '../web-pages/utilisateur/connexion/connexion.component';
import {AppComponent} from '../app.component';
import {ProfilComponent} from '../web-pages/utilisateur/profil/profil.component';
import {ContactComponent} from '../web-pages/footer/contact/contact.component';
import {MentionsLegalesComponent} from '../web-pages/footer/mentions-legales/mentions-legales.component';
import {ResultatsComponent} from '../web-pages/resultats/resultats.component';
import {AdministrationComponent} from '../web-pages/administration/administration.component';
import {AdminApplicationComponent} from '../web-pages/administration/admin-application/admin-application.component';


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
