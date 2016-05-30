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
var Bt15 = (function () {
    function Bt15() {
        this.bool = true;
    }
    Bt15.prototype.toggle = function () {
        this.bool = !this.bool;
        document.title = this.bool ? 'Hiệu hóa' : 'Vô hiệu hóa';
    };
    Bt15.prototype.alert = function () {
        alert('OK');
    };
    Bt15 = __decorate([
        core_1.Component({
            selector: 'bt15',
            template: "\n        <div class=\"lesson\">\n            <h3 class=\"title\">B\u00E0i 15: Template Syntax</h3>\n            <p class=\"info\">C\u00E1c c\u00FA ph\u00E1p trong Template Syntax</p>\n            <p [innerHTML]=\"'You\\'re welcome'\" #test>Kh\u00F4ng c\u00F3 chi</p>\n            <input type=\"text\" [disabled]=\"bool\" />\n            <button (click)=\"toggle()\">Enable or Disable</button>\n            <p>{{ test.innerHTML }}</p>\n            <form (submit)=\"alert()\">\n                <button type=\"submit\">Submit</button>\n            </form>\n        </div>\n    "
        }), 
        __metadata('design:paramtypes', [])
    ], Bt15);
    return Bt15;
}());
exports.Bt15 = Bt15;
//# sourceMappingURL=bt15.js.map