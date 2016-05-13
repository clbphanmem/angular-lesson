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
var Bt02 = (function () {
    function Bt02() {
    }
    Bt02 = __decorate([
        core_1.Component({
            selector: 'bt02',
            template: "\n        <div class=\"lesson\">\n            <h3 class=\"title\">B\u00E0i 2: Two-way binding</h3>\n            <p class=\"info\">Nh\u1EADp v\u00E0 thay \u0111\u1ED5i Input</p>\n            <p>\n                <input type=\"text\" [(ngModel)]=\"data\" />\n            </p>\n            <p>D\u1EEF li\u1EC7u nh\u1EADn: {{ data }}</p>\n        </div>\n    "
        }), 
        __metadata('design:paramtypes', [])
    ], Bt02);
    return Bt02;
}());
exports.Bt02 = Bt02;
//# sourceMappingURL=bt02.js.map