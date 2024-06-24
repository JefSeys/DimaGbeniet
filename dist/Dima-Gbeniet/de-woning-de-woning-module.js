(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["de-woning-de-woning-module"],{

/***/ "5MDG":
/*!***********************************************!*\
  !*** ./src/app/de-woning/de-woning.module.ts ***!
  \***********************************************/
/*! exports provided: DeWoningModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DeWoningModule", function() { return DeWoningModule; });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _de_woning_de_woning_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./de-woning/de-woning.component */ "EDD2");
/* harmony import */ var _ant_ant_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../ant/ant.module */ "rBh3");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ "fXoL");






const routes = [
    { path: '', component: _de_woning_de_woning_component__WEBPACK_IMPORTED_MODULE_1__["DeWoningComponent"] },
];
class DeWoningModule {
}
DeWoningModule.ɵfac = function DeWoningModule_Factory(t) { return new (t || DeWoningModule)(); };
DeWoningModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineNgModule"]({ type: DeWoningModule });
DeWoningModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjector"]({ imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
            _ant_ant_module__WEBPACK_IMPORTED_MODULE_2__["AntModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(routes)
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵsetNgModuleScope"](DeWoningModule, { declarations: [_de_woning_de_woning_component__WEBPACK_IMPORTED_MODULE_1__["DeWoningComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
        _ant_ant_module__WEBPACK_IMPORTED_MODULE_2__["AntModule"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"]] }); })();


/***/ }),

/***/ "EDD2":
/*!************************************************************!*\
  !*** ./src/app/de-woning/de-woning/de-woning.component.ts ***!
  \************************************************************/
/*! exports provided: DeWoningComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DeWoningComponent", function() { return DeWoningComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var ng_zorro_antd_image__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ng-zorro-antd/image */ "6ekq");
/* harmony import */ var ng_zorro_antd_divider__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ng-zorro-antd/divider */ "5vDB");



class DeWoningComponent {
    constructor() { }
    ngOnInit() {
    }
}
DeWoningComponent.ɵfac = function DeWoningComponent_Factory(t) { return new (t || DeWoningComponent)(); };
DeWoningComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: DeWoningComponent, selectors: [["app-de-woning"]], decls: 53, vars: 0, consts: [[1, "center"], [1, "centerDiv", 2, "width", "80%"], ["nzText", "Buiten"], [1, "rij", "centerD"], ["nz-image", "", "nzSrc", "assets/images/1.1.jpg", "alt", ""], ["nz-image", "", "nzSrc", "assets/images/1.2.jpg", "alt", ""], ["nz-image", "", "nzSrc", "assets/images/1.3.jpg", "alt", ""], ["nz-image", "", "nzSrc", "assets/images/1.4.jpg", "alt", ""], ["nz-image", "", "nzSrc", "assets/images/1.5.jpg", "alt", ""], ["nzText", "Leefkamer", 2, "font-size", "large"], ["nz-image", "", "nzSrc", "assets/images/2.2.jpg", "alt", ""], ["nz-image", "", "nzSrc", "assets/images/2.3.jpg", "alt", ""], ["nz-image", "", "nzSrc", "assets/images/2.4.jpg", "alt", ""], ["nz-image", "", "nzSrc", "assets/images/2.5.jpg", "alt", ""], ["nz-image", "", "nzSrc", "assets/images/2.6.jpg", "alt", ""], ["nz-image", "", "nzSrc", "assets/images/4.1.jpg", "alt", ""], ["nz-image", "", "nzSrc", "assets/images/1.6.jpg", "alt", ""], ["nz-image", "", "nzSrc", "assets/images/1.7.jpg", "alt", ""], ["nz-image", "", "nzSrc", "assets/images/2.1.jpg", "alt", ""], ["nzText", "Keuken"], ["nz-image", "", "nzSrc", "assets/images/3.1.jpg", "alt", ""], ["nz-image", "", "nzSrc", "assets/images/3.2.jpg", "alt", ""], ["nzText", "Slaap- en badkamers"], ["nz-image", "", "nzSrc", "assets/images/5.1.jpg", "alt", ""], ["nz-image", "", "nzSrc", "assets/images/5.2.jpg", "alt", ""], ["nz-image", "", "nzSrc", "assets/images/5.3.jpg", "alt", ""], ["nz-image", "", "nzSrc", "assets/images/5.4.jpg", "alt", ""], ["nz-image", "", "nzSrc", "assets/images/5.5.jpg", "alt", ""], ["nz-image", "", "nzSrc", "assets/images/5.6.jpg", "alt", ""], ["nz-image", "", "nzSrc", "assets/images/5.7.jpg", "alt", ""], ["nz-image", "", "nzSrc", "assets/images/5.8.jpg", "alt", ""], ["nz-image", "", "nzSrc", "assets/images/6.1.jpg", "alt", ""], ["nz-image", "", "nzSrc", "assets/images/6.2.jpg", "alt", ""], ["nzText", "Details"], ["nz-image", "", "nzSrc", "assets/images/7.0.jpg", "alt", ""], ["nz-image", "", "nzSrc", "assets/images/7.1.jpg", "alt", ""], ["nz-image", "", "nzSrc", "assets/images/7.2.jpg", "alt", ""]], template: function DeWoningComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h1", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "De Woning");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "p", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "4 slaapkamers");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "p", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "2 badkamers");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "p", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "3 toiletten");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "nz-image-group");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "nz-divider", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "img", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "img", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "img", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "img", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](16, "img", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](18, "nz-divider", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](20, "img", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](21, "img", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](22, "img", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](23, "img", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](24, "img", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](25, "img", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](26, "img", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](27, "img", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](28, "img", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](30, "nz-divider", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](32, "img", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](33, "img", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](35, "nz-divider", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](37, "img", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](38, "img", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](39, "img", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](40, "img", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](41, "img", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](42, "img", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](43, "img", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](44, "img", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](45, "img", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](46, "img", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](48, "nz-divider", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](50, "img", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](51, "img", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](52, "img", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [ng_zorro_antd_image__WEBPACK_IMPORTED_MODULE_1__["NzImageGroupComponent"], ng_zorro_antd_divider__WEBPACK_IMPORTED_MODULE_2__["NzDividerComponent"], ng_zorro_antd_image__WEBPACK_IMPORTED_MODULE_1__["NzImageDirective"]], styles: [".ant-divider-inner-text[_ngcontent-%COMP%]{\r\n  font-size: 180%;\r\n}\r\n\r\n.rij[_ngcontent-%COMP%]{\r\n    width: 80%;\r\n    overflow-x: auto;\r\n    white-space: nowrap;\r\n    margin-bottom: 20px;\r\n}\r\n\r\n.rij[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\r\n    margin: 5px;\r\n    height: 200px;\r\n}\r\n\r\n.center[_ngcontent-%COMP%] {\r\n    text-align: center;\r\n    display: block;\r\n    margin-left: auto;\r\n    margin-right: auto;\r\n  }\r\n\r\n.centerD[_ngcontent-%COMP%] {\r\n    margin: 0 auto;\r\n    padding-bottom: 10px;\r\n  }\r\n\r\n.ant-divider-horizontal.ant-divider-with-text[_ngcontent-%COMP%]{\r\n    border-top-color: rgb(87, 87, 87)\r\n  }\r\n\r\n\r\n\r\n[_ngcontent-%COMP%]::-webkit-scrollbar {\r\n  width: 20px;\r\n  height: 10px;\r\n}\r\n\r\n\r\n\r\n[_ngcontent-%COMP%]::-webkit-scrollbar-track {\r\n  box-shadow: inset 0 0 5px grey; \r\n  border-radius: 10px;\r\n}\r\n\r\n\r\n\r\n[_ngcontent-%COMP%]::-webkit-scrollbar-thumb {\r\n  background: darkgrey; \r\n  border-radius: 10px;\r\n}\r\n\r\n\r\n\r\n[_ngcontent-%COMP%]::-webkit-scrollbar-thumb:hover {\r\n  background: gray; \r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImRlLXdvbmluZy5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsZUFBZTtBQUNqQjs7QUFFQTtJQUNJLFVBQVU7SUFDVixnQkFBZ0I7SUFDaEIsbUJBQW1CO0lBQ25CLG1CQUFtQjtBQUN2Qjs7QUFFQTtJQUNJLFdBQVc7SUFDWCxhQUFhO0FBQ2pCOztBQUVBO0lBQ0ksa0JBQWtCO0lBQ2xCLGNBQWM7SUFDZCxpQkFBaUI7SUFDakIsa0JBQWtCO0VBQ3BCOztBQUVBO0lBQ0UsY0FBYztJQUNkLG9CQUFvQjtFQUN0Qjs7QUFFQTtJQUNFO0VBQ0Y7O0FBRUYsVUFBVTs7QUFDVjtFQUNFLFdBQVc7RUFDWCxZQUFZO0FBQ2Q7O0FBRUEsVUFBVTs7QUFDVjtFQUNFLDhCQUE4QjtFQUM5QixtQkFBbUI7QUFDckI7O0FBRUEsV0FBVzs7QUFDWDtFQUNFLG9CQUFvQjtFQUNwQixtQkFBbUI7QUFDckI7O0FBRUEsb0JBQW9COztBQUNwQjtFQUNFLGdCQUFnQjtBQUNsQiIsImZpbGUiOiJkZS13b25pbmcuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5hbnQtZGl2aWRlci1pbm5lci10ZXh0e1xyXG4gIGZvbnQtc2l6ZTogMTgwJTtcclxufVxyXG5cclxuLnJpantcclxuICAgIHdpZHRoOiA4MCU7XHJcbiAgICBvdmVyZmxvdy14OiBhdXRvO1xyXG4gICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcclxuICAgIG1hcmdpbi1ib3R0b206IDIwcHg7XHJcbn1cclxuXHJcbi5yaWogaW1nIHtcclxuICAgIG1hcmdpbjogNXB4O1xyXG4gICAgaGVpZ2h0OiAyMDBweDtcclxufVxyXG5cclxuLmNlbnRlciB7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuICAgIG1hcmdpbi1sZWZ0OiBhdXRvO1xyXG4gICAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xyXG4gIH1cclxuICBcclxuICAuY2VudGVyRCB7XHJcbiAgICBtYXJnaW46IDAgYXV0bztcclxuICAgIHBhZGRpbmctYm90dG9tOiAxMHB4O1xyXG4gIH1cclxuXHJcbiAgLmFudC1kaXZpZGVyLWhvcml6b250YWwuYW50LWRpdmlkZXItd2l0aC10ZXh0e1xyXG4gICAgYm9yZGVyLXRvcC1jb2xvcjogcmdiKDg3LCA4NywgODcpXHJcbiAgfVxyXG4gIFxyXG4vKiB3aWR0aCAqL1xyXG46Oi13ZWJraXQtc2Nyb2xsYmFyIHtcclxuICB3aWR0aDogMjBweDtcclxuICBoZWlnaHQ6IDEwcHg7XHJcbn1cclxuXHJcbi8qIFRyYWNrICovXHJcbjo6LXdlYmtpdC1zY3JvbGxiYXItdHJhY2sge1xyXG4gIGJveC1zaGFkb3c6IGluc2V0IDAgMCA1cHggZ3JleTsgXHJcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcclxufVxyXG4gXHJcbi8qIEhhbmRsZSAqL1xyXG46Oi13ZWJraXQtc2Nyb2xsYmFyLXRodW1iIHtcclxuICBiYWNrZ3JvdW5kOiBkYXJrZ3JleTsgXHJcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcclxufVxyXG5cclxuLyogSGFuZGxlIG9uIGhvdmVyICovXHJcbjo6LXdlYmtpdC1zY3JvbGxiYXItdGh1bWI6aG92ZXIge1xyXG4gIGJhY2tncm91bmQ6IGdyYXk7IFxyXG59Il19 */"] });


/***/ })

}]);
//# sourceMappingURL=de-woning-de-woning-module.js.map