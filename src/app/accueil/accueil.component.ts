import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Etudiant } from '../modeles/etudiant';
import { GestionEtudiantsService } from '../services/gestion-etudiants.service';

@Component({
  selector: 'app-accueil',
  templateUrl: './accueil.component.html',
  styleUrls: ['./accueil.component.css'],
})
export class AccueilComponent implements OnInit {
  id = new Date();
  etuSaisie = new Etudiant('UGB' + this.id.getTime(), '', '', '');

  tabEtudiant: Etudiant[] = [];
  secondes = 0;

  nom: any;
  constructor(private route:Router,
    private routeActive: ActivatedRoute,
    private serviceGE: GestionEtudiantsService
  ) {}

  insererEtudiant() {
    // this.tabEtudiant.push(this.etuSaisie);
    this.serviceGE.ajouter(this.etuSaisie);
    this.tabEtudiant.sort((a, b) => a.ufr.localeCompare(b.ufr));
  }

  supprimer(id: string) {
    this.tabEtudiant = this.serviceGE.delete(id);
  }
  ngOnInit(): void {
    if (sessionStorage.getItem('username') != null) {
      this.tabEtudiant = this.serviceGE.tabEtudiant;
      // this.nom = this.routeActive.snapshot.paramMap.get('username');
      this.nom = sessionStorage.getItem('username');
      this.tabEtudiant.sort((a, b) => a.ufr.localeCompare(b.ufr));
    }else{
      this.route.navigate(["login"]);  
    }
  }
}
