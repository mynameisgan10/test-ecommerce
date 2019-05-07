(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["google-login-google-login-module"],{

/***/ "./src/app/google-login/google-login.module.ts":
/*!*****************************************************!*\
  !*** ./src/app/google-login/google-login.module.ts ***!
  \*****************************************************/
/*! exports provided: GoogleLoginPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GoogleLoginPageModule", function() { return GoogleLoginPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _google_login_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./google-login.page */ "./src/app/google-login/google-login.page.ts");







var routes = [
    {
        path: '',
        component: _google_login_page__WEBPACK_IMPORTED_MODULE_6__["GoogleLoginComponent"]
    }
];
var GoogleLoginPageModule = /** @class */ (function () {
    function GoogleLoginPageModule() {
    }
    GoogleLoginPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [_google_login_page__WEBPACK_IMPORTED_MODULE_6__["GoogleLoginComponent"]],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            exports: [_google_login_page__WEBPACK_IMPORTED_MODULE_6__["GoogleLoginComponent"]]
        })
    ], GoogleLoginPageModule);
    return GoogleLoginPageModule;
}());



/***/ }),

/***/ "./src/app/google-login/google-login.page.html":
/*!*****************************************************!*\
  !*** ./src/app/google-login/google-login.page.html ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar>\n    <ion-title>LOGIN PAGE FOR ALL</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <ion-card>\n    <ion-card-content>\n        <div *ngIf=\"(user | async) || {} as user\">\n\n            <div *ngIf='!user.uid'>\n              <ion-button color='primary' (click)='googleLogin()'>\n                Login with Google\n              </ion-button>\n            </div>\n          \n            <div *ngIf=\"user.uid\">\n              You're already logged in with UID: {{ user.uid }}\n          \n              <ion-button (click)=\"signOut()\">\n                Log Out\n              </ion-button>\n            </div>\n          \n          </div>\n    </ion-card-content>\n  </ion-card>\n\n  \n</ion-content>\n\n"

/***/ }),

/***/ "./src/app/google-login/google-login.page.scss":
/*!*****************************************************!*\
  !*** ./src/app/google-login/google-login.page.scss ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2dvb2dsZS1sb2dpbi9nb29nbGUtbG9naW4ucGFnZS5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/google-login/google-login.page.ts":
/*!***************************************************!*\
  !*** ./src/app/google-login/google-login.page.ts ***!
  \***************************************************/
/*! exports provided: GoogleLoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GoogleLoginComponent", function() { return GoogleLoginComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var firebase_app__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! firebase/app */ "./node_modules/firebase/app/dist/index.cjs.js");
/* harmony import */ var firebase_app__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(firebase_app__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _angular_fire_auth__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/fire/auth */ "./node_modules/@angular/fire/auth/index.js");
/* harmony import */ var _ionic_native_google_plus_ngx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic-native/google-plus/ngx */ "./node_modules/@ionic-native/google-plus/ngx/index.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");






var GoogleLoginComponent = /** @class */ (function () {
    function GoogleLoginComponent(afAuth, gplus, platform) {
        this.afAuth = afAuth;
        this.gplus = gplus;
        this.platform = platform;
        this.user = this.afAuth.authState;
    }
    GoogleLoginComponent.prototype.googleLogin = function () {
        if (this.platform.is('cordova')) {
            this.nativeGoogleLogin();
        }
        else if (this.platform.is('ios')) {
            this.nativeGoogleLogin();
        }
        else if (this.platform.is('android')) {
            this.nativeGoogleLogin();
        }
        else {
            this.webGoogleLogin();
        }
    };
    GoogleLoginComponent.prototype.nativeGoogleLogin = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var gplusUser, err_1;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 3, , 4]);
                        return [4 /*yield*/, this.gplus.login({
                                'webClientId': '563718902980-u9oskt1msilo11ur30pgmf9fhvpj0au2.apps.googleusercontent.com',
                                'offline': true,
                                'scopes': 'profile email'
                            })];
                    case 1:
                        gplusUser = _a.sent();
                        return [4 /*yield*/, this.afAuth.auth.signInWithCredential(firebase_app__WEBPACK_IMPORTED_MODULE_2__["auth"].GoogleAuthProvider.credential(gplusUser.idToken))];
                    case 2: return [2 /*return*/, _a.sent()];
                    case 3:
                        err_1 = _a.sent();
                        console.log(err_1);
                        return [3 /*break*/, 4];
                    case 4: return [2 /*return*/];
                }
            });
        });
    };
    GoogleLoginComponent.prototype.webGoogleLogin = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var provider, credential, err_2;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        provider = new firebase_app__WEBPACK_IMPORTED_MODULE_2__["auth"].GoogleAuthProvider();
                        return [4 /*yield*/, this.afAuth.auth.signInWithPopup(provider)];
                    case 1:
                        credential = _a.sent();
                        return [3 /*break*/, 3];
                    case 2:
                        err_2 = _a.sent();
                        console.log(err_2);
                        return [3 /*break*/, 3];
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    GoogleLoginComponent.prototype.signOut = function () {
        this.afAuth.auth.signOut();
        if (this.platform.is('cordova')) {
            this.gplus.logout();
        }
    };
    GoogleLoginComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-google-login',
            template: __webpack_require__(/*! ./google-login.page.html */ "./src/app/google-login/google-login.page.html"),
            styles: [__webpack_require__(/*! ./google-login.page.scss */ "./src/app/google-login/google-login.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_fire_auth__WEBPACK_IMPORTED_MODULE_3__["AngularFireAuth"],
            _ionic_native_google_plus_ngx__WEBPACK_IMPORTED_MODULE_4__["GooglePlus"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["Platform"]])
    ], GoogleLoginComponent);
    return GoogleLoginComponent;
}());



/***/ })

}]);
//# sourceMappingURL=google-login-google-login-module.js.map