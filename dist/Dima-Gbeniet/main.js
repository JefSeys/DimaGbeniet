(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Repos\broker\DimaGbeniet\src\main.ts */"zUnb");


/***/ }),

/***/ "AytR":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "Sy1n":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _nav_nav_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./nav/nav.component */ "izVM");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");



class AppComponent {
    constructor() {
        this.title = 'Dima-Gbeniet';
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(); };
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 2, vars: 0, template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "app-nav");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "router-outlet");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_nav_nav_component__WEBPACK_IMPORTED_MODULE_1__["NavComponent"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterOutlet"]], styles: [".center[_ngcontent-%COMP%] {\r\n    text-align: center;\r\n    display: block;\r\n    margin-left: auto;\r\n    margin-right: auto;\r\n  }\r\n  \r\n  .centerDiv[_ngcontent-%COMP%] {\r\n    display: table;\r\n    margin: 0 auto;\r\n    padding-bottom: 10px;\r\n  }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksa0JBQWtCO0lBQ2xCLGNBQWM7SUFDZCxpQkFBaUI7SUFDakIsa0JBQWtCO0VBQ3BCOztFQUVBO0lBQ0UsY0FBYztJQUNkLGNBQWM7SUFDZCxvQkFBb0I7RUFDdEIiLCJmaWxlIjoiYXBwLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY2VudGVyIHtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgbWFyZ2luLWxlZnQ6IGF1dG87XHJcbiAgICBtYXJnaW4tcmlnaHQ6IGF1dG87XHJcbiAgfVxyXG4gIFxyXG4gIC5jZW50ZXJEaXYge1xyXG4gICAgZGlzcGxheTogdGFibGU7XHJcbiAgICBtYXJnaW46IDAgYXV0bztcclxuICAgIHBhZGRpbmctYm90dG9tOiAxMHB4O1xyXG4gIH1cclxuICAiXX0= */"] });


/***/ }),

/***/ "ZAI4":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app.component */ "Sy1n");
/* harmony import */ var ng_zorro_antd_i18n__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ng-zorro-antd/i18n */ "Rm4T");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_common_locales_nl__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/locales/nl */ "b6vB");
/* harmony import */ var _angular_common_locales_nl__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_angular_common_locales_nl__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/platform-browser/animations */ "R1ws");
/* harmony import */ var _ant_ant_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./ant/ant.module */ "rBh3");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./app-routing.module */ "vY5A");
/* harmony import */ var _nav_nav_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./nav/nav.component */ "izVM");
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! hammerjs */ "yLV6");
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(hammerjs__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var mousetrap__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! mousetrap */ "imBb");
/* harmony import */ var mousetrap__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(mousetrap__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _ks89_angular_modal_gallery__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @ks89/angular-modal-gallery */ "rHMi");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/core */ "fXoL");
















Object(_angular_common__WEBPACK_IMPORTED_MODULE_2__["registerLocaleData"])(_angular_common_locales_nl__WEBPACK_IMPORTED_MODULE_3___default.a);
class AppModule {
}
AppModule.ɵfac = function AppModule_Factory(t) { return new (t || AppModule)(); };
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_0__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵdefineInjector"]({ providers: [{ provide: ng_zorro_antd_i18n__WEBPACK_IMPORTED_MODULE_1__["NZ_I18N"], useValue: ng_zorro_antd_i18n__WEBPACK_IMPORTED_MODULE_1__["nl_BE"] }], imports: [[
            _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClientModule"],
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_6__["BrowserAnimationsModule"],
            _ant_ant_module__WEBPACK_IMPORTED_MODULE_7__["AntModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_8__["AppRoutingModule"],
            _ks89_angular_modal_gallery__WEBPACK_IMPORTED_MODULE_12__["GalleryModule"].forRoot()
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_0__["AppComponent"],
        _nav_nav_component__WEBPACK_IMPORTED_MODULE_9__["NavComponent"]], imports: [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
        _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClientModule"],
        _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_6__["BrowserAnimationsModule"],
        _ant_ant_module__WEBPACK_IMPORTED_MODULE_7__["AntModule"],
        _app_routing_module__WEBPACK_IMPORTED_MODULE_8__["AppRoutingModule"], _ks89_angular_modal_gallery__WEBPACK_IMPORTED_MODULE_12__["GalleryModule"]] }); })();


/***/ }),

/***/ "izVM":
/*!**************************************!*\
  !*** ./src/app/nav/nav.component.ts ***!
  \**************************************/
/*! exports provided: NavComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavComponent", function() { return NavComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var ng_zorro_antd_layout__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ng-zorro-antd/layout */ "yW9e");
/* harmony import */ var ng_zorro_antd_menu__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ng-zorro-antd/menu */ "Q8cG");
/* harmony import */ var ng_zorro_antd_core_transition_patch__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ng-zorro-antd/core/transition-patch */ "C2AL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var ng_zorro_antd_icon__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ng-zorro-antd/icon */ "FwiY");






const _c0 = ["*"];
class NavComponent {
    constructor() { }
    ngOnInit() {
    }
}
NavComponent.ɵfac = function NavComponent_Factory(t) { return new (t || NavComponent)(); };
NavComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: NavComponent, selectors: [["app-nav"]], ngContentSelectors: _c0, decls: 71, vars: 6, consts: [[1, "layout"], [2, "z-index", "1"], ["nz-menu", "", "nzMode", "horizontal", "nzTheme", "dark"], ["nz-menu-item", "", 3, "routerLink"], ["nz-icon", "", "nzType", "home"], ["nz-icon", "", "nzType", "picture"], ["nz-icon", "", "nzType", "info-circle"], ["nz-icon", "", "nzType", "search"], ["nz-icon", "", "nzType", "contacts"], ["nz-icon", "", "nzType", "safety-certificate"], [2, "z-index", "0"], [1, "footer-distributed"], [1, "footer-left"], [1, "footer-links"], ["routerLink", "hoofdscherm", 1, "link-1"], ["routerLink", "deWoning"], ["routerLink", "info"], ["routerLink", "ligging"], ["routerLink", "contact"], ["routerLink", "recensies"], [1, "footer-company-name"], [1, "footer-center"], [1, "fa", "fa-map-marker"], ["href", "https://www.google.com/maps/place/Vakantiehuis+DIMA+GBENIET/@51.1238131,2.6719386,17z/data=!3m1!4b1!4m5!3m4!1s0x47dcbd7230d3df7f:0x391686ca7425f734!8m2!3d51.1238131!4d2.6741273", "target", "_blank"], [2, "color", "#7395ae"], [1, "fa", "fa-phone"], ["href", "tel:0478/80 80 98", 1, "link"], [1, "fa", "fa-envelope"], ["href", "mailto:els@dima-gbeniet.be", 1, "link"], [1, "footer-right"], [1, "footer-company-about"]], template: function NavComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojectionDef"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "nz-layout", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "nz-header", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "ul", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "li", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "i", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Dima Gbeniet");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "li", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "i", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, " De Woning");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "li", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "i", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, " Info");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "li", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](16, "i", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, " Ligging");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "li", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](20, "i", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, " Contact");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "li", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](24, "i", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, " Recensies");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "nz-content", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"](28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "footer", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](32, "Vakantiewoning");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](34, " Dima Gbeniet");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "p", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "a", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](37, "Dima Gbeniet");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "a", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](39, "De Woning");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "a", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](41, "Info");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "a", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](43, "Ligging");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "a", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](45, "Contact");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "a", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](47, "Recensies");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "p", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](49, "Dima Gbeniet \u00A9 2021");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "div", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](52, "i", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "a", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](54, "p", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](55, "Yvonnelaan 25");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](56, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](57, "8670 Oostduinkerke");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](58, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](59, "i", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](60, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](61, "a", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](62, "0478/80 80 98");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](63, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](64, "i", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](65, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](66, "a", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](67, "els@dima-gbeniet.be");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](68, "div", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](69, "p", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](70, " Heeft u nog vragen of opmerkingen, neem dan zeker contact met ons op. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", "hoofdscherm");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", "deWoning");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", "info");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", "ligging");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", "contact");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", "recensies");
    } }, directives: [ng_zorro_antd_layout__WEBPACK_IMPORTED_MODULE_1__["NzLayoutComponent"], ng_zorro_antd_layout__WEBPACK_IMPORTED_MODULE_1__["NzHeaderComponent"], ng_zorro_antd_menu__WEBPACK_IMPORTED_MODULE_2__["NzMenuDirective"], ng_zorro_antd_core_transition_patch__WEBPACK_IMPORTED_MODULE_3__["ɵNzTransitionPatchDirective"], ng_zorro_antd_menu__WEBPACK_IMPORTED_MODULE_2__["NzMenuItemDirective"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterLink"], ng_zorro_antd_icon__WEBPACK_IMPORTED_MODULE_5__["NzIconDirective"], ng_zorro_antd_layout__WEBPACK_IMPORTED_MODULE_1__["NzContentComponent"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterLinkWithHref"]], styles: ["span[_ngcontent-%COMP%]{\r\n  color: rgba(255, 255, 255, 0.65);\r\n}\r\n      \r\n      \r\n      nz-header[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]{\r\n        width: 16.6%;\r\n        font-size: 120%;\r\n        text-align: center;\r\n      }\r\n      \r\n      \r\n      .ant-layout-header[_ngcontent-%COMP%]{\r\n        padding: 0px;\r\n      }\r\n      \r\n      \r\n      .layout[_ngcontent-%COMP%] {\r\n        min-height: 100vh;\r\n      }\r\n      \r\n      \r\n      .logo[_ngcontent-%COMP%] {\r\n        width: 120px;\r\n        height: 31px;\r\n        background: rgba(255, 255, 255, 0.2);\r\n        margin: 16px 24px 16px 0;\r\n        float: left;\r\n      }\r\n      \r\n      \r\n      nz-header[_ngcontent-%COMP%] {\r\n        position: fixed;\r\n        width: 100%;\r\n      }\r\n      \r\n      \r\n      [nz-menu][_ngcontent-%COMP%] {\r\n        line-height: 64px;\r\n      }\r\n      \r\n      \r\n      nz-content[_ngcontent-%COMP%] {\r\n        margin-top: 64px;\r\n      }\r\n      \r\n      \r\n      nz-breadcrumb[_ngcontent-%COMP%] {\r\n        margin: 16px 0;\r\n      }\r\n      \r\n      \r\n      .inner-content[_ngcontent-%COMP%] {\r\n        background: #fff;\r\n        padding: 24px;\r\n        min-height: 380px;\r\n      }\r\n      \r\n      \r\n      nz-footer[_ngcontent-%COMP%] {\r\n        text-align: center;\r\n      }\r\n      \r\n      \r\n      .ant-layout-header[_ngcontent-%COMP%], .ant-menu.ant-menu-dark[_ngcontent-%COMP%]{\r\n        background: #2b6767;\r\n      }\r\n      \r\n      \r\n      \r\n      \r\n      \r\n      footer[_ngcontent-%COMP%]{\r\n        margin-top: 50px;\r\n      }\r\n      \r\n      \r\n      section[_ngcontent-%COMP%] {\r\n    width: 100%;\r\n    display: inline-block;\r\n    background: #333;\r\n    height: 50vh;\r\n    text-align: center;\r\n    font-size: 22px;\r\n    font-weight: 700;\r\n    text-decoration: underline;\r\n  }\r\n      \r\n      \r\n      .footer-distributed[_ngcontent-%COMP%] {\r\n    background: #5d5c60;\r\n    box-shadow: 0 1px 1px 0 rgba(0, 0, 0, 0.12);\r\n    box-sizing: border-box;\r\n    width: 100%;\r\n    text-align: left;\r\n    font: bold 16px sans-serif;\r\n    padding: 55px 50px;\r\n  }\r\n      \r\n      \r\n      .footer-distributed[_ngcontent-%COMP%]   .footer-left[_ngcontent-%COMP%], .footer-distributed[_ngcontent-%COMP%]   .footer-center[_ngcontent-%COMP%], .footer-distributed[_ngcontent-%COMP%]   .footer-right[_ngcontent-%COMP%] {\r\n    display: inline-block;\r\n    vertical-align: top;\r\n  }\r\n      \r\n      \r\n      \r\n      \r\n      \r\n      .footer-distributed[_ngcontent-%COMP%]   .footer-left[_ngcontent-%COMP%] {\r\n    width: 40%;\r\n  }\r\n      \r\n      \r\n      \r\n      \r\n      \r\n      .footer-distributed[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\r\n    color: #ffffff;\r\n    font: normal 36px Helvetica, cursive;\r\n    margin: 0;\r\n  }\r\n      \r\n      \r\n      .footer-distributed[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\r\n    color: #7395ae;\r\n  }\r\n      \r\n      \r\n      \r\n      \r\n      \r\n      .footer-distributed[_ngcontent-%COMP%]   .footer-links[_ngcontent-%COMP%] {\r\n    color: #ffffff;\r\n    margin: 20px 0 12px;\r\n    padding: 0;\r\n  }\r\n      \r\n      \r\n      .footer-distributed[_ngcontent-%COMP%]   .footer-links[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\r\n    display: inline-block;\r\n    line-height: 1.8;\r\n    font-weight: 400;\r\n    text-decoration: none;\r\n    color: inherit;\r\n    margin-right: 5px;\r\n  }\r\n      \r\n      \r\n      .footer-distributed[_ngcontent-%COMP%]   .footer-company-name[_ngcontent-%COMP%] {\r\n    color: #222;\r\n    font-size: 14px;\r\n    font-weight: normal;\r\n    margin: 0;\r\n  }\r\n      \r\n      \r\n      \r\n      \r\n      \r\n      .footer-distributed[_ngcontent-%COMP%]   .footer-center[_ngcontent-%COMP%] {\r\n    width: 35%;\r\n  }\r\n      \r\n      \r\n      .footer-distributed[_ngcontent-%COMP%]   .footer-center[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\r\n    background-color: #33383b;\r\n    color: #ffffff;\r\n    font-size: 25px;\r\n    width: 40px;\r\n    height: 40px;\r\n    border-radius: 50%;\r\n    text-align: center;\r\n    line-height: 42px;\r\n    margin: 10px 15px;\r\n    vertical-align: middle;\r\n  }\r\n      \r\n      \r\n      .footer-distributed[_ngcontent-%COMP%]   .footer-center[_ngcontent-%COMP%]   i.fa-envelope[_ngcontent-%COMP%] {\r\n    font-size: 17px;\r\n    line-height: 38px;\r\n  }\r\n      \r\n      \r\n      .footer-distributed[_ngcontent-%COMP%]   .footer-center[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\r\n    display: inline-block;\r\n    color: #ffffff;\r\n    font-weight: 400;\r\n    vertical-align: middle;\r\n    margin: 0;\r\n  }\r\n      \r\n      \r\n      .footer-distributed[_ngcontent-%COMP%]   .footer-center[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\r\n    display: block;\r\n    font-weight: normal;\r\n    font-size: 14px;\r\n    line-height: 2;\r\n  }\r\n      \r\n      \r\n      .footer-distributed[_ngcontent-%COMP%]   .footer-center[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\r\n    color: #7395ae;\r\n    text-decoration: none;\r\n  }\r\n      \r\n      \r\n      .footer-distributed[_ngcontent-%COMP%]   .footer-links[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:before {\r\n    content: \"|\";\r\n    font-weight: 300;\r\n    font-size: 20px;\r\n    left: 0;\r\n    color: #fff;\r\n    display: inline-block;\r\n    padding-right: 5px;\r\n  }\r\n      \r\n      \r\n      .footer-distributed[_ngcontent-%COMP%]   .footer-links[_ngcontent-%COMP%]   .link-1[_ngcontent-%COMP%]:before {\r\n    content: none;\r\n  }\r\n      \r\n      \r\n      \r\n      \r\n      \r\n      .footer-distributed[_ngcontent-%COMP%]   .footer-right[_ngcontent-%COMP%] {\r\n    width: 20%;\r\n  }\r\n      \r\n      \r\n      .footer-distributed[_ngcontent-%COMP%]   .footer-company-about[_ngcontent-%COMP%] {\r\n    line-height: 20px;\r\n    color: #7395ae;\r\n    font-size: 13px;\r\n    font-weight: normal;\r\n    margin: 0;\r\n  }\r\n      \r\n      \r\n      .footer-distributed[_ngcontent-%COMP%]   .footer-company-about[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\r\n    display: block;\r\n    color: #ffffff;\r\n    font-size: 14px;\r\n    font-weight: bold;\r\n    margin-bottom: 20px;\r\n  }\r\n      \r\n      \r\n      .footer-distributed[_ngcontent-%COMP%]   .footer-icons[_ngcontent-%COMP%] {\r\n    margin-top: 10px;\r\n  }\r\n      \r\n      \r\n      .footer-distributed[_ngcontent-%COMP%]   .footer-icons[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\r\n    display: inline-block;\r\n    width: 35px;\r\n    height: 35px;\r\n    cursor: pointer;\r\n    background-color: #33383b;\r\n    border-radius: 2px;\r\n  \r\n    font-size: 20px;\r\n    color: #ffffff;\r\n    text-align: center;\r\n    line-height: 35px;\r\n  }\r\n      \r\n      \r\n      @media (max-width: 1100px) {\r\n    body[_ngcontent-%COMP%]{\r\n      font-size: 130%;\r\n    }\r\n    .footer-distributed[_ngcontent-%COMP%] {\r\n      font: bold 14px sans-serif;\r\n      font-size: 120%;\r\n    }\r\n  \r\n    .footer-distributed[_ngcontent-%COMP%]   .footer-left[_ngcontent-%COMP%], .footer-distributed[_ngcontent-%COMP%]   .footer-center[_ngcontent-%COMP%], .footer-distributed[_ngcontent-%COMP%]   .footer-right[_ngcontent-%COMP%] {\r\n      display: block;\r\n      width: 100%;\r\n      margin-bottom: 40px;\r\n      text-align: center;\r\n    }\r\n  \r\n    .footer-distributed[_ngcontent-%COMP%]   .footer-center[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\r\n      margin-left: 0;\r\n    }\r\n    nz-header[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]{\r\n      font-size: 100%;\r\n    }\r\n  }\r\n      \r\n      \r\n      @media (max-width: 900px) {\r\n    nz-header[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   i[_ngcontent-%COMP%]{\r\n      display: none;\r\n    }\r\n  }\r\n      \r\n      \r\n      @media (max-width: 700px) {\r\n    nz-header[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   i[_ngcontent-%COMP%]{\r\n      display: inline-block;\r\n    }\r\n    nz-header[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{\r\n      display: none;\r\n    }\r\n  }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5hdi5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsZ0NBQWdDO0FBQ2xDOzs7TUFHTTtRQUNFLFlBQVk7UUFDWixlQUFlO1FBQ2Ysa0JBQWtCO01BQ3BCOzs7TUFFQTtRQUNFLFlBQVk7TUFDZDs7O01BRUE7UUFDRSxpQkFBaUI7TUFDbkI7OztNQUVBO1FBQ0UsWUFBWTtRQUNaLFlBQVk7UUFDWixvQ0FBb0M7UUFDcEMsd0JBQXdCO1FBQ3hCLFdBQVc7TUFDYjs7O01BRUE7UUFDRSxlQUFlO1FBQ2YsV0FBVztNQUNiOzs7TUFFQTtRQUNFLGlCQUFpQjtNQUNuQjs7O01BRUE7UUFDRSxnQkFBZ0I7TUFDbEI7OztNQUVBO1FBQ0UsY0FBYztNQUNoQjs7O01BRUE7UUFDRSxnQkFBZ0I7UUFDaEIsYUFBYTtRQUNiLGlCQUFpQjtNQUNuQjs7O01BRUE7UUFDRSxrQkFBa0I7TUFDcEI7OztNQUVBO1FBQ0UsbUJBQW1CO01BQ3JCOzs7TUFDSSxXQUFXOzs7TUFFakI7UUFDSSxnQkFBZ0I7TUFDbEI7OztNQUNKO0lBQ0UsV0FBVztJQUNYLHFCQUFxQjtJQUNyQixnQkFBZ0I7SUFDaEIsWUFBWTtJQUNaLGtCQUFrQjtJQUNsQixlQUFlO0lBQ2YsZ0JBQWdCO0lBQ2hCLDBCQUEwQjtFQUM1Qjs7O01BRUE7SUFDRSxtQkFBbUI7SUFDbkIsMkNBQTJDO0lBQzNDLHNCQUFzQjtJQUN0QixXQUFXO0lBQ1gsZ0JBQWdCO0lBQ2hCLDBCQUEwQjtJQUMxQixrQkFBa0I7RUFDcEI7OztNQUVBOzs7SUFHRSxxQkFBcUI7SUFDckIsbUJBQW1CO0VBQ3JCOzs7TUFFQSxnQkFBZ0I7OztNQUVoQjtJQUNFLFVBQVU7RUFDWjs7O01BRUEscUJBQXFCOzs7TUFFckI7SUFDRSxjQUFjO0lBQ2Qsb0NBQW9DO0lBQ3BDLFNBQVM7RUFDWDs7O01BRUE7SUFDRSxjQUFjO0VBQ2hCOzs7TUFFQSxpQkFBaUI7OztNQUVqQjtJQUNFLGNBQWM7SUFDZCxtQkFBbUI7SUFDbkIsVUFBVTtFQUNaOzs7TUFFQTtJQUNFLHFCQUFxQjtJQUNyQixnQkFBZ0I7SUFDaEIsZ0JBQWdCO0lBQ2hCLHFCQUFxQjtJQUNyQixjQUFjO0lBQ2QsaUJBQWlCO0VBQ25COzs7TUFFQTtJQUNFLFdBQVc7SUFDWCxlQUFlO0lBQ2YsbUJBQW1CO0lBQ25CLFNBQVM7RUFDWDs7O01BRUEsa0JBQWtCOzs7TUFFbEI7SUFDRSxVQUFVO0VBQ1o7OztNQUVBO0lBQ0UseUJBQXlCO0lBQ3pCLGNBQWM7SUFDZCxlQUFlO0lBQ2YsV0FBVztJQUNYLFlBQVk7SUFDWixrQkFBa0I7SUFDbEIsa0JBQWtCO0lBQ2xCLGlCQUFpQjtJQUNqQixpQkFBaUI7SUFDakIsc0JBQXNCO0VBQ3hCOzs7TUFFQTtJQUNFLGVBQWU7SUFDZixpQkFBaUI7RUFDbkI7OztNQUVBO0lBQ0UscUJBQXFCO0lBQ3JCLGNBQWM7SUFDZCxnQkFBZ0I7SUFDaEIsc0JBQXNCO0lBQ3RCLFNBQVM7RUFDWDs7O01BRUE7SUFDRSxjQUFjO0lBQ2QsbUJBQW1CO0lBQ25CLGVBQWU7SUFDZixjQUFjO0VBQ2hCOzs7TUFFQTtJQUNFLGNBQWM7SUFDZCxxQkFBcUI7RUFDdkI7OztNQUVBO0lBQ0UsWUFBWTtJQUNaLGdCQUFnQjtJQUNoQixlQUFlO0lBQ2YsT0FBTztJQUNQLFdBQVc7SUFDWCxxQkFBcUI7SUFDckIsa0JBQWtCO0VBQ3BCOzs7TUFFQTtJQUNFLGFBQWE7RUFDZjs7O01BRUEsaUJBQWlCOzs7TUFFakI7SUFDRSxVQUFVO0VBQ1o7OztNQUVBO0lBQ0UsaUJBQWlCO0lBQ2pCLGNBQWM7SUFDZCxlQUFlO0lBQ2YsbUJBQW1CO0lBQ25CLFNBQVM7RUFDWDs7O01BRUE7SUFDRSxjQUFjO0lBQ2QsY0FBYztJQUNkLGVBQWU7SUFDZixpQkFBaUI7SUFDakIsbUJBQW1CO0VBQ3JCOzs7TUFFQTtJQUNFLGdCQUFnQjtFQUNsQjs7O01BRUE7SUFDRSxxQkFBcUI7SUFDckIsV0FBVztJQUNYLFlBQVk7SUFDWixlQUFlO0lBQ2YseUJBQXlCO0lBQ3pCLGtCQUFrQjs7SUFFbEIsZUFBZTtJQUNmLGNBQWM7SUFDZCxrQkFBa0I7SUFDbEIsaUJBQWlCO0VBQ25COzs7TUFHQTtJQUNFO01BQ0UsZUFBZTtJQUNqQjtJQUNBO01BQ0UsMEJBQTBCO01BQzFCLGVBQWU7SUFDakI7O0lBRUE7OztNQUdFLGNBQWM7TUFDZCxXQUFXO01BQ1gsbUJBQW1CO01BQ25CLGtCQUFrQjtJQUNwQjs7SUFFQTtNQUNFLGNBQWM7SUFDaEI7SUFDQTtNQUNFLGVBQWU7SUFDakI7RUFDRjs7O01BRUE7SUFDRTtNQUNFLGFBQWE7SUFDZjtFQUNGOzs7TUFFQTtJQUNFO01BQ0UscUJBQXFCO0lBQ3ZCO0lBQ0E7TUFDRSxhQUFhO0lBQ2Y7RUFDRiIsImZpbGUiOiJuYXYuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbInNwYW57XHJcbiAgY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC42NSk7XHJcbn1cclxuICAgICAgXHJcbiAgICAgIFxyXG4gICAgICBuei1oZWFkZXIgbGl7XHJcbiAgICAgICAgd2lkdGg6IDE2LjYlO1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMTIwJTtcclxuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIC5hbnQtbGF5b3V0LWhlYWRlcntcclxuICAgICAgICBwYWRkaW5nOiAwcHg7XHJcbiAgICAgIH1cclxuICAgICAgXHJcbiAgICAgIC5sYXlvdXQge1xyXG4gICAgICAgIG1pbi1oZWlnaHQ6IDEwMHZoO1xyXG4gICAgICB9XHJcblxyXG4gICAgICAubG9nbyB7XHJcbiAgICAgICAgd2lkdGg6IDEyMHB4O1xyXG4gICAgICAgIGhlaWdodDogMzFweDtcclxuICAgICAgICBiYWNrZ3JvdW5kOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMik7XHJcbiAgICAgICAgbWFyZ2luOiAxNnB4IDI0cHggMTZweCAwO1xyXG4gICAgICAgIGZsb2F0OiBsZWZ0O1xyXG4gICAgICB9XHJcblxyXG4gICAgICBuei1oZWFkZXIge1xyXG4gICAgICAgIHBvc2l0aW9uOiBmaXhlZDtcclxuICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgfVxyXG5cclxuICAgICAgW256LW1lbnVdIHtcclxuICAgICAgICBsaW5lLWhlaWdodDogNjRweDtcclxuICAgICAgfVxyXG5cclxuICAgICAgbnotY29udGVudCB7XHJcbiAgICAgICAgbWFyZ2luLXRvcDogNjRweDtcclxuICAgICAgfVxyXG5cclxuICAgICAgbnotYnJlYWRjcnVtYiB7XHJcbiAgICAgICAgbWFyZ2luOiAxNnB4IDA7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIC5pbm5lci1jb250ZW50IHtcclxuICAgICAgICBiYWNrZ3JvdW5kOiAjZmZmO1xyXG4gICAgICAgIHBhZGRpbmc6IDI0cHg7XHJcbiAgICAgICAgbWluLWhlaWdodDogMzgwcHg7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIG56LWZvb3RlciB7XHJcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICB9XHJcblxyXG4gICAgICAuYW50LWxheW91dC1oZWFkZXIsIC5hbnQtbWVudS5hbnQtbWVudS1kYXJre1xyXG4gICAgICAgIGJhY2tncm91bmQ6ICMyYjY3Njc7XHJcbiAgICAgIH1cclxuICAgICAgICAgIC8qIEZvb3RlciAqL1xyXG5cclxuICAgIGZvb3RlcntcclxuICAgICAgICBtYXJnaW4tdG9wOiA1MHB4O1xyXG4gICAgICB9XHJcbiAgc2VjdGlvbiB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgIGJhY2tncm91bmQ6ICMzMzM7XHJcbiAgICBoZWlnaHQ6IDUwdmg7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBmb250LXNpemU6IDIycHg7XHJcbiAgICBmb250LXdlaWdodDogNzAwO1xyXG4gICAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XHJcbiAgfVxyXG4gIFxyXG4gIC5mb290ZXItZGlzdHJpYnV0ZWQge1xyXG4gICAgYmFja2dyb3VuZDogIzVkNWM2MDtcclxuICAgIGJveC1zaGFkb3c6IDAgMXB4IDFweCAwIHJnYmEoMCwgMCwgMCwgMC4xMik7XHJcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICB0ZXh0LWFsaWduOiBsZWZ0O1xyXG4gICAgZm9udDogYm9sZCAxNnB4IHNhbnMtc2VyaWY7XHJcbiAgICBwYWRkaW5nOiA1NXB4IDUwcHg7XHJcbiAgfVxyXG4gIFxyXG4gIC5mb290ZXItZGlzdHJpYnV0ZWQgLmZvb3Rlci1sZWZ0LFxyXG4gIC5mb290ZXItZGlzdHJpYnV0ZWQgLmZvb3Rlci1jZW50ZXIsXHJcbiAgLmZvb3Rlci1kaXN0cmlidXRlZCAuZm9vdGVyLXJpZ2h0IHtcclxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgIHZlcnRpY2FsLWFsaWduOiB0b3A7XHJcbiAgfVxyXG4gIFxyXG4gIC8qIEZvb3RlciBsZWZ0ICovXHJcbiAgXHJcbiAgLmZvb3Rlci1kaXN0cmlidXRlZCAuZm9vdGVyLWxlZnQge1xyXG4gICAgd2lkdGg6IDQwJTtcclxuICB9XHJcbiAgXHJcbiAgLyogVGhlIGNvbXBhbnkgbG9nbyAqL1xyXG4gIFxyXG4gIC5mb290ZXItZGlzdHJpYnV0ZWQgaDMge1xyXG4gICAgY29sb3I6ICNmZmZmZmY7XHJcbiAgICBmb250OiBub3JtYWwgMzZweCBIZWx2ZXRpY2EsIGN1cnNpdmU7XHJcbiAgICBtYXJnaW46IDA7XHJcbiAgfVxyXG4gIFxyXG4gIC5mb290ZXItZGlzdHJpYnV0ZWQgaDMgc3BhbiB7XHJcbiAgICBjb2xvcjogIzczOTVhZTtcclxuICB9XHJcbiAgXHJcbiAgLyogRm9vdGVyIGxpbmtzICovXHJcbiAgXHJcbiAgLmZvb3Rlci1kaXN0cmlidXRlZCAuZm9vdGVyLWxpbmtzIHtcclxuICAgIGNvbG9yOiAjZmZmZmZmO1xyXG4gICAgbWFyZ2luOiAyMHB4IDAgMTJweDtcclxuICAgIHBhZGRpbmc6IDA7XHJcbiAgfVxyXG4gIFxyXG4gIC5mb290ZXItZGlzdHJpYnV0ZWQgLmZvb3Rlci1saW5rcyBhIHtcclxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgIGxpbmUtaGVpZ2h0OiAxLjg7XHJcbiAgICBmb250LXdlaWdodDogNDAwO1xyXG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gICAgY29sb3I6IGluaGVyaXQ7XHJcbiAgICBtYXJnaW4tcmlnaHQ6IDVweDtcclxuICB9XHJcbiAgXHJcbiAgLmZvb3Rlci1kaXN0cmlidXRlZCAuZm9vdGVyLWNvbXBhbnktbmFtZSB7XHJcbiAgICBjb2xvcjogIzIyMjtcclxuICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICAgIGZvbnQtd2VpZ2h0OiBub3JtYWw7XHJcbiAgICBtYXJnaW46IDA7XHJcbiAgfVxyXG4gIFxyXG4gIC8qIEZvb3RlciBDZW50ZXIgKi9cclxuICBcclxuICAuZm9vdGVyLWRpc3RyaWJ1dGVkIC5mb290ZXItY2VudGVyIHtcclxuICAgIHdpZHRoOiAzNSU7XHJcbiAgfVxyXG4gIFxyXG4gIC5mb290ZXItZGlzdHJpYnV0ZWQgLmZvb3Rlci1jZW50ZXIgaSB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMzMzODNiO1xyXG4gICAgY29sb3I6ICNmZmZmZmY7XHJcbiAgICBmb250LXNpemU6IDI1cHg7XHJcbiAgICB3aWR0aDogNDBweDtcclxuICAgIGhlaWdodDogNDBweDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIGxpbmUtaGVpZ2h0OiA0MnB4O1xyXG4gICAgbWFyZ2luOiAxMHB4IDE1cHg7XHJcbiAgICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xyXG4gIH1cclxuICBcclxuICAuZm9vdGVyLWRpc3RyaWJ1dGVkIC5mb290ZXItY2VudGVyIGkuZmEtZW52ZWxvcGUge1xyXG4gICAgZm9udC1zaXplOiAxN3B4O1xyXG4gICAgbGluZS1oZWlnaHQ6IDM4cHg7XHJcbiAgfVxyXG4gIFxyXG4gIC5mb290ZXItZGlzdHJpYnV0ZWQgLmZvb3Rlci1jZW50ZXIgcCB7XHJcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICBjb2xvcjogI2ZmZmZmZjtcclxuICAgIGZvbnQtd2VpZ2h0OiA0MDA7XHJcbiAgICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xyXG4gICAgbWFyZ2luOiAwO1xyXG4gIH1cclxuICBcclxuICAuZm9vdGVyLWRpc3RyaWJ1dGVkIC5mb290ZXItY2VudGVyIHAgc3BhbiB7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuICAgIGZvbnQtd2VpZ2h0OiBub3JtYWw7XHJcbiAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgICBsaW5lLWhlaWdodDogMjtcclxuICB9XHJcbiAgXHJcbiAgLmZvb3Rlci1kaXN0cmlidXRlZCAuZm9vdGVyLWNlbnRlciBwIGEge1xyXG4gICAgY29sb3I6ICM3Mzk1YWU7XHJcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgfVxyXG4gIFxyXG4gIC5mb290ZXItZGlzdHJpYnV0ZWQgLmZvb3Rlci1saW5rcyBhOmJlZm9yZSB7XHJcbiAgICBjb250ZW50OiBcInxcIjtcclxuICAgIGZvbnQtd2VpZ2h0OiAzMDA7XHJcbiAgICBmb250LXNpemU6IDIwcHg7XHJcbiAgICBsZWZ0OiAwO1xyXG4gICAgY29sb3I6ICNmZmY7XHJcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICBwYWRkaW5nLXJpZ2h0OiA1cHg7XHJcbiAgfVxyXG4gIFxyXG4gIC5mb290ZXItZGlzdHJpYnV0ZWQgLmZvb3Rlci1saW5rcyAubGluay0xOmJlZm9yZSB7XHJcbiAgICBjb250ZW50OiBub25lO1xyXG4gIH1cclxuICBcclxuICAvKiBGb290ZXIgUmlnaHQgKi9cclxuICBcclxuICAuZm9vdGVyLWRpc3RyaWJ1dGVkIC5mb290ZXItcmlnaHQge1xyXG4gICAgd2lkdGg6IDIwJTtcclxuICB9XHJcbiAgXHJcbiAgLmZvb3Rlci1kaXN0cmlidXRlZCAuZm9vdGVyLWNvbXBhbnktYWJvdXQge1xyXG4gICAgbGluZS1oZWlnaHQ6IDIwcHg7XHJcbiAgICBjb2xvcjogIzczOTVhZTtcclxuICAgIGZvbnQtc2l6ZTogMTNweDtcclxuICAgIGZvbnQtd2VpZ2h0OiBub3JtYWw7XHJcbiAgICBtYXJnaW46IDA7XHJcbiAgfVxyXG4gIFxyXG4gIC5mb290ZXItZGlzdHJpYnV0ZWQgLmZvb3Rlci1jb21wYW55LWFib3V0IHNwYW4ge1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICBjb2xvcjogI2ZmZmZmZjtcclxuICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMjBweDtcclxuICB9XHJcbiAgXHJcbiAgLmZvb3Rlci1kaXN0cmlidXRlZCAuZm9vdGVyLWljb25zIHtcclxuICAgIG1hcmdpbi10b3A6IDEwcHg7XHJcbiAgfVxyXG4gIFxyXG4gIC5mb290ZXItZGlzdHJpYnV0ZWQgLmZvb3Rlci1pY29ucyBhIHtcclxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgIHdpZHRoOiAzNXB4O1xyXG4gICAgaGVpZ2h0OiAzNXB4O1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzMzMzgzYjtcclxuICAgIGJvcmRlci1yYWRpdXM6IDJweDtcclxuICBcclxuICAgIGZvbnQtc2l6ZTogMjBweDtcclxuICAgIGNvbG9yOiAjZmZmZmZmO1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgbGluZS1oZWlnaHQ6IDM1cHg7XHJcbiAgfVxyXG5cclxuICBcclxuICBAbWVkaWEgKG1heC13aWR0aDogMTEwMHB4KSB7XHJcbiAgICBib2R5e1xyXG4gICAgICBmb250LXNpemU6IDEzMCU7XHJcbiAgICB9XHJcbiAgICAuZm9vdGVyLWRpc3RyaWJ1dGVkIHtcclxuICAgICAgZm9udDogYm9sZCAxNHB4IHNhbnMtc2VyaWY7XHJcbiAgICAgIGZvbnQtc2l6ZTogMTIwJTtcclxuICAgIH1cclxuICBcclxuICAgIC5mb290ZXItZGlzdHJpYnV0ZWQgLmZvb3Rlci1sZWZ0LFxyXG4gICAgLmZvb3Rlci1kaXN0cmlidXRlZCAuZm9vdGVyLWNlbnRlcixcclxuICAgIC5mb290ZXItZGlzdHJpYnV0ZWQgLmZvb3Rlci1yaWdodCB7XHJcbiAgICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgbWFyZ2luLWJvdHRvbTogNDBweDtcclxuICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgfVxyXG4gIFxyXG4gICAgLmZvb3Rlci1kaXN0cmlidXRlZCAuZm9vdGVyLWNlbnRlciBpIHtcclxuICAgICAgbWFyZ2luLWxlZnQ6IDA7XHJcbiAgICB9XHJcbiAgICBuei1oZWFkZXIgbGl7XHJcbiAgICAgIGZvbnQtc2l6ZTogMTAwJTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIEBtZWRpYSAobWF4LXdpZHRoOiA5MDBweCkge1xyXG4gICAgbnotaGVhZGVyIGxpIGl7XHJcbiAgICAgIGRpc3BsYXk6IG5vbmU7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBAbWVkaWEgKG1heC13aWR0aDogNzAwcHgpIHtcclxuICAgIG56LWhlYWRlciBsaSBpe1xyXG4gICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICB9XHJcbiAgICBuei1oZWFkZXIgbGkgc3BhbntcclxuICAgICAgZGlzcGxheTogbm9uZTtcclxuICAgIH1cclxuICB9Il19 */"] });


/***/ }),

/***/ "rBh3":
/*!***********************************!*\
  !*** ./src/app/ant/ant.module.ts ***!
  \***********************************/
/*! exports provided: AntModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AntModule", function() { return AntModule; });
/* harmony import */ var ng_zorro_antd_button__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ng-zorro-antd/button */ "OzZK");
/* harmony import */ var ng_zorro_antd_menu__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ng-zorro-antd/menu */ "Q8cG");
/* harmony import */ var ng_zorro_antd_icon__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ng-zorro-antd/icon */ "FwiY");
/* harmony import */ var ng_zorro_antd_image__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ng-zorro-antd/image */ "6ekq");
/* harmony import */ var ng_zorro_antd_divider__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ng-zorro-antd/divider */ "5vDB");
/* harmony import */ var ng_zorro_antd_grid__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ng-zorro-antd/grid */ "B+r4");
/* harmony import */ var ng_zorro_antd_layout__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ng-zorro-antd/layout */ "yW9e");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ "fXoL");








class AntModule {
}
AntModule.ɵfac = function AntModule_Factory(t) { return new (t || AntModule)(); };
AntModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineNgModule"]({ type: AntModule });
AntModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineInjector"]({ imports: [ng_zorro_antd_button__WEBPACK_IMPORTED_MODULE_0__["NzButtonModule"],
        ng_zorro_antd_icon__WEBPACK_IMPORTED_MODULE_2__["NzIconModule"],
        ng_zorro_antd_menu__WEBPACK_IMPORTED_MODULE_1__["NzMenuModule"],
        ng_zorro_antd_image__WEBPACK_IMPORTED_MODULE_3__["NzImageModule"],
        ng_zorro_antd_divider__WEBPACK_IMPORTED_MODULE_4__["NzDividerModule"],
        ng_zorro_antd_grid__WEBPACK_IMPORTED_MODULE_5__["NzGridModule"],
        ng_zorro_antd_layout__WEBPACK_IMPORTED_MODULE_6__["NzLayoutModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵsetNgModuleScope"](AntModule, { exports: [ng_zorro_antd_button__WEBPACK_IMPORTED_MODULE_0__["NzButtonModule"],
        ng_zorro_antd_icon__WEBPACK_IMPORTED_MODULE_2__["NzIconModule"],
        ng_zorro_antd_menu__WEBPACK_IMPORTED_MODULE_1__["NzMenuModule"],
        ng_zorro_antd_image__WEBPACK_IMPORTED_MODULE_3__["NzImageModule"],
        ng_zorro_antd_divider__WEBPACK_IMPORTED_MODULE_4__["NzDividerModule"],
        ng_zorro_antd_grid__WEBPACK_IMPORTED_MODULE_5__["NzGridModule"],
        ng_zorro_antd_layout__WEBPACK_IMPORTED_MODULE_6__["NzLayoutModule"]] }); })();


/***/ }),

/***/ "vY5A":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");



const routes = [
    {
        path: 'hoofdscherm',
        loadChildren: () => __webpack_require__.e(/*! import() | hoofdscherm-hoofdscherm-module */ "hoofdscherm-hoofdscherm-module").then(__webpack_require__.bind(null, /*! ./hoofdscherm/hoofdscherm.module */ "tDQ6")).then(m => m.HoofdschermModule)
    },
    {
        path: 'deWoning',
        loadChildren: () => __webpack_require__.e(/*! import() | de-woning-de-woning-module */ "de-woning-de-woning-module").then(__webpack_require__.bind(null, /*! ./de-woning/de-woning.module */ "5MDG")).then(m => m.DeWoningModule)
    },
    {
        path: 'info',
        loadChildren: () => __webpack_require__.e(/*! import() | info-info-module */ "info-info-module").then(__webpack_require__.bind(null, /*! ./info/info.module */ "Efol")).then(m => m.InfoModule)
    },
    {
        path: 'ligging',
        loadChildren: () => __webpack_require__.e(/*! import() | ligging-ligging-module */ "ligging-ligging-module").then(__webpack_require__.bind(null, /*! ./ligging/ligging.module */ "HIHG")).then(m => m.LiggingModule)
    },
    {
        path: 'contact',
        loadChildren: () => __webpack_require__.e(/*! import() | contact-contact-module */ "contact-contact-module").then(__webpack_require__.bind(null, /*! ./contact/contact.module */ "BjQp")).then(m => m.ContactModule)
    },
    {
        path: 'recensies',
        loadChildren: () => __webpack_require__.e(/*! import() | recensies-recensies-module */ "recensies-recensies-module").then(__webpack_require__.bind(null, /*! ./recensies/recensies.module */ "7DQn")).then(m => m.RecensiesModule)
    },
    {
        path: '',
        loadChildren: () => __webpack_require__.e(/*! import() | hoofdscherm-hoofdscherm-module */ "hoofdscherm-hoofdscherm-module").then(__webpack_require__.bind(null, /*! ./hoofdscherm/hoofdscherm.module */ "tDQ6")).then(m => m.HoofdschermModule)
    },
    {
        path: '**',
        loadChildren: () => __webpack_require__.e(/*! import() | hoofdscherm-hoofdscherm-module */ "hoofdscherm-hoofdscherm-module").then(__webpack_require__.bind(null, /*! ./hoofdscherm/hoofdscherm.module */ "tDQ6")).then(m => m.HoofdschermModule)
    }
];
class AppRoutingModule {
}
AppRoutingModule.ɵfac = function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); };
AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: AppRoutingModule });
AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forRoot(routes, { enableTracing: true })], _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]] }); })();


/***/ }),

/***/ "zUnb":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "ZAI4");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "AytR");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ "zn8P":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "zn8P";

/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map