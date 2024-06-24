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
/* harmony import */ var ng_zorro_antd_grid__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ng-zorro-antd/grid */ "B+r4");




const _c0 = function () { return { visible: false }; };
const _c1 = function () { return { autoPlay: true, interval: 3000, pauseOnHover: true }; };
const _c2 = function () { return { maxHeight: "100%" }; };
const _c3 = function () { return { xs: 8, sm: 16, md: 24, lg: 32 }; };
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
            }),
            new _ks89_angular_modal_gallery__WEBPACK_IMPORTED_MODULE_0__["Image"](6, {
                img: 'assets/images/c.jpg',
                title: 'Vroeger',
                alt: 'Vroeger',
                description: 'Vroeger',
                ariaLabel: 'Vroeger'
            }, {
                img: 'assets/images/c.jpg',
                title: 'Vroeger',
                alt: 'Vroeger',
                description: 'Vroeger',
                ariaLabel: 'Vroeger'
            })
        ];
    }
    ngOnInit() {
    }
}
HoofdschermComponent.ɵfac = function HoofdschermComponent_Factory(t) { return new (t || HoofdschermComponent)(); };
HoofdschermComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: HoofdschermComponent, selectors: [["app-hoofdscherm"]], decls: 18, vars: 12, consts: [[1, "center"], [1, "container", "centerDiv"], [3, "id", "images", "previewConfig", "playConfig", "carouselConfig"], ["nz-row", "", 1, "tekstBig", 2, "margin-top", "50px", 3, "nzGutter"], ["nz-col", "", 1, "gutter-row", "center", 3, "nzSpan"], [1, "inner-box", 2, "width", "90%", "margin-left", "5%"], ["src", "assets/images/a.jpg", "alt", "", 2, "width", "100%"], [1, "inner-box"], [1, "tekst"], [1, "tekstSmall", 2, "margin-top", "50px"], [2, "width", "90%", "margin-left", "5%"]], template: function HoofdschermComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "h1", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " Vakantiehuis Dima Gbeniet");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](3, "ks-carousel", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](7, "img", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "p", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](11, "Authentieke karaktervilla uit de tijd 1900-1914. De villa Dima Gbeniet staat verheven boven de duinen met leefruimte naar de noordkant en keuken en veranda naar de zuidkant. Op verdieping zijn er vier slaapkamers waarvan twee met terras en twee badkamers met douche, en drie toiletten. Er is een overdekt zonneterras. De villa is gegraven in de duinen en benadert best hoe mooi het toen ook al was. De eigenaars hebben bij de verbouwingen de villa zo goed mogelijk bewaard en voorzien van alle modern comfort. Alles op een kleine wandeling van duinen en zee in absolute stilte. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](14, "img", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](16, "p", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](17, "Authentieke karaktervilla uit de tijd (1900-1914) dat Oostduinkerke nog maagdelijk mooi was. De villa Dima Gbeniet staat verheven boven de duinen met leefruimte naar de noordant en keuken en veranda naar de zuidkant. Op verdiep zijn er vier slaapkamers waarvan twee met terras en twee badkamers met douche, en drie toiletten. Er is een overdekt zonneterras. De villa is gegraven in de duinen en benadert best hoe mooi het toen moet zijn geweest. De eigenaars hebben bij de verbouwingen de villa zo goed mogelijk bewaard en voorzien van alle modern comfort. Alles op een kleine wandeling van duinen en zee in absolute stilte. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("id", 100)("images", ctx.imagesRect)("previewConfig", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](8, _c0))("playConfig", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](9, _c1))("carouselConfig", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](10, _c2));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("nzGutter", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](11, _c3));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("nzSpan", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("nzSpan", 12);
    } }, directives: [_ks89_angular_modal_gallery__WEBPACK_IMPORTED_MODULE_0__["ɵe"], ng_zorro_antd_grid__WEBPACK_IMPORTED_MODULE_2__["NzRowDirective"], ng_zorro_antd_grid__WEBPACK_IMPORTED_MODULE_2__["NzColDirective"]], styles: [".projected[_ngcontent-%COMP%] {\r\n    color: white;\r\n    font-weight: 600;\r\n    font-size: 24px;\r\n    text-align: center;\r\n    position: absolute;\r\n    top: 10%;\r\n    width: 100%;\r\n    pointer-events: none;\r\n  }\r\n\r\n  .container[_ngcontent-%COMP%]{\r\n    height: 700px;\r\n    width: 60%;\r\n  }\r\n\r\n  .tekst[_ngcontent-%COMP%]{\r\n    padding-top: 20%; \r\n    margin-right: 20px; \r\n    height: 500px; \r\n    text-align: left;\r\n  }\r\n\r\n  .tekstSmall[_ngcontent-%COMP%]{\r\n    display: none;\r\n  }\r\n\r\n  @media (max-width: 1600px){\r\n    .tekst[_ngcontent-%COMP%]{\r\n      padding-top: 15%; \r\n    }\r\n    }\r\n\r\n  @media (max-width: 1300px){\r\n      .tekst[_ngcontent-%COMP%]{\r\n        padding-top: 5%; \r\n      }\r\n      }\r\n\r\n  @media (max-width: 1100px){\r\n        .tekstSmall[_ngcontent-%COMP%]{\r\n          display: block; \r\n        }\r\n\r\n        .tekstBig[_ngcontent-%COMP%]{\r\n          display: none;\r\n        }\r\n        .container[_ngcontent-%COMP%]{\r\n          width: 100%;\r\n        }\r\n        \r\n        .tekst[_ngcontent-%COMP%]{\r\n          width: 90%;\r\n          margin-left: 5%;\r\n        }\r\n        }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImhvb2Zkc2NoZXJtLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxZQUFZO0lBQ1osZ0JBQWdCO0lBQ2hCLGVBQWU7SUFDZixrQkFBa0I7SUFDbEIsa0JBQWtCO0lBQ2xCLFFBQVE7SUFDUixXQUFXO0lBQ1gsb0JBQW9CO0VBQ3RCOztFQUVBO0lBQ0UsYUFBYTtJQUNiLFVBQVU7RUFDWjs7RUFFQTtJQUNFLGdCQUFnQjtJQUNoQixrQkFBa0I7SUFDbEIsYUFBYTtJQUNiLGdCQUFnQjtFQUNsQjs7RUFFQTtJQUNFLGFBQWE7RUFDZjs7RUFFQTtJQUNFO01BQ0UsZ0JBQWdCO0lBQ2xCO0lBQ0E7O0VBQ0E7TUFDRTtRQUNFLGVBQWU7TUFDakI7TUFDQTs7RUFDQTtRQUNFO1VBQ0UsY0FBYztRQUNoQjs7UUFFQTtVQUNFLGFBQWE7UUFDZjtRQUNBO1VBQ0UsV0FBVztRQUNiOztRQUVBO1VBQ0UsVUFBVTtVQUNWLGVBQWU7UUFDakI7UUFDQSIsImZpbGUiOiJob29mZHNjaGVybS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnByb2plY3RlZCB7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbiAgICBmb250LXdlaWdodDogNjAwO1xyXG4gICAgZm9udC1zaXplOiAyNHB4O1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgdG9wOiAxMCU7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIHBvaW50ZXItZXZlbnRzOiBub25lO1xyXG4gIH1cclxuXHJcbiAgLmNvbnRhaW5lcntcclxuICAgIGhlaWdodDogNzAwcHg7XHJcbiAgICB3aWR0aDogNjAlO1xyXG4gIH1cclxuXHJcbiAgLnRla3N0e1xyXG4gICAgcGFkZGluZy10b3A6IDIwJTsgXHJcbiAgICBtYXJnaW4tcmlnaHQ6IDIwcHg7IFxyXG4gICAgaGVpZ2h0OiA1MDBweDsgXHJcbiAgICB0ZXh0LWFsaWduOiBsZWZ0O1xyXG4gIH1cclxuXHJcbiAgLnRla3N0U21hbGx7XHJcbiAgICBkaXNwbGF5OiBub25lO1xyXG4gIH1cclxuXHJcbiAgQG1lZGlhIChtYXgtd2lkdGg6IDE2MDBweCl7XHJcbiAgICAudGVrc3R7XHJcbiAgICAgIHBhZGRpbmctdG9wOiAxNSU7IFxyXG4gICAgfVxyXG4gICAgfVxyXG4gICAgQG1lZGlhIChtYXgtd2lkdGg6IDEzMDBweCl7XHJcbiAgICAgIC50ZWtzdHtcclxuICAgICAgICBwYWRkaW5nLXRvcDogNSU7IFxyXG4gICAgICB9XHJcbiAgICAgIH1cclxuICAgICAgQG1lZGlhIChtYXgtd2lkdGg6IDExMDBweCl7XHJcbiAgICAgICAgLnRla3N0U21hbGx7XHJcbiAgICAgICAgICBkaXNwbGF5OiBibG9jazsgXHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAudGVrc3RCaWd7XHJcbiAgICAgICAgICBkaXNwbGF5OiBub25lO1xyXG4gICAgICAgIH1cclxuICAgICAgICAuY29udGFpbmVye1xyXG4gICAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgICAgIC50ZWtzdHtcclxuICAgICAgICAgIHdpZHRoOiA5MCU7XHJcbiAgICAgICAgICBtYXJnaW4tbGVmdDogNSU7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIH0iXX0= */"] });


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