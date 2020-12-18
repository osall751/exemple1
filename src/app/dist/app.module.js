"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.AppModule = void 0;
var platform_browser_1 = require("@angular/platform-browser");
var core_1 = require("@angular/core");
var app_routing_module_1 = require("./app-routing.module");
var app_component_1 = require("./app.component");
var accueil_component_1 = require("./accueil/accueil.component");
var login_component_1 = require("./login/login.component");
var forms_1 = require("@angular/forms");
var gestion_etudiants_service_1 = require("./services/gestion-etudiants.service");
var mon_pipe_pipe_1 = require("./pipes/mon-pipe.pipe");
var entetepage_component_1 = require("./entetepage/entetepage.component");
var piedpage_component_1 = require("./piedpage/piedpage.component");
var gestion_sessions_service_1 = require("./services/gestion-sessions.service");
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        core_1.NgModule({
            declarations: [
                app_component_1.AppComponent,
                accueil_component_1.AccueilComponent,
                login_component_1.LoginComponent,
                mon_pipe_pipe_1.MonPipePipe,
                entetepage_component_1.EntetepageComponent,
                piedpage_component_1.PiedpageComponent
            ],
            imports: [
                platform_browser_1.BrowserModule,
                app_routing_module_1.AppRoutingModule,
                forms_1.FormsModule,
                forms_1.ReactiveFormsModule
            ],
            providers: [gestion_etudiants_service_1.GestionEtudiantsService, gestion_sessions_service_1.GestionSessionsService],
            bootstrap: [app_component_1.AppComponent]
        })
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;
