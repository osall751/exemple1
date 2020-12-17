import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  login = 'osall@univ-thies.sn';
  mdp = 'passer123';
  img = './../assets/logo-ugb.png';
  bool=true;
  constructor(private router:Router) {}
  
  ngOnInit(): void {
  }

  seConnecter() {
    if (this.mdp === 'passer123'){
      sessionStorage.setItem("username", this.login)
      this.router.navigate(["accueil"]);
      this.bool=true;
    } 
    else {
      this.bool=false;
    }
  }
}
