import {Webservice} from './webservice';

export class Application {
  id: string;
  libelle: string;
  type: string;
  webservice: Webservice;

  constructor(id: string, libelle: string, type: string, webservice: Webservice) {
    this.id = id;
    this.libelle = libelle;
    this.type = type;
    this.webservice = webservice;
  }
}
