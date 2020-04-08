import {Webservice} from './webservice';

export class Erreur {
  id: number;
  dateDebut: string;
  dateFin: string;
  StatutRetour: string;
  statutHttp: string;
  libelleErreur: string;
  webService: Webservice;


  constructor(id: number, dateDebut: string, dateFin: string, StatutRetour: string, statutHttp: string, libelleErreur: string, webService: Webservice) {
    this.id = id;
    this.dateDebut = dateDebut;
    this.dateFin = dateFin;
    this.StatutRetour = StatutRetour;
    this.statutHttp = statutHttp;
    this.libelleErreur = libelleErreur;
    this.webService = webService;
  }
}
