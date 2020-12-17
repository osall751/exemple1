import { Injectable } from '@angular/core';
import { Etudiant } from '../modeles/etudiant';

@Injectable({
  providedIn: 'root'
})
export class GestionEtudiantsService {
  private _tabEtudiant = [
    new Etudiant('SAT001', 'FALL', 'Moussa', 'SAT'),
    new Etudiant('SEG008', 'Diop', 'Modou', 'SEG'),
    new Etudiant('LSH104', 'GAYE', 'Fanta', 'LSH'),
    new Etudiant('CRAC101', 'SAMB', 'Demba', 'CRAC'),
    new Etudiant('SAT011', 'THIAM', 'Amy', 'SAT'),
    new Etudiant('SJP651', 'GUEYE', 'Arame', 'SJP'),
  ];
  public get tabEtudiant() {
    return this._tabEtudiant;
  }
  public set tabEtudiant(value) {
    this._tabEtudiant = value;
  }

  public ajouter(etu:Etudiant){
    this._tabEtudiant.push(etu);
  }

  public delete(id:string){
    this.tabEtudiant = this.tabEtudiant.filter((obj) => obj.id !== id);
    return this.tabEtudiant;
  }


  constructor() { }
}
