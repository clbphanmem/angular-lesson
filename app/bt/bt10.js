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
        this.url = 'http://localhost/aj2/angular-lesson/api/angular?name=Andy';
        _http.get(this.url)
            .map(function (res) { return res.json(); })
            .subscribe(function (data) {
            console.log(data);
        });
    }
    Bt10 = __decorate([
        core_1.Component({
            selector: 'bt10',
            template: "\n        <div class=\"lesson\">\n            <h3 class=\"title\">B\u00E0i 10: T\u00ECm hi\u1EC3u Http Client</h3>\n            <p class=\"info\">C\u00E1ch d\u00F9ng Http Client trong Angular 2</p>\n            <div>\n                <p></p>\n                <button>GET Json</button>\n            </div>                                   \n        </div>\n    "
        }), 
        __metadata('design:paramtypes', [http_1.Http])
    ], Bt10);
    return Bt10;
}());
exports.Bt10 = Bt10;
//# sourceMappingURL=bt10.js.map