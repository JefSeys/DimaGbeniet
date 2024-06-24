(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["info-info-module"],{

/***/ "Efol":
/*!*************************************!*\
  !*** ./src/app/info/info.module.ts ***!
  \*************************************/
/*! exports provided: InfoModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InfoModule", function() { return InfoModule; });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _info_info_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./info/info.component */ "a5Qj");
/* harmony import */ var _ant_ant_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../ant/ant.module */ "rBh3");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ "fXoL");






const routes = [
    { path: '', component: _info_info_component__WEBPACK_IMPORTED_MODULE_1__["InfoComponent"] },
];
class InfoModule {
}
InfoModule.ɵfac = function InfoModule_Factory(t) { return new (t || InfoModule)(); };
InfoModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineNgModule"]({ type: InfoModule });
InfoModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjector"]({ imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
            _ant_ant_module__WEBPACK_IMPORTED_MODULE_2__["AntModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(routes)
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵsetNgModuleScope"](InfoModule, { declarations: [_info_info_component__WEBPACK_IMPORTED_MODULE_1__["InfoComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
        _ant_ant_module__WEBPACK_IMPORTED_MODULE_2__["AntModule"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"]] }); })();


/***/ }),

/***/ "a5Qj":
/*!*********************************************!*\
  !*** ./src/app/info/info/info.component.ts ***!
  \*********************************************/
/*! exports provided: InfoComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InfoComponent", function() { return InfoComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var ng_zorro_antd_grid__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ng-zorro-antd/grid */ "B+r4");


const _c0 = function () { return { xs: 8, sm: 16, md: 24, lg: 32 }; };
class InfoComponent {
    constructor() { }
    ngOnInit() {
    }
}
InfoComponent.ɵfac = function InfoComponent_Factory(t) { return new (t || InfoComponent)(); };
InfoComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: InfoComponent, selectors: [["app-info"]], decls: 57, vars: 5, consts: [[1, "center"], [1, "info"], [1, "infoDelen", 2, "list-style-type", "square"], [1, "infoDeel1"], [1, "opsommingTitel"], [1, "opsomming"], [2, "margin-block-start", "0.2em", "list-style-type", "circle"], [1, "infoDeel2"], [1, "infoDeel3"], [1, "opsommingTitel", "fontGroter110", 2, "margin-right", "10%"], ["nz-row", "", 2, "margin-top", "50px", 3, "nzGutter"], ["nz-col", "", 1, "gutter-row", "center", 3, "nzSpan"], [1, "inner-box"], ["src", "assets/images/e.jpg", "alt", ""], ["src", "assets/images/c.jpg", "alt", ""], ["src", "assets/images/b.jpg", "alt", ""]], template: function InfoComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h1", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Info");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "h3", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Algemeen");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "li", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "8 personen");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "li", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Aankomst vanaf 16u00");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "li", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Vertrekken uiterlijk 10u00");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "li", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "Prijs (minimum 3 nachten):");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "ul", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "Maandag tem donderdag: \u20AC 220 / nacht");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "Vrijdag tem zondag: \u20AC 250 / nacht");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "Schoolvakanties: \u20AC 250 / nacht");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "h3", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, "Inbegrepen in de huurprijs");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "li", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, "Bedlinnen");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "li", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, "Badlinnen");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "li", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, "Keukenlinnen");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "li", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](32, "Wifi");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "h3", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](35, "Bijkomende kosten");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "li", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](37, "Elektriciteit: \u20AC 0,35 / kWh");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "li", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](39, "Gas / stookolie: \u20AC 0,85 / kWh");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "li", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](41, "Water: \u20AC 5,00 / m\u00B3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "li", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](43, "Eindschoonmaak: \u20AC 100");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](44, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "li", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](46, " De reservering is definitief bij het ontvangen van het voorschot (= de helft van het tarief voor de huurperiode). Tien dagen voor aankomst dient de andere helft + de waarborg overgeschreven te zijn. De waarborg bedraagt \u20AC 300 en wordt binnen de 2 weken na het einde van het verblijf terugbetaald. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](50, "img", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](53, "img", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](54, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](56, "img", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](47);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzGutter", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](4, _c0));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzSpan", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzSpan", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzSpan", 8);
    } }, directives: [ng_zorro_antd_grid__WEBPACK_IMPORTED_MODULE_1__["NzRowDirective"], ng_zorro_antd_grid__WEBPACK_IMPORTED_MODULE_1__["NzColDirective"]], styles: [".naastElkaarInfo4Icon[_ngcontent-%COMP%]{\r\n    display: flex;\r\n  }\r\n  \r\n  .naastElkaarInfo2Icon[_ngcontent-%COMP%]{\r\n    display: flex;\r\n    width: 50%;\r\n  }\r\n  \r\n  .info[_ngcontent-%COMP%] {\r\n    margin-left: 10%;\r\n  }\r\n  \r\n  .infoDeel1[_ngcontent-%COMP%], .infoDeel2[_ngcontent-%COMP%], .infoDeel3[_ngcontent-%COMP%] {\r\n  width: 33%;\r\n  margin-bottom: 50px;\r\n}\r\n  \r\n  .infoDelen[_ngcontent-%COMP%] {\r\n  display: flex;\r\n}\r\n  \r\n  .opsommingTitel[_ngcontent-%COMP%] {\r\n  list-style-type: none;\r\n  padding-bottom: 10px;\r\n}\r\n  \r\n  .iconInfo[_ngcontent-%COMP%]{\r\n    width: 50%;\r\n  }\r\n  \r\n  @media (max-width: 1100px){\r\n.infoDelen[_ngcontent-%COMP%] {\r\n    display: table;\r\n    margin: 0 auto;\r\n}\r\n.infoDeel1[_ngcontent-%COMP%], .infoDeel2[_ngcontent-%COMP%], .infoDeel3[_ngcontent-%COMP%] {\r\n  width: 100%;\r\n  margin-bottom: 50px;\r\n}\r\n}\r\n  \r\n  img[_ngcontent-%COMP%]{\r\n  max-width: 90%;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImluZm8uY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLGFBQWE7RUFDZjs7RUFFQTtJQUNFLGFBQWE7SUFDYixVQUFVO0VBQ1o7O0VBRUE7SUFDRSxnQkFBZ0I7RUFDbEI7O0VBRUE7OztFQUdBLFVBQVU7RUFDVixtQkFBbUI7QUFDckI7O0VBRUE7RUFDRSxhQUFhO0FBQ2Y7O0VBRUE7RUFDRSxxQkFBcUI7RUFDckIsb0JBQW9CO0FBQ3RCOztFQUVBO0lBQ0ksVUFBVTtFQUNaOztFQUVBO0FBQ0Y7SUFDSSxjQUFjO0lBQ2QsY0FBYztBQUNsQjtBQUNBOzs7RUFHRSxXQUFXO0VBQ1gsbUJBQW1CO0FBQ3JCO0FBQ0E7O0VBRUE7RUFDRSxjQUFjO0FBQ2hCIiwiZmlsZSI6ImluZm8uY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5uYWFzdEVsa2FhckluZm80SWNvbntcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgfVxyXG4gIFxyXG4gIC5uYWFzdEVsa2FhckluZm8ySWNvbntcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICB3aWR0aDogNTAlO1xyXG4gIH1cclxuXHJcbiAgLmluZm8ge1xyXG4gICAgbWFyZ2luLWxlZnQ6IDEwJTtcclxuICB9XHJcblxyXG4gIC5pbmZvRGVlbDEsXHJcbi5pbmZvRGVlbDIsXHJcbi5pbmZvRGVlbDMge1xyXG4gIHdpZHRoOiAzMyU7XHJcbiAgbWFyZ2luLWJvdHRvbTogNTBweDtcclxufVxyXG5cclxuLmluZm9EZWxlbiB7XHJcbiAgZGlzcGxheTogZmxleDtcclxufVxyXG5cclxuLm9wc29tbWluZ1RpdGVsIHtcclxuICBsaXN0LXN0eWxlLXR5cGU6IG5vbmU7XHJcbiAgcGFkZGluZy1ib3R0b206IDEwcHg7XHJcbn1cclxuXHJcbi5pY29uSW5mb3tcclxuICAgIHdpZHRoOiA1MCU7XHJcbiAgfVxyXG5cclxuICBAbWVkaWEgKG1heC13aWR0aDogMTEwMHB4KXtcclxuLmluZm9EZWxlbiB7XHJcbiAgICBkaXNwbGF5OiB0YWJsZTtcclxuICAgIG1hcmdpbjogMCBhdXRvO1xyXG59XHJcbi5pbmZvRGVlbDEsXHJcbi5pbmZvRGVlbDIsXHJcbi5pbmZvRGVlbDMge1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIG1hcmdpbi1ib3R0b206IDUwcHg7XHJcbn1cclxufVxyXG5cclxuaW1ne1xyXG4gIG1heC13aWR0aDogOTAlO1xyXG59Il19 */"] });


/***/ })

}]);
//# sourceMappingURL=info-info-module.js.map