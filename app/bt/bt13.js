"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require("@angular/core");
var Bt13 = (function () {
    function Bt13() {
    }
    Bt13.prototype.ngOnInit = function () {
        console.log('ngOnInit');
    };
    Bt13.prototype.ngOnChanges = function () {
        console.log('ngOnChanges');
    };
    Bt13.prototype.ngDoCheck = function () {
        console.log('ngDoCheck');
    };
    Bt13.prototype.ngOnDestroy = function () {
        console.log('ngOnDestroy');
    };
    Bt13.prototype.ngAfterContentInit = function () {
        console.log('ngAfterContentInit');
    };
    Bt13.prototype.ngAfterContentChecked = function () {
        console.log('ngAfterContentChecked');
    };
    Bt13.prototype.ngAfterViewInit = function () {
        console.log('ngAfterViewInit');
    };
    Bt13.prototype.ngAfterViewChecked = function () {
        console.log('ngAfterViewChecked');
    };
    Bt13 = __decorate([
        core_1.Component({
            selector: 'bt13',
            template: "\n        <div class=\"lesson\">\n            <h3 class=\"title\">B\u00E0i 13: Lifecycle Hooks</h3>\n            <p class=\"info\">C\u00E1c \u01B0u ti\u00EAn khi ch\u1EA1y Hook trong angular2 - Vui l\u00F2ng F12 \u0111\u1EC3 xem Console</p>            \n        </div>\n    "
        }), 
        __metadata('design:paramtypes', [])
    ], Bt13);
    return Bt13;
}());
exports.Bt13 = Bt13;
//# sourceMappingURL=bt13.js.map