"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.LoginComponent = void 0;
var core_1 = require("@angular/core");
var forms_1 = require("@angular/forms");
var LoginComponent = /** @class */ (function () {
    function LoginComponent(router, myFormBuilder) {
        this.router = router;
        this.myFormBuilder = myFormBuilder;
        this.login = 'osall@univ-thies.sn';
        this.mdp = 'passer123';
        this.img = './../assets/logo-ugb.png';
        this.bool = true;
    }
    LoginComponent.prototype.ngOnInit = function () {
        this.loginFormGroup = this.myFormBuilder.group({
            loginCtrl: [this.login,
                [
                    forms_1.Validators.required,
                    forms_1.Validators.email
                ]
            ],
            mdpCtrl: [this.mdp,
                [
                    forms_1.Validators.required
                ]
            ]
        });
    };
    Object.defineProperty(LoginComponent.prototype, "loginCtrl", {
        get: function () {
            return this.loginFormGroup.get("loginCtrl");
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(LoginComponent.prototype, "mdpCtrl", {
        get: function () {
            return this.loginFormGroup.get("mdpCtrl");
        },
        enumerable: false,
        configurable: true
    });
    LoginComponent.prototype.seConnecter = function () {
        this.login = this.loginFormGroup.value.loginCtrl;
        this.mdp = this.loginFormGroup.value.mdpCtrl;
        if (this.mdp === 'passer123') {
            sessionStorage.setItem('username', this.login);
            this.router.navigate(['accueil']);
            this.bool = true;
        }
        else {
            this.bool = false;
        }
    };
    LoginComponent = __decorate([
        core_1.Component({
            selector: 'app-login',
            templateUrl: './login.component.html',
            styleUrls: ['./login.component.css']
        })
    ], LoginComponent);
    return LoginComponent;
}());
exports.LoginComponent = LoginComponent;
