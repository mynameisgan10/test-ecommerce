(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["tab2-tab2-module"],{

/***/ "./src/app/tab2/tab2.module.ts":
/*!*************************************!*\
  !*** ./src/app/tab2/tab2.module.ts ***!
  \*************************************/
/*! exports provided: Tab2PageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Tab2PageModule", function() { return Tab2PageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _tab2_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./tab2.page */ "./src/app/tab2/tab2.page.ts");







var Tab2PageModule = /** @class */ (function () {
    function Tab2PageModule() {
    }
    Tab2PageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["NgModule"])({
            imports: [
                _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonicModule"],
                _angular_common__WEBPACK_IMPORTED_MODULE_4__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild([{ path: '', component: _tab2_page__WEBPACK_IMPORTED_MODULE_6__["Tab2Page"] }])
            ],
            declarations: [_tab2_page__WEBPACK_IMPORTED_MODULE_6__["Tab2Page"]]
        })
    ], Tab2PageModule);
    return Tab2PageModule;
}());



/***/ }),

/***/ "./src/app/tab2/tab2.page.html":
/*!*************************************!*\
  !*** ./src/app/tab2/tab2.page.html ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar>\n    <ion-title>WISHLIST</ion-title>\n\n    <ion-buttons slot='end'>\n      <ion-button (click)='openCart()'>\n        <ion-badge *ngIf='returnCart.length > 0' color='secondary'>\n          {{ returnCart.length }}\n        </ion-badge>\n        <ion-icon name='cart' color='dark' slot='icon-only'>\n        </ion-icon>\n      </ion-button>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n  \n  <ion-content>\n    <ion-card-content>\n\n        <!-- <ion-grid *ngFor='let wishlist of returnWishlist; let i = index'> \n\n            <ion-button fill='clear' color='secondary' size='large' (click)=\"deleteWishlist(i)\"><ion-icon name='close'></ion-icon></ion-button>\n            <br>\n\n            <ion-row>\n              <ion-img [src]=\"wishlist.image\"></ion-img>\n            </ion-row>\n      \n            <ion-row>\n              {{ wishlist.name }}\n              <br>\n              <ion-button color='secondary' expand=\"full\" (click)=\"addToCart(wishlist, i)\">Add to Cart</ion-button>\n            </ion-row>\n        </ion-grid> -->\n\n    \n\n            <!-- Sliding item with icon start options on end side -->\n            <!-- <ion-item-sliding>\n              <ion-item>\n                <ion-label>\n                    <ion-img [src]=\"wishlist.image\"></ion-img>\n                </ion-label>\n              </ion-item>\n              <ion-item-options>\n\n                <ion-item-option color=\"primary\" (click)='deleteWishlist(i)'>\n                  <ion-icon slot=\"start\" name=\"trash\"></ion-icon>\n                  Remove\n                </ion-item-option>\n              </ion-item-options>\n            </ion-item-sliding> -->\n\n       \n\n\n\n        <ion-grid>\n            <ion-row> \n              <ion-col *ngFor='let wishlist of returnWishlist; let i = index'>\n              \n                      <div>\n                         \n                          <ion-card class='noBorder'>\n                              <ion-card-title>\n                                <ion-item-sliding>\n                                    <ion-item>\n                                      <ion-label>\n                                          <ion-img [src]=\"wishlist.image\"></ion-img>\n       \n                                          <div class='des'>\n                                              {{ wishlist.product_name }} <br>\n                                              ${{ wishlist.price }}\n                                          </div>\n                                          \n                                          <div>\n                                              <ion-button size='default' color='secondary' expand=\"full\" (click)=\"addToCart(wishlist, i)\">Add to Cart</ion-button>\n                                          </div>\n                                      </ion-label>\n                                    </ion-item>\n\n                                    <ion-item-options>\n                                      <ion-item-option color=\"secondary\" (click)='deleteWishlist(i)'>\n                                        <ion-icon slot=\"icon-only\" name=\"trash\"></ion-icon>\n                                        \n                                      </ion-item-option>\n                                    </ion-item-options>\n                                  </ion-item-sliding>\n                                  \n                              </ion-card-title>\n    \n      \n                          </ion-card>\n                        </div>\n                  \n              </ion-col>\n            </ion-row>\n          </ion-grid>\n\n\n\n\n\n      </ion-card-content>\n    </ion-content>"

/***/ }),

/***/ "./src/app/tab2/tab2.page.scss":
/*!*************************************!*\
  !*** ./src/app/tab2/tab2.page.scss ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".noBorder {\n  box-shadow: none; }\n\n.sc-ion-card-ios-h {\n  margin-left: 0;\n  margin-right: 0;\n  -webkit-margin-start: 0; }\n\n.x {\n  width: 13%;\n  position: relative;\n  float: right;\n  right: -10%; }\n\nion-button {\n  --border-radius: 0 !important;\n  width: 100%; }\n\nion-title {\n  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;\n  letter-spacing: .1em; }\n\nion-badge {\n  color: #fff;\n  position: absolute;\n  top: 0px;\n  right: 0px;\n  border-radius: 70%; }\n\nion-img {\n  display: block;\n  margin-left: auto;\n  margin-right: auto; }\n\n.noBorder {\n  box-shadow: none;\n  border-radius: 0;\n  text-align: center;\n  color: black; }\n\n.category-block {\n  margin-bottom: 4px; }\n\n.des {\n  text-align: center;\n  margin: 1em; }\n\n.category-banner {\n  border-left: 8px solid var(--ion-color-secondary);\n  background: var(--ion-color-light);\n  height: 40px;\n  padding: 10px;\n  font-weight: 500; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9nYW4vRGVza3RvcC9GWVAvc2F5b2NvZGUtZWNvbW1lcmNlLXRlbXBsYXRlL3NyYy90aGVtZS9fbm9Cb3JkZXItY2FyZC5zY3NzIiwiL1VzZXJzL2dhbi9EZXNrdG9wL0ZZUC9zYXlvY29kZS1lY29tbWVyY2UtdGVtcGxhdGUvc3JjL3RoZW1lL19kZWxldGVJY29uLnNjc3MiLCIvVXNlcnMvZ2FuL0Rlc2t0b3AvRllQL3NheW9jb2RlLWVjb21tZXJjZS10ZW1wbGF0ZS9zcmMvdGhlbWUvX2J1dHRvblN0eWxlLnNjc3MiLCIvVXNlcnMvZ2FuL0Rlc2t0b3AvRllQL3NheW9jb2RlLWVjb21tZXJjZS10ZW1wbGF0ZS9zcmMvdGhlbWUvX2lvbi10aXRsZUZvbnQuc2NzcyIsIi9Vc2Vycy9nYW4vRGVza3RvcC9GWVAvc2F5b2NvZGUtZWNvbW1lcmNlLXRlbXBsYXRlL3NyYy90aGVtZS9faW9uLWJhZGdlLnNjc3MiLCIvVXNlcnMvZ2FuL0Rlc2t0b3AvRllQL3NheW9jb2RlLWVjb21tZXJjZS10ZW1wbGF0ZS9zcmMvdGhlbWUvX2NlbnRlci1pb24taW1nLnNjc3MiLCIvVXNlcnMvZ2FuL0Rlc2t0b3AvRllQL3NheW9jb2RlLWVjb21tZXJjZS10ZW1wbGF0ZS9zcmMvdGhlbWUvX25vQm9yZGVyLXByb2R1Y3Quc2NzcyIsIi9Vc2Vycy9nYW4vRGVza3RvcC9GWVAvc2F5b2NvZGUtZWNvbW1lcmNlLXRlbXBsYXRlL3NyYy9hcHAvdGFiMi90YWIyLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGdCQUFnQixFQUFBOztBQUdwQjtFQUNJLGNBQWM7RUFDZCxlQUFlO0VBQ2YsdUJBQXVCLEVBQUE7O0FDUDNCO0VBQ0ksVUFBVTtFQUNWLGtCQUFrQjtFQUNsQixZQUFZO0VBQ1osV0FBVyxFQUFBOztBQ0pmO0VBQ0ksNkJBQWdCO0VBQ2hCLFdBQVcsRUFBQTs7QUNGZjtFQUNJLHdJQUF3STtFQUN4SSxvQkFBb0IsRUFBQTs7QUNGeEI7RUFDSSxXQUFXO0VBQ1gsa0JBQWtCO0VBQ2xCLFFBQVE7RUFDUixVQUFVO0VBQ1Ysa0JBQWtCLEVBQUE7O0FDTHRCO0VBQ0ksY0FBYztFQUNkLGlCQUFpQjtFQUNqQixrQkFBa0IsRUFBQTs7QUNIdEI7RUFDSSxnQkFBZ0I7RUFDaEIsZ0JBQWdCO0VBQ2hCLGtCQUFrQjtFQUNsQixZQUFZLEVBQUE7O0FDS2hCO0VBQ0ksa0JBQWtCLEVBQUE7O0FBR3RCO0VBQ0ksa0JBQWtCO0VBQ2xCLFdBQVcsRUFBQTs7QUFJZjtFQUNJLGlEQUFpRDtFQUNqRCxrQ0FBa0M7RUFDbEMsWUFBWTtFQUNaLGFBQWE7RUFDYixnQkFBZ0IsRUFBQSIsImZpbGUiOiJzcmMvYXBwL3RhYjIvdGFiMi5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubm9Cb3JkZXIge1xuICAgIGJveC1zaGFkb3c6IG5vbmU7XG59XG5cbi5zYy1pb24tY2FyZC1pb3MtaCB7XG4gICAgbWFyZ2luLWxlZnQ6IDA7XG4gICAgbWFyZ2luLXJpZ2h0OiAwO1xuICAgIC13ZWJraXQtbWFyZ2luLXN0YXJ0OiAwO1xufSIsIi54IHtcbiAgICB3aWR0aDogMTMlO1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICBmbG9hdDogcmlnaHQ7XG4gICAgcmlnaHQ6IC0xMCU7XG59IiwiaW9uLWJ1dHRvbiB7XG4gICAgLS1ib3JkZXItcmFkaXVzOiAwICFpbXBvcnRhbnQ7XG4gICAgd2lkdGg6IDEwMCU7XG59IiwiaW9uLXRpdGxlIHtcbiAgICBmb250LWZhbWlseTogLWFwcGxlLXN5c3RlbSwgQmxpbmtNYWNTeXN0ZW1Gb250LCAnU2Vnb2UgVUknLCBSb2JvdG8sIE94eWdlbiwgVWJ1bnR1LCBDYW50YXJlbGwsICdPcGVuIFNhbnMnLCAnSGVsdmV0aWNhIE5ldWUnLCBzYW5zLXNlcmlmO1xuICAgIGxldHRlci1zcGFjaW5nOiAuMWVtO1xufVxuXG4iLCJpb24tYmFkZ2Uge1xuICAgIGNvbG9yOiAjZmZmO1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB0b3A6IDBweDtcbiAgICByaWdodDogMHB4O1xuICAgIGJvcmRlci1yYWRpdXM6IDcwJTtcbn0iLCJpb24taW1nIHtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgICBtYXJnaW4tbGVmdDogYXV0bztcbiAgICBtYXJnaW4tcmlnaHQ6IGF1dG87XG59IiwiLm5vQm9yZGVyIHtcbiAgICBib3gtc2hhZG93OiBub25lO1xuICAgIGJvcmRlci1yYWRpdXM6IDA7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIGNvbG9yOiBibGFjaztcbn0iLCJcbkBpbXBvcnQgJy4uLy4uL3RoZW1lL19ub0JvcmRlci1jYXJkJztcbkBpbXBvcnQgJy4uLy4uL3RoZW1lL19kZWxldGVJY29uJztcbkBpbXBvcnQgJy4uLy4uL3RoZW1lL19idXR0b25TdHlsZSc7XG5AaW1wb3J0ICcuLi8uLi90aGVtZS9faW9uLXRpdGxlRm9udCc7XG5AaW1wb3J0ICcuLi8uLi90aGVtZS9faW9uLWJhZGdlJztcbkBpbXBvcnQnLi4vLi4vdGhlbWUvX2NlbnRlci1pb24taW1nJztcbkBpbXBvcnQgJy4uLy4uL3RoZW1lL19ub0JvcmRlci1wcm9kdWN0JztcblxuLmNhdGVnb3J5LWJsb2NrIHtcbiAgICBtYXJnaW4tYm90dG9tOiA0cHg7XG59XG5cbi5kZXMge1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBtYXJnaW46IDFlbTtcbn1cblxuIFxuLmNhdGVnb3J5LWJhbm5lciB7XG4gICAgYm9yZGVyLWxlZnQ6IDhweCBzb2xpZCB2YXIoLS1pb24tY29sb3Itc2Vjb25kYXJ5KTtcbiAgICBiYWNrZ3JvdW5kOiB2YXIoLS1pb24tY29sb3ItbGlnaHQpO1xuICAgIGhlaWdodDogNDBweDtcbiAgICBwYWRkaW5nOiAxMHB4O1xuICAgIGZvbnQtd2VpZ2h0OiA1MDA7XG59XG4iXX0= */"

/***/ }),

/***/ "./src/app/tab2/tab2.page.ts":
/*!***********************************!*\
  !*** ./src/app/tab2/tab2.page.ts ***!
  \***********************************/
/*! exports provided: Tab2Page */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Tab2Page", function() { return Tab2Page; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _service_cart_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../service-cart.service */ "./src/app/service-cart.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");





var Tab2Page = /** @class */ (function () {
    function Tab2Page(alertController, cartService, router) {
        this.alertController = alertController;
        this.cartService = cartService;
        this.router = router;
        this.returnCart = [];
        this.updatedProductArr = [];
        this.returnWishlist = [];
    }
    Tab2Page.prototype.ngOnInit = function () {
        this.returnCart = this.cartService.getCart(); // Get Added Product
        this.updatedProductArr = this.cartService.getProducts(); // Updated Arr List
        this.returnWishlist = this.cartService.getWishlist(); // Get Added Wishlist
    };
    Tab2Page.prototype.deleteWishlist = function (i) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var alert;
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.alertController.create({
                            header: 'Confirmation',
                            message: 'Do you want to remove from wishlist?',
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
                                        _this.cartService.deleteWishlist(i);
                                        console.log('OK clicked, product removed from wishlist');
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
    Tab2Page.prototype.addToCart = function (wishlist, i) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var alert;
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.alertController.create({
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
                                        _this.cartService.addProduct(wishlist);
                                        _this.returnWishlist.splice(i, 1);
                                        console.log('OK clicked, product added to cart >> ' + wishlist.name);
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
    Tab2Page.prototype.openCart = function () {
        this.router.navigate(['tabs/tab3']);
    };
    Tab2Page = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-tab2',
            template: __webpack_require__(/*! ./tab2.page.html */ "./src/app/tab2/tab2.page.html"),
            styles: [__webpack_require__(/*! ./tab2.page.scss */ "./src/app/tab2/tab2.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["AlertController"],
            _service_cart_service__WEBPACK_IMPORTED_MODULE_3__["ServiceCartService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]])
    ], Tab2Page);
    return Tab2Page;
}());



/***/ })

}]);
//# sourceMappingURL=tab2-tab2-module.js.map