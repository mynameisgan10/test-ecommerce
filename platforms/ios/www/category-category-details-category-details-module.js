(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["category-category-details-category-details-module"],{

/***/ "./src/app/category/category-details/category-details.module.ts":
/*!**********************************************************************!*\
  !*** ./src/app/category/category-details/category-details.module.ts ***!
  \**********************************************************************/
/*! exports provided: CategoryDetailsPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CategoryDetailsPageModule", function() { return CategoryDetailsPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _category_details_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./category-details.page */ "./src/app/category/category-details/category-details.page.ts");







var routes = [
    {
        path: '',
        component: _category_details_page__WEBPACK_IMPORTED_MODULE_6__["CategoryDetailsPage"]
    }
];
var CategoryDetailsPageModule = /** @class */ (function () {
    function CategoryDetailsPageModule() {
    }
    CategoryDetailsPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_category_details_page__WEBPACK_IMPORTED_MODULE_6__["CategoryDetailsPage"]]
        })
    ], CategoryDetailsPageModule);
    return CategoryDetailsPageModule;
}());



/***/ }),

/***/ "./src/app/category/category-details/category-details.page.html":
/*!**********************************************************************!*\
  !*** ./src/app/category/category-details/category-details.page.html ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar>\n      <ion-buttons slot=\"start\">\n          <ion-back-button defaultHref=\"/tabs/category\" routerDirection='back'></ion-back-button>\n        </ion-buttons>\n    <ion-title>category-details</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <ion-card>\n    <ion-card-content>\n        {{ individualOne.product_name }} <br>\n        ${{ individualOne.price }}\n    </ion-card-content>\n  </ion-card>\n</ion-content>\n\n\n<!-- <ion-content>\n  test category-details\n</ion-content> -->"

/***/ }),

/***/ "./src/app/category/category-details/category-details.page.scss":
/*!**********************************************************************!*\
  !*** ./src/app/category/category-details/category-details.page.scss ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NhdGVnb3J5L2NhdGVnb3J5LWRldGFpbHMvY2F0ZWdvcnktZGV0YWlscy5wYWdlLnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/category/category-details/category-details.page.ts":
/*!********************************************************************!*\
  !*** ./src/app/category/category-details/category-details.page.ts ***!
  \********************************************************************/
/*! exports provided: CategoryDetailsPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CategoryDetailsPage", function() { return CategoryDetailsPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var src_app_service_cart_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/service-cart.service */ "./src/app/service-cart.service.ts");




var CategoryDetailsPage = /** @class */ (function () {
    function CategoryDetailsPage(activatedRoute, cartService) {
        this.activatedRoute = activatedRoute;
        this.cartService = cartService;
        this.data = [];
        this.myid = null;
    }
    CategoryDetailsPage.prototype.ngOnInit = function () {
        this.data = this.cartService.getProducts();
        this.myid = +this.activatedRoute.snapshot.params['a'];
        this.individualOne = this.cartService.getIndividual(this.myid);
        console.log('my cat_id is ' + this.myid);
    };
    CategoryDetailsPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-category-details',
            template: __webpack_require__(/*! ./category-details.page.html */ "./src/app/category/category-details/category-details.page.html"),
            styles: [__webpack_require__(/*! ./category-details.page.scss */ "./src/app/category/category-details/category-details.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"], src_app_service_cart_service__WEBPACK_IMPORTED_MODULE_3__["ServiceCartService"]])
    ], CategoryDetailsPage);
    return CategoryDetailsPage;
}());



/***/ })

}]);
//# sourceMappingURL=category-category-details-category-details-module.js.map