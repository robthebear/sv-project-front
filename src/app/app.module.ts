import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {LayoutModule} from '@angular/cdk/layout';
import {NgbModule, NgbPaginationModule, NgbAlertModule} from '@ng-bootstrap/ng-bootstrap';

import {AppComponent} from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {HeaderComponent} from './web-pages/header/header.component';
import {FooterComponent} from './web-pages/footer/footer.component';
import {RechercheComponent} from './web-pages/recherche/recherche.component';
import {HttpClientModule} from '@angular/common/http';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {AppRoutingModule} from './app-routing/app-routing.module';
import { ProfilComponent } from './web-pages/utilisateur/profil/profil.component';
import { ConnexionComponent } from './web-pages/utilisateur/connexion/connexion.component';
import { InscriptionComponent } from './web-pages/utilisateur/inscription/inscription.component';
import {JwtModule} from '@auth0/angular-jwt';
import {environment} from '../environments/environment';
import { ContactComponent } from './web-pages/footer/contact/contact.component';
import { MentionsLegalesComponent } from './web-pages/footer/mentions-legales/mentions-legales.component';
import { ResultatsComponent } from './web-pages/resultats/resultats.component';
import { AdministrationComponent } from './web-pages/administration/administration.component';
import { AdminApplicationComponent } from './web-pages/administration/admin-application/admin-application.component';
import {GoogleChartsModule} from 'angular-google-charts';
import { ChartsModule} from 'ng2-charts';
import { ChartComponent } from './web-pages/resultats/chart.component';
import { ModalModule } from 'ngx-bootstrap/modal';
import { AlertModule } from 'ngx-bootstrap/alert';
import { AccueilComponent } from './web-pages/accueil/accueil.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    RechercheComponent,
    ProfilComponent,
    ConnexionComponent,
    InscriptionComponent,
    ContactComponent,
    MentionsLegalesComponent,
    ResultatsComponent,
    AdministrationComponent,
    AdminApplicationComponent,
    ChartComponent,
    AccueilComponent,



  ],
    imports: [
        BrowserModule,
        BrowserAnimationsModule,
        LayoutModule,
        HttpClientModule,
        FormsModule,
        AppRoutingModule,
        JwtModule.forRoot({
            config: {
                tokenGetter: function tokenGetter() {
                    return localStorage.getItem('access_token');
                },
                whitelistedDomains: [environment.server],
                blacklistedRoutes: [`${environment.apiUrl}/sign-in`]

            }

        }),
        ReactiveFormsModule,
      NgbModule,
      GoogleChartsModule.forRoot(),
      ChartsModule,
      ModalModule.forRoot(),
      AlertModule.forRoot()
    ],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents: []

})
export class AppModule {

}
