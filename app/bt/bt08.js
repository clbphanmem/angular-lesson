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
var Child = (function () {
    function Child() {
        this.counter = 0;
        this.intervalId = 0;
    }
    Child.prototype.start = function () {
        var _this = this;
        this.intervalId = setInterval(function () { return _this.count(); }, 1000);
    };
    Child.prototype.stop = function () {
        clearInterval(this.intervalId);
    };
    Child.prototype.count = function () {
        this.counter++;
    };
    Child = __decorate([
        core_1.Component({
            selector: 'child',
            template: "\n    \n    "
        }), 
        __metadata('design:paramtypes', [])
    ], Child);
    return Child;
}());
exports.Child = Child;
var Bt08 = (function () {
    function Bt08() {
    }
    Bt08 = __decorate([
        core_1.Component({
            selector: 'bt08',
            template: "\n        <div class=\"lesson\">\n            <h3 class=\"title\">B\u00E0i 8: T\u00ECm hi\u1EC3u Component n\u00E2ng cao ph\u1EA7n 2</h3>\n            <p class=\"info\">C\u00E1ch d\u00F9ng l\u1EA1i c\u00E1c ph\u01B0\u01A1ng th\u1EE9c t\u1EEB Component con</p>               \n            <child #counter></child>           \n            <div>\n                <p>Counter: {{ counter.counter }}</p>\n                <button (click)=\"counter.start()\">Start</button>\n                <button (click)=\"counter.stop()\">Stop</button>\n            </div> \n        </div>\n    ",
            directives: [
                Child
            ]
        }), 
        __metadata('design:paramtypes', [])
    ], Bt08);
    return Bt08;
}());
exports.Bt08 = Bt08;
//# sourceMappingURL=bt08.js.map