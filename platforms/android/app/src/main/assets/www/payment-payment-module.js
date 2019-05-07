(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["payment-payment-module"],{

/***/ "./src/app/payment/payment.module.ts":
/*!*******************************************!*\
  !*** ./src/app/payment/payment.module.ts ***!
  \*******************************************/
/*! exports provided: PaymentPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PaymentPageModule", function() { return PaymentPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _payment_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./payment.page */ "./src/app/payment/payment.page.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");







var routes = [
    {
        path: '',
        component: _payment_page__WEBPACK_IMPORTED_MODULE_5__["PaymentPage"]
    }
];
var PaymentPageModule = /** @class */ (function () {
    function PaymentPageModule() {
    }
    PaymentPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_payment_page__WEBPACK_IMPORTED_MODULE_5__["PaymentPage"]]
        })
    ], PaymentPageModule);
    return PaymentPageModule;
}());



/***/ }),

/***/ "./src/app/payment/payment.page.html":
/*!*******************************************!*\
  !*** ./src/app/payment/payment.page.html ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar>\n      <ion-buttons slot=\"start\">\n          <ion-back-button defaultHref=\"/tabs/tab3\" routerDirection='back'></ion-back-button>\n        </ion-buttons>\n    <ion-title>Payment</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<!-- <ion-content> -->\n  <!-- <ion-grid *ngFor='let product of returnCart; let i = index'> \n      <ion-row>\n        <ion-text>\n          {{ product.name }}\n        {{ product.price }}\n        </ion-text>\n      </ion-row>\n  <br> -->\n<!-- \n  <div *ngIf='returnCart.length > 0'> -->\n      <!-- <div id=\"paypal-button-container\"></div> -->\n    <!-- <ion-button name='close' (click)='pay(product, i)'>PAY</ion-button> -->\n\n    <!-- <img (click)='pay(product, i)' class='paypalBtn' src=\"https://www.paypalobjects.com/digitalassets/c/website/marketing/apac/C2/logos-buttons/optimize/Full_Online_Tray_RGB.png\" border=\"0\" alt=\"PayPal Acceptance Mark\">\n  </div>\n\n  </ion-grid> -->\n\n<!-- </ion-content> -->\n\n\n<!-- test -->\n\n<ion-content>\n  <ion-card class='noBorder'>\n    <ion-card-content>\n\n        <div class='center'>\n            <ion-text *ngFor='let product of returnCart; let i = index'>\n                <h1>  {{ product.product_name }}\n                    ${{ product.price }}</h1>\n              </ion-text>\n              <ion-button color='primary' (click)='getTotal()'>Calculate Total</ion-button>\n             \n          </div>\n  \n         <div id='demo'></div>\n\n         <br>\n  <ion-text>\n    Select Payment Method:\n  </ion-text>\n\n    \n    <ion-segment [(ngModel)]=\"galleryType\" color=\"secondary\" mode='md'>\n\n        <ion-segment-button value=\"pinterest\" mode='md'>\n            <img src='assets/apple-pay.svg'>\n          </ion-segment-button>\n  \n\n\n      <ion-segment-button value=\"master\" mode='md'>\n          <ion-grid>\n            <ion-row>\n              <ion-col>\n                  <img src='assets/mc.svg'>\n              </ion-col>\n\n              <ion-col>\n                  <img src='assets/visa.svg'>\n              </ion-col>\n            </ion-row>\n          </ion-grid>\n      </ion-segment-button>\n\n      <ion-segment-button value=\"regular\" mode='md'>\n          <img src='assets/PayPal_logo.svg'>\n      </ion-segment-button>\n      <br>\n\n        \n    </ion-segment>\n  \n    <div [ngSwitch]=\"galleryType\">\n\n        <div class=\"images\" *ngSwitchCase=\"'regular'\">\n            <ion-grid *ngFor='let product of returnCart; let i = index'> \n                <!-- <ion-row>\n                  <ion-text>\n                    {{ product.name }}\n                  {{ product.price }}\n                  </ion-text>\n                </ion-row> -->\n            <br>\n          \n            <div *ngIf='returnCart.length > 0'>\n                <!-- <div id=\"paypal-button-container\"></div> -->\n              <!-- <ion-button name='close' (click)='pay(product, i)'>PAY</ion-button> -->\n          \n              <img (click)='pay(product, i)' class='paypalBtn' src=\"assets/PayPal_logo.svg\" alt=\"PayPal Acceptance Mark\">\n            </div>\n          \n            </ion-grid>\n        </div>\n\n        <div class=\"images\" *ngSwitchCase=\"'pinterest'\">\n          Applepay here\n          </div>\n\n          <div class=\"images\" *ngSwitchCase=\"'master'\">\n            <ion-item>\n              <ion-label position=\"floating\">Name on card</ion-label>\n              <ion-input></ion-input>\n            </ion-item>\n\n            <ion-item>\n                <ion-label position=\"floating\">Card number</ion-label>\n                <ion-input></ion-input>\n              </ion-item>\n\n              <ion-item>\n                  <ion-label position=\"floating\">Expiry date (MM/YY)</ion-label>\n                  <ion-input></ion-input>\n                </ion-item>\n\n                <ion-item>\n                    <ion-label position=\"floating\">Security code</ion-label>\n                    <ion-input></ion-input>\n                  </ion-item>\n          </div>\n\n      </div>\n\n      </ion-card-content>\n    </ion-card>\n  </ion-content>"

/***/ }),

/***/ "./src/app/payment/payment.page.scss":
/*!*******************************************!*\
  !*** ./src/app/payment/payment.page.scss ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "ion-button {\n  --border-radius: 0 !important;\n  width: 100%; }\n\n.noBorder {\n  box-shadow: none;\n  border-radius: 0;\n  text-align: center;\n  color: black; }\n\n.noBorder {\n  box-shadow: none; }\n\n.sc-ion-card-ios-h {\n  margin-left: 0;\n  margin-right: 0;\n  -webkit-margin-start: 0; }\n\n.mypaypal {\n  text-align: center; }\n\nion-button {\n  --background: #ffc438;\n  --color-selected:#ffc438;\n  --background-focused: #ffc438;\n  --background-activated: #ffc438; }\n\n.center {\n  text-align: center;\n  padding: 1em; }\n\nion-text {\n  display: block;\n  margin-left: auto;\n  margin-right: auto; }\n\n.paypalBtn {\n  width: 50%;\n  display: block;\n  margin-left: auto;\n  margin-right: auto; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9nYW4vRGVza3RvcC9GWVAvc2F5b2NvZGUtZWNvbW1lcmNlLXRlbXBsYXRlL3NyYy90aGVtZS9fYnV0dG9uU3R5bGUuc2NzcyIsIi9Vc2Vycy9nYW4vRGVza3RvcC9GWVAvc2F5b2NvZGUtZWNvbW1lcmNlLXRlbXBsYXRlL3NyYy90aGVtZS9fbm9Cb3JkZXItcHJvZHVjdC5zY3NzIiwiL1VzZXJzL2dhbi9EZXNrdG9wL0ZZUC9zYXlvY29kZS1lY29tbWVyY2UtdGVtcGxhdGUvc3JjL3RoZW1lL19ub0JvcmRlci1jYXJkLnNjc3MiLCIvVXNlcnMvZ2FuL0Rlc2t0b3AvRllQL3NheW9jb2RlLWVjb21tZXJjZS10ZW1wbGF0ZS9zcmMvYXBwL3BheW1lbnQvcGF5bWVudC5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSw2QkFBZ0I7RUFDaEIsV0FBVyxFQUFBOztBQ0ZmO0VBQ0ksZ0JBQWdCO0VBQ2hCLGdCQUFnQjtFQUNoQixrQkFBa0I7RUFDbEIsWUFBWSxFQUFBOztBQ0poQjtFQUNJLGdCQUFnQixFQUFBOztBQUdwQjtFQUNJLGNBQWM7RUFDZCxlQUFlO0VBQ2YsdUJBQXVCLEVBQUE7O0FDSDNCO0VBQ0ksa0JBQWtCLEVBQUE7O0FBR3RCO0VBQ0kscUJBQWE7RUFDYix3QkFBaUI7RUFDakIsNkJBQXFCO0VBQ3JCLCtCQUF1QixFQUFBOztBQUczQjtFQUNJLGtCQUFrQjtFQUNsQixZQUFZLEVBQUE7O0FBR2hCO0VBQ0ksY0FBYztFQUNkLGlCQUFpQjtFQUNqQixrQkFBa0IsRUFBQTs7QUFHdEI7RUFDSSxVQUFVO0VBQ1YsY0FBYztFQUNkLGlCQUFpQjtFQUNqQixrQkFBa0IsRUFBQSIsImZpbGUiOiJzcmMvYXBwL3BheW1lbnQvcGF5bWVudC5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpb24tYnV0dG9uIHtcbiAgICAtLWJvcmRlci1yYWRpdXM6IDAgIWltcG9ydGFudDtcbiAgICB3aWR0aDogMTAwJTtcbn0iLCIubm9Cb3JkZXIge1xuICAgIGJveC1zaGFkb3c6IG5vbmU7XG4gICAgYm9yZGVyLXJhZGl1czogMDtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgY29sb3I6IGJsYWNrO1xufSIsIi5ub0JvcmRlciB7XG4gICAgYm94LXNoYWRvdzogbm9uZTtcbn1cblxuLnNjLWlvbi1jYXJkLWlvcy1oIHtcbiAgICBtYXJnaW4tbGVmdDogMDtcbiAgICBtYXJnaW4tcmlnaHQ6IDA7XG4gICAgLXdlYmtpdC1tYXJnaW4tc3RhcnQ6IDA7XG59IiwiQGltcG9ydCAnLi4vLi4vdGhlbWUvX2J1dHRvblN0eWxlJztcbkBpbXBvcnQgJy4uLy4uL3RoZW1lL19ub0JvcmRlci1wcm9kdWN0JztcbkBpbXBvcnQgJy4uLy4uL3RoZW1lL25vQm9yZGVyLWNhcmQnO1xuXG4ubXlwYXlwYWwge1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuaW9uLWJ1dHRvbiB7XG4gICAgLS1iYWNrZ3JvdW5kOiAjZmZjNDM4O1xuICAgIC0tY29sb3Itc2VsZWN0ZWQ6I2ZmYzQzODtcbiAgICAtLWJhY2tncm91bmQtZm9jdXNlZDogI2ZmYzQzODs7XG4gICAgLS1iYWNrZ3JvdW5kLWFjdGl2YXRlZDogI2ZmYzQzODtcbn0gXG5cbi5jZW50ZXIge1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBwYWRkaW5nOiAxZW07XG59XG5cbmlvbi10ZXh0IHtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgICBtYXJnaW4tbGVmdDogYXV0bztcbiAgICBtYXJnaW4tcmlnaHQ6IGF1dG87XG59XG5cbi5wYXlwYWxCdG4ge1xuICAgIHdpZHRoOiA1MCU7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gICAgbWFyZ2luLWxlZnQ6IGF1dG87XG4gICAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/payment/payment.page.ts":
/*!*****************************************!*\
  !*** ./src/app/payment/payment.page.ts ***!
  \*****************************************/
/*! exports provided: PaymentPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PaymentPage", function() { return PaymentPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _service_cart_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../service-cart.service */ "./src/app/service-cart.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_native_dialogs_ngx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic-native/dialogs/ngx */ "./node_modules/@ionic-native/dialogs/ngx/index.js");
/* harmony import */ var _ionic_native_paypal_ngx__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic-native/paypal/ngx */ "./node_modules/@ionic-native/paypal/ngx/index.js");






var PaymentPage = /** @class */ (function () {
    function PaymentPage(cartService, router, dialogs, payPal) {
        this.cartService = cartService;
        this.router = router;
        this.dialogs = dialogs;
        this.payPal = payPal;
        this.returnCart = [];
        this.updatedProductArr = [];
        // paypalConfig = {
        //   env: 'sandbox',
        //   client: {
        //     sandbox: 'AU1nnVbRvqQNVEmq0-LqzzI_Co9w-7mPvYu4htV8GjET7ieaBkUaK5IFPI5PNQ4QittVSavsjxcTNBrk'
        //   },
        //   commit: true,
        //   payment: (data, actions) => {
        //     return actions.payment.create({
        //       payment: {
        //         transactions: [
        //           { amount: { total: this.finalAmount, currency: 'SGD' } }
        //         ]
        //       }
        //     });
        //   },
        //   onAuthorize: (data, actions) => {
        //     return actions.payment.execute().then((payment) => {
        //       // Do something when payment is successful.
        //       this.router.navigate(['/tabs/confirmation-page']);
        //     })
        //   }
        // };
        // ngAfterViewChecked(): void {
        //   if (!this.addScript) {
        //     this.addPaypalScript().then(() => {
        //       paypal.Button.render(this.paypalConfig, '#paypal-button-container');
        //       this.paypalLoad = false;
        //     })
        //   }
        // }
        // addPaypalScript() {
        //   this.addScript = true;
        //   return new Promise((resolve, reject) => {
        //     let scripttagElement = document.createElement('script'); 
        //     scripttagElement.src = 'https://www.paypalobjects.com/api/checkout.js';
        //     scripttagElement.onload = resolve;
        //     document.body.appendChild(scripttagElement);
        //   })
        // }
        // finalTotal = 0;
        // getTotal() {
        //   for (var i = 0; i < this.returnCart.length; i++) {
        //     this.finalTotal += this.returnCart[i].price; // Total Amount
        //   }
        //   alert(this.finalTotal);
        // }
        this.total = 0;
        this.finalAmt = 0;
    }
    PaymentPage.prototype.ngOnInit = function () {
        this.returnCart = this.cartService.getCart();
        this.updatedProductArr = this.cartService.getProducts(); // Updated Arr List
    };
    PaymentPage.prototype.getTotal = function () {
        this.finalAmt = 0;
        for (var i = 0; i < this.returnCart.length; i++) {
            this.finalAmt += this.returnCart[i].price; // Total Amount
        }
        document.getElementById("demo").innerHTML = 'Total Cost $' + this.finalAmt;
    };
    PaymentPage.prototype.pay = function (product) {
        var _this = this;
        this.total = 0;
        for (var i = 0; i < this.returnCart.length; i++) {
            this.total += this.returnCart[i].price; // Total Amount
            this.totalString = this.total.toString();
        }
        this.payPal.init({
            PayPalEnvironmentProduction: 'YOUR_PRODUCTION_CLIENT_ID',
            PayPalEnvironmentSandbox: 'AU1nnVbRvqQNVEmq0-LqzzI_Co9w-7mPvYu4htV8GjET7ieaBkUaK5IFPI5PNQ4QittVSavsjxcTNBrk'
        }).then(function () {
            // Environments: PayPalEnvironmentNoNetwork, PayPalEnvironmentSandbox, PayPalEnvironmentProduction
            _this.payPal.prepareToRender('PayPalEnvironmentSandbox', new _ionic_native_paypal_ngx__WEBPACK_IMPORTED_MODULE_5__["PayPalConfiguration"]({
            // Only needed if you get an "Internal Service Error" after PayPal login!
            //payPalShippingAddressOption: 2 // PayPalShippingAddressOptionPayPal
            })).then(function () {
                var payment = new _ionic_native_paypal_ngx__WEBPACK_IMPORTED_MODULE_5__["PayPalPayment"](_this.totalString, 'SGD', 'Total', 'sale');
                _this.payPal.renderSinglePaymentUI(payment).then(function () {
                    // Successfully paid
                    _this.returnCart.splice(product);
                    _this.dialogs.alert('Your order has been confirmed!')
                        .then(function () {
                        console.log('Errors dismissed');
                        _this.router.navigate(['/tabs/tab1']);
                    }).catch(function (e) { return console.log('Error displaying dialog', e); });
                    // this.router.navigate(['/tabs/tab1'])
                    // Example sandbox response
                    //
                    // {
                    //   "client": {
                    //     "environment": "sandbox",
                    //     "product_name": "PayPal iOS SDK",
                    //     "paypal_sdk_version": "2.16.0",
                    //     "platform": "iOS"
                    //   },
                    //   "response_type": "payment",
                    //   "response": {
                    //     "id": "PAY-1AB23456CD789012EF34GHIJ",
                    //     "state": "approved",
                    //     "create_time": "2016-10-03T13:33:33Z",
                    //     "intent": "sale"
                    //   }
                    // }
                }, function () {
                    // Error or render dialog closed without being successful
                });
            }, function () {
                // Error in configuration
            });
        }, function () {
            // Error in initialization, maybe PayPal isn't supported or something else
        });
    };
    PaymentPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-payment',
            template: __webpack_require__(/*! ./payment.page.html */ "./src/app/payment/payment.page.html"),
            styles: [__webpack_require__(/*! ./payment.page.scss */ "./src/app/payment/payment.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_service_cart_service__WEBPACK_IMPORTED_MODULE_2__["ServiceCartService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
            _ionic_native_dialogs_ngx__WEBPACK_IMPORTED_MODULE_4__["Dialogs"],
            _ionic_native_paypal_ngx__WEBPACK_IMPORTED_MODULE_5__["PayPal"]])
    ], PaymentPage);
    return PaymentPage;
}());



/***/ })

}]);
//# sourceMappingURL=payment-payment-module.js.map