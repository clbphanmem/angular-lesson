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
var Bt11 = (function () {
    function Bt11(_jsonp) {
        this._jsonp = _jsonp;
        this.url = 'http://localhost/aj2/angular-lesson/api/jsonp';
        this.person = {};
    }
    Bt11.prototype.getJSONP = function () {
        var _this = this;
        var params = new http_1.URLSearchParams();
        params.set('callback', 'JSONP_CALLBACK');
        return this._jsonp
            .get(this.url, { search: params })
            .map(function (request) { return request.json(); })
            .subscribe(function (data) {
            _this.person = data;
        });
    };
    Bt11 = __decorate([
        core_1.Component({
            selector: 'bt11',
            template: "\n        <div class=\"lesson\">\n            <h3 class=\"title\">B\u00E0i 11: T\u00ECm hi\u1EC3u Http Client - JSONP</h3>\n            <p class=\"info\">C\u00E1ch d\u00F9ng Http Client - JSONP trong Angular 2</p>\n            <div>\n                <p>T\u00EAn: {{ person?.name }}</p>\n                <p>C\u00F4ng vi\u1EC7c: {{ person?.job }}</p>\n                <p>C\u00F4ng ty: {{ person?.company }}</p>\n                <p>Ph\u01B0\u01A1ng th\u1EE9c: {{ person?.method }}</p>\n                \n                <button (click)=\"getJSONP()\" >JSONP</button>\n            </div>                                   \n        </div>\n    "
        }), 
        __metadata('design:paramtypes', [http_1.Jsonp])
    ], Bt11);
    return Bt11;
}());
exports.Bt11 = Bt11;
//# sourceMappingURL=bt11.js.map