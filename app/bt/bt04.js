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
var Bt04 = (function () {
    function Bt04() {
        this.toggle = false;
        this.value = '';
        this.person = {
            name: 'Andy Vũ',
            age: 30,
            info: {
                job: 'Lao công',
                handsome: true
            }
        };
    }
    Bt04.prototype.clickToChange = function () {
        if (!this.toggle) {
            this.person.name = 'Kenny Huy';
            this.person.age = 31;
            this.person.info = {
                job: 'CEO',
                handsome: false
            };
        }
        else {
            this.person = {
                name: 'Andy Vũ',
                age: 30,
                info: {
                    job: 'Lao công',
                    handsome: true
                }
            };
        }
        this.toggle = !this.toggle;
    };
    Bt04.prototype.getEvent = function (event) {
        this.value = event.target.value;
    };
    Bt04 = __decorate([
        core_1.Component({
            selector: 'bt04',
            template: "\n        <div class=\"lesson\">\n            <h3 class=\"title\">B\u00E0i 4: T\u00ECm  c\u00E1c  s\u1EF1 ki\u1EC7n trong Angular 2</h3>\n            <p class=\"info\">T\u00ECm hi\u1EC3u c\u01A1 b\u1EA3n v\u1EC1 c\u00E1c s\u1EF1 ki\u1EC7n th\u01B0\u1EDDng s\u1EED d\u1EE5ng</p>\n            <p class=\"person\">\n                <span>H\u1ECD t\u00EAn: {{ person.name }}</span>\n                <span>Tu\u1ED5i: {{ person.age }}</span>\n                <span>C\u00F4ng vi\u1EC7c: {{ person.info.job }}</span>\n                <span>\u0110\u1EB9p trai: {{ person.info.handsome ? 'C\u00F3' : 'Kh\u00F4ng' }}</span>\n            </p>\n            <button (click)=\"clickToChange()\">Click</button>\n            <button (mouseover)=\"clickToChange()\">Hover</button>\n            <input type=\"text\" (keyup)=\"clickToChange()\" />\n            <p>B\u1EAFt s\u1EF1 ki\u1EC7n t\u1EEB bi\u1EBFn to\u00E0n c\u1EE5c $event</p>\n            <input type=\"text\" (keyup)=\"getEvent($event)\" /><br/>\n            <input type=\"text\" (keyup.enter)=\"getEvent($event)\" (blur)=\"getEvent($event)\" /> (Enter & Blur)\n            <p>D\u1EEF li\u1EC7u nh\u1EADn: {{ value }}</p>\n        </div>\n    "
        }), 
        __metadata('design:paramtypes', [])
    ], Bt04);
    return Bt04;
}());
exports.Bt04 = Bt04;
//# sourceMappingURL=bt04.js.map