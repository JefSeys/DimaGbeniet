(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["hoofdscherm-hoofdscherm-module"],{

/***/ "djsx":
/*!******************************************************************!*\
  !*** ./src/app/hoofdscherm/hoofdscherm/hoofdscherm.component.ts ***!
  \******************************************************************/
/*! exports provided: HoofdschermComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HoofdschermComponent", function() { return HoofdschermComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");

class HoofdschermComponent {
    constructor() { }
    ngOnInit() {
    }
}
HoofdschermComponent.ɵfac = function HoofdschermComponent_Factory(t) { return new (t || HoofdschermComponent)(); };
HoofdschermComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: HoofdschermComponent, selectors: [["app-hoofdscherm"]], decls: 2, vars: 0, template: function HoofdschermComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "hoofdscherm works!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJob29mZHNjaGVybS5jb21wb25lbnQuY3NzIn0= */"] });


/***/ }),

/***/ "tDQ6":
/*!***************************************************!*\
  !*** ./src/app/hoofdscherm/hoofdscherm.module.ts ***!
  \***************************************************/
/*! exports provided: HoofdschermModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HoofdschermModule", function() { return HoofdschermModule; });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _hoofdscherm_hoofdscherm_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./hoofdscherm/hoofdscherm.component */ "djsx");
/* harmony import */ var _ant_ant_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../ant/ant.module */ "rBh3");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ "fXoL");






const routes = [
    { path: 'hoofdscherm', component: _hoofdscherm_hoofdscherm_component__WEBPACK_IMPORTED_MODULE_1__["HoofdschermComponent"] },
];
class HoofdschermModule {
}
HoofdschermModule.ɵfac = function HoofdschermModule_Factory(t) { return new (t || HoofdschermModule)(); };
HoofdschermModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineNgModule"]({ type: HoofdschermModule });
HoofdschermModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjector"]({ imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
            _ant_ant_module__WEBPACK_IMPORTED_MODULE_2__["AntModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(routes)
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵsetNgModuleScope"](HoofdschermModule, { declarations: [_hoofdscherm_hoofdscherm_component__WEBPACK_IMPORTED_MODULE_1__["HoofdschermComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
        _ant_ant_module__WEBPACK_IMPORTED_MODULE_2__["AntModule"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"]] }); })();


/***/ })

}]);
//# sourceMappingURL=hoofdscherm-hoofdscherm-module.js.map