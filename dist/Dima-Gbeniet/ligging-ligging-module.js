(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["ligging-ligging-module"],{

/***/ "HIHG":
/*!*******************************************!*\
  !*** ./src/app/ligging/ligging.module.ts ***!
  \*******************************************/
/*! exports provided: LiggingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LiggingModule", function() { return LiggingModule; });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _ligging_ligging_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ligging/ligging.component */ "ZHQT");
/* harmony import */ var _ant_ant_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../ant/ant.module */ "rBh3");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ "fXoL");






const routes = [
    { path: '', component: _ligging_ligging_component__WEBPACK_IMPORTED_MODULE_1__["LiggingComponent"] },
];
class LiggingModule {
}
LiggingModule.ɵfac = function LiggingModule_Factory(t) { return new (t || LiggingModule)(); };
LiggingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineNgModule"]({ type: LiggingModule });
LiggingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjector"]({ imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
            _ant_ant_module__WEBPACK_IMPORTED_MODULE_2__["AntModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(routes)
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵsetNgModuleScope"](LiggingModule, { declarations: [_ligging_ligging_component__WEBPACK_IMPORTED_MODULE_1__["LiggingComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
        _ant_ant_module__WEBPACK_IMPORTED_MODULE_2__["AntModule"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"]] }); })();


/***/ }),

/***/ "ZHQT":
/*!******************************************************!*\
  !*** ./src/app/ligging/ligging/ligging.component.ts ***!
  \******************************************************/
/*! exports provided: LiggingComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LiggingComponent", function() { return LiggingComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");

class LiggingComponent {
    constructor() { }
    ngOnInit() {
    }
}
LiggingComponent.ɵfac = function LiggingComponent_Factory(t) { return new (t || LiggingComponent)(); };
LiggingComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: LiggingComponent, selectors: [["app-ligging"]], decls: 4, vars: 0, consts: [[1, "center"], [2, "width", "100%"], ["id", "maps", "width", "100%", "height", "600", "frameborder", "0", "scrolling", "no", "marginheight", "0", "marginwidth", "0", "src", "https://maps.google.com/maps?width=100%25&height=600&hl=nl&q=+(dima%20gbeniet)&t=&z=14&ie=UTF8&iwloc=B&output=embed"]], template: function LiggingComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h1", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Ligging");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "iframe", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJsaWdnaW5nLmNvbXBvbmVudC5jc3MifQ== */"] });


/***/ })

}]);
//# sourceMappingURL=ligging-ligging-module.js.map