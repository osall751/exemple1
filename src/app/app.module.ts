import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AccueilComponent } from './accueil/accueil.component';
import { LoginComponent } from './login/login.component';
import { FormsModule } from '@angular/forms';
import { GestionEtudiantsService } from './services/gestion-etudiants.service';
import { MonPipePipe } from './pipes/mon-pipe.pipe';
import { EntetepageComponent } from './entetepage/entetepage.component';
import { PiedpageComponent } from './piedpage/piedpage.component';
import { GestionSessionsService } from './services/gestion-sessions.service';

@NgModule({
  declarations: [
    AppComponent,
    AccueilComponent,
    LoginComponent,
    MonPipePipe,
    EntetepageComponent,
    PiedpageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [GestionEtudiantsService, GestionSessionsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
