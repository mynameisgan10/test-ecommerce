(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["home-product-details-product-details-module"],{

/***/ "./src/app/home/product-details/product-details.module.ts":
/*!****************************************************************!*\
  !*** ./src/app/home/product-details/product-details.module.ts ***!
  \****************************************************************/
/*! exports provided: ProductDetailsPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductDetailsPageModule", function() { return ProductDetailsPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _product_details_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./product-details.page */ "./src/app/home/product-details/product-details.page.ts");







var routes = [
    {
        path: '',
        component: _product_details_page__WEBPACK_IMPORTED_MODULE_6__["ProductDetailsPage"]
    }
];
var ProductDetailsPageModule = /** @class */ (function () {
    function ProductDetailsPageModule() {
    }
    ProductDetailsPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_product_details_page__WEBPACK_IMPORTED_MODULE_6__["ProductDetailsPage"]]
        })
    ], ProductDetailsPageModule);
    return ProductDetailsPageModule;
}());



/***/ }),

/***/ "./src/app/home/product-details/product-details.page.html":
/*!****************************************************************!*\
  !*** ./src/app/home/product-details/product-details.page.html ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar>\n      <ion-back-button routerLink=\"/tabs/home\" routerDirection=\"backward\"></ion-back-button>\n    <ion-title>product-details</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n\n  <ion-card>\n    <ion-card-content>\n        <ion-img [src]=\"individualProduct.image\"></ion-img>\n        {{ individualProduct.product_name }} <br>\n        ${{ individualProduct.price }}\n\n        <!-- <ion-button fill='clear' color='secondary' size='small' (click)=\"addToWishlist(product)\"><ion-icon slot='icon-only' name='heart-empty'></ion-icon></ion-button>\n        <ion-button color='secondary' class='atc' size=\"small\" expand=\"full\" (click)=\"doConfirm(individualProduct.product_name)\">Add to Cart</ion-button> -->\n    </ion-card-content>\n  </ion-card>\n\n</ion-content>\n"

/***/ }),

/***/ "./src/app/home/product-details/product-details.page.scss":
/*!****************************************************************!*\
  !*** ./src/app/home/product-details/product-details.page.scss ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2hvbWUvcHJvZHVjdC1kZXRhaWxzL3Byb2R1Y3QtZGV0YWlscy5wYWdlLnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/home/product-details/product-details.page.ts":
/*!**************************************************************!*\
  !*** ./src/app/home/product-details/product-details.page.ts ***!
  \**************************************************************/
/*! exports provided: ProductDetailsPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductDetailsPage", function() { return ProductDetailsPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_service_cart_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/service-cart.service */ "./src/app/service-cart.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");





var ProductDetailsPage = /** @class */ (function () {
    function ProductDetailsPage(cartService, activatedRoute, alertCtrl) {
        this.cartService = cartService;
        this.activatedRoute = activatedRoute;
        this.alertCtrl = alertCtrl;
        this.data = [];
        this.newID = null;
        this.returnCart = [];
        this.updatedProductArr = [];
        this.returnWishlist = [];
        this.returnIndividual = [];
    }
    ProductDetailsPage.prototype.ngOnInit = function () {
        this.data = this.cartService.getProducts();
        this.newID = +this.activatedRoute.snapshot.params['b'];
        this.individualProduct = this.cartService.getIndividualDetails(this.newID);
        console.log('my product_id is ' + this.newID);
    };
    ProductDetailsPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-product-details',
            template: __webpack_require__(/*! ./product-details.page.html */ "./src/app/home/product-details/product-details.page.html"),
            styles: [__webpack_require__(/*! ./product-details.page.scss */ "./src/app/home/product-details/product-details.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_service_cart_service__WEBPACK_IMPORTED_MODULE_2__["ServiceCartService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["AlertController"]])
    ], ProductDetailsPage);
    return ProductDetailsPage;
}());



/***/ })

}]);
//# sourceMappingURL=home-product-details-product-details-module.js.map