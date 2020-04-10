import {Webservice} from './webservice';

export class Statistique {
  id: number;
  date: string;
  pourcentage: number;
  tempsMoyen: number;
  webService: Webservice;


  constructor(id: number, date: string, pourcentage: number, tempsMoyen: number, webService: Webservice) {
    this.id = id;
    this.date = date;
    this.pourcentage = pourcentage;
    this.tempsMoyen = tempsMoyen;
    this.webService = webService;
  }
}
