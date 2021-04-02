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
    { path: 'deWoning', component: _de_woning_de_woning_component__WEBPACK_IMPORTED_MODULE_1__["DeWoningComponent"] },
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


class DeWoningComponent {
    constructor() { }
    ngOnInit() {
    }
}
DeWoningComponent.ɵfac = function DeWoningComponent_Factory(t) { return new (t || DeWoningComponent)(); };
DeWoningComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: DeWoningComponent, selectors: [["app-de-woning"]], decls: 3, vars: 0, consts: [["nz-image", "", "width", "200px", "nzSrc", "../../../../../assets/images/Dima klein (1).jpg", "alt", ""], ["nz-image", "", "width", "200px", "nzSrc", "../../../../../assets/images/Dima klein (2).jpg", "alt", ""]], template: function DeWoningComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "nz-image-group");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "img", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [ng_zorro_antd_image__WEBPACK_IMPORTED_MODULE_1__["NzImageGroupComponent"], ng_zorro_antd_image__WEBPACK_IMPORTED_MODULE_1__["NzImageDirective"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJkZS13b25pbmcuY29tcG9uZW50LmNzcyJ9 */"] });


/***/ })

}]);
//# sourceMappingURL=de-woning-de-woning-module.js.map