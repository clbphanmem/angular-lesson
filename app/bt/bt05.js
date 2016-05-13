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
var Bt05 = (function () {
    function Bt05() {
        this.defaultColor = "orange";
        this.bool = true;
    }
    Bt05 = __decorate([
        core_1.Component({
            selector: 'bt05',
            template: "\n        <div class=\"lesson\">\n            <h3 class=\"title\">B\u00E0i 5: T\u00ECm hi\u1EC3u v\u1EC1 Attribute Directives trong Angular 2</h3>\n            <p class=\"info\">S\u1EED d\u1EE5ng khi c\u1EA7n can thi\u1EC7p v\u00E0o c\u00E1c Element mong mu\u1ED1n</p>\n            <p [style.color] = \"'red'\">\u0110o\u1EA1n v\u0103n b\u1EA3n m\u1EABu</p>\n            <p [style.color] = \"defaultColor\" >\u0110o\u1EA1n v\u0103n b\u1EA3n m\u1EABu</p>\n            <p [style.text-transform] = \"'capitalize'\">\u0110o\u1EA1n v\u0103n b\u1EA3n m\u1EABu</p>\n            <p [style.color] = \"defaultColor\"  [style.text-transform] = \"'capitalize'\">\u0110o\u1EA1n v\u0103n b\u1EA3n m\u1EABu</p>\n            <p [class.two] = \"true\">\u0110o\u1EA1n v\u0103n b\u1EA3n m\u1EABu</p>\n            <p [class.three] = \"false\">\u0110o\u1EA1n v\u0103n b\u1EA3n m\u1EABu</p>  \n            <p [class.one] = \"bool\">\u0110o\u1EA1n v\u0103n b\u1EA3n m\u1EABu</p>   \n        </div>\n    ",
            styles: [
                "\n        .one {\n            color: pink;\n        }\n        \n        .two {\n            color: blue;\n        }\n        \n        .three {\n            color: green;\n        }\n        "
            ]
        }), 
        __metadata('design:paramtypes', [])
    ], Bt05);
    return Bt05;
}());
exports.Bt05 = Bt05;
//# sourceMappingURL=bt05.js.map