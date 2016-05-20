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
var Bt09 = (function () {
    function Bt09() {
        this.birthday = new Date(2017, 1, 1);
        this.currency = 5000000;
    }
    Bt09 = __decorate([
        core_1.Component({
            selector: 'bt09',
            template: "\n        <div class=\"lesson\">\n            <h3 class=\"title\">B\u00E0i 9: T\u00ECm hi\u1EC3u Pipe</h3>\n            <p class=\"info\">C\u00E1ch d\u00F9ng Pipe trong Angular 2</p>               \n            <p>Birthday: {{ birthday | date }}</p>     \n            <p>Currency: {{ currency | currency }}</p>                             \n        </div>\n    "
        }), 
        __metadata('design:paramtypes', [])
    ], Bt09);
    return Bt09;
}());
exports.Bt09 = Bt09;
//# sourceMappingURL=bt09.js.map