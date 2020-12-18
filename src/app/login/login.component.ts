import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
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
  bool = true;

  loginFormGroup!: FormGroup;

  constructor(private router: Router, private myFormBuilder: FormBuilder) {}

  ngOnInit(): void {
    this.loginFormGroup=this.myFormBuilder.group(
      {
        loginCtrl: [this.login,
        [
          Validators.required,
          Validators.email
        ]
        ],
         mdpCtrl:[this.mdp,
          [
            Validators.required
          ]
        ] 
      }
    );
  }

  get loginCtrl() {
    return this.loginFormGroup.get("loginCtrl");
  }

  get mdpCtrl() {
    return this.loginFormGroup.get("mdpCtrl");
  }
  seConnecter() {
    if (this.mdp === 'passer123') {
      sessionStorage.setItem('username', this.login);
      this.router.navigate(['accueil']);
      this.bool = true;
    } else {
      this.bool = false;
    }
  }
}
