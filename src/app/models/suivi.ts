import {Webservice} from './webservice';

export class Suivi {
  id: number;
  dateDebut: string;
  dateFin: string;
  StatutRetour: string;
  statutHttp: string;
  libelleErreur: string;
  webService: Webservice;


  // tslint:disable-next-line:max-line-length
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

