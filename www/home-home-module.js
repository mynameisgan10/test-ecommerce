(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["home-home-module"],{

/***/ "./src/app/home/home.module.ts":
/*!*************************************!*\
  !*** ./src/app/home/home.module.ts ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _home_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./home.page */ "./src/app/home/home.page.ts");







var HomePageModule = /** @class */ (function () {
    function HomePageModule() {
    }
    HomePageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterModule"].forChild([
                    {
                        path: '',
                        component: _home_page__WEBPACK_IMPORTED_MODULE_6__["HomePage"]
                    }
                ])
            ],
            declarations: [_home_page__WEBPACK_IMPORTED_MODULE_6__["HomePage"]]
        })
    ], HomePageModule);
    return HomePageModule;
}());
/* harmony default export */ __webpack_exports__["default"] = (HomePageModule);


/***/ }),

/***/ "./src/app/home/home.page.html":
/*!*************************************!*\
  !*** ./src/app/home/home.page.html ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar>\n    <ion-title>\n      PRODUCTS\n    </ion-title>\n  </ion-toolbar>\n  <ion-searchbar (ionInput)=\"getItems($event)\" animated></ion-searchbar>\n</ion-header>\n\n<ion-content padding>\n    \n  <ion-segment [(ngModel)]=\"galleryType\" color=\"secondary\" mode='md'>\n    <ion-segment-button value=\"regular\" mode='md'>\n      Men\n    </ion-segment-button>\n    <ion-segment-button value=\"pinterest\" mode='md'>\n      Women\n    </ion-segment-button>\n  </ion-segment>\n\n  <div [ngSwitch]=\"galleryType\">\n    <!-- Men -->\n\n <div *ngSwitchCase=\"'regular'\">\n    <ion-grid>\n      <!-- new -->\n      <ion-row > \n\n        <ion-col size=\"6\" *ngFor='let product of updatedProductArr; let b = index'>\n\n                  <div (click)='openDetails(product.product_id)'>\n                    <ion-card class='noBorder'>\n                        <ion-card-title>\n                          <ion-img [src]=\"product.image\"></ion-img>\n                          <!-- {{ product.name }} -->\n                        </ion-card-title>\n\n                        <ion-card-content>\n                            {{ product.product_name }}\n                            ${{ product.price }}\n                    \n                           <!-- <ion-button fill='clear' color='secondary' size='small' (click)=\"addToWishlist(product)\"><ion-icon slot='icon-only' name='heart-empty'></ion-icon></ion-button>\n                          <ion-button color='secondary' class='atc' size=\"small\" expand=\"full\" (click)=\"doConfirm(product)\">Add to Cart</ion-button> -->\n                        </ion-card-content>\n\n                    </ion-card>\n                   </div>\n\n                   <div class='thebtns'>\n                      <ion-button fill='clear' color='secondary' size='small' (click)=\"addToWishlist(product)\"><ion-icon slot='icon-only' name='heart-empty'></ion-icon></ion-button>\n                      <ion-button color='secondary' class='atc' size=\"small\" expand=\"full\" (click)=\"doConfirm(product)\">Add to Cart</ion-button>\n                   </div>\n                   \n        </ion-col>\n\n      </ion-row>\n    </ion-grid>\n  </div>\n\n\n\n        <!-- Women -->\n    \n    <br>\n  <div *ngSwitchCase=\"'pinterest'\">\n      <ion-grid>\n          <ion-row > \n            <ion-col size='6' *ngFor='let product of updatedProductArr'>\n                <div>\n                    <div>\n                        <ion-card class='noBorder'>\n                            <ion-card-title>\n                              <ion-img [src]=\"product.image\"></ion-img>\n                              <!-- {{ product.name }} -->\n                            </ion-card-title>\n    \n                            <ion-card-content>\n                                {{ product.product_name }}\n                                \n                                ${{ product.price }}\n                                                 \n                           <ion-button fill='clear' color='secondary' size='small' (click)=\"addToWishlist(product)\"><ion-icon slot='icon-only' name='heart-empty'></ion-icon></ion-button>\n\n                           <ion-button color='secondary' size=\"small\" expand=\"full\" (click)=\"doConfirm(product)\">Add to Cart</ion-button>\n                            </ion-card-content>\n                        </ion-card>\n                      </div>\n                </div>\n            </ion-col>\n          </ion-row>\n        </ion-grid>\n    </div>\n  </div>\n</ion-content>"

/***/ }),

/***/ "./src/app/home/home.page.scss":
/*!*************************************!*\
  !*** ./src/app/home/home.page.scss ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "ion-title {\n  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;\n  letter-spacing: .1em; }\n\n.noBorder {\n  box-shadow: none; }\n\n.sc-ion-card-ios-h {\n  margin-left: 0;\n  margin-right: 0;\n  -webkit-margin-start: 0; }\n\n.noBorder {\n  box-shadow: none;\n  border-radius: 0;\n  text-align: center;\n  color: black; }\n\nion-button {\n  --border-radius: 0 !important;\n  width: 100%; }\n\nion-button {\n  --padding-top: 1.5em !important;\n  --padding-bottom: 1.5em !important; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9nYW4vRGVza3RvcC9GWVAvc2F5b2NvZGUtZWNvbW1lcmNlLXRlbXBsYXRlL3NyYy90aGVtZS9faW9uLXRpdGxlRm9udC5zY3NzIiwiL1VzZXJzL2dhbi9EZXNrdG9wL0ZZUC9zYXlvY29kZS1lY29tbWVyY2UtdGVtcGxhdGUvc3JjL3RoZW1lL19ub0JvcmRlci1jYXJkLnNjc3MiLCIvVXNlcnMvZ2FuL0Rlc2t0b3AvRllQL3NheW9jb2RlLWVjb21tZXJjZS10ZW1wbGF0ZS9zcmMvdGhlbWUvX25vQm9yZGVyLXByb2R1Y3Quc2NzcyIsIi9Vc2Vycy9nYW4vRGVza3RvcC9GWVAvc2F5b2NvZGUtZWNvbW1lcmNlLXRlbXBsYXRlL3NyYy90aGVtZS9fYnV0dG9uU3R5bGUuc2NzcyIsIi9Vc2Vycy9nYW4vRGVza3RvcC9GWVAvc2F5b2NvZGUtZWNvbW1lcmNlLXRlbXBsYXRlL3NyYy9hcHAvaG9tZS9ob21lLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLHdJQUF3STtFQUN4SSxvQkFBb0IsRUFBQTs7QUNGeEI7RUFDSSxnQkFBZ0IsRUFBQTs7QUFHcEI7RUFDSSxjQUFjO0VBQ2QsZUFBZTtFQUNmLHVCQUF1QixFQUFBOztBQ1AzQjtFQUNJLGdCQUFnQjtFQUNoQixnQkFBZ0I7RUFDaEIsa0JBQWtCO0VBQ2xCLFlBQVksRUFBQTs7QUNKaEI7RUFDSSw2QkFBZ0I7RUFDaEIsV0FBVyxFQUFBOztBQ0lmO0VBQ0ksK0JBQWM7RUFDZCxrQ0FBaUIsRUFBQSIsImZpbGUiOiJzcmMvYXBwL2hvbWUvaG9tZS5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpb24tdGl0bGUge1xuICAgIGZvbnQtZmFtaWx5OiAtYXBwbGUtc3lzdGVtLCBCbGlua01hY1N5c3RlbUZvbnQsICdTZWdvZSBVSScsIFJvYm90bywgT3h5Z2VuLCBVYnVudHUsIENhbnRhcmVsbCwgJ09wZW4gU2FucycsICdIZWx2ZXRpY2EgTmV1ZScsIHNhbnMtc2VyaWY7XG4gICAgbGV0dGVyLXNwYWNpbmc6IC4xZW07XG59XG5cbiIsIi5ub0JvcmRlciB7XG4gICAgYm94LXNoYWRvdzogbm9uZTtcbn1cblxuLnNjLWlvbi1jYXJkLWlvcy1oIHtcbiAgICBtYXJnaW4tbGVmdDogMDtcbiAgICBtYXJnaW4tcmlnaHQ6IDA7XG4gICAgLXdlYmtpdC1tYXJnaW4tc3RhcnQ6IDA7XG59IiwiLm5vQm9yZGVyIHtcbiAgICBib3gtc2hhZG93OiBub25lO1xuICAgIGJvcmRlci1yYWRpdXM6IDA7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIGNvbG9yOiBibGFjaztcbn0iLCJpb24tYnV0dG9uIHtcbiAgICAtLWJvcmRlci1yYWRpdXM6IDAgIWltcG9ydGFudDtcbiAgICB3aWR0aDogMTAwJTtcbn0iLCJAaW1wb3J0ICcuLi8uLi90aGVtZS9faW9uLXRpdGxlRm9udCc7XG5AaW1wb3J0ICcuLi8uLi90aGVtZS9pb25TZWFyY2hCYXInO1xuQGltcG9ydCAnLi4vLi4vdGhlbWUvX25vQm9yZGVyLWNhcmQnO1xuQGltcG9ydCAnLi4vLi4vdGhlbWUvX25vQm9yZGVyLXByb2R1Y3QnO1xuQGltcG9ydCAnLi4vLi4vdGhlbWUvX2J1dHRvblN0eWxlJztcblxuaW9uLWJ1dHRvbiB7XG4gICAgLS1wYWRkaW5nLXRvcDogMS41ZW0gIWltcG9ydGFudDtcbiAgICAtLXBhZGRpbmctYm90dG9tOiAxLjVlbSAhaW1wb3J0YW50O1xufVxuIl19 */"

/***/ }),

/***/ "./src/app/home/home.page.ts":
/*!***********************************!*\
  !*** ./src/app/home/home.page.ts ***!
  \***********************************/
/*! exports provided: HomePage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomePage", function() { return HomePage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _service_cart_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../service-cart.service */ "./src/app/service-cart.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");





var HomePage = /** @class */ (function () {
    function HomePage(navCtrl, alertCtrl, router, newRoute, cartService) {
        this.navCtrl = navCtrl;
        this.alertCtrl = alertCtrl;
        this.router = router;
        this.newRoute = newRoute;
        this.cartService = cartService;
        this.returnCart = [];
        this.updatedProductArr = [];
        this.returnWishlist = [];
        this.returnIndividual = [];
        this.galleryType = 'regular';
        this.isItemAvailable = false; // initialize the items with false
    }
    HomePage.prototype.ngOnInit = function () {
        // Add to Cart
        this.returnCart = this.cartService.getCart(); // Get Added Product
        this.updatedProductArr = this.cartService.getProducts(); // Updated Arr List
        // Add to Wishlist
        this.returnWishlist = this.cartService.getWishlist(); // Get Added Wishlist
    };
    HomePage.prototype.initializeItems = function () {
        this.updatedProductArr = this.cartService.getProducts();
    };
    HomePage.prototype.getItems = function (ev) {
        // Reset items back to all of the items
        this.initializeItems();
        // set val to the value of the searchbar
        var val = ev.target.value;
        // if the value is an empty string don't filter the items
        if (val && val.trim() != '') {
            this.isItemAvailable = true;
            this.updatedProductArr = this.updatedProductArr.filter(function (product) {
                return (product.product_name.toLowerCase().indexOf(val.toLowerCase()) > -1);
            });
        }
    };
    HomePage.prototype.doConfirm = function (product) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var alert;
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.alertCtrl.create({
                            header: 'Confirmation',
                            message: 'Do you want to add this product to cart?',
                            buttons: [
                                {
                                    text: 'Cancel',
                                    handler: function () {
                                        console.log('Cancel clicked');
                                    }
                                },
                                {
                                    text: 'OK',
                                    handler: function () {
                                        _this.cartService.addProduct(product);
                                        console.log('OK clicked, product added >> ' + product.product_name);
                                        console.log('returnCart Arr is ' + JSON.stringify(_this.returnCart));
                                        console.log('invetory has ' + JSON.stringify(_this.updatedProductArr));
                                    }
                                }
                            ]
                        })];
                    case 1:
                        alert = _a.sent();
                        return [4 /*yield*/, alert.present()];
                    case 2:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    HomePage.prototype.addToWishlist = function (product) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var alert;
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.alertCtrl.create({
                            header: 'Confirmation',
                            message: 'Do you want to add this product to wishlist?',
                            buttons: [
                                {
                                    text: 'Cancel',
                                    handler: function () {
                                        console.log('Cancel clicked');
                                    }
                                },
                                {
                                    text: 'OK',
                                    handler: function () {
                                        _this.cartService.addWishlist(product);
                                        console.log('OK clicked, product added to wishlist >> ' + product.name);
                                        console.log('returnWishlist Arr is ' + JSON.stringify(_this.returnWishlist));
                                    }
                                }
                            ]
                        })];
                    case 1:
                        alert = _a.sent();
                        return [4 /*yield*/, alert.present()];
                    case 2:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    HomePage.prototype.openDetails = function (b) {
        this.router.navigate(['/tabs/home', b]); // route to product_id
    };
    HomePage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-home',
            template: __webpack_require__(/*! ./home.page.html */ "./src/app/home/home.page.html"),
            styles: [__webpack_require__(/*! ./home.page.scss */ "./src/app/home/home.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["AlertController"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"],
            _service_cart_service__WEBPACK_IMPORTED_MODULE_3__["ServiceCartService"]])
    ], HomePage);
    return HomePage;
}());



/***/ })

}]);
//# sourceMappingURL=home-home-module.js.map