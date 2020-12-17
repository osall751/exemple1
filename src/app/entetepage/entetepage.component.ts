import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { GestionSessionsService } from '../services/gestion-sessions.service';

@Component({
  selector: 'app-entetepage',
  templateUrl: './entetepage.component.html',
  styleUrls: ['./entetepage.component.css'],
})
export class EntetepageComponent implements OnInit {
  constructor(private route: Router, 
    public gestionSession:GestionSessionsService) {}

  ngOnInit(): void {}
  seDeconnecter() {
    if (sessionStorage.getItem('username') != null) {
      sessionStorage.removeItem('username');  
    }
    this.route.navigate(['login']);
  }
}
