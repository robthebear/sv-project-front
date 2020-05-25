export interface Application {
  id: string;
  libelle: string;
  type: string;
  webService: WebService[];
  correspondants: Correspondant[];

  // constructor(id: string, libelle: string, type: string, webService: WebService[]) {
  //   this.id = id;
  //   this.libelle = libelle;
  //   this.type = type;
  //   this.webService = webService;
  // }
}

export interface WebService {
  id: number;
  webService: string;
  libelleWebService: string;
  dateCreation: string;
  application: Application;
  svErreur: SvErreur;
  svSuivi: SvSuivi;
  svStatistique: SvStatistique;


  // constructor(id: number, webService: string, libelleWebService: string, dateCreation: string, svErreur: SvErreur, svSuivi: SvSuivi, svStatistique: SvStatistique) {
  //   this.id = id;
  //   this.webService = webService;
  //   this.libelleWebService = libelleWebService;
  //   this.dateCreation = dateCreation;
  //   this.svErreur = svErreur;
  //   this.svSuivi = svSuivi;
  //   this.svStatistique = svStatistique;
  // }
}

export interface SvSuivi {
  id: number;
  date: string;
  heureDebut: string;
  duree: number;
  StatutRetour: string;
  statutHttp: string;
  webService: WebService;


  // tslint:disable-next-line:max-line-length
  // constructor(id: number, dateDebut: string, dateFin: string, StatutRetour: string, statutHttp: string, libelleErreur: string, webService: WebService) {
  //   this.id = id;
  //   this.dateDebut = dateDebut;
  //   this.dateFin = dateFin;
  //   this.StatutRetour = StatutRetour;
  //   this.statutHttp = statutHttp;
  //   this.libelleErreur = libelleErreur;
  //   this.webService = webService;
  // }
}

export interface SvStatistique {
  id: number;
  date: string;
  pourcentage: number;
  tempsMoyen: number;
  webService: WebService;


  // constructor(id: number, date: string, pourcentage: number, tempsMoyen: number, webService: WebService) {
  //   this.id = id;
  //   this.date = date;
  //   this.pourcentage = pourcentage;
  //   this.tempsMoyen = tempsMoyen;
  //   this.webService = webService;
  // }
}

export interface SvErreur {
  id: number;
  date: string;
  heureDebut: string;
  duree: number;
  StatutRetour: string;
  statutHttp: string;
  libelleErreur: string;
  webService: WebService;


  // constructor(id: number, dateDebut: string, dateFin: string, StatutRetour: string, statutHttp: string, libelleErreur: string, webService: WebService) {
  //   this.id = id;
  //   this.dateDebut = dateDebut;
  //   this.dateFin = dateFin;
  //   this.StatutRetour = StatutRetour;
  //   this.statutHttp = statutHttp;
  //   this.libelleErreur = libelleErreur;
  //   this.webService = webService;
  // }
}

export interface Correspondant {
  id: string;
  nom: string;
  prenom: string;
  fonction: string;
  email: string;
  telephone: string;
  applications: Application[];
  habilitaion: Habilitation;


  // constructor(id: string, nom: string, prenom: string, fonction: string, email: string, telephone: string) {
  //   this.id = id;
  //   this.nom = nom;
  //   this.prenom = prenom;
  //   this.fonction = fonction;
  //   this.email = email;
  //   this.telephone = telephone;
  // }
}

export interface Habilitation {
  id: string;
  roleList: Role;

}

export interface Role {
  label: string;

}
export interface Resultats {
  webService: string;
  dateDebut: Date;
  dateFin: Date;
  nbConnexion: number;
  tpsConnexion: number;
  nbErreur: number;
  tpsErreur: number;
  libelles: Libelles;
  https: Https;
  retours: Retours;

}
export interface Libelles {
  libelle: string;
  nbLibelle: number;

}
export interface Https {
  http: string;
  nbHttp: number;

}
export interface Retours {
  retour: string;
  nbRetour: number;

}

