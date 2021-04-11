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
/* harmony import */ var _ks89_angular_modal_gallery__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ks89/angular-modal-gallery */ "rHMi");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");



const _c0 = function () { return { visible: false }; };
const _c1 = function () { return { autoPlay: true, interval: 3000, pauseOnHover: true }; };
const _c2 = function () { return { maxHeight: "100%" }; };
class HoofdschermComponent {
    constructor() {
        this.imageIndex = 1;
        this.galleryId = 1;
        this.autoPlay = true;
        this.showArrows = true;
        this.showDots = true;
        this.imagesRect = [
            new _ks89_angular_modal_gallery__WEBPACK_IMPORTED_MODULE_0__["Image"](0, {
                img: 'assets/images/1.1.jpg',
                title: 'Voorkant',
                alt: 'Voorkant',
                description: 'Voorkant',
                ariaLabel: 'Voorkant'
            }, {
                img: 'assets/images/1.1.jpg',
                title: 'Voorkant',
                alt: 'Voorkant',
                description: 'Voorkant',
                ariaLabel: 'Voorkant'
            }),
            new _ks89_angular_modal_gallery__WEBPACK_IMPORTED_MODULE_0__["Image"](1, {
                img: 'assets/images/1.4.jpg',
                title: 'Tuin',
                alt: 'Tuin',
                description: 'Tuin',
                ariaLabel: 'Tuin'
            }, {
                img: 'assets/images/1.4.jpg',
                title: 'Tuin',
                alt: 'Tuin',
                description: 'Tuin',
                ariaLabel: 'Tuin'
            }),
            new _ks89_angular_modal_gallery__WEBPACK_IMPORTED_MODULE_0__["Image"](2, {
                img: 'assets/images/2.2.jpg',
                title: 'Leefruimte',
                alt: 'Leefruimte',
                description: 'Leefruimte',
                ariaLabel: 'Leefruimte'
            }, {
                img: 'assets/images/2.2.jpg',
                title: 'Leefruimte',
                alt: 'Leefruimte',
                description: 'Leefruimte',
                ariaLabel: 'Leefruimte'
            }),
            new _ks89_angular_modal_gallery__WEBPACK_IMPORTED_MODULE_0__["Image"](3, {
                img: 'assets/images/4.1.jpg',
                title: 'Zitkamer',
                alt: 'Zitkamer',
                description: 'Zitkamer',
                ariaLabel: 'Zitkamer'
            }, {
                img: 'assets/images/4.1.jpg',
                title: 'Zitkamer',
                alt: 'Zitkamer',
                description: 'Zitkamer',
                ariaLabel: 'Zitkamer'
            }),
            new _ks89_angular_modal_gallery__WEBPACK_IMPORTED_MODULE_0__["Image"](4, {
                img: 'assets/images/2.6.jpg',
                title: 'Leefruimte',
                alt: 'Leefruimte',
                description: 'Leefruimte',
                ariaLabel: 'Leefruimte'
            }, {
                img: 'assets/images/2.6.jpg',
                title: 'Leefruimte',
                alt: 'Leefruimte',
                description: 'Leefruimte',
                ariaLabel: 'Leefruimte'
            }),
            new _ks89_angular_modal_gallery__WEBPACK_IMPORTED_MODULE_0__["Image"](5, {
                img: 'assets/images/3.1.jpg',
                title: 'Keuken',
                alt: 'Keuken',
                description: 'Keuken',
                ariaLabel: 'Keuken'
            }, {
                img: 'assets/images/3.1.jpg',
                title: 'Keuken',
                alt: 'Keuken',
                description: 'Keuken',
                ariaLabel: 'Keuken'
            })
        ];
    }
    ngOnInit() {
    }
}
HoofdschermComponent.ɵfac = function HoofdschermComponent_Factory(t) { return new (t || HoofdschermComponent)(); };
HoofdschermComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: HoofdschermComponent, selectors: [["app-hoofdscherm"]], decls: 2, vars: 8, consts: [[1, "container"], [3, "id", "images", "previewConfig", "playConfig", "carouselConfig"]], template: function HoofdschermComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "ks-carousel", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("id", 100)("images", ctx.imagesRect)("previewConfig", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](5, _c0))("playConfig", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](6, _c1))("carouselConfig", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](7, _c2));
    } }, directives: [_ks89_angular_modal_gallery__WEBPACK_IMPORTED_MODULE_0__["ɵe"]], styles: [".projected[_ngcontent-%COMP%] {\r\n    color: white;\r\n    font-weight: 600;\r\n    font-size: 24px;\r\n    text-align: center;\r\n    position: absolute;\r\n    top: 10%;\r\n    width: 100%;\r\n    pointer-events: none;\r\n  }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImhvb2Zkc2NoZXJtLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxZQUFZO0lBQ1osZ0JBQWdCO0lBQ2hCLGVBQWU7SUFDZixrQkFBa0I7SUFDbEIsa0JBQWtCO0lBQ2xCLFFBQVE7SUFDUixXQUFXO0lBQ1gsb0JBQW9CO0VBQ3RCIiwiZmlsZSI6Imhvb2Zkc2NoZXJtLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIucHJvamVjdGVkIHtcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbiAgICBmb250LXNpemU6IDI0cHg7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB0b3A6IDEwJTtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgcG9pbnRlci1ldmVudHM6IG5vbmU7XHJcbiAgfSJdfQ== */"] });


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
/* harmony import */ var _ks89_angular_modal_gallery__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ks89/angular-modal-gallery */ "rHMi");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ "fXoL");







const routes = [
    { path: '', component: _hoofdscherm_hoofdscherm_component__WEBPACK_IMPORTED_MODULE_1__["HoofdschermComponent"] },
];
class HoofdschermModule {
}
HoofdschermModule.ɵfac = function HoofdschermModule_Factory(t) { return new (t || HoofdschermModule)(); };
HoofdschermModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineNgModule"]({ type: HoofdschermModule });
HoofdschermModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineInjector"]({ imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
            _ant_ant_module__WEBPACK_IMPORTED_MODULE_2__["AntModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(routes),
            _ks89_angular_modal_gallery__WEBPACK_IMPORTED_MODULE_4__["GalleryModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵsetNgModuleScope"](HoofdschermModule, { declarations: [_hoofdscherm_hoofdscherm_component__WEBPACK_IMPORTED_MODULE_1__["HoofdschermComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
        _ant_ant_module__WEBPACK_IMPORTED_MODULE_2__["AntModule"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"], _ks89_angular_modal_gallery__WEBPACK_IMPORTED_MODULE_4__["GalleryModule"]] }); })();


/***/ })

}]);
//# sourceMappingURL=hoofdscherm-hoofdscherm-module.js.map