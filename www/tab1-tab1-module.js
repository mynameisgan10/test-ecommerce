(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["tab1-tab1-module"],{

/***/ "./src/app/tab1/tab1.module.ts":
/*!*************************************!*\
  !*** ./src/app/tab1/tab1.module.ts ***!
  \*************************************/
/*! exports provided: Tab1PageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Tab1PageModule", function() { return Tab1PageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _tab1_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./tab1.page */ "./src/app/tab1/tab1.page.ts");







var Tab1PageModule = /** @class */ (function () {
    function Tab1PageModule() {
    }
    Tab1PageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["NgModule"])({
            imports: [
                _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonicModule"],
                _angular_common__WEBPACK_IMPORTED_MODULE_4__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild([{ path: '', component: _tab1_page__WEBPACK_IMPORTED_MODULE_6__["Tab1Page"] }])
            ],
            declarations: [_tab1_page__WEBPACK_IMPORTED_MODULE_6__["Tab1Page"]]
        })
    ], Tab1PageModule);
    return Tab1PageModule;
}());



/***/ }),

/***/ "./src/app/tab1/tab1.page.html":
/*!*************************************!*\
  !*** ./src/app/tab1/tab1.page.html ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n    <ion-toolbar>\n    </ion-toolbar>\n  </ion-header>\n  \n<ion-content>\n\n        <ion-card class='noBorder'>\n            <ion-card-content>\n              <h2>Free delivery above SGD $50</h2>\n            </ion-card-content>\n          </ion-card>\n        <ion-slides pager=\"true\" [options]=\"slideOpts\"> \n          \n            <ion-slide *ngFor='let image of arrImg'>\n              <img src=' {{ image.photo }} '>\n            </ion-slide>\n\n          </ion-slides>\n      \n      <ion-card>\n        <ion-card-content>\n            <div class = 'newItems'>\n                Latest Release\n                  <div class = 'seeMore'>\n                    <ion-item routerLink='/tabs/home'>\n                          See More\n                        </ion-item>\n                  </div>\n                        \n              </div>\n        </ion-card-content>\n      </ion-card>\n\n      <ion-grid>\n        <ion-row>\n          <ion-col>\n            <img src='assets/shirt.jpg'>\n          </ion-col>\n\n          <ion-col>\n              <img src='assets/shirt.jpg'>\n            </ion-col>\n\n            <ion-col>\n                <img src='assets/shirt.jpg'>\n              </ion-col>\n        </ion-row>\n      </ion-grid>\n  \n</ion-content>\n"

/***/ }),

/***/ "./src/app/tab1/tab1.page.scss":
/*!*************************************!*\
  !*** ./src/app/tab1/tab1.page.scss ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".noBorder {\n  box-shadow: none;\n  background: black;\n  border-radius: 0;\n  text-align: center;\n  color: white; }\n\nion-slides {\n  padding-bottom: 35px; }\n\nion-card {\n  box-shadow: none; }\n\ndiv.newItems {\n  padding-top: 10%; }\n\n.top-banner.ion-card {\n  display: flex;\n  flex-direction: column;\n  max-width: 25% !important;\n  max-height: 35% !important; }\n\ndiv.seeMore {\n  float: right; }\n\nimg {\n  display: block;\n  margin-left: auto;\n  margin-right: auto; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9nYW4vRGVza3RvcC9GWVAvc2F5b2NvZGUtZWNvbW1lcmNlLXRlbXBsYXRlL3NyYy90aGVtZS9fbm9Cb3JkZXItdGFiMS5zY3NzIiwiL1VzZXJzL2dhbi9EZXNrdG9wL0ZZUC9zYXlvY29kZS1lY29tbWVyY2UtdGVtcGxhdGUvc3JjL2FwcC90YWIxL3RhYjEucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksZ0JBQWdCO0VBQ2hCLGlCQUFpQjtFQUNqQixnQkFBZ0I7RUFDaEIsa0JBQWtCO0VBQ2xCLFlBQVksRUFBQTs7QUNHaEI7RUFDRSxvQkFBb0IsRUFBQTs7QUFHdEI7RUFDRSxnQkFBZ0IsRUFBQTs7QUFHbEI7RUFDRSxnQkFBZ0IsRUFBQTs7QUFJbEI7RUFDRSxhQUFhO0VBQ2Isc0JBQXNCO0VBQ3RCLHlCQUF5QjtFQUN6QiwwQkFBMEIsRUFBQTs7QUFJNUI7RUFDRSxZQUNGLEVBQUE7O0FBRUE7RUFDRSxjQUFjO0VBQ2QsaUJBQWlCO0VBQ2pCLGtCQUFrQixFQUFBIiwiZmlsZSI6InNyYy9hcHAvdGFiMS90YWIxLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5ub0JvcmRlciB7XG4gICAgYm94LXNoYWRvdzogbm9uZTtcbiAgICBiYWNrZ3JvdW5kOiBibGFjaztcbiAgICBib3JkZXItcmFkaXVzOiAwO1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBjb2xvcjogd2hpdGU7XG59IiwiXG5AaW1wb3J0ICcuLi8uLi90aGVtZS9fbm9Cb3JkZXItdGFiMSc7XG5cbi8vIC53ZWxjb21lLWNhcmQgaW9uLWltZyB7XG4vLyAgIG1heC1oZWlnaHQ6IDM1dmg7XG4vLyAgIG92ZXJmbG93OiBoaWRkZW47XG4vLyB9XG5cbmlvbi1zbGlkZXMge1xuICBwYWRkaW5nLWJvdHRvbTogMzVweDtcbn1cblxuaW9uLWNhcmQge1xuICBib3gtc2hhZG93OiBub25lO1xufVxuXG5kaXYubmV3SXRlbXN7XG4gIHBhZGRpbmctdG9wOiAxMCU7XG5cbn1cblxuLnRvcC1iYW5uZXIuaW9uLWNhcmR7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIG1heC13aWR0aDogMjUlICFpbXBvcnRhbnQ7XG4gIG1heC1oZWlnaHQ6IDM1JSAhaW1wb3J0YW50O1xuXG59XG5cbmRpdi5zZWVNb3Jle1xuICBmbG9hdDpyaWdodFxufVxuXG5pbWd7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBtYXJnaW4tbGVmdDogYXV0bztcbiAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/tab1/tab1.page.ts":
/*!***********************************!*\
  !*** ./src/app/tab1/tab1.page.ts ***!
  \***********************************/
/*! exports provided: Tab1Page */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Tab1Page", function() { return Tab1Page; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var Tab1Page = /** @class */ (function () {
    function Tab1Page() {
        this.arrImg = [
            { name: 'imageOne', photo: 'assets/latter-rain.jpg' },
            { name: 'imageOneRepat', photo: 'assets/latter-rain.jpg' },
            { name: 'latterRain', photo: 'assets/latter-rain.jpg' }
        ];
        this.slidesOpts = {
            on: {
                beforeInit: function () {
                    var swiper = this;
                    swiper.classNames.push(swiper.params.containerModifierClass + "fade");
                    var overwriteParams = {
                        slidesPerView: 1,
                        slidesPerColumn: 1,
                        slidesPerGroup: 1,
                        watchSlidesProgress: true,
                        spaceBetween: 0,
                        virtualTranslate: true,
                    };
                    swiper.params = Object.assign(swiper.params, overwriteParams);
                    swiper.params = Object.assign(swiper.originalParams, overwriteParams);
                },
                setTranslate: function () {
                    var swiper = this;
                    var slides = swiper.slides;
                    for (var i = 0; i < slides.length; i += 1) {
                        var $slideEl = swiper.slides.eq(i);
                        var offset$$1 = $slideEl[0].swiperSlideOffset;
                        var tx = -offset$$1;
                        if (!swiper.params.virtualTranslate)
                            tx -= swiper.translate;
                        var ty = 0;
                        if (!swiper.isHorizontal()) {
                            ty = tx;
                            tx = 0;
                        }
                        var slideOpacity = swiper.params.fadeEffect.crossFade
                            ? Math.max(1 - Math.abs($slideEl[0].progress), 0)
                            : 1 + Math.min(Math.max($slideEl[0].progress, -1), 0);
                        $slideEl
                            .css({
                            opacity: slideOpacity,
                        })
                            .transform("translate3d(" + tx + "px, " + ty + "px, 0px)");
                    }
                },
                setTransition: function (duration) {
                    var swiper = this;
                    var slides = swiper.slides, $wrapperEl = swiper.$wrapperEl;
                    slides.transition(duration);
                    if (swiper.params.virtualTranslate && duration !== 0) {
                        var eventTriggered_1 = false;
                        slides.transitionEnd(function () {
                            if (eventTriggered_1)
                                return;
                            if (!swiper || swiper.destroyed)
                                return;
                            eventTriggered_1 = true;
                            swiper.animating = false;
                            var triggerEvents = ['webkitTransitionEnd', 'transitionend'];
                            for (var i = 0; i < triggerEvents.length; i += 1) {
                                $wrapperEl.trigger(triggerEvents[i]);
                            }
                        });
                    }
                },
            }
        };
    }
    Tab1Page = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-tab1',
            template: "\n  <ion-slides pager=\"true\" [options]=\"slideOpts\">\n    <ion-slide>\n      <h1>Slide 1</h1>\n    </ion-slide>\n    <ion-slide>\n      <h1>Slide 2</h1>\n    </ion-slide>\n    <ion-slide>\n      <h1>Slide 3</h1>\n    </ion-slide>\n  </ion-slides>\n",
            template: __webpack_require__(/*! ./tab1.page.html */ "./src/app/tab1/tab1.page.html"),
            styles: [__webpack_require__(/*! ./tab1.page.scss */ "./src/app/tab1/tab1.page.scss")]
        })
    ], Tab1Page);
    return Tab1Page;
}());



/***/ })

}]);
//# sourceMappingURL=tab1-tab1-module.js.map