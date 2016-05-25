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
var http_1 = require('@angular/http');
var Bt10 = (function () {
    function Bt10(_http) {
        this._http = _http;
        this.url = 'http://localhost/aj2/angular-lesson/api/angular';
        this.person = {};
    }
    // Restful API
    Bt10.prototype.getJson = function () {
        var _this = this;
        this._http.get(this.url)
            .map(function (res) { return res.json(); })
            .subscribe(function (data) {
            _this.person = data;
        });
    };
    Bt10.prototype.postJson = function () {
        var _this = this;
        var headers = new http_1.Headers({ 'Content-Type': 'application/json' });
        var options = new http_1.RequestOptions({ headers: headers });
        this._http.post(this.url, '', options)
            .map(function (res) { return res.json(); })
            .subscribe(function (data) {
            _this.person = data;
        });
    };
    Bt10.prototype.putJson = function () {
        var _this = this;
        var headers = new http_1.Headers({ 'Content-Type': 'application/json' });
        var options = new http_1.RequestOptions({ headers: headers });
        this._http.put(this.url, '', options)
            .map(function (res) { return res.json(); })
            .subscribe(function (data) {
            _this.person = data;
        });
    };
    Bt10.prototype.patchJson = function () {
        var _this = this;
        var headers = new http_1.Headers({ 'Content-Type': 'application/json' });
        var options = new http_1.RequestOptions({ headers: headers });
        this._http.patch(this.url, '', options)
            .map(function (res) { return res.json(); })
            .subscribe(function (data) {
            _this.person = data;
        });
    };
    Bt10.prototype.deleteJson = function () {
        var _this = this;
        this._http.delete(this.url)
            .map(function (res) { return res.json(); })
            .subscribe(function (data) {
            _this.person = data;
        });
    };
    Bt10 = __decorate([
        core_1.Component({
            selector: 'bt10',
            template: "\n        <div class=\"lesson\">\n            <h3 class=\"title\">B\u00E0i 10: T\u00ECm hi\u1EC3u Http Client</h3>\n            <p class=\"info\">C\u00E1ch d\u00F9ng Http Client trong Angular 2</p>\n            <div>\n                <p>T\u00EAn: {{ person?.name }}</p>\n                <p>C\u00F4ng vi\u1EC7c: {{ person?.job }}</p>\n                <p>C\u00F4ng ty: {{ person?.company }}</p>\n                <p>Ph\u01B0\u01A1ng th\u1EE9c: {{ person?.method }}</p>\n                \n                <button (click)=\"getJson()\" >GET</button>\n                <button (click)=\"postJson()\" >POST</button>\n                <button (click)=\"putJson()\" >PUT</button>\n                <button (click)=\"patchJson()\" >PATCH</button>\n                <button (click)=\"deleteJson()\" >DELETE</button>\n            </div>                                   \n        </div>\n    "
        }), 
        __metadata('design:paramtypes', [http_1.Http])
    ], Bt10);
    return Bt10;
}());
exports.Bt10 = Bt10;
//# sourceMappingURL=bt10.js.map