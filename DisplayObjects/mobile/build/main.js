webpackJsonp([0],{

/***/ 172:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	return new Promise(function(resolve, reject) { reject(new Error("Cannot find module '" + req + "'.")); });
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 172;

/***/ }),

/***/ 215:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	return new Promise(function(resolve, reject) { reject(new Error("Cannot find module '" + req + "'.")); });
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 215;

/***/ }),

/***/ 430:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PLANTS; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_c8ocaf__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_c8ocaf___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_c8ocaf__);
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






/*
    You can customize your page class by writing code between the :

        Begin_c8o_XXXX and
        End_c8o_XXXX
        
    Comments.
    
    Any code placed outside these these comments will be lost when the application is generated
*/
/*Begin_c8o_PageImport*/
/*End_c8o_PageImport*/
var PLANTS = (function (_super) {
    __extends(PLANTS, _super);
    /*Begin_c8o_PageDeclaration*/
    /*End_c8o_PageDeclaration*/
    function PLANTS(routerProvider, navParams, loadingCtrl, sanitizer, ref, injector) {
        return _super.call(this, routerProvider, navParams, loadingCtrl, sanitizer, ref, injector) || this;
        /*Begin_c8o_PageConstructor*/
        /*End_c8o_PageConstructor*/
    }
    /*Begin_c8o_PageFunction*/
    PLANTS.prototype.ionViewDidEnter = function () {
        this.call("PlantsInter.getPlants");
    };
    return PLANTS;
}(__WEBPACK_IMPORTED_MODULE_3_c8ocaf__["C8oPage"]));
PLANTS = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'page-plants',template:/*ion-inline-start:"D:\COMMON\C8O\sc750\workspace\PlantsInter\_private\ionic\src\pages\PLANTS\plants.html"*/'<ion-header class="class1491634212350">\n\n<ion-navbar class="class1491634231108">\n\n<ion-title class="class1491634265317">\n\nPLANTS\n\n</ion-title>\n\n<button class="class1491634442029" menuToggle ion-button>\n\n<ion-icon class="class1491634475867" name="menu">\n\n</ion-icon>\n\n</button>\n\n<ion-buttons class="class1491634611427" right>\n\n<button class="class1491634621907" ion-button>\n\n<ion-icon class="class1491634637555" name="more">\n\n</ion-icon>\n\n</button>\n\n</ion-buttons>\n\n</ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content class="class1489674805352">\n\n<agm-map class="class1501164684395" [zoom]="8" [latitude]="48.6969459" [style.height]="\'100%\'" [longitude]="2.1775981">\n\n<ng-container class="class1501168974422" *ngFor="let item1501168974422 of listen([\'PlantsInter.getPlants\'])?.PLANTS?.PLANT">\n\n<ng-container class="class1501176309136" *ngIf="item1501168974422?.alert">\n\n<agm-marker class="class1501172093149" [iconUrl]="\'../assets/images/factory_red.png\'" [title]="\'Convertigo\'" [latitude]="item1501168974422?.LAT" [longitude]="item1501168974422?.LNG" (click)="call(\'PlantsInter.getMachines\', {plantID: item1501168974422?.ID})">\n\n<agm-info-window class="class1501231762582">\n\n<img class="class1501231762606" width="" src="../assets/images/cbk.jpg" height=""/>\n\n<h2 class="class1501231762628">\n\nConvertigo\n\n<ion-icon class="class1501231881643" color="danger" name="eye" style="cursor: help;vertical-align: middle !important;" (click)="call(\'PlantsInter.getMachines\')">\n\n</ion-icon>\n\n<ion-icon class="class1501249996503" name="car" style="cursor: not-allowed;vertical-align: middle !important;">\n\n</ion-icon>\n\n</h2>\n\n<p class="class1501231762663">\n\n8, Boulevard Dubreuil, 91400 Orsay\n\n</p>\n\n</agm-info-window>\n\n</agm-marker>\n\n</ng-container>\n\n<ng-container class="class1501176573058" *ngIf="! item1501168974422?.alert">\n\n<agm-marker class="class1501176573079" [iconUrl]="\'../assets/images/factory.png\'" [title]="\'Convertigo\'" [latitude]="item1501168974422?.LAT" [longitude]="item1501168974422?.LNG">\n\n<agm-info-window class="class1501249811199">\n\n<img class="class1501249811219" width="" src="../assets/images/cbk.jpg" height=""/>\n\n<h2 class="class1501249811240">\n\nConvertigo\n\n<ion-icon class="class1501249811275" name="eye" style="vertical-align: middle !important;" (click)="call(\'PlantsInter.getMachines\')">\n\n</ion-icon>\n\n<ion-icon class="class1501249949255" name="car" style="vertical-align: middle !important;">\n\n</ion-icon>\n\n</h2>\n\n<p class="class1501249811348">\n\n8, Boulevard Dubreuil, 91400 Orsay\n\n</p>\n\n</agm-info-window>\n\n</agm-marker>\n\n</ng-container>\n\n</ng-container>\n\n</agm-map>\n\n</ion-content>\n\n\n\n<ion-footer class="class1491634242460">\n\n<ion-toolbar class="class1491634317538">\n\n<ion-title class="class1501692770182">\n\n<div class="class1501692770209" text-center>\n\nTalend - Convertigo 2017\n\n</div>\n\n</ion-title>\n\n</ion-toolbar>\n\n</ion-footer>\n\n\n\n'/*ion-inline-end:"D:\COMMON\C8O\sc750\workspace\PlantsInter\_private\ionic\src\pages\PLANTS\plants.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3_c8ocaf__["C8oRouter"], __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["m" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["i" /* LoadingController */], __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["c" /* DomSanitizer */], __WEBPACK_IMPORTED_MODULE_0__angular_core__["ChangeDetectorRef"], __WEBPACK_IMPORTED_MODULE_0__angular_core__["Injector"]])
], PLANTS);

//# sourceMappingURL=plants.js.map

/***/ }),

/***/ 431:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MACHINES; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_c8ocaf__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_c8ocaf___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_c8ocaf__);
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






/*
    You can customize your page class by writing code between the :

        Begin_c8o_XXXX and
        End_c8o_XXXX
        
    Comments.
    
    Any code placed outside these these comments will be lost when the application is generated
*/
/*Begin_c8o_PageImport*/
/*End_c8o_PageImport*/
var MACHINES = (function (_super) {
    __extends(MACHINES, _super);
    /*Begin_c8o_PageDeclaration*/
    /*End_c8o_PageDeclaration*/
    function MACHINES(routerProvider, navParams, loadingCtrl, sanitizer, ref, injector) {
        return _super.call(this, routerProvider, navParams, loadingCtrl, sanitizer, ref, injector) || this;
        /*Begin_c8o_PageConstructor*/
        /*End_c8o_PageConstructor*/
    }
    return MACHINES;
}(__WEBPACK_IMPORTED_MODULE_3_c8ocaf__["C8oPage"]));
MACHINES = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'page-machines',template:/*ion-inline-start:"D:\COMMON\C8O\sc750\workspace\PlantsInter\_private\ionic\src\pages\MACHINES\machines.html"*/'<ion-header class="class1501232838154">\n\n<ion-navbar class="class1501232838172">\n\n<ion-title class="class1501232838187">\n\nMACHINES\n\n</ion-title>\n\n<button class="class1501232838225" menuToggle ion-button>\n\n<ion-icon class="class1501232838240" name="menu">\n\n</ion-icon>\n\n</button>\n\n<ion-buttons class="class1501232838280" right>\n\n<button class="class1501232838300" ion-button>\n\n<ion-icon class="class1501232838320" name="more">\n\n</ion-icon>\n\n</button>\n\n</ion-buttons>\n\n</ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content class="class1501232850085" padding>\n\n<img class="class1501694088782" width="100%" src="../assets/images/factory-with-pipes.jpg" height="80px"/>\n\n<ion-list class="class1501246906206">\n\n<ng-container class="class1501247452589" *ngFor="let item1501247452589 of listen([\'PlantsInter.getMachines\'])?.MACHINES?.MACHINE">\n\n<button class="class1501693244512" ion-item (click)="call(\'PlantsInter.getMachineDetails\')">\n\n<ion-thumbnail class="class1501693267423" item-left>\n\n<ng-container class="class1501693267445" *ngIf="item1501247452589?.ALERT">\n\n<img class="class1501693267465" width="" src="../assets/images/atm_red.png" height=""/>\n\n</ng-container>\n\n<ng-container class="class1501693267481" *ngIf="! item1501247452589?.ALERT">\n\n<img class="class1501693267503" width="" src="../assets/images/atm.png" height=""/>\n\n</ng-container>\n\n</ion-thumbnail>\n\n<h2 class="class1501693267522">\n\n{{item1501247452589?.NAME}}\n\n</h2>\n\n<p class="class1501693267564">\n\n{{&quot;ID-&quot;+item1501247452589?.M_ID}}\n\n</p>\n\n</button>\n\n</ng-container>\n\n</ion-list>\n\n</ion-content>\n\n\n\n<ion-footer class="class1501232838336">\n\n<ion-toolbar class="class1501232838353">\n\n<ion-title class="class1501692800080">\n\n<div class="class1501692800106" text-center>\n\nTalend - Convertigo 2017\n\n</div>\n\n</ion-title>\n\n</ion-toolbar>\n\n</ion-footer>\n\n\n\n'/*ion-inline-end:"D:\COMMON\C8O\sc750\workspace\PlantsInter\_private\ionic\src\pages\MACHINES\machines.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3_c8ocaf__["C8oRouter"], __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["m" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["i" /* LoadingController */], __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["c" /* DomSanitizer */], __WEBPACK_IMPORTED_MODULE_0__angular_core__["ChangeDetectorRef"], __WEBPACK_IMPORTED_MODULE_0__angular_core__["Injector"]])
], MACHINES);

//# sourceMappingURL=machines.js.map

/***/ }),

/***/ 432:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DETAILS; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_c8ocaf__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_c8ocaf___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_c8ocaf__);
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






/*
    You can customize your page class by writing code between the :

        Begin_c8o_XXXX and
        End_c8o_XXXX
        
    Comments.
    
    Any code placed outside these these comments will be lost when the application is generated
*/
/*Begin_c8o_PageImport*/
/*End_c8o_PageImport*/
var DETAILS = (function (_super) {
    __extends(DETAILS, _super);
    /*End_c8o_PageDeclaration*/
    function DETAILS(routerProvider, navParams, loadingCtrl, sanitizer, ref, injector) {
        var _this = _super.call(this, routerProvider, navParams, loadingCtrl, sanitizer, ref, injector) || this;
        /*Begin_c8o_PageDeclaration*/
        _this.TLine = 0;
        _this.TTline = [80, 82, 83, 85, 88, 90, 95, 85, 82, 80, 75, 65, 60, 50, 40, 38, 39, 40, 40, 40, 39, 38, 38, 40];
        //    TTline = [80,60,50,40];
        _this.idx = 0;
        return _this;
        /*Begin_c8o_PageConstructor*/
        /*End_c8o_PageConstructor*/
    }
    /*Begin_c8o_PageFunction*/
    DETAILS.prototype.ionViewDidLoad = function () {
        this.changeTLine();
    };
    DETAILS.prototype.changeTLine = function () {
        if (this.idx < this.TTline.length) {
            this.TLine = this.TTline[this.idx++];
            window.setTimeout(this.changeTLine.bind(this), 750);
        }
        else {
            this.TLine = this.TTline[this.TTline.length - 1];
        }
    };
    return DETAILS;
}(__WEBPACK_IMPORTED_MODULE_3_c8ocaf__["C8oPage"]));
DETAILS = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'page-details',template:/*ion-inline-start:"D:\COMMON\C8O\sc750\workspace\PlantsInter\_private\ionic\src\pages\DETAILS\details.html"*/'<ion-header class="class1501248601756">\n\n<ion-navbar class="class1501248601776">\n\n<ion-title class="class1501248601797">\n\nDETAILS\n\n</ion-title>\n\n<button class="class1501248601833" menuToggle ion-button>\n\n<ion-icon class="class1501248601854" name="menu">\n\n</ion-icon>\n\n</button>\n\n<ion-buttons class="class1501248601870" right>\n\n<button class="class1501248601888" ion-button>\n\n<ion-icon class="class1501248601909" name="more">\n\n</ion-icon>\n\n</button>\n\n</ion-buttons>\n\n</ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content class="class1501248601926" padding>\n\n<img class="class1501695184064" width="100%" src="../assets/images/machine_details.jpg" height="80px"/>\n\n<ion-grid class="class1501252181020">\n\n<ion-row class="class1501252236519" nowrap>\n\n<ion-col class="class1501252607745" col-8>\n\nModel:\n\n<hr class="class1501255354901"/>\n\n</ion-col>\n\n<ion-col class="class1501252452671" col-4 align-self-center>\n\n{{listen([\'PlantsInter.getMachineDetails\'])?.DETAILS?.DETAIL?.MODEL}}\n\n<hr class="class1501693767355"/>\n\n</ion-col>\n\n</ion-row>\n\n<ion-row class="class1501253120244" nowrap>\n\n<ion-col class="class1501253120266" col-8>\n\nSerial:\n\n<hr class="class1501255376942"/>\n\n</ion-col>\n\n<ion-col class="class1501253120298" col-4 align-self-center>\n\n{{listen([\'PlantsInter.getMachineDetails\'])?.DETAILS?.DETAIL?.M_ID}}\n\n<hr class="class1501693771472"/>\n\n</ion-col>\n\n</ion-row>\n\n<ion-row class="class1501253177003" nowrap>\n\n<ion-col class="class1501253177019" col-8>\n\nInstallation date:\n\n<hr class="class1501255383192"/>\n\n</ion-col>\n\n<ion-col class="class1501253177052" col-4 align-self-center>\n\n{{listen([\'PlantsInter.getMachineDetails\'])?.DETAILS?.DETAIL?.INSTALL_DATE}}\n\n<hr class="class1501693777406"/>\n\n</ion-col>\n\n</ion-row>\n\n<ion-row class="class1501253179691" nowrap>\n\n<ion-col class="class1501253179708" col-8>\n\nLast intervention:\n\n<hr class="class1501255385762"/>\n\n</ion-col>\n\n<ion-col class="class1501253179742" col-4 align-self-center>\n\n{{listen([\'PlantsInter.getMachineDetails\'])?.DETAILS?.DETAIL?.LAST_INTER_DATE}}\n\n<hr class="class1501693782501"/>\n\n</ion-col>\n\n</ion-row>\n\n</ion-grid>\n\n<ion-grid class="class1501687571150">\n\n<ion-row class="class1501687571174">\n\n<ion-col class="class1501687571192">\n\n<canvas class="class1501687571208" baseChart [options]="{animation: false, annotation: { annotations: [{ drawTime: \'afterDatasetsDraw\', id: \'hline\', type: \'line\', mode: \'horizontal\', scaleID: \'y-axis-0\', value: TLine, borderColor: \'black\', borderWidth: 2, label: { backgroundColor: \'rgba(0, 0, 0, 1)\', content: TLine+\'°C\', enabled: true }}]}, scales: {xAxes: [{stacked: true}], yAxes: [{stacked: true, ticks: {min: 0, max: 100}}]}}" [colors]="[{\'backgroundColor\': \'rgb(0, 255, 37)\',\'borderColor\': \'rgb(0, 0, 0)\'},{\'backgroundColor\': \'rgb(255, 254, 0)\',\'borderColor\': \'rgb(0, 0, 0)\'},{\'backgroundColor\': \'rgb(255, 0, 0)\',\'borderColor\': \'rgb(0, 0, 0)\'}]" height="100" chartType="bar" [datasets]="[{\'label\': \'OK\',\'data\': [45]}, {\'label\': \'GOOD\',\'data\': [33]}, {\'label\': \'BAD\',\'data\': [22]}]" width="100" [labels]="[\'0187-0140\']">\n\n</canvas>\n\n</ion-col>\n\n</ion-row>\n\n</ion-grid>\n\n</ion-content>\n\n\n\n<ion-footer class="class1501248602261">\n\n<ion-toolbar class="class1501248602281">\n\n<ion-buttons class="class1501248602384" right>\n\n<button class="class1501248602398" ion-button (click)="call(\'PlantsInter.getForm\')">\n\n<ion-icon class="class1501595577014" name="hammer">\n\n</ion-icon>\n\nProceed\n\n</button>\n\n</ion-buttons>\n\n</ion-toolbar>\n\n</ion-footer>\n\n\n\n'/*ion-inline-end:"D:\COMMON\C8O\sc750\workspace\PlantsInter\_private\ionic\src\pages\DETAILS\details.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3_c8ocaf__["C8oRouter"], __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["m" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["i" /* LoadingController */], __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["c" /* DomSanitizer */], __WEBPACK_IMPORTED_MODULE_0__angular_core__["ChangeDetectorRef"], __WEBPACK_IMPORTED_MODULE_0__angular_core__["Injector"]])
], DETAILS);

//# sourceMappingURL=details.js.map

/***/ }),

/***/ 433:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return INTERVENTION; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_c8ocaf__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_c8ocaf___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_c8ocaf__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_forms__ = __webpack_require__(23);
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






/*
    You can customize your page class by writing code between the :

        Begin_c8o_XXXX and
        End_c8o_XXXX
        
    Comments.
    
    Any code placed outside these these comments will be lost when the application is generated
*/

/*Begin_c8o_PageImport*/
/*End_c8o_PageImport*/
var INTERVENTION = (function (_super) {
    __extends(INTERVENTION, _super);
    /*End_c8o_PageDeclaration*/
    function INTERVENTION(routerProvider, navParams, loadingCtrl, sanitizer, ref, injector) {
        var _this = _super.call(this, routerProvider, navParams, loadingCtrl, sanitizer, ref, injector) || this;
        /*Begin_c8o_PageDeclaration*/
        _this.tzoffset = (new Date()).getTimezoneOffset() * 60000; //offset in milliseconds
        _this.localISOTime = (new Date(Date.now() - _this.tzoffset)).toISOString().slice(0, -1);
        _this.myDate = _this.localISOTime;
        /**
         * Form
         *
         */
        _this.form1501596258205 = new __WEBPACK_IMPORTED_MODULE_4__angular_forms__["b" /* FormGroup */]({
            var1501596281670: new __WEBPACK_IMPORTED_MODULE_4__angular_forms__["a" /* FormControl */]('', __WEBPACK_IMPORTED_MODULE_4__angular_forms__["g" /* Validators */].compose([])),
            var1501596596018: new __WEBPACK_IMPORTED_MODULE_4__angular_forms__["a" /* FormControl */]('', __WEBPACK_IMPORTED_MODULE_4__angular_forms__["g" /* Validators */].compose([])),
            var1501596596019: new __WEBPACK_IMPORTED_MODULE_4__angular_forms__["a" /* FormControl */]('', __WEBPACK_IMPORTED_MODULE_4__angular_forms__["g" /* Validators */].compose([])),
            var1501598956173: new __WEBPACK_IMPORTED_MODULE_4__angular_forms__["a" /* FormControl */]('', __WEBPACK_IMPORTED_MODULE_4__angular_forms__["g" /* Validators */].compose([])),
            var1501695961656: new __WEBPACK_IMPORTED_MODULE_4__angular_forms__["a" /* FormControl */]('', __WEBPACK_IMPORTED_MODULE_4__angular_forms__["g" /* Validators */].compose([])),
        });
        return _this;
        /*Begin_c8o_PageConstructor*/
        /*End_c8o_PageConstructor*/
    }
    return INTERVENTION;
}(__WEBPACK_IMPORTED_MODULE_3_c8ocaf__["C8oPage"]));
INTERVENTION = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'page-intervention',template:/*ion-inline-start:"D:\COMMON\C8O\sc750\workspace\PlantsInter\_private\ionic\src\pages\INTERVENTION\intervention.html"*/'<ion-header class="class1501596145457">\n\n<ion-navbar class="class1501596145478">\n\n<ion-title class="class1501596145495">\n\nINTERVENTION\n\n</ion-title>\n\n<button class="class1501596145531" menuToggle ion-button>\n\n<ion-icon class="class1501596145549" name="menu">\n\n</ion-icon>\n\n</button>\n\n<ion-buttons class="class1501596145583" right>\n\n<button class="class1501596145600" ion-button>\n\n<ion-icon class="class1501596145617" name="more">\n\n</ion-icon>\n\n</button>\n\n</ion-buttons>\n\n</ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content class="class1501596145635">\n\n<img class="class1501695593163" width="100%" src="../assets/images/intervention.jpg" height="80px"/>\n\n<form class="class1501596258205" [formGroup]="form1501596258205" novalidate>\n\n<ion-list class="class1501598696611">\n\n<ion-item-divider class="class1501696029168" color="light">\n\nINTERVENTION DATE\n\n</ion-item-divider>\n\n<ion-item class="class1501597203281">\n\n<ion-label class="class1501598228112">\n\nDATETIME\n\n</ion-label>\n\n<ion-datetime class="class1501596281670" pickerFormat="HH:mm DD/MM/YYYY" [ngModel]="myDate" displayFormat="HH:mm DD/MM/YYYY" formControlName="var1501596281670">\n\n</ion-datetime>\n\n</ion-item>\n\n<ion-item-divider class="class1501598802391" color="light">\n\nDETAILS\n\n</ion-item-divider>\n\n<ion-item class="class1501596698254">\n\n<ion-label class="class1501596752064" floating>\n\nLABEL1\n\n</ion-label>\n\n<ion-input class="class1501596596018" formControlName="var1501596596018">\n\n</ion-input>\n\n</ion-item>\n\n<ion-item class="class1501596849752">\n\n<ion-label class="class1501596849779" floating>\n\nLABEL2\n\n</ion-label>\n\n<ion-input class="class1501596849820" formControlName="var1501596596019">\n\n</ion-input>\n\n</ion-item>\n\n<ion-item-divider class="class1501598852332" color="light">\n\nCATEGORY\n\n</ion-item-divider>\n\n<ion-item class="class1501598949885">\n\n<ion-label class="class1501598967837">\n\nSELECT\n\n</ion-label>\n\n<ion-select class="class1501598956173" [ngModel]="null" formControlName="var1501598956173">\n\n<ion-option class="class1501599033183">\n\nCAT1\n\n</ion-option>\n\n<ion-option class="class1501599062923">\n\nCAT2\n\n</ion-option>\n\n<ion-option class="class1501599083197">\n\nCAT3\n\n</ion-option>\n\n<ion-option class="class1501599087671">\n\nCAT4\n\n</ion-option>\n\n<ion-option class="class1501599091037">\n\nCAT5\n\n</ion-option>\n\n</ion-select>\n\n</ion-item>\n\n<ion-item-divider class="class1501695794371" color="light">\n\nDIFFICULTY\n\n</ion-item-divider>\n\n<ion-item class="class1501695804829">\n\n<ion-range class="class1501695961656" [ngModel]="\'0\'" min="0" pin="true" max="5" color="danger" formControlName="var1501695961656" step="1" snaps="true">\n\n<ion-label class="class1501696333382" range-left>\n\n0\n\n</ion-label>\n\n<ion-label class="class1501696463013" range-right>\n\n5\n\n</ion-label>\n\n</ion-range>\n\n</ion-item>\n\n</ion-list>\n\n</form>\n\n</ion-content>\n\n\n\n<ion-footer class="class1501596146302">\n\n<ion-toolbar class="class1501596146322">\n\n<ion-title class="class1501692814226">\n\n<div class="class1501692814273" text-center>\n\nTalend - Convertigo 2017\n\n</div>\n\n</ion-title>\n\n</ion-toolbar>\n\n</ion-footer>\n\n\n\n'/*ion-inline-end:"D:\COMMON\C8O\sc750\workspace\PlantsInter\_private\ionic\src\pages\INTERVENTION\intervention.html"*/,
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_3_c8ocaf__["C8oRouter"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3_c8ocaf__["C8oRouter"]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["m" /* NavParams */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["m" /* NavParams */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["i" /* LoadingController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["i" /* LoadingController */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["c" /* DomSanitizer */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["c" /* DomSanitizer */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["ChangeDetectorRef"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["ChangeDetectorRef"]) === "function" && _e || Object, typeof (_f = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["Injector"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["Injector"]) === "function" && _f || Object])
], INTERVENTION);

var _a, _b, _c, _d, _e, _f;
//# sourceMappingURL=intervention.js.map

/***/ }),

/***/ 434:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(435);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(439);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 439:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export deepLinkConfig */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(70);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_forms__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_ionic_angular__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_native_status_bar__ = __webpack_require__(255);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_ionic2_super_tabs__ = __webpack_require__(483);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__agm_core__ = __webpack_require__(488);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_ng2_charts__ = __webpack_require__(493);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_ng2_charts___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8_ng2_charts__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_chartjs_plugin_annotation__ = __webpack_require__(543);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_chartjs_plugin_annotation___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_9_chartjs_plugin_annotation__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_c8osdkangular__ = __webpack_require__(147);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_c8osdkangular___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_10_c8osdkangular__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_c8ocaf__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_c8ocaf___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_11_c8ocaf__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__app_component__ = __webpack_require__(825);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__pages_PLANTS_plants__ = __webpack_require__(430);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__pages_MACHINES_machines__ = __webpack_require__(431);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__pages_DETAILS_details__ = __webpack_require__(432);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__pages_INTERVENTION_intervention__ = __webpack_require__(433);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};









//import 'chartjs-lines-plugin';








/**
 * Deep links to your pages so that the app can rout directly to the page url
 */
var deepLinkConfig = {
    links: [{ component: __WEBPACK_IMPORTED_MODULE_13__pages_PLANTS_plants__["a" /* PLANTS */], name: "PLANTS", segment: "Page" }, { component: __WEBPACK_IMPORTED_MODULE_14__pages_MACHINES_machines__["a" /* MACHINES */], name: "MACHINES", segment: "MACHINES" }, { component: __WEBPACK_IMPORTED_MODULE_15__pages_DETAILS_details__["a" /* DETAILS */], name: "DETAILS", segment: "DETAILS" }, { component: __WEBPACK_IMPORTED_MODULE_16__pages_INTERVENTION_intervention__["a" /* INTERVENTION */], name: "INTERVENTION", segment: "INTERVENTION" }]
};
var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_12__app_component__["a" /* MyApp */], __WEBPACK_IMPORTED_MODULE_13__pages_PLANTS_plants__["a" /* PLANTS */], __WEBPACK_IMPORTED_MODULE_14__pages_MACHINES_machines__["a" /* MACHINES */], __WEBPACK_IMPORTED_MODULE_15__pages_DETAILS_details__["a" /* DETAILS */], __WEBPACK_IMPORTED_MODULE_16__pages_INTERVENTION_intervention__["a" /* INTERVENTION */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* HttpModule */],
            __WEBPACK_IMPORTED_MODULE_3__angular_forms__["c" /* FormsModule */],
            __WEBPACK_IMPORTED_MODULE_3__angular_forms__["f" /* ReactiveFormsModule */],
            __WEBPACK_IMPORTED_MODULE_8_ng2_charts__["ChartsModule"],
            __WEBPACK_IMPORTED_MODULE_6_ionic2_super_tabs__["a" /* SuperTabsModule */].forRoot(),
            __WEBPACK_IMPORTED_MODULE_7__agm_core__["a" /* AgmCoreModule */].forRoot({
                apiKey: 'AIzaSyB0Nl1dX0kEsB5QZaNf6m-tnb1N-U5dpXs'
            }),
            __WEBPACK_IMPORTED_MODULE_4_ionic_angular__["h" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_12__app_component__["a" /* MyApp */], {}, deepLinkConfig)
        ],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_4_ionic_angular__["f" /* IonicApp */]],
        entryComponents: [__WEBPACK_IMPORTED_MODULE_12__app_component__["a" /* MyApp */], __WEBPACK_IMPORTED_MODULE_13__pages_PLANTS_plants__["a" /* PLANTS */], __WEBPACK_IMPORTED_MODULE_14__pages_MACHINES_machines__["a" /* MACHINES */], __WEBPACK_IMPORTED_MODULE_15__pages_DETAILS_details__["a" /* DETAILS */], __WEBPACK_IMPORTED_MODULE_16__pages_INTERVENTION_intervention__["a" /* INTERVENTION */]],
        providers: [
            __WEBPACK_IMPORTED_MODULE_5__ionic_native_status_bar__["a" /* StatusBar */],
            __WEBPACK_IMPORTED_MODULE_10_c8osdkangular__["C8o"],
            __WEBPACK_IMPORTED_MODULE_11_c8ocaf__["C8oRouter"],
            { provide: __WEBPACK_IMPORTED_MODULE_0__angular_core__["ErrorHandler"], useClass: __WEBPACK_IMPORTED_MODULE_4_ionic_angular__["g" /* IonicErrorHandler */] }
        ]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 526:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./af": 275,
	"./af.js": 275,
	"./ar": 276,
	"./ar-dz": 277,
	"./ar-dz.js": 277,
	"./ar-kw": 278,
	"./ar-kw.js": 278,
	"./ar-ly": 279,
	"./ar-ly.js": 279,
	"./ar-ma": 280,
	"./ar-ma.js": 280,
	"./ar-sa": 281,
	"./ar-sa.js": 281,
	"./ar-tn": 282,
	"./ar-tn.js": 282,
	"./ar.js": 276,
	"./az": 283,
	"./az.js": 283,
	"./be": 284,
	"./be.js": 284,
	"./bg": 285,
	"./bg.js": 285,
	"./bn": 286,
	"./bn.js": 286,
	"./bo": 287,
	"./bo.js": 287,
	"./br": 288,
	"./br.js": 288,
	"./bs": 289,
	"./bs.js": 289,
	"./ca": 290,
	"./ca.js": 290,
	"./cs": 291,
	"./cs.js": 291,
	"./cv": 292,
	"./cv.js": 292,
	"./cy": 293,
	"./cy.js": 293,
	"./da": 294,
	"./da.js": 294,
	"./de": 295,
	"./de-at": 296,
	"./de-at.js": 296,
	"./de-ch": 297,
	"./de-ch.js": 297,
	"./de.js": 295,
	"./dv": 298,
	"./dv.js": 298,
	"./el": 299,
	"./el.js": 299,
	"./en-au": 300,
	"./en-au.js": 300,
	"./en-ca": 301,
	"./en-ca.js": 301,
	"./en-gb": 302,
	"./en-gb.js": 302,
	"./en-ie": 303,
	"./en-ie.js": 303,
	"./en-nz": 304,
	"./en-nz.js": 304,
	"./eo": 305,
	"./eo.js": 305,
	"./es": 306,
	"./es-do": 307,
	"./es-do.js": 307,
	"./es.js": 306,
	"./et": 308,
	"./et.js": 308,
	"./eu": 309,
	"./eu.js": 309,
	"./fa": 310,
	"./fa.js": 310,
	"./fi": 311,
	"./fi.js": 311,
	"./fo": 312,
	"./fo.js": 312,
	"./fr": 313,
	"./fr-ca": 314,
	"./fr-ca.js": 314,
	"./fr-ch": 315,
	"./fr-ch.js": 315,
	"./fr.js": 313,
	"./fy": 316,
	"./fy.js": 316,
	"./gd": 317,
	"./gd.js": 317,
	"./gl": 318,
	"./gl.js": 318,
	"./gom-latn": 319,
	"./gom-latn.js": 319,
	"./he": 320,
	"./he.js": 320,
	"./hi": 321,
	"./hi.js": 321,
	"./hr": 322,
	"./hr.js": 322,
	"./hu": 323,
	"./hu.js": 323,
	"./hy-am": 324,
	"./hy-am.js": 324,
	"./id": 325,
	"./id.js": 325,
	"./is": 326,
	"./is.js": 326,
	"./it": 327,
	"./it.js": 327,
	"./ja": 328,
	"./ja.js": 328,
	"./jv": 329,
	"./jv.js": 329,
	"./ka": 330,
	"./ka.js": 330,
	"./kk": 331,
	"./kk.js": 331,
	"./km": 332,
	"./km.js": 332,
	"./kn": 333,
	"./kn.js": 333,
	"./ko": 334,
	"./ko.js": 334,
	"./ky": 335,
	"./ky.js": 335,
	"./lb": 336,
	"./lb.js": 336,
	"./lo": 337,
	"./lo.js": 337,
	"./lt": 338,
	"./lt.js": 338,
	"./lv": 339,
	"./lv.js": 339,
	"./me": 340,
	"./me.js": 340,
	"./mi": 341,
	"./mi.js": 341,
	"./mk": 342,
	"./mk.js": 342,
	"./ml": 343,
	"./ml.js": 343,
	"./mr": 344,
	"./mr.js": 344,
	"./ms": 345,
	"./ms-my": 346,
	"./ms-my.js": 346,
	"./ms.js": 345,
	"./my": 347,
	"./my.js": 347,
	"./nb": 348,
	"./nb.js": 348,
	"./ne": 349,
	"./ne.js": 349,
	"./nl": 350,
	"./nl-be": 351,
	"./nl-be.js": 351,
	"./nl.js": 350,
	"./nn": 352,
	"./nn.js": 352,
	"./pa-in": 353,
	"./pa-in.js": 353,
	"./pl": 354,
	"./pl.js": 354,
	"./pt": 355,
	"./pt-br": 356,
	"./pt-br.js": 356,
	"./pt.js": 355,
	"./ro": 357,
	"./ro.js": 357,
	"./ru": 358,
	"./ru.js": 358,
	"./sd": 359,
	"./sd.js": 359,
	"./se": 360,
	"./se.js": 360,
	"./si": 361,
	"./si.js": 361,
	"./sk": 362,
	"./sk.js": 362,
	"./sl": 363,
	"./sl.js": 363,
	"./sq": 364,
	"./sq.js": 364,
	"./sr": 365,
	"./sr-cyrl": 366,
	"./sr-cyrl.js": 366,
	"./sr.js": 365,
	"./ss": 367,
	"./ss.js": 367,
	"./sv": 368,
	"./sv.js": 368,
	"./sw": 369,
	"./sw.js": 369,
	"./ta": 370,
	"./ta.js": 370,
	"./te": 371,
	"./te.js": 371,
	"./tet": 372,
	"./tet.js": 372,
	"./th": 373,
	"./th.js": 373,
	"./tl-ph": 374,
	"./tl-ph.js": 374,
	"./tlh": 375,
	"./tlh.js": 375,
	"./tr": 376,
	"./tr.js": 376,
	"./tzl": 377,
	"./tzl.js": 377,
	"./tzm": 378,
	"./tzm-latn": 379,
	"./tzm-latn.js": 379,
	"./tzm.js": 378,
	"./uk": 380,
	"./uk.js": 380,
	"./ur": 381,
	"./ur.js": 381,
	"./uz": 382,
	"./uz-latn": 383,
	"./uz-latn.js": 383,
	"./uz.js": 382,
	"./vi": 384,
	"./vi.js": 384,
	"./x-pseudo": 385,
	"./x-pseudo.js": 385,
	"./yo": 386,
	"./yo.js": 386,
	"./zh-cn": 387,
	"./zh-cn.js": 387,
	"./zh-hk": 388,
	"./zh-hk.js": 388,
	"./zh-tw": 389,
	"./zh-tw.js": 389
};
function webpackContext(req) {
	return __webpack_require__(webpackContextResolve(req));
};
function webpackContextResolve(req) {
	var id = map[req];
	if(!(id + 1)) // check for number or string
		throw new Error("Cannot find module '" + req + "'.");
	return id;
};
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = 526;

/***/ }),

/***/ 825:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(255);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_c8ocaf__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_c8ocaf___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_c8ocaf__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_c8osdkangular__ = __webpack_require__(147);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_c8osdkangular___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_c8osdkangular__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_PLANTS_plants__ = __webpack_require__(430);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_MACHINES_machines__ = __webpack_require__(431);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_DETAILS_details__ = __webpack_require__(432);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_INTERVENTION_intervention__ = __webpack_require__(433);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



// Convertigo CAF Imports



/*
    You can customize your application class by writing code between the :

        Begin_c8o_XXXX and
        End_c8o_XXXX
        
    Comments.
    
    Any code placed outside these these comments will be lost when the application is generated
*/
/*Begin_c8o_AppImport*/
/*End_c8o_AppImport*/




/**
 * Disable comments to run in prod mode
 */
/*import {enableProdMode} from '@angular/core';
 enableProdMode();*/
var MyApp = (function () {
    /*Begin_c8o_AppDeclaration*/
    /*End_c8o_AppDeclaration*/
    function MyApp(platform, statusBar, c8o, router, loader, app) {
        var _this = this;
        this.c8o = c8o;
        this.router = router;
        this.loader = loader;
        this.app = app;
        this.rootPage = __WEBPACK_IMPORTED_MODULE_5__pages_PLANTS_plants__["a" /* PLANTS */];
        /**
         * declaring page to show in Menu
         */
        this.pages = [{ title: "Plants map", component: __WEBPACK_IMPORTED_MODULE_5__pages_PLANTS_plants__["a" /* PLANTS */], includedInAutoMenu: true }, { title: "Machines list", component: __WEBPACK_IMPORTED_MODULE_6__pages_MACHINES_machines__["a" /* MACHINES */], includedInAutoMenu: true }, { title: "Machine details", component: __WEBPACK_IMPORTED_MODULE_7__pages_DETAILS_details__["a" /* DETAILS */], includedInAutoMenu: true }, { title: "Intervention form", component: __WEBPACK_IMPORTED_MODULE_8__pages_INTERVENTION_intervention__["a" /* INTERVENTION */], includedInAutoMenu: true }];
        this.router.pagesArray = this.pages;
        /* ============================================================================================================
           Convertigo Angular Framework (CAF) initialization...
           ============================================================================================================
         * Thanks to Convertigo CAF router we can manage call and navigation :
         *
         * Create a C8orouteOptions in order to define basic and repetitive routes options that will be used in C8oRoute
         * We can define actions such as beforeCall that allow us to run code before the C8o Call
         */
        var tableOptions = new __WEBPACK_IMPORTED_MODULE_3_c8ocaf__["C8oRouteOptions"]()
            .setBeforeCall(function () {
            //Do what ever has to be done...
        })
            .setAfterCall(function () {
            //Do what ever has to be done...
        })
            .setDidEnter(function (page, c8o) {
            c8o.log.trace("DidEnter was called from the new routing table and with page : " + page.constructor.name);
        })
            .setDidLeave(function (page, c8o) {
            c8o.log.trace("DidLeave was called from the new routing table and with page : " + page.constructor.name);
        })
            .setTargetAnimate(true)
            .setTargetDuration(250);
        /**
         * The generated Routing Table
         */
        this.router.addRouteListener(new __WEBPACK_IMPORTED_MODULE_3_c8ocaf__["C8oRouteListener"](["PlantsInter.getMachines"]).addRoute(new __WEBPACK_IMPORTED_MODULE_3_c8ocaf__["C8oRoute"](function (data) { return true; }, tableOptions).setTarget("push", __WEBPACK_IMPORTED_MODULE_6__pages_MACHINES_machines__["a" /* MACHINES */])));
        this.router.addRouteListener(new __WEBPACK_IMPORTED_MODULE_3_c8ocaf__["C8oRouteListener"](["PlantsInter.getMachineDetails"]).addRoute(new __WEBPACK_IMPORTED_MODULE_3_c8ocaf__["C8oRoute"](function (data) { return true; }, tableOptions).setTarget("push", __WEBPACK_IMPORTED_MODULE_7__pages_DETAILS_details__["a" /* DETAILS */])));
        this.router.addRouteListener(new __WEBPACK_IMPORTED_MODULE_3_c8ocaf__["C8oRouteListener"](["PlantsInter.getForm"]).addRoute(new __WEBPACK_IMPORTED_MODULE_3_c8ocaf__["C8oRoute"](function (data) { return true; }, tableOptions).setTarget("push", __WEBPACK_IMPORTED_MODULE_8__pages_INTERVENTION_intervention__["a" /* INTERVENTION */])));
        /**
         *  Define a C8oSettings Object in order to declare settings to be used in the C8oInit method
         */
        var settings = new __WEBPACK_IMPORTED_MODULE_4_c8osdkangular__["C8oSettings"]();
        settings
            .setLogRemote(true)
            .setLogC8o(true)
            .setLogLevelLocal(__WEBPACK_IMPORTED_MODULE_4_c8osdkangular__["C8oLogLevel"].DEBUG);
        /**
         * Then we assign C8oSettings to our c8o Object with the init method
         */
        this.c8o.init(settings);
        /* ============================================================================================================
             End of Convertigo Angular Framework (CAF) initialization...
           ============================================================================================================*/
        /*Begin_c8o_AppConstructor*/
        /*End_c8o_AppConstructor*/
        platform.ready().then(function () {
            statusBar.styleDefault();
            /**
             * Then we finalize initialization
             */
            _this.c8o.finalizeInit();
            /*Begin_c8o_AppInitialization*/
            /*End_c8o_AppInitialization*/
        });
    }
    MyApp.prototype.openPage = function (page) {
        this.app.getActiveNav().setRoot(page.component);
    };
    MyApp.prototype.openPageWithName = function (name) {
        this.app.getActiveNav().setRoot(name);
    };
    MyApp.prototype.getPagesIncludedInAutoMenu = function () {
        var arrayIncluded = [];
        for (var _i = 0, _a = this.pages; _i < _a.length; _i++) {
            var p = _a[_i];
            if (p["includedInAutoMenu"]) {
                arrayIncluded.push(p);
            }
        }
        return arrayIncluded;
    };
    return MyApp;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* Nav */]),
    __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* Nav */])
], MyApp.prototype, "nav", void 0);
MyApp = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({template:/*ion-inline-start:"D:\COMMON\C8O\sc750\workspace\PlantsInter\_private\ionic\src\app\app.html"*/'<ion-menu class="class1500890597895" id="Menu" [content]="content">\n\n<ion-header class="class1500890727582">\n\n<ion-toolbar class="class1500890731485">\n\n<ion-title class="class1500890752959">\n\nMenu\n\n</ion-title>\n\n</ion-toolbar>\n\n</ion-header>\n\n<ion-content class="class1500890742326" padding>\n\n<button class="class1500890605250" ion-item menuClose="Menu" *ngFor="let p of getPagesIncludedInAutoMenu()" (click)="openPage(p)">{{p.title}}</button>\n\n</ion-content>\n\n</ion-menu>\n\n\n\n<ion-nav [root]="rootPage" #content swipeBackEnabled="false"></ion-nav>\n\n'/*ion-inline-end:"D:\COMMON\C8O\sc750\workspace\PlantsInter\_private\ionic\src\app\app.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_4_c8osdkangular__["C8o"], __WEBPACK_IMPORTED_MODULE_3_c8ocaf__["C8oRouter"], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* LoadingController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* App */]])
], MyApp);

//# sourceMappingURL=app.component.js.map

/***/ })

},[434]);
//# sourceMappingURL=main.js.map