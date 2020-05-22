import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {LayoutModule} from '@angular/cdk/layout';
import {NgbModule, NgbPaginationModule, NgbAlertModule} from '@ng-bootstrap/ng-bootstrap';

import {AppComponent} from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {HeaderComponent} from './header/header.component';
import {FooterComponent} from './footer/footer.component';
import {RechercheComponent} from './recherche/recherche.component';
import {HttpClientModule} from '@angular/common/http';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {AppRoutingModule} from './app-routing/app-routing.module';
import { ProfilComponent } from './utilisateur/profil/profil.component';
import { ConnexionComponent } from './utilisateur/connexion/connexion.component';
import { InscriptionComponent } from './utilisateur/inscription/inscription.component';
import {JwtModule} from '@auth0/angular-jwt';
import {environment} from '../environments/environment';
import { ContactComponent } from './footer/contact/contact.component';
import { MentionsLegalesComponent } from './footer/mentions-legales/mentions-legales.component';
import { ResultatsComponent } from './resultats/resultats.component';
import { AdministrationComponent } from './administration/administration.component';
import { AdminApplicationComponent } from './administration/admin-application/admin-application.component';
import {NgbdModalConfirm} from './administration/admninistration-confirmation';



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
    NgbdModalConfirm

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
      NgbModule
    ],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents: [NgbdModalConfirm]

})
export class AppModule {

}
