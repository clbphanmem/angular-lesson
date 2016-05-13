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
var Bt03 = (function () {
    function Bt03() {
        this.person = {
            name: 'Andy Vũ',
            age: 30,
            info: {
                job: 'Lao công',
                handsome: true
            }
        };
    }
    Bt03 = __decorate([
        core_1.Component({
            selector: 'bt03',
            template: "\n        <div class=\"lesson\">\n            <h3 class=\"title\">B\u00E0i 3: Hi\u1EC3n th\u1ECB d\u1EEF li\u1EC7u t\u1EEB Component</h3>\n            <p class=\"info\">Hi\u1EC3n th\u1ECB d\u1EEF li\u1EC7u v\u00E0 thi\u1EBFt \u0111\u1EB7t d\u1EEF li\u1EC7u m\u1EB7c \u0111\u1ECBnh</p>\n            <p class=\"person\">\n                <span>H\u1ECD t\u00EAn: {{ person.name }}</span>\n                <span>Tu\u1ED5i: {{ person.age }}</span>\n                <span>C\u00F4ng vi\u1EC7c: {{ person.info.job }}</span>\n                <span>\u0110\u1EB9p trai: {{ person.info.handsome ? 'C\u00F3' : 'Kh\u00F4ng' }}</span>\n            </p>\n        </div>\n    "
        }), 
        __metadata('design:paramtypes', [])
    ], Bt03);
    return Bt03;
}());
exports.Bt03 = Bt03;
//# sourceMappingURL=bt03.js.map