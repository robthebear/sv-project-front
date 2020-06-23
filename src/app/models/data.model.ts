export interface Application {
  id: string;
  libelle: string;
  type: string;
  webService: WebService[];
  correspondants: Correspondant[];


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


}

export interface SvSuivi {
  id: number;
  date: string;
  heureDebut: string;
  duree: number;
  StatutRetour: string;
  statutHttp: string;
  webService: WebService;


}

export interface SvStatistique {
  id: number;
  date: string;
  pourcentage: number;
  tempsMoyen: number;
  webService: WebService;


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

