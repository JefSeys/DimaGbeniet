(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["recensies-recensies-module"],{

/***/ "7DQn":
/*!***********************************************!*\
  !*** ./src/app/recensies/recensies.module.ts ***!
  \***********************************************/
/*! exports provided: RecensiesModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RecensiesModule", function() { return RecensiesModule; });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _recensies_recensies_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./recensies/recensies.component */ "XpIu");
/* harmony import */ var _ant_ant_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../ant/ant.module */ "rBh3");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ "fXoL");






const routes = [
    { path: '', component: _recensies_recensies_component__WEBPACK_IMPORTED_MODULE_1__["RecensiesComponent"] },
];
class RecensiesModule {
}
RecensiesModule.ɵfac = function RecensiesModule_Factory(t) { return new (t || RecensiesModule)(); };
RecensiesModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineNgModule"]({ type: RecensiesModule });
RecensiesModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjector"]({ imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
            _ant_ant_module__WEBPACK_IMPORTED_MODULE_2__["AntModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(routes)
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵsetNgModuleScope"](RecensiesModule, { declarations: [_recensies_recensies_component__WEBPACK_IMPORTED_MODULE_1__["RecensiesComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
        _ant_ant_module__WEBPACK_IMPORTED_MODULE_2__["AntModule"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"]] }); })();


/***/ }),

/***/ "XpIu":
/*!************************************************************!*\
  !*** ./src/app/recensies/recensies/recensies.component.ts ***!
  \************************************************************/
/*! exports provided: RecensiesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RecensiesComponent", function() { return RecensiesComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");

class RecensiesComponent {
    constructor() { }
    ngOnInit() {
    }
}
RecensiesComponent.ɵfac = function RecensiesComponent_Factory(t) { return new (t || RecensiesComponent)(); };
RecensiesComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: RecensiesComponent, selectors: [["app-recensies"]], decls: 2, vars: 0, template: function RecensiesComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "recensies works!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJyZWNlbnNpZXMuY29tcG9uZW50LmNzcyJ9 */"] });


/***/ })

}]);
//# sourceMappingURL=recensies-recensies-module.js.map