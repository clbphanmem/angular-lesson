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
var http_1 = require("@angular/http");
var Bt14 = (function () {
    function Bt14(_http) {
        this._http = _http;
        this.category = {};
    }
    Bt14.prototype.create = function (category) {
        console.log(category);
        var body = JSON.stringify(category);
        var headers = new http_1.Headers({ 'Content-Type': 'application/json' });
        var options = new http_1.RequestOptions({ headers: headers });
        this._http.post('http://localhost/aj2/angular-lesson/api/category/create', body, options)
            .map(function (res) { return res.json(); })
            .subscribe(function (res) {
            console.log(res);
        });
    };
    Bt14 = __decorate([
        core_1.Component({
            selector: 'bt14',
            template: "\n        <div class=\"lesson\">\n            <h3 class=\"title\">B\u00E0i 14: T\u01B0\u01A1ng t\u00E1c v\u1EDBi API</h3>\n            <p class=\"info\">T\u01B0\u01A1ng t\u00E1c v\u1EDBi API trong kh\u00F3a h\u1ECDc Training</p>         \n            <div>\n                \n                <input type=\"text\" [(ngModel)]=\"category.name\" />\n                <button (click)=\"create(category)\">T\u1EA1o</button>\n            </div>   \n        </div>\n    "
        }), 
        __metadata('design:paramtypes', [http_1.Http])
    ], Bt14);
    return Bt14;
}());
exports.Bt14 = Bt14;
//# sourceMappingURL=bt14.js.map