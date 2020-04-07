import {Application} from './application';
import {Erreur} from './erreur';
import {Suivi} from './suivi';

export class Webservice {
  id: number;
  webService: string;
  libelleWebService: string;
  dateCreation: string;
  application: Application;
  svErreur: Erreur;
  svSuivi: Suivi;


  constructor(id: number, webService: string, libelleWebService: string, dateCreation: string, application: Application, svErreur: Erreur, svSuivi: Suivi) {
    this.id = id;
    this.webService = webService;
    this.libelleWebService = libelleWebService;
    this.dateCreation = dateCreation;
    this.application = application;
    this.svErreur = svErreur;
    this.svSuivi = svSuivi;
  }
}
