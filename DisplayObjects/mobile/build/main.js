webpackJsonp([0],{

/***/ 191:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 191;

/***/ }),

/***/ 236:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 236;

/***/ }),

/***/ 470:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PLANTS; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_c8ocaf__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_c8ocaf___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_c8ocaf__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_actionbeans_service__ = __webpack_require__(75);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_typescript__ = __webpack_require__(166);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_typescript___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_typescript__);
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
    function PLANTS(routerProvider, navParams, loadingCtrl, sanitizer, ref, injector, menuCtrl) {
        var _this = _super.call(this, routerProvider, navParams, loadingCtrl, sanitizer, ref, injector, menuCtrl) || this;
        _this.actionBeans = _this.getInstance(__WEBPACK_IMPORTED_MODULE_4__services_actionbeans_service__["a" /* ActionBeans */]);
        return _this;
        /*Begin_c8o_PageConstructor*/
        /*End_c8o_PageConstructor*/
    }
    /*Begin_c8o_PageFunction*/
    /*End_c8o_PageFunction*/
    PLANTS.prototype.ionViewDidLoad = function () {
        var _this = this;
        _super.prototype.ionViewDidLoad.call(this);
        this.getInstance(__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["Platform"]).ready().then(function () {
            _this.ATS1516101195084({ root: { scope: {}, in: {}, out: 'ionViewDidLoad' } });
        });
    };
    /**
     * Function ATS1516101195084
     *
     *
     * @param stack , the object which holds actions stack
     */
    PLANTS.prototype.ATS1516101195084 = function (stack) {
        var _this = this;
        var c8oPage = this;
        var parent;
        var scope;
        var self;
        var out;
        var event;
        var get = function (key) { var val = undefined; try {
            val = eval(__WEBPACK_IMPORTED_MODULE_5_typescript__["transpile"](key));
        }
        catch (e) {
            c8oPage.c8o.log.warn("[MB] ATS1516101195084: " + e.message);
        } return val; };
        parent = stack["root"];
        event = stack["root"].out;
        scope = stack["root"].scope;
        out = event;
        this.c8o.log.debug("[MB] ATS1516101195084: started");
        new Promise(function (resolve, reject) {
            self = stack["CallSequence_getPlants"] = {};
            self.in = { props: { cacheTtl: get("3000"), marker: get("'getPlants'"), cachePolicy: null, requestable: get("'PlantsInter.getPlants'") }, vars: {} };
            return _this.actionBeans.CallSequenceAction(_this, self.in.props, _this.merge(self.in.vars, stack["root"].in))
                .then(function (res) {
                parent = self;
                parent.out = res;
                out = parent.out;
                return Promise.resolve(res);
            }, function (error) { console.log("[MB] CallSequenceAction : ", error.message); throw new Error(error); })
                .then(function (res) { resolve(res); }).catch(function (error) { reject(error); });
        })
            .catch(function (error) { return Promise.resolve(_this.c8o.log.debug("[MB] ATS1516101195084: An error occured : ", error.message)); })
            .then(function (res) { _this.c8o.log.debug("[MB] ATS1516101195084: ended"); });
    };
    PLANTS.nameStatic = "PLANTS";
    PLANTS = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-plants',template:/*ion-inline-start:"D:\COMMON\C8O\convertigo-studio-7.5.1_beta-win64\workspace\PlantsInter\_private\ionic\src\pages\PLANTS\plants.html"*/'<ion-header class="class1491634212350">\n\n<ion-navbar class="class1491634231108" color="light">\n\n<ion-title class="class1491634265317">\n\nCarte des Implantations\n\n</ion-title>\n\n<button class="class1491634442029" menuToggle ion-button>\n\n<ion-icon class="class1491634475867" name="menu">\n\n</ion-icon>\n\n</button>\n\n<ion-buttons class="class1491634611427" right>\n\n<button class="class1491634621907" ion-button>\n\n<ion-icon class="class1491634637555" name="more">\n\n</ion-icon>\n\n</button>\n\n</ion-buttons>\n\n</ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content class="class1489674805352">\n\n<agm-map class="class1501164684395" [zoom]="8" [latitude]="48.6969459" [style.height]="\'100%\'" [longitude]="2.1775981">\n\n<ng-container class="class1501168974422" *ngFor="let item1501168974422 of listen([\'PlantsInter.getPlants#getPlants\'])?.PLANTS?.PLANT;">\n\n<agm-marker class="class1501172093149" [iconUrl]="item1501168974422?.alert ? \'assets/images/factory_red.png\'  : \'assets/images/factory.png\'" [title]="\'Convertigo\'" [latitude]="item1501168974422?.LAT" [longitude]="item1501168974422?.LNG">\n\n<agm-info-window class="class1501231762582">\n\n<img class="class1501231762606" width="" [src]="\'assets/images/cbk.jpg\'" height=""/>\n\n<h2 class="class1501231762628">\n\nUsine d\'Orsay\n\n</h2>\n\n<p class="class1501231762663">\n\n8, Boulevard Dubreuil, 91400 Orsay\n\n</p>\n\n<button class="class1501779159293" block ion-button (click)="actionBeans.CallSequenceAction(this,{cacheTtl: 3000, marker: \'getMachines\', cachePolicy: null, requestable: \'PlantsInter.getMachines\'},{})">\n\nVoir D&eacute;tails\n\n</button>\n\n</agm-info-window>\n\n</agm-marker>\n\n</ng-container>\n\n</agm-map>\n\n</ion-content>\n\n\n\n<ion-footer class="class1491634242460">\n\n<ion-toolbar class="class1491634317538" color="light">\n\n<ion-title class="class1501692770182">\n\n<div class="class1501692770209" text-center>\n\n&copy; Talend - Convertigo 2017\n\n</div>\n\n</ion-title>\n\n</ion-toolbar>\n\n</ion-footer>\n\n\n\n'/*ion-inline-end:"D:\COMMON\C8O\convertigo-studio-7.5.1_beta-win64\workspace\PlantsInter\_private\ionic\src\pages\PLANTS\plants.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3_c8ocaf__["C8oRouter"], __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["NavParams"], __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["LoadingController"], __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["c" /* DomSanitizer */], __WEBPACK_IMPORTED_MODULE_0__angular_core__["ChangeDetectorRef"], __WEBPACK_IMPORTED_MODULE_0__angular_core__["Injector"], __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["MenuController"]])
    ], PLANTS);
    return PLANTS;
}(__WEBPACK_IMPORTED_MODULE_3_c8ocaf__["C8oPage"]));

//# sourceMappingURL=plants.js.map

/***/ }),

/***/ 471:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MACHINES; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_c8ocaf__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_c8ocaf___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_c8ocaf__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_actionbeans_service__ = __webpack_require__(75);
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







/*Begin_c8o_PageImport*/
/*End_c8o_PageImport*/
var MACHINES = (function (_super) {
    __extends(MACHINES, _super);
    /*Begin_c8o_PageDeclaration*/
    /*End_c8o_PageDeclaration*/
    function MACHINES(routerProvider, navParams, loadingCtrl, sanitizer, ref, injector, menuCtrl) {
        var _this = _super.call(this, routerProvider, navParams, loadingCtrl, sanitizer, ref, injector, menuCtrl) || this;
        _this.actionBeans = _this.getInstance(__WEBPACK_IMPORTED_MODULE_4__services_actionbeans_service__["a" /* ActionBeans */]);
        return _this;
        /*Begin_c8o_PageConstructor*/
        /*End_c8o_PageConstructor*/
    }
    MACHINES.nameStatic = "MACHINES";
    MACHINES = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-machines',template:/*ion-inline-start:"D:\COMMON\C8O\convertigo-studio-7.5.1_beta-win64\workspace\PlantsInter\_private\ionic\src\pages\MACHINES\machines.html"*/'<ion-header class="class1501232838154">\n\n<ion-navbar class="class1501232838172" color="light">\n\n<ion-title class="class1501232838187">\n\nEquipements\n\n</ion-title>\n\n<button class="class1501232838225" menuToggle ion-button>\n\n<ion-icon class="class1501232838240" name="menu">\n\n</ion-icon>\n\n</button>\n\n<ion-buttons class="class1501232838280" right>\n\n<button class="class1501232838300" ion-button>\n\n<ion-icon class="class1501232838320" name="more">\n\n</ion-icon>\n\n</button>\n\n</ion-buttons>\n\n</ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content class="class1501232850085">\n\n<img class="class1501694088782" width="100%" [src]="\'assets/images/factory-with-pipes.jpg\'" height="80px"/>\n\n<ion-list class="class1501246906206">\n\n<ng-container class="class1501247452589" *ngFor="let item1501247452589 of listen([\'PlantsInter.getMachines#getMachines\'])?.MACHINES?.MACHINE;">\n\n<button class="class1501693244512" ion-item (click)="actionBeans.CallSequenceAction(this,{cacheTtl: 3000, marker: \'getDetails\', cachePolicy: null, requestable: \'PlantsInter.getMachineDetails\'},{})">\n\n<ion-thumbnail class="class1501693267423" item-left>\n\n<ng-container class="class1501693267445" *ngIf="item1501247452589?.ALERT">\n\n<img class="class1501693267465" width="" [src]="\'assets/images/atm_red.png\'" height=""/>\n\n</ng-container>\n\n<ng-container class="class1501693267481" *ngIf="! item1501247452589?.ALERT">\n\n<img class="class1501693267503" width="" [src]="\'assets/images/atm.png\'" height=""/>\n\n</ng-container>\n\n</ion-thumbnail>\n\n<h2 class="class1501693267522">\n\n{{item1501247452589?.NAME}}\n\n</h2>\n\n<p class="class1501693267564">\n\n{{&quot;ID-&quot;+item1501247452589?.M_ID}}\n\n</p>\n\n</button>\n\n</ng-container>\n\n</ion-list>\n\n</ion-content>\n\n\n\n<ion-footer class="class1501232838336">\n\n<ion-toolbar class="class1501232838353" color="light">\n\n<ion-title class="class1501692800080">\n\n<div class="class1501692800106" text-center>\n\n&copy; Talend - Convertigo 2017\n\n</div>\n\n</ion-title>\n\n</ion-toolbar>\n\n</ion-footer>\n\n\n\n'/*ion-inline-end:"D:\COMMON\C8O\convertigo-studio-7.5.1_beta-win64\workspace\PlantsInter\_private\ionic\src\pages\MACHINES\machines.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3_c8ocaf__["C8oRouter"], __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["NavParams"], __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["LoadingController"], __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["c" /* DomSanitizer */], __WEBPACK_IMPORTED_MODULE_0__angular_core__["ChangeDetectorRef"], __WEBPACK_IMPORTED_MODULE_0__angular_core__["Injector"], __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["MenuController"]])
    ], MACHINES);
    return MACHINES;
}(__WEBPACK_IMPORTED_MODULE_3_c8ocaf__["C8oPage"]));

//# sourceMappingURL=machines.js.map

/***/ }),

/***/ 472:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DETAILS; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_c8ocaf__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_c8ocaf___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_c8ocaf__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_actionbeans_service__ = __webpack_require__(75);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_typescript__ = __webpack_require__(166);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_typescript___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_typescript__);
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
    function DETAILS(routerProvider, navParams, loadingCtrl, sanitizer, ref, injector, menuCtrl) {
        var _this = _super.call(this, routerProvider, navParams, loadingCtrl, sanitizer, ref, injector, menuCtrl) || this;
        /*Begin_c8o_PageDeclaration*/
        _this.TLine = 0;
        _this.TTline = [40];
        _this.TTlineIdx = [0];
        _this.lineChartDataSets = [{ data: [0], label: 'T°C' }];
        _this.idx = 1;
        _this.settId = null;
        _this.actionBeans = _this.getInstance(__WEBPACK_IMPORTED_MODULE_4__services_actionbeans_service__["a" /* ActionBeans */]);
        return _this;
        /*Begin_c8o_PageConstructor*/
        /*End_c8o_PageConstructor*/
    }
    /*Begin_c8o_PageFunction*/
    DETAILS.prototype.changeTLine = function () {
        var _this = this;
        //	      if(this.idx < this.TTline.length){
        //	          this.TLine = this.TTline[this.idx++];
        //	          window.setTimeout(this.changeTLine.bind(this), 750);
        //	      }else{
        //	          this.TLine = this.TTline[this.TTline.length-1];
        //	      }
        this.c8o.callJsonObject("PlantsInter.getIOTSensor", { "idx": this.idx })
            .then(function (response, parameters) {
            _this.TTlineIdx.push(_this.idx++);
            //	            console.log(this.TTlineIdx);
            console.log(JSON.stringify(response["sensor"]));
            _this.TLine = response["sensor"].value;
            _this.TTline.push(_this.TLine);
            _this.lineChartDataSets = [{ data: _this.TTline, label: 'T°C' }];
            return null;
        });
        this.settId = window.setTimeout(this.changeTLine.bind(this), 2500);
    };
    /*End_c8o_PageFunction*/
    DETAILS.prototype.ionViewDidEnter = function () {
        var _this = this;
        _super.prototype.ionViewDidEnter.call(this);
        this.getInstance(__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["Platform"]).ready().then(function () {
            _this.ATS1516195702731({ root: { scope: {}, in: {}, out: 'ionViewDidEnter' } });
            _this.ATS1516109633702({ root: { scope: {}, in: {}, out: 'ionViewDidEnter' } });
        });
    };
    DETAILS.prototype.ionViewDidLeave = function () {
        var _this = this;
        _super.prototype.ionViewDidLeave.call(this);
        this.getInstance(__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["Platform"]).ready().then(function () {
            _this.ATS1516186337253({ root: { scope: {}, in: {}, out: 'ionViewDidLeave' } });
        });
    };
    /**
     * Function ATS1516195702731
     *
     *
     * @param stack , the object which holds actions stack
     */
    DETAILS.prototype.ATS1516195702731 = function (stack) {
        var _this = this;
        var c8oPage = this;
        var parent;
        var scope;
        var self;
        var out;
        var event;
        var get = function (key) { var val = undefined; try {
            val = eval(__WEBPACK_IMPORTED_MODULE_5_typescript__["transpile"](key));
        }
        catch (e) {
            c8oPage.c8o.log.warn("[MB] ATS1516195702731: " + e.message);
        } return val; };
        parent = stack["root"];
        event = stack["root"].out;
        scope = stack["root"].scope;
        out = event;
        this.c8o.log.debug("[MB] ATS1516195702731: started");
        new Promise(function (resolve, reject) {
            self = stack["AnnotationChartJSPlugin"] = {};
            self.in = { props: {}, vars: {} };
            return _this.CTS1516195702731(_this, _this.merge(self.in.props, { stack: stack, parent: parent, out: out }), _this.merge(self.in.vars, stack["root"].in), event)
                .then(function (res) {
                parent = self;
                parent.out = res;
                out = parent.out;
                return Promise.resolve(res);
            }, function (error) { console.log("[MB] CTS1516195702731 : ", error.message); throw new Error(error); })
                .then(function (res) { resolve(res); }).catch(function (error) { reject(error); });
        })
            .catch(function (error) { return Promise.resolve(_this.c8o.log.debug("[MB] ATS1516195702731: An error occured : ", error.message)); })
            .then(function (res) { _this.c8o.log.debug("[MB] ATS1516195702731: ended"); });
    };
    /**
     * Function AnnotationChartJSPlugin
     *
     *
     * @param page  , the current page
     * @param props , the object which holds properties key-value pairs
     * @param vars  , the object which holds variables key-value pairs
     * @param event , the current event object
     */
    DETAILS.prototype.CTS1516195702731 = function (page, props, vars, event) {
        return new Promise(function (resolve, reject) {
            /*Begin_c8o_function:CTS1516195702731*/
            page.c8o.log.debug("Add chartjs-plugin-annotation plugin if not exists...");
            resolve();
            /*End_c8o_function:CTS1516195702731*/
        });
    };
    /**
     * Function ATS1516109633702
     *
     *
     * @param stack , the object which holds actions stack
     */
    DETAILS.prototype.ATS1516109633702 = function (stack) {
        var _this = this;
        var c8oPage = this;
        var parent;
        var scope;
        var self;
        var out;
        var event;
        var get = function (key) { var val = undefined; try {
            val = eval(__WEBPACK_IMPORTED_MODULE_5_typescript__["transpile"](key));
        }
        catch (e) {
            c8oPage.c8o.log.warn("[MB] ATS1516109633702: " + e.message);
        } return val; };
        parent = stack["root"];
        event = stack["root"].out;
        scope = stack["root"].scope;
        out = event;
        this.c8o.log.debug("[MB] ATS1516109633702: started");
        new Promise(function (resolve, reject) {
            self = stack["getIOTSensor"] = {};
            self.in = { props: {}, vars: {} };
            return _this.CTS1516109633702(_this, _this.merge(self.in.props, { stack: stack, parent: parent, out: out }), _this.merge(self.in.vars, stack["root"].in), event)
                .then(function (res) {
                parent = self;
                parent.out = res;
                out = parent.out;
                return Promise.resolve(res);
            }, function (error) { console.log("[MB] CTS1516109633702 : ", error.message); throw new Error(error); })
                .then(function (res) { resolve(res); }).catch(function (error) { reject(error); });
        })
            .catch(function (error) { return Promise.resolve(_this.c8o.log.debug("[MB] ATS1516109633702: An error occured : ", error.message)); })
            .then(function (res) { _this.c8o.log.debug("[MB] ATS1516109633702: ended"); });
    };
    /**
     * Function getIOTSensor
     *
     *
     * @param page  , the current page
     * @param props , the object which holds properties key-value pairs
     * @param vars  , the object which holds variables key-value pairs
     * @param event , the current event object
     */
    DETAILS.prototype.CTS1516109633702 = function (page, props, vars, event) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            /*Begin_c8o_function:CTS1516109633702*/
            _this.changeTLine();
            resolve();
            /*End_c8o_function:CTS1516109633702*/
        });
    };
    /**
     * Function ATS1516186337253
     *
     *
     * @param stack , the object which holds actions stack
     */
    DETAILS.prototype.ATS1516186337253 = function (stack) {
        var _this = this;
        var c8oPage = this;
        var parent;
        var scope;
        var self;
        var out;
        var event;
        var get = function (key) { var val = undefined; try {
            val = eval(__WEBPACK_IMPORTED_MODULE_5_typescript__["transpile"](key));
        }
        catch (e) {
            c8oPage.c8o.log.warn("[MB] ATS1516186337253: " + e.message);
        } return val; };
        parent = stack["root"];
        event = stack["root"].out;
        scope = stack["root"].scope;
        out = event;
        this.c8o.log.debug("[MB] ATS1516186337253: started");
        new Promise(function (resolve, reject) {
            self = stack["leaveIOTSensor"] = {};
            self.in = { props: {}, vars: {} };
            return _this.CTS1516186337253(_this, _this.merge(self.in.props, { stack: stack, parent: parent, out: out }), _this.merge(self.in.vars, stack["root"].in), event)
                .then(function (res) {
                parent = self;
                parent.out = res;
                out = parent.out;
                return Promise.resolve(res);
            }, function (error) { console.log("[MB] CTS1516186337253 : ", error.message); throw new Error(error); })
                .then(function (res) { resolve(res); }).catch(function (error) { reject(error); });
        })
            .catch(function (error) { return Promise.resolve(_this.c8o.log.debug("[MB] ATS1516186337253: An error occured : ", error.message)); })
            .then(function (res) { _this.c8o.log.debug("[MB] ATS1516186337253: ended"); });
    };
    /**
     * Function leaveIOTSensor
     *
     *
     * @param page  , the current page
     * @param props , the object which holds properties key-value pairs
     * @param vars  , the object which holds variables key-value pairs
     * @param event , the current event object
     */
    DETAILS.prototype.CTS1516186337253 = function (page, props, vars, event) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            /*Begin_c8o_function:CTS1516186337253*/
            if (_this.settId != null) {
                _this.c8o.log.debug("Stopping IOT sensor listening...");
                window.clearTimeout(_this.settId);
            }
            resolve();
            /*End_c8o_function:CTS1516186337253*/
        });
    };
    DETAILS.nameStatic = "DETAILS";
    DETAILS = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-details',template:/*ion-inline-start:"D:\COMMON\C8O\convertigo-studio-7.5.1_beta-win64\workspace\PlantsInter\_private\ionic\src\pages\DETAILS\details.html"*/'<ion-header class="class1501248601756">\n\n<ion-navbar class="class1501248601776" color="light">\n\n<ion-title class="class1501248601797">\n\nD&eacute;tails &eacute;quipement\n\n</ion-title>\n\n<button class="class1501248601833" menuToggle ion-button>\n\n<ion-icon class="class1501248601854" name="menu">\n\n</ion-icon>\n\n</button>\n\n<ion-buttons class="class1501248601870" right>\n\n<button class="class1501248601888" ion-button>\n\n<ion-icon class="class1501248601909" name="more">\n\n</ion-icon>\n\n</button>\n\n</ion-buttons>\n\n</ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content class="class1501248601926">\n\n<img class="class1501695184064" width="100%" [src]="\'assets/images/machine_details.jpg\'" height="80px"/>\n\n<ion-card class="class1501741155669">\n\n<ion-grid class="class1501252181020">\n\n<ion-row class="class1501252236519" nowrap>\n\n<ion-col class="class1501252607745" col-8>\n\nModel:\n\n<hr class="class1501255354901"/>\n\n</ion-col>\n\n<ion-col class="class1501252452671" col-4 align-self-center>\n\n{{listen([\'PlantsInter.getMachineDetails#getDetails\'])?.DETAILS?.DETAIL?.MODEL}}\n\n<hr class="class1501693767355"/>\n\n</ion-col>\n\n</ion-row>\n\n<ion-row class="class1501253120244" nowrap>\n\n<ion-col class="class1501253120266" col-8>\n\nSerial:\n\n<hr class="class1501255376942"/>\n\n</ion-col>\n\n<ion-col class="class1501253120298" col-4 align-self-center>\n\n{{listen([\'PlantsInter.getMachineDetails#getDetails\'])?.DETAILS?.DETAIL?.M_ID}}\n\n<hr class="class1501693771472"/>\n\n</ion-col>\n\n</ion-row>\n\n<ion-row class="class1501253177003" nowrap>\n\n<ion-col class="class1501253177019" col-8>\n\nInstallation date:\n\n<hr class="class1501255383192"/>\n\n</ion-col>\n\n<ion-col class="class1501253177052" col-4 align-self-center>\n\n{{listen([\'PlantsInter.getMachineDetails#getDetails\'])?.DETAILS?.DETAIL?.INSTALL_DATE}}\n\n<hr class="class1501693777406"/>\n\n</ion-col>\n\n</ion-row>\n\n<ion-row class="class1501253179691" nowrap>\n\n<ion-col class="class1501253179708" col-8>\n\nLast intervention:\n\n<hr class="class1501255385762"/>\n\n</ion-col>\n\n<ion-col class="class1501253179742" col-4 align-self-center>\n\n{{listen([\'PlantsInter.getMachineDetails#getDetails\'])?.DETAILS?.DETAIL?.LAST_INTER_DATE}}\n\n<hr class="class1501693782501"/>\n\n</ion-col>\n\n</ion-row>\n\n</ion-grid>\n\n</ion-card>\n\n<ion-grid class="class1501687571150">\n\n<ion-row class="class1507294093720">\n\n<ion-col class="class1507294130206">\n\n<canvas class="class1507294151891" baseChart [options]="{events: [\'click\'], \'title\':{\'display\': true,\'text\': \'Sensor temp. over time\'},scales: {yAxes: [{ticks: {min: 0, max: 100}}]}}" [colors]="" height="100" chartType="line" [datasets]="lineChartDataSets" width="100" [labels]="TTlineIdx">\n\n</canvas>\n\n</ion-col>\n\n</ion-row>\n\n</ion-grid>\n\n</ion-content>\n\n\n\n<ion-footer class="class1501248602261">\n\n<ion-toolbar class="class1501248602281" color="light">\n\n<ion-buttons class="class1501248602384" right>\n\n<button class="class1501248602398" ion-button (click)="actionBeans.CallSequenceAction(this,{cacheTtl: 3000, marker: \'getForm\', cachePolicy: null, requestable: \'PlantsInter.getForm\'},{})">\n\n<ion-icon class="class1501595577014" name="hammer">\n\n</ion-icon>\n\nProceed\n\n</button>\n\n</ion-buttons>\n\n</ion-toolbar>\n\n</ion-footer>\n\n\n\n'/*ion-inline-end:"D:\COMMON\C8O\convertigo-studio-7.5.1_beta-win64\workspace\PlantsInter\_private\ionic\src\pages\DETAILS\details.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3_c8ocaf__["C8oRouter"], __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["NavParams"], __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["LoadingController"], __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["c" /* DomSanitizer */], __WEBPACK_IMPORTED_MODULE_0__angular_core__["ChangeDetectorRef"], __WEBPACK_IMPORTED_MODULE_0__angular_core__["Injector"], __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["MenuController"]])
    ], DETAILS);
    return DETAILS;
}(__WEBPACK_IMPORTED_MODULE_3_c8ocaf__["C8oPage"]));

//# sourceMappingURL=details.js.map

/***/ }),

/***/ 473:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return INTERVENTION; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_c8ocaf__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_c8ocaf___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_c8ocaf__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_actionbeans_service__ = __webpack_require__(75);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_forms__ = __webpack_require__(20);
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
    function INTERVENTION(routerProvider, navParams, loadingCtrl, sanitizer, ref, injector, menuCtrl) {
        var _this = _super.call(this, routerProvider, navParams, loadingCtrl, sanitizer, ref, injector, menuCtrl) || this;
        /*Begin_c8o_PageDeclaration*/
        _this.tzoffset = (new Date()).getTimezoneOffset() * 60000; //offset in milliseconds
        _this.localISOTime = (new Date(Date.now() - _this.tzoffset)).toISOString().slice(0, -1);
        _this.myDate = _this.localISOTime;
        _this.actionBeans = _this.getInstance(__WEBPACK_IMPORTED_MODULE_4__services_actionbeans_service__["a" /* ActionBeans */]);
        /**
         * Form
         *
         */
        _this.form1501596258205 = new __WEBPACK_IMPORTED_MODULE_5__angular_forms__["b" /* FormGroup */]({
            var1501596281670: new __WEBPACK_IMPORTED_MODULE_5__angular_forms__["a" /* FormControl */]('', __WEBPACK_IMPORTED_MODULE_5__angular_forms__["g" /* Validators */].compose([]), __WEBPACK_IMPORTED_MODULE_5__angular_forms__["g" /* Validators */].composeAsync([])),
            var1501598956173: new __WEBPACK_IMPORTED_MODULE_5__angular_forms__["a" /* FormControl */]('', __WEBPACK_IMPORTED_MODULE_5__angular_forms__["g" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_5__angular_forms__["g" /* Validators */].required]), __WEBPACK_IMPORTED_MODULE_5__angular_forms__["g" /* Validators */].composeAsync([])),
            var1501695961656: new __WEBPACK_IMPORTED_MODULE_5__angular_forms__["a" /* FormControl */]('', __WEBPACK_IMPORTED_MODULE_5__angular_forms__["g" /* Validators */].compose([]), __WEBPACK_IMPORTED_MODULE_5__angular_forms__["g" /* Validators */].composeAsync([])),
            var1501856684540: new __WEBPACK_IMPORTED_MODULE_5__angular_forms__["a" /* FormControl */]('', __WEBPACK_IMPORTED_MODULE_5__angular_forms__["g" /* Validators */].compose([]), __WEBPACK_IMPORTED_MODULE_5__angular_forms__["g" /* Validators */].composeAsync([])),
        });
        return _this;
        /*Begin_c8o_PageConstructor*/
        /*End_c8o_PageConstructor*/
    }
    INTERVENTION.nameStatic = "INTERVENTION";
    INTERVENTION = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-intervention',template:/*ion-inline-start:"D:\COMMON\C8O\convertigo-studio-7.5.1_beta-win64\workspace\PlantsInter\_private\ionic\src\pages\INTERVENTION\intervention.html"*/'<ion-header class="class1501596145457">\n\n<ion-navbar class="class1501596145478" color="light">\n\n<ion-title class="class1501596145495">\n\nIntervention\n\n</ion-title>\n\n<button class="class1501596145531" menuToggle ion-button>\n\n<ion-icon class="class1501596145549" name="menu">\n\n</ion-icon>\n\n</button>\n\n<ion-buttons class="class1501596145583" right>\n\n<button class="class1501596145600" ion-button>\n\n<ion-icon class="class1501596145617" name="more">\n\n</ion-icon>\n\n</button>\n\n</ion-buttons>\n\n</ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content class="class1501596145635">\n\n<img class="class1501695593163" width="100%" [src]="\'assets/images/intervention.jpg\'" height="80px"/>\n\n<ion-card class="class1501740600279">\n\n<form class="class1501596258205" [formGroup]="form1501596258205" novalidate (ngSubmit)="actionBeans.ToastAction(this,{duration: 3000, cssClass: null, closeButtonText: null, dismissOnPageChange: null, showCloseButton: null, position: \'bottom\', message: \'Travail pris en compte...\'},merge(form1501596258205.value, {}))">\n\n<ion-list class="class1501598696611">\n\n<ion-item-divider class="class1501696029168" color="dark">\n\nDate d\'intervention\n\n</ion-item-divider>\n\n<ion-item class="class1501597203281">\n\n<ion-label class="class1501598228112">\n\nDate\n\n</ion-label>\n\n<ion-datetime class="class1501596281670" pickerFormat="HH:mm DD/MM/YYYY" [ngModel]="myDate" displayFormat="HH:mm DD/MM/YYYY" formControlName="var1501596281670">\n\n</ion-datetime>\n\n</ion-item>\n\n<ion-item-divider class="class1501598852332" color="dark">\n\nCat&eacute;gorie\n\n</ion-item-divider>\n\n<ion-item class="class1501598949885">\n\n<ion-label class="class1501598967837">\n\nType d\'intervention\n\n</ion-label>\n\n<ion-select class="class1501598956173" [ngModel]="null" formControlName="var1501598956173">\n\n<ion-option class="class1501599033183">\n\nR&eacute;paration\n\n</ion-option>\n\n<ion-option class="class1501599062923">\n\nR&eacute;glage\n\n</ion-option>\n\n<ion-option class="class1501599083197">\n\nRemplacement\n\n</ion-option>\n\n<ion-option class="class1501599087671">\n\nD&eacute;sactivation\n\n</ion-option>\n\n<ion-option class="class1501599091037">\n\nFausse alerte\n\n</ion-option>\n\n</ion-select>\n\n</ion-item>\n\n<ion-item-divider class="class1501695794371" color="dark">\n\nComplexit&eacute;\n\n</ion-item-divider>\n\n<ion-item class="class1501695804829">\n\n<ion-range class="class1501695961656" [ngModel]="\'0\'" min="0" pin="true" max="5" color="danger" formControlName="var1501695961656" step="1" snaps="true">\n\n<ion-label class="class1501696333382" range-left>\n\n0\n\n</ion-label>\n\n<ion-label class="class1501696463013" range-right>\n\n5\n\n</ion-label>\n\n</ion-range>\n\n</ion-item>\n\n<ion-item-divider class="class1501598802391" color="dark">\n\nD&eacute;tails\n\n</ion-item-divider>\n\n<ion-item class="class1501596698254">\n\n<ion-label class="class1501596752064" floating>\n\nCompte rendu d\'intervention\n\n</ion-label>\n\n<ion-textarea class="class1501856684540" cols="40" formControlName="var1501856684540" rows="3">\n\n</ion-textarea>\n\n</ion-item>\n\n</ion-list>\n\n<ion-buttons class="class1501740640743" right>\n\n<button class="class1501740648549" type="reset" ion-button>\n\nReset\n\n</button>\n\n<button class="class1501740652392" [disabled]="!form1501596258205.valid" type="submit" ion-button>\n\nOk\n\n</button>\n\n</ion-buttons>\n\n</form>\n\n</ion-card>\n\n</ion-content>\n\n\n\n<ion-footer class="class1501596146302">\n\n<ion-toolbar class="class1501596146322" color="light">\n\n<ion-title class="class1501692814226">\n\n<div class="class1501692814273" text-center>\n\n&copy; Talend - Convertigo 2017\n\n</div>\n\n</ion-title>\n\n</ion-toolbar>\n\n</ion-footer>\n\n\n\n'/*ion-inline-end:"D:\COMMON\C8O\convertigo-studio-7.5.1_beta-win64\workspace\PlantsInter\_private\ionic\src\pages\INTERVENTION\intervention.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3_c8ocaf__["C8oRouter"], __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["NavParams"], __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["LoadingController"], __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["c" /* DomSanitizer */], __WEBPACK_IMPORTED_MODULE_0__angular_core__["ChangeDetectorRef"], __WEBPACK_IMPORTED_MODULE_0__angular_core__["Injector"], __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["MenuController"]])
    ], INTERVENTION);
    return INTERVENTION;
}(__WEBPACK_IMPORTED_MODULE_3_c8ocaf__["C8oPage"]));

//# sourceMappingURL=intervention.js.map

/***/ }),

/***/ 474:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(475);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(493);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 493:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export deepLinkConfig */
/* unused harmony export createTranslateLoader */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__(101);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_forms__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_ionic_angular__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_native_status_bar__ = __webpack_require__(276);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_ionic2_super_tabs__ = __webpack_require__(545);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__agm_core__ = __webpack_require__(555);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_ng2_charts__ = __webpack_require__(560);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_ng2_charts___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8_ng2_charts__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__ngx_translate_core__ = __webpack_require__(412);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__ngx_translate_http_loader__ = __webpack_require__(617);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_c8osdkangular__ = __webpack_require__(157);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_c8osdkangular___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_11_c8osdkangular__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12_c8ocaf__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12_c8ocaf___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_12_c8ocaf__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__services_actionbeans_service__ = __webpack_require__(75);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__app_component__ = __webpack_require__(742);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__pages_PLANTS_plants__ = __webpack_require__(470);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__pages_MACHINES_machines__ = __webpack_require__(471);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__pages_DETAILS_details__ = __webpack_require__(472);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__pages_INTERVENTION_intervention__ = __webpack_require__(473);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



















/**
 * Deep links to your pages so that the app can rout directly to the page url
 */
var deepLinkConfig = {
    links: [{ component: __WEBPACK_IMPORTED_MODULE_15__pages_PLANTS_plants__["a" /* PLANTS */], name: "PLANTS", segment: "Page" }, { component: __WEBPACK_IMPORTED_MODULE_16__pages_MACHINES_machines__["a" /* MACHINES */], name: "MACHINES", segment: "MACHINES" }, { component: __WEBPACK_IMPORTED_MODULE_17__pages_DETAILS_details__["a" /* DETAILS */], name: "DETAILS", segment: "DETAILS" }, { component: __WEBPACK_IMPORTED_MODULE_18__pages_INTERVENTION_intervention__["a" /* INTERVENTION */], name: "INTERVENTION", segment: "INTERVENTION" }]
};
/**
 * Customize the ngx-translate loader for assets/i18n
 */
function createTranslateLoader(http) {
    return new __WEBPACK_IMPORTED_MODULE_10__ngx_translate_http_loader__["a" /* TranslateHttpLoader */](http, './assets/i18n/', '.json');
}
var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_14__app_component__["a" /* MyApp */], __WEBPACK_IMPORTED_MODULE_15__pages_PLANTS_plants__["a" /* PLANTS */], __WEBPACK_IMPORTED_MODULE_16__pages_MACHINES_machines__["a" /* MACHINES */], __WEBPACK_IMPORTED_MODULE_17__pages_DETAILS_details__["a" /* DETAILS */], __WEBPACK_IMPORTED_MODULE_18__pages_INTERVENTION_intervention__["a" /* INTERVENTION */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["HttpClientModule"],
                __WEBPACK_IMPORTED_MODULE_3__angular_forms__["c" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_forms__["f" /* ReactiveFormsModule */],
                __WEBPACK_IMPORTED_MODULE_8_ng2_charts__["ChartsModule"],
                __WEBPACK_IMPORTED_MODULE_9__ngx_translate_core__["b" /* TranslateModule */].forRoot({
                    loader: {
                        provide: __WEBPACK_IMPORTED_MODULE_9__ngx_translate_core__["a" /* TranslateLoader */],
                        useFactory: (createTranslateLoader),
                        deps: [__WEBPACK_IMPORTED_MODULE_1__angular_common_http__["HttpClient"]]
                    }
                }),
                __WEBPACK_IMPORTED_MODULE_6_ionic2_super_tabs__["a" /* SuperTabsModule */].forRoot(),
                __WEBPACK_IMPORTED_MODULE_7__agm_core__["a" /* AgmCoreModule */].forRoot({
                    apiKey: 'AIzaSyB0Nl1dX0kEsB5QZaNf6m-tnb1N-U5dpXs'
                }),
                __WEBPACK_IMPORTED_MODULE_4_ionic_angular__["IonicModule"].forRoot(__WEBPACK_IMPORTED_MODULE_14__app_component__["a" /* MyApp */], {}, deepLinkConfig)
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_4_ionic_angular__["IonicApp"]],
            entryComponents: [__WEBPACK_IMPORTED_MODULE_14__app_component__["a" /* MyApp */], __WEBPACK_IMPORTED_MODULE_15__pages_PLANTS_plants__["a" /* PLANTS */], __WEBPACK_IMPORTED_MODULE_16__pages_MACHINES_machines__["a" /* MACHINES */], __WEBPACK_IMPORTED_MODULE_17__pages_DETAILS_details__["a" /* DETAILS */], __WEBPACK_IMPORTED_MODULE_18__pages_INTERVENTION_intervention__["a" /* INTERVENTION */]],
            providers: [
                __WEBPACK_IMPORTED_MODULE_5__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_11_c8osdkangular__["C8o"],
                __WEBPACK_IMPORTED_MODULE_12_c8ocaf__["C8oRouter"],
                __WEBPACK_IMPORTED_MODULE_13__services_actionbeans_service__["a" /* ActionBeans */],
                { provide: __WEBPACK_IMPORTED_MODULE_0__angular_core__["ErrorHandler"], useClass: __WEBPACK_IMPORTED_MODULE_4_ionic_angular__["IonicErrorHandler"] }
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 592:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./af": 297,
	"./af.js": 297,
	"./ar": 298,
	"./ar-dz": 299,
	"./ar-dz.js": 299,
	"./ar-kw": 300,
	"./ar-kw.js": 300,
	"./ar-ly": 301,
	"./ar-ly.js": 301,
	"./ar-ma": 302,
	"./ar-ma.js": 302,
	"./ar-sa": 303,
	"./ar-sa.js": 303,
	"./ar-tn": 304,
	"./ar-tn.js": 304,
	"./ar.js": 298,
	"./az": 305,
	"./az.js": 305,
	"./be": 306,
	"./be.js": 306,
	"./bg": 307,
	"./bg.js": 307,
	"./bn": 308,
	"./bn.js": 308,
	"./bo": 309,
	"./bo.js": 309,
	"./br": 310,
	"./br.js": 310,
	"./bs": 311,
	"./bs.js": 311,
	"./ca": 312,
	"./ca.js": 312,
	"./cs": 313,
	"./cs.js": 313,
	"./cv": 314,
	"./cv.js": 314,
	"./cy": 315,
	"./cy.js": 315,
	"./da": 316,
	"./da.js": 316,
	"./de": 317,
	"./de-at": 318,
	"./de-at.js": 318,
	"./de-ch": 319,
	"./de-ch.js": 319,
	"./de.js": 317,
	"./dv": 320,
	"./dv.js": 320,
	"./el": 321,
	"./el.js": 321,
	"./en-au": 322,
	"./en-au.js": 322,
	"./en-ca": 323,
	"./en-ca.js": 323,
	"./en-gb": 324,
	"./en-gb.js": 324,
	"./en-ie": 325,
	"./en-ie.js": 325,
	"./en-nz": 326,
	"./en-nz.js": 326,
	"./eo": 327,
	"./eo.js": 327,
	"./es": 328,
	"./es-do": 329,
	"./es-do.js": 329,
	"./es.js": 328,
	"./et": 330,
	"./et.js": 330,
	"./eu": 331,
	"./eu.js": 331,
	"./fa": 332,
	"./fa.js": 332,
	"./fi": 333,
	"./fi.js": 333,
	"./fo": 334,
	"./fo.js": 334,
	"./fr": 335,
	"./fr-ca": 336,
	"./fr-ca.js": 336,
	"./fr-ch": 337,
	"./fr-ch.js": 337,
	"./fr.js": 335,
	"./fy": 338,
	"./fy.js": 338,
	"./gd": 339,
	"./gd.js": 339,
	"./gl": 340,
	"./gl.js": 340,
	"./gom-latn": 341,
	"./gom-latn.js": 341,
	"./he": 342,
	"./he.js": 342,
	"./hi": 343,
	"./hi.js": 343,
	"./hr": 344,
	"./hr.js": 344,
	"./hu": 345,
	"./hu.js": 345,
	"./hy-am": 346,
	"./hy-am.js": 346,
	"./id": 347,
	"./id.js": 347,
	"./is": 348,
	"./is.js": 348,
	"./it": 349,
	"./it.js": 349,
	"./ja": 350,
	"./ja.js": 350,
	"./jv": 351,
	"./jv.js": 351,
	"./ka": 352,
	"./ka.js": 352,
	"./kk": 353,
	"./kk.js": 353,
	"./km": 354,
	"./km.js": 354,
	"./kn": 355,
	"./kn.js": 355,
	"./ko": 356,
	"./ko.js": 356,
	"./ky": 357,
	"./ky.js": 357,
	"./lb": 358,
	"./lb.js": 358,
	"./lo": 359,
	"./lo.js": 359,
	"./lt": 360,
	"./lt.js": 360,
	"./lv": 361,
	"./lv.js": 361,
	"./me": 362,
	"./me.js": 362,
	"./mi": 363,
	"./mi.js": 363,
	"./mk": 364,
	"./mk.js": 364,
	"./ml": 365,
	"./ml.js": 365,
	"./mr": 366,
	"./mr.js": 366,
	"./ms": 367,
	"./ms-my": 368,
	"./ms-my.js": 368,
	"./ms.js": 367,
	"./my": 369,
	"./my.js": 369,
	"./nb": 370,
	"./nb.js": 370,
	"./ne": 371,
	"./ne.js": 371,
	"./nl": 372,
	"./nl-be": 373,
	"./nl-be.js": 373,
	"./nl.js": 372,
	"./nn": 374,
	"./nn.js": 374,
	"./pa-in": 375,
	"./pa-in.js": 375,
	"./pl": 376,
	"./pl.js": 376,
	"./pt": 377,
	"./pt-br": 378,
	"./pt-br.js": 378,
	"./pt.js": 377,
	"./ro": 379,
	"./ro.js": 379,
	"./ru": 380,
	"./ru.js": 380,
	"./sd": 381,
	"./sd.js": 381,
	"./se": 382,
	"./se.js": 382,
	"./si": 383,
	"./si.js": 383,
	"./sk": 384,
	"./sk.js": 384,
	"./sl": 385,
	"./sl.js": 385,
	"./sq": 386,
	"./sq.js": 386,
	"./sr": 387,
	"./sr-cyrl": 388,
	"./sr-cyrl.js": 388,
	"./sr.js": 387,
	"./ss": 389,
	"./ss.js": 389,
	"./sv": 390,
	"./sv.js": 390,
	"./sw": 391,
	"./sw.js": 391,
	"./ta": 392,
	"./ta.js": 392,
	"./te": 393,
	"./te.js": 393,
	"./tet": 394,
	"./tet.js": 394,
	"./th": 395,
	"./th.js": 395,
	"./tl-ph": 396,
	"./tl-ph.js": 396,
	"./tlh": 397,
	"./tlh.js": 397,
	"./tr": 398,
	"./tr.js": 398,
	"./tzl": 399,
	"./tzl.js": 399,
	"./tzm": 400,
	"./tzm-latn": 401,
	"./tzm-latn.js": 401,
	"./tzm.js": 400,
	"./uk": 402,
	"./uk.js": 402,
	"./ur": 403,
	"./ur.js": 403,
	"./uz": 404,
	"./uz-latn": 405,
	"./uz-latn.js": 405,
	"./uz.js": 404,
	"./vi": 406,
	"./vi.js": 406,
	"./x-pseudo": 407,
	"./x-pseudo.js": 407,
	"./yo": 408,
	"./yo.js": 408,
	"./zh-cn": 409,
	"./zh-cn.js": 409,
	"./zh-hk": 410,
	"./zh-hk.js": 410,
	"./zh-tw": 411,
	"./zh-tw.js": 411
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
webpackContext.id = 592;

/***/ }),

/***/ 640:
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 641:
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 642:
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 647:
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 683:
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 684:
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 742:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(276);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ngx_translate_core__ = __webpack_require__(412);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_c8ocaf__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_c8ocaf___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_c8ocaf__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_c8osdkangular__ = __webpack_require__(157);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_c8osdkangular___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_c8osdkangular__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_PLANTS_plants__ = __webpack_require__(470);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_MACHINES_machines__ = __webpack_require__(471);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_DETAILS_details__ = __webpack_require__(472);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_INTERVENTION_intervention__ = __webpack_require__(473);
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
    function MyApp(platform, statusBar, c8o, router, loader, app, translate) {
        var _this = this;
        this.c8o = c8o;
        this.router = router;
        this.loader = loader;
        this.app = app;
        this.translate = translate;
        this.rootPage = __WEBPACK_IMPORTED_MODULE_6__pages_PLANTS_plants__["a" /* PLANTS */];
        /**
         * declaring page to show in Menu
         */
        this.pages = [{ title: "Carte des implantations", icon: "", component: __WEBPACK_IMPORTED_MODULE_6__pages_PLANTS_plants__["a" /* PLANTS */], includedInAutoMenu: true }, { title: "Machines list", icon: "", component: __WEBPACK_IMPORTED_MODULE_7__pages_MACHINES_machines__["a" /* MACHINES */], includedInAutoMenu: false }, { title: "Machine details", icon: "", component: __WEBPACK_IMPORTED_MODULE_8__pages_DETAILS_details__["a" /* DETAILS */], includedInAutoMenu: false }, { title: "Intervention form", icon: "", component: __WEBPACK_IMPORTED_MODULE_9__pages_INTERVENTION_intervention__["a" /* INTERVENTION */], includedInAutoMenu: false }];
        this.pagesKeyValue = { PLANTS: __WEBPACK_IMPORTED_MODULE_6__pages_PLANTS_plants__["a" /* PLANTS */], MACHINES: __WEBPACK_IMPORTED_MODULE_7__pages_MACHINES_machines__["a" /* MACHINES */], DETAILS: __WEBPACK_IMPORTED_MODULE_8__pages_DETAILS_details__["a" /* DETAILS */], INTERVENTION: __WEBPACK_IMPORTED_MODULE_9__pages_INTERVENTION_intervention__["a" /* INTERVENTION */] };
        this.router.pagesArray = this.pages;
        this.router.pagesKeyValue = this.pagesKeyValue;
        /* ============================================================================================================
           Convertigo Angular Framework (CAF) initialization...
           ============================================================================================================
         * Thanks to Convertigo CAF router we can manage call and navigation :
         *
         * Create a C8orouteOptions in order to define basic and repetitive routes options that will be used in C8oRoute
         * We can define actions such as beforeCall that allow us to run code before the C8o Call
         */
        var tableOptions = new __WEBPACK_IMPORTED_MODULE_4_c8ocaf__["C8oRouteOptions"]()
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
        this.router.addRouteListener(new __WEBPACK_IMPORTED_MODULE_4_c8ocaf__["C8oRouteListener"](["PlantsInter.getMachines#getMachines"]).addRoute(new __WEBPACK_IMPORTED_MODULE_4_c8ocaf__["C8oRoute"](function (data) { return true; }, tableOptions).setTarget("push", __WEBPACK_IMPORTED_MODULE_7__pages_MACHINES_machines__["a" /* MACHINES */])));
        this.router.addRouteListener(new __WEBPACK_IMPORTED_MODULE_4_c8ocaf__["C8oRouteListener"](["PlantsInter.getMachineDetails#getDetails"]).addRoute(new __WEBPACK_IMPORTED_MODULE_4_c8ocaf__["C8oRoute"](function (data) { return true; }, tableOptions).setTarget("push", __WEBPACK_IMPORTED_MODULE_8__pages_DETAILS_details__["a" /* DETAILS */])));
        this.router.addRouteListener(new __WEBPACK_IMPORTED_MODULE_4_c8ocaf__["C8oRouteListener"](["PlantsInter.getForm#getForm"]).addRoute(new __WEBPACK_IMPORTED_MODULE_4_c8ocaf__["C8oRoute"](function (data) { return true; }, tableOptions).setTarget("push", __WEBPACK_IMPORTED_MODULE_9__pages_INTERVENTION_intervention__["a" /* INTERVENTION */])));
        /**
         *  Define a C8oSettings Object in order to declare settings to be used in the C8oInit method
         */
        var settings = new __WEBPACK_IMPORTED_MODULE_5_c8osdkangular__["C8oSettings"]();
        settings
            .setLogRemote(true)
            .setLogC8o(true)
            .setLogLevelLocal(__WEBPACK_IMPORTED_MODULE_5_c8osdkangular__["C8oLogLevel"].DEBUG);
        /**
         * Then we assign C8oSettings to our c8o Object with the init method
         */
        settings.addHeader("x-convertigo-mb", "7.5.1_beta (build 44299)");
        this.c8o.init(settings);
        /* ============================================================================================================
             End of Convertigo Angular Framework (CAF) initialization...
           ============================================================================================================*/
        /*Begin_c8o_AppConstructor*/
        /*End_c8o_AppConstructor*/
        platform.ready().then(function () {
            statusBar.styleDefault();
            translate.setDefaultLang('en');
            translate.use(translate.getBrowserLang());
            /**
             * Then we finalize initialization
             */
            _this.c8o.finalizeInit().then(function () {
                /*Begin_c8o_AppInitialization*/
                /*End_c8o_AppInitialization*/
            });
        });
    }
    MyApp.prototype.getRootNav = function () {
        var rootNavs = this.app.getRootNavs();
        return rootNavs.length > 0 ? rootNavs[0] : null;
    };
    MyApp.prototype.openPage = function (page) {
        var rootNav = this.getRootNav();
        if (rootNav) {
            rootNav.setRoot(page.component);
        }
    };
    MyApp.prototype.openPageWithName = function (name) {
        var rootNav = this.getRootNav();
        if (rootNav) {
            rootNav.setRoot(name);
        }
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
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["Nav"]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["Nav"])
    ], MyApp.prototype, "nav", void 0);
    MyApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({template:/*ion-inline-start:"D:\COMMON\C8O\convertigo-studio-7.5.1_beta-win64\workspace\PlantsInter\_private\ionic\src\app\app.html"*/'<ion-menu class="class1500890597895" id="Menu" [content]="content">\n\n<ion-header class="class1500890727582">\n\n<ion-toolbar class="class1500890731485" color="light">\n\n<ion-title class="class1500890752959">\n\nMenu\n\n</ion-title>\n\n</ion-toolbar>\n\n</ion-header>\n\n<ion-content class="class1500890742326" padding>\n\n<button class="class1500890605250" ion-item menuClose="Menu" *ngFor="let p of getPagesIncludedInAutoMenu()" (click)="openPage(p)"><ion-icon name="{{p.icon}}"></ion-icon>&nbsp;&nbsp;&nbsp;&nbsp;{{p.title}}</button>\n\n</ion-content>\n\n</ion-menu>\n\n\n\n<ion-nav [root]="rootPage" #content swipeBackEnabled="false"></ion-nav>\n\n'/*ion-inline-end:"D:\COMMON\C8O\convertigo-studio-7.5.1_beta-win64\workspace\PlantsInter\_private\ionic\src\app\app.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["Platform"], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_5_c8osdkangular__["C8o"], __WEBPACK_IMPORTED_MODULE_4_c8ocaf__["C8oRouter"], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["LoadingController"], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["App"], __WEBPACK_IMPORTED_MODULE_3__ngx_translate_core__["c" /* TranslateService */]])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 75:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ActionBeans; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ActionBeans = (function () {
    function ActionBeans() {
    }
    /**
     * Function ToastAction
     *
     * @param page  , the current page
     * @param props , the object which holds properties key-value pairs
     * @param vars  , the object which holds variables key-value pairs
     */
    ActionBeans.prototype.ToastAction = function (page, props, vars) {
        return new Promise(function (resolve, reject) {
            var obj = {};
            obj["message"] = props.message;
            obj["duration"] = props.duration;
            obj["position"] = props.position;
            if (props.cssClass != null) {
                obj["cssClass"] = props.cssClass;
            }
            if (props.showCloseButton != null) {
                obj["showCloseButton"] = props.showCloseButton;
            }
            if (props.closeButtonText != null) {
                obj["closeButtonText"] = props.closeButtonText;
            }
            if (props.dismissOnPageChange != null) {
                obj["dismissOnPageChange"] = props.dismissOnPageChange;
            }
            var toast = page.routerProvider.toastCtrl.create(obj);
            toast.present();
            toast.onDidDismiss(function () {
                resolve();
            });
        });
    };
    /**
     * Function CallSequenceAction
     *
     * @param page  , the current page
     * @param props , the object which holds properties key-value pairs
     * @param vars  , the object which holds variables key-value pairs
     */
    ActionBeans.prototype.CallSequenceAction = function (page, props, vars) {
        return new Promise(function (resolve, reject) {
            var r = props.requestable;
            var m = props.marker;
            var rm = r + (m != '' ? '#' : '') + m;
            page.call(rm, page.merge({ __localCache_priority: props.cachePolicy, __localCache_ttl: props.cacheTtl }, vars), null, 500)
                .then(function (res) { resolve(res); }).catch(function (error) { reject(error); });
        });
    };
    ActionBeans = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [])
    ], ActionBeans);
    return ActionBeans;
}());

//# sourceMappingURL=actionbeans.service.js.map

/***/ })

},[474]);
//# sourceMappingURL=main.js.map