(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["profile-profile-module"],{

/***/ "./src/app/parallax.directive.ts":
/*!***************************************!*\
  !*** ./src/app/parallax.directive.ts ***!
  \***************************************/
/*! exports provided: ParallaxDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ParallaxDirective", function() { return ParallaxDirective; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");



var ParallaxDirective = /** @class */ (function () {
    function ParallaxDirective(el, re, domCtrl) {
        this.el = el;
        this.re = re;
        this.domCtrl = domCtrl;
    }
    ParallaxDirective.prototype.ngOnInit = function () {
        var cnt = this.el.nativeElement;
        console.log(cnt);
        this.header = cnt.getElementsByClassName('bg')[0];
        console.log(this.header);
        this.main_cnt = cnt.getElementsByClassName('main-cnt')[0];
        console.log(this.main_cnt);
        // this.re.setStyle(this.header,'webTransformOrigin','center bottom');
        this.re.setStyle(this.header, 'background-size', 'cover');
        this.re.setStyle(this.main_cnt, 'position', 'absolute');
        this.re.setStyle(this.header, 'background-color', 'red');
    };
    ParallaxDirective.prototype.onCntscroll = function (ev) {
        //   console.log(ev)
        //  ev.domWrite(()=>{
        console.log("scrolling");
        this.update(ev);
        //  });
    };
    ParallaxDirective.prototype.update = function (ev) {
        console.log(ev);
        if (ev.detail.scrollTop > 0) {
            this.ta = ev.detail.scrollTop / 2;
        }
        console.log(this.ta);
        this.re.setStyle(this.header, 'transform', 'translate3d(0,' + this.ta + 'px,0) scale(1,1)');
    };
    ParallaxDirective = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"])({
            selector: '[appParallax]',
            host: {
                '(ionScroll)': 'onCntscroll($event)',
            }
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["DomController"]])
    ], ParallaxDirective);
    return ParallaxDirective;
}());



/***/ }),

/***/ "./src/app/profile/profile.module.ts":
/*!*******************************************!*\
  !*** ./src/app/profile/profile.module.ts ***!
  \*******************************************/
/*! exports provided: ProfilePageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfilePageModule", function() { return ProfilePageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _profile_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./profile.page */ "./src/app/profile/profile.page.ts");
/* harmony import */ var _parallax_directive__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../parallax.directive */ "./src/app/parallax.directive.ts");








var routes = [
    {
        path: '',
        component: _profile_page__WEBPACK_IMPORTED_MODULE_6__["ProfilePage"]
    }
];
var ProfilePageModule = /** @class */ (function () {
    function ProfilePageModule() {
    }
    ProfilePageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes),
            ],
            declarations: [_profile_page__WEBPACK_IMPORTED_MODULE_6__["ProfilePage"], _parallax_directive__WEBPACK_IMPORTED_MODULE_7__["ParallaxDirective"]]
        })
    ], ProfilePageModule);
    return ProfilePageModule;
}());



/***/ }),

/***/ "./src/app/profile/profile.page.html":
/*!*******************************************!*\
  !*** ./src/app/profile/profile.page.html ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header >\n    <ion-toolbar>\n        <ion-buttons slot=\"start\">\n            <ion-back-button defaultHref=\"/tabs/tab5\"></ion-back-button>\n          </ion-buttons>\n      <ion-title>\n        PROFILE\n      </ion-title>\n    </ion-toolbar>\n  </ion-header>\n  \n  <ion-content [scrollEvents] ='true' appParallax>\n    <div class=\"bg scroll-content\">\n    </div>\n  \n    <div class=\"main-cnt scroll-content\">\n      <!-- <img src=\"../../assets/asd.jpg\" class=\"dp\"> -->\n      <img src='assets/lady-macbook.svg' class='dp'>\n      <h3 text-center>Ang Chun Xiong</h3>\n      <ion-list no-lines>\n          <ion-item>\n              <ion-icon name=\"boat\" slot=\"start\"></ion-icon>\n              <ion-label>\n                Orders\n              </ion-label>\n            </ion-item>\n          \n            <ion-item>\n                <ion-icon name=\"heart\" slot=\"start\"></ion-icon>\n                <ion-label>\n                  Wishlist\n                </ion-label>\n              </ion-item>\n              <ion-item>\n                  <ion-icon name=\"exit\" slot=\"start\"></ion-icon>\n                  <ion-label>\n                    Log Out\n                  </ion-label>\n                </ion-item>\n\n              \n      </ion-list>\n    </div>\n  </ion-content>\n  \n"

/***/ }),

/***/ "./src/app/profile/profile.page.scss":
/*!*******************************************!*\
  !*** ./src/app/profile/profile.page.scss ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ":host .bg {\n  background-image: url('asd.jpg');\n  height: 300px;\n  background-size: cover;\n  -webkit-filter: blur(4px);\n          filter: blur(4px);\n  background-position: center center; }\n\n:host .main-cnt {\n  width: 100%;\n  height: 700px;\n  padding: 20px; }\n\n:host .dp {\n  display: block;\n  margin-left: auto;\n  margin-right: auto; }\n\n:host ion-list ion-item {\n  color: black;\n  background-color: #ecf0f1;\n  border-radius: 10px;\n  margin-bottom: 10px; }\n\nion-title {\n  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;\n  letter-spacing: .1em; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9nYW4vRGVza3RvcC9GWVAvc2F5b2NvZGUtZWNvbW1lcmNlLXRlbXBsYXRlL3NyYy9hcHAvcHJvZmlsZS9wcm9maWxlLnBhZ2Uuc2NzcyIsIi9Vc2Vycy9nYW4vRGVza3RvcC9GWVAvc2F5b2NvZGUtZWNvbW1lcmNlLXRlbXBsYXRlL3NyYy90aGVtZS9faW9uLXRpdGxlRm9udC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNJO0VBR1EsZ0NBQTZDO0VBQzdDLGFBQWE7RUFDYixzQkFBc0I7RUFDdEIseUJBQWlCO1VBQWpCLGlCQUFpQjtFQUNqQixrQ0FBa0MsRUFBQTs7QUFQMUM7RUFXUSxXQUFXO0VBQ1gsYUFBYTtFQUNiLGFBQVksRUFBQTs7QUFicEI7RUFtQlEsY0FBYztFQUNkLGlCQUFpQjtFQUNqQixrQkFBa0IsRUFBQTs7QUFyQjFCO0VBbUNRLFlBQVc7RUFDWCx5QkFBeUI7RUFDekIsbUJBQW1CO0VBQ25CLG1CQUFtQixFQUFBOztBQ3ZDL0I7RUFDSSx3SUFBd0k7RUFDeEksb0JBQW9CLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9wcm9maWxlL3Byb2ZpbGUucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiXG4gICAgOmhvc3Qge1xuXG4gICAgICAgIC5iZ3tcbiAgICAgICAgICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybCgnLi4vLi4vYXNzZXRzL2FzZC5qcGcnKTtcbiAgICAgICAgICAgIGhlaWdodDogMzAwcHg7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuICAgICAgICAgICAgZmlsdGVyOiBibHVyKDRweCk7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXIgY2VudGVyO1xuICAgICAgICB9XG5cbiAgICAgICAgLm1haW4tY250e1xuICAgICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgICAgICBoZWlnaHQ6IDcwMHB4O1xuICAgICAgICAgICAgcGFkZGluZzoyMHB4O1xuICAgICAgICAgICAgXG4gICAgICAgIH1cblxuICAgICAgICAuZHB7XG4gICAgICAgICAgICAvL3dpZHRoOiAzMCU7XG4gICAgICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgICAgICAgIG1hcmdpbi1sZWZ0OiBhdXRvO1xuICAgICAgICAgICAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xuICAgICAgICAgICAgLy9ib3JkZXItcmFkaXVzOiA1MCU7XG4gICAgICAgICAgICAvLyBoZWlnaHQ6IDEwMHB4O1xuICAgICAgICAgICAgLy8gd2lkdGg6IDEwMHB4O1xuICAgICAgICAgICAgLy8gei1pbmRleDogMTA7XG4gICAgICAgICAgICAvLyBtYXJnaW4tdG9wOi03MHB4O1xuICAgICAgICAgICAgLy8gcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgICAgICAgLy8gbGVmdDo1MCU7XG4gICAgICAgICAgICAvLyBtYXJnaW4tcmlnaHQ6LTUwJTtcbiAgICAgICAgICAgIC8vIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsLTUwJSk7XG4gICAgICAgICAgICAvLyBib3gtc2hhZG93OiAtNnB4IDE1cHggODFweCAzcHggcmdiYSgwLDAsMCwwLjc1KTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlvbi1saXN0IGlvbi1pdGVte1xuICAgICAgICAgICAgY29sb3I6YmxhY2s7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZWNmMGYxO1xuICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XG4gICAgICAgIH1cblxufVxuXG5AaW1wb3J0ICcuLi8uLi90aGVtZS9faW9uLXRpdGxlRm9udCciLCJpb24tdGl0bGUge1xuICAgIGZvbnQtZmFtaWx5OiAtYXBwbGUtc3lzdGVtLCBCbGlua01hY1N5c3RlbUZvbnQsICdTZWdvZSBVSScsIFJvYm90bywgT3h5Z2VuLCBVYnVudHUsIENhbnRhcmVsbCwgJ09wZW4gU2FucycsICdIZWx2ZXRpY2EgTmV1ZScsIHNhbnMtc2VyaWY7XG4gICAgbGV0dGVyLXNwYWNpbmc6IC4xZW07XG59XG5cbiJdfQ== */"

/***/ }),

/***/ "./src/app/profile/profile.page.ts":
/*!*****************************************!*\
  !*** ./src/app/profile/profile.page.ts ***!
  \*****************************************/
/*! exports provided: ProfilePage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfilePage", function() { return ProfilePage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var ProfilePage = /** @class */ (function () {
    function ProfilePage() {
    }
    ProfilePage.prototype.ngOnInit = function () {
    };
    ProfilePage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-profile',
            template: __webpack_require__(/*! ./profile.page.html */ "./src/app/profile/profile.page.html"),
            styles: [__webpack_require__(/*! ./profile.page.scss */ "./src/app/profile/profile.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], ProfilePage);
    return ProfilePage;
}());



/***/ })

}]);
//# sourceMappingURL=profile-profile-module.js.map