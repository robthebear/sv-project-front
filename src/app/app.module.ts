import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {LayoutModule} from '@angular/cdk/layout';

import {AppComponent} from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {HeaderComponent} from './header/header.component';
import {FooterComponent} from './footer/footer.component';
import {RechercheComponent} from './recherche/recherche.component';
import {UtilisateurComponent} from './utilisateur/utilisateur.component';
import {HttpClientModule} from '@angular/common/http';
import {FormsModule} from '@angular/forms';
import { SuiviComponent } from './resultat/suivi/suivi.component';
import { ErreurComponent } from './resultat/erreur/erreur.component';
import { StatistiqueComponent } from './resultat/statistique/statistique.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    RechercheComponent,
    UtilisateurComponent,
    SuiviComponent,
    ErreurComponent,
    StatistiqueComponent,
  ],
    imports: [
        BrowserModule,
        BrowserAnimationsModule,
        LayoutModule,
        HttpClientModule,
        FormsModule
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {

}
