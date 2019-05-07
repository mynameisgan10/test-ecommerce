(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["tab3-tab3-module"],{

/***/ "./src/app/tab3/tab3.module.ts":
/*!*************************************!*\
  !*** ./src/app/tab3/tab3.module.ts ***!
  \*************************************/
/*! exports provided: Tab3PageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Tab3PageModule", function() { return Tab3PageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _tab3_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./tab3.page */ "./src/app/tab3/tab3.page.ts");







var Tab3PageModule = /** @class */ (function () {
    function Tab3PageModule() {
    }
    Tab3PageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["NgModule"])({
            imports: [
                _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonicModule"],
                _angular_common__WEBPACK_IMPORTED_MODULE_4__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild([{ path: '', component: _tab3_page__WEBPACK_IMPORTED_MODULE_6__["Tab3Page"] }])
            ],
            declarations: [_tab3_page__WEBPACK_IMPORTED_MODULE_6__["Tab3Page"]]
        })
    ], Tab3PageModule);
    return Tab3PageModule;
}());



/***/ }),

/***/ "./src/app/tab3/tab3.page.html":
/*!*************************************!*\
  !*** ./src/app/tab3/tab3.page.html ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar>\n      <ion-buttons slot=\"start\">\n          <ion-back-button defaultHref=\"/tabs/tab2\"></ion-back-button>\n        </ion-buttons>\n    <ion-title>CART</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n    \n<ion-content>\n\n<ion-card-content>\n<!--     OLD\n  <ion-grid *ngFor='let product of returnCart; let i = index'> \n\n          <ion-button fill='clear' color='secondary' size='large' (click)=\"deleteFromCart(i)\"><ion-icon name='close'></ion-icon></ion-button>\n          <br>\n      <ion-row>\n        <ion-img [src]=\"product.image\"></ion-img>\n      </ion-row>\n\n      <ion-row>\n        {{ product.name }}\n      </ion-row> -->\n<!--     \n      <div *ngIf='returnCart.length > 0'>\n          <ion-button (click)='checkOut(product, i)' color='secondary'>CHECKOUT</ion-button>\n      </div> -->\n\n  <!-- </ion-grid> -->\n  \n\n  <!-- <div *ngIf='returnCart.length > 0'>\n      <ion-button (click)='checkOut(product, i)' color='secondary'>CHECKOUT</ion-button>\n  </div>\n\n  </ion-card-content>\n</ion-content> -->\n\n\n\n\n\n<!-- new -->\n<ion-grid>\n  <ion-row> \n    <ion-col *ngFor='let product of returnCart; let i = index'>\n       \n            <div>\n                \n                <ion-card class='noBorder'>\n                    <ion-card-title>\n\n                          <ion-item-sliding>\n                                  <ion-item>\n                                    <ion-label>\n                                          <ion-img [src]=\"product.image\"></ion-img>\n                                        <div class='des'>\n                                            {{ product.product_name }} <br>\n                                            ${{ product.price }}\n                                        </div>\n                                        \n                                        <!-- <div>\n                                            <ion-button size='default' color='secondary' expand=\"full\" (click)='checkOut(product, i)'>Pay</ion-button>\n                                          \n                                        </div> -->\n                                    </ion-label>\n                                  </ion-item>\n\n                                  <ion-item-options>\n                                    <ion-item-option color=\"secondary\" (click)='deleteFromCart(i)'>\n                                      <ion-icon slot=\"icon-only\" name=\"trash\"></ion-icon>\n                                      \n                                    </ion-item-option>\n                                  </ion-item-options>\n                                </ion-item-sliding>\n\n                    \n                    </ion-card-title>\n\n                </ion-card>\n              </div>\n        \n    </ion-col>\n  </ion-row>\n\n    <ion-row *ngIf='returnCart.length > 0'>\n        <ion-button size='default' color='secondary' expand=\"full\" (click)='checkOut(product, i)'>Pay</ion-button>\n    </ion-row>\n\n</ion-grid>\n</ion-card-content>"

/***/ }),

/***/ "./src/app/tab3/tab3.page.scss":
/*!*************************************!*\
  !*** ./src/app/tab3/tab3.page.scss ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".noBorder {\n  box-shadow: none; }\n\n.sc-ion-card-ios-h {\n  margin-left: 0;\n  margin-right: 0;\n  -webkit-margin-start: 0; }\n\n.x {\n  width: 13%;\n  position: relative;\n  float: right;\n  right: -10%; }\n\nion-button {\n  --border-radius: 0 !important;\n  width: 100%; }\n\nion-title {\n  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;\n  letter-spacing: .1em; }\n\nion-img {\n  display: block;\n  margin-left: auto;\n  margin-right: auto; }\n\n.noBorder {\n  box-shadow: none;\n  border-radius: 0;\n  text-align: center;\n  color: black; }\n\n.card {\n  display: block;\n  margin-left: auto;\n  margin-right: auto;\n  width: 50%; }\n\n.des {\n  text-align: center;\n  margin: 1em; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9nYW4vRGVza3RvcC9GWVAvc2F5b2NvZGUtZWNvbW1lcmNlLXRlbXBsYXRlL3NyYy90aGVtZS9fbm9Cb3JkZXItY2FyZC5zY3NzIiwiL1VzZXJzL2dhbi9EZXNrdG9wL0ZZUC9zYXlvY29kZS1lY29tbWVyY2UtdGVtcGxhdGUvc3JjL3RoZW1lL19kZWxldGVJY29uLnNjc3MiLCIvVXNlcnMvZ2FuL0Rlc2t0b3AvRllQL3NheW9jb2RlLWVjb21tZXJjZS10ZW1wbGF0ZS9zcmMvdGhlbWUvX2J1dHRvblN0eWxlLnNjc3MiLCIvVXNlcnMvZ2FuL0Rlc2t0b3AvRllQL3NheW9jb2RlLWVjb21tZXJjZS10ZW1wbGF0ZS9zcmMvdGhlbWUvX2lvbi10aXRsZUZvbnQuc2NzcyIsIi9Vc2Vycy9nYW4vRGVza3RvcC9GWVAvc2F5b2NvZGUtZWNvbW1lcmNlLXRlbXBsYXRlL3NyYy90aGVtZS9fY2VudGVyLWlvbi1pbWcuc2NzcyIsIi9Vc2Vycy9nYW4vRGVza3RvcC9GWVAvc2F5b2NvZGUtZWNvbW1lcmNlLXRlbXBsYXRlL3NyYy90aGVtZS9fbm9Cb3JkZXItcHJvZHVjdC5zY3NzIiwiL1VzZXJzL2dhbi9EZXNrdG9wL0ZZUC9zYXlvY29kZS1lY29tbWVyY2UtdGVtcGxhdGUvc3JjL2FwcC90YWIzL3RhYjMucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksZ0JBQWdCLEVBQUE7O0FBR3BCO0VBQ0ksY0FBYztFQUNkLGVBQWU7RUFDZix1QkFBdUIsRUFBQTs7QUNQM0I7RUFDSSxVQUFVO0VBQ1Ysa0JBQWtCO0VBQ2xCLFlBQVk7RUFDWixXQUFXLEVBQUE7O0FDSmY7RUFDSSw2QkFBZ0I7RUFDaEIsV0FBVyxFQUFBOztBQ0ZmO0VBQ0ksd0lBQXdJO0VBQ3hJLG9CQUFvQixFQUFBOztBQ0Z4QjtFQUNJLGNBQWM7RUFDZCxpQkFBaUI7RUFDakIsa0JBQWtCLEVBQUE7O0FDSHRCO0VBQ0ksZ0JBQWdCO0VBQ2hCLGdCQUFnQjtFQUNoQixrQkFBa0I7RUFDbEIsWUFBWSxFQUFBOztBQ0loQjtFQUNJLGNBQWM7RUFDZCxpQkFBaUI7RUFDakIsa0JBQWtCO0VBQ2xCLFVBQVUsRUFBQTs7QUFHZDtFQUNJLGtCQUFrQjtFQUNsQixXQUFXLEVBQUEiLCJmaWxlIjoic3JjL2FwcC90YWIzL3RhYjMucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLm5vQm9yZGVyIHtcbiAgICBib3gtc2hhZG93OiBub25lO1xufVxuXG4uc2MtaW9uLWNhcmQtaW9zLWgge1xuICAgIG1hcmdpbi1sZWZ0OiAwO1xuICAgIG1hcmdpbi1yaWdodDogMDtcbiAgICAtd2Via2l0LW1hcmdpbi1zdGFydDogMDtcbn0iLCIueCB7XG4gICAgd2lkdGg6IDEzJTtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgZmxvYXQ6IHJpZ2h0O1xuICAgIHJpZ2h0OiAtMTAlO1xufSIsImlvbi1idXR0b24ge1xuICAgIC0tYm9yZGVyLXJhZGl1czogMCAhaW1wb3J0YW50O1xuICAgIHdpZHRoOiAxMDAlO1xufSIsImlvbi10aXRsZSB7XG4gICAgZm9udC1mYW1pbHk6IC1hcHBsZS1zeXN0ZW0sIEJsaW5rTWFjU3lzdGVtRm9udCwgJ1NlZ29lIFVJJywgUm9ib3RvLCBPeHlnZW4sIFVidW50dSwgQ2FudGFyZWxsLCAnT3BlbiBTYW5zJywgJ0hlbHZldGljYSBOZXVlJywgc2Fucy1zZXJpZjtcbiAgICBsZXR0ZXItc3BhY2luZzogLjFlbTtcbn1cblxuIiwiaW9uLWltZyB7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gICAgbWFyZ2luLWxlZnQ6IGF1dG87XG4gICAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xufSIsIi5ub0JvcmRlciB7XG4gICAgYm94LXNoYWRvdzogbm9uZTtcbiAgICBib3JkZXItcmFkaXVzOiAwO1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBjb2xvcjogYmxhY2s7XG59IiwiXG5AaW1wb3J0ICcuLi8uLi90aGVtZS9fbm9Cb3JkZXItY2FyZCc7XG5AaW1wb3J0ICcuLi8uLi90aGVtZS9fZGVsZXRlSWNvbic7XG5AaW1wb3J0ICcuLi8uLi90aGVtZS9fYnV0dG9uU3R5bGUnO1xuQGltcG9ydCAnLi4vLi4vdGhlbWUvX2lvbi10aXRsZUZvbnQnO1xuQGltcG9ydCcuLi8uLi90aGVtZS9fY2VudGVyLWlvbi1pbWcnO1xuQGltcG9ydCAnLi4vLi4vdGhlbWUvX25vQm9yZGVyLXByb2R1Y3QnO1xuXG4uY2FyZCB7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gICAgbWFyZ2luLWxlZnQ6IGF1dG87XG4gICAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xuICAgIHdpZHRoOiA1MCU7XG59XG5cbi5kZXMge1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBtYXJnaW46IDFlbTtcbn1cbiJdfQ== */"

/***/ }),

/***/ "./src/app/tab3/tab3.page.ts":
/*!***********************************!*\
  !*** ./src/app/tab3/tab3.page.ts ***!
  \***********************************/
/*! exports provided: Tab3Page */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Tab3Page", function() { return Tab3Page; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _service_cart_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../service-cart.service */ "./src/app/service-cart.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");





var Tab3Page = /** @class */ (function () {
    function Tab3Page(cartService, alertController, router) {
        this.cartService = cartService;
        this.alertController = alertController;
        this.router = router;
        this.returnCart = [];
        this.returnWishlist = [];
    }
    Tab3Page.prototype.ngOnInit = function () {
        this.returnCart = this.cartService.getCart();
        this.returnWishlist = this.cartService.getWishlist();
    };
    Tab3Page.prototype.deleteFromCart = function (i) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var alert;
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.alertController.create({
                            header: 'Confirmation',
                            message: 'Do you want to remove this product from cart?',
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
                                        _this.cartService.deleteCart(i);
                                        console.log('OK clicked, product removed from cart');
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
    Tab3Page.prototype.checkOut = function (product, i) {
        this.router.navigate(['/tabs/payment']);
        // alert('this product is ' + JSON.stringify(product));
    };
    Tab3Page = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-tab3',
            template: __webpack_require__(/*! ./tab3.page.html */ "./src/app/tab3/tab3.page.html"),
            styles: [__webpack_require__(/*! ./tab3.page.scss */ "./src/app/tab3/tab3.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_service_cart_service__WEBPACK_IMPORTED_MODULE_2__["ServiceCartService"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["AlertController"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
    ], Tab3Page);
    return Tab3Page;
}());



/***/ })

}]);
//# sourceMappingURL=tab3-tab3-module.js.map