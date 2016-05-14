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
var HighlightDirective = (function () {
    function HighlightDirective(el) {
        this.el = el;
        this.color = 'yellow';
        el.nativeElement.style.backgroundColor = this.color;
        // Ví dụ trước khi dùng ngOnInit
        // setTimeout(() => {
        //     if (this.highLightContent) {
        //     el.nativeElement.innerHTML = this.highLightContent;
        // }
        // console.log(this.highLightContent);
        // }, 1000);
    }
    Object.defineProperty(HighlightDirective.prototype, "defaultColor", {
        set: function (color) {
            this.color = color || this.color;
            // Gọi đồng thời khi sử dụng trong Element
            this.el.nativeElement.style.backgroundColor = this.color;
        },
        enumerable: true,
        configurable: true
    });
    HighlightDirective.prototype.onMouseEnter = function () { this.highlight(this.color); };
    HighlightDirective.prototype.onMouseLeave = function () { this.highlight(null); };
    HighlightDirective.prototype.highlight = function (color) {
        this.el.nativeElement.style.backgroundColor = color;
    };
    HighlightDirective.prototype.ngOnInit = function () {
        if (this.highLightContent) {
            this.el.nativeElement.innerHTML = this.highLightContent;
        }
    };
    __decorate([
        core_1.Input('myHighlight'), 
        __metadata('design:type', String)
    ], HighlightDirective.prototype, "highLightContent", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', String), 
        __metadata('design:paramtypes', [String])
    ], HighlightDirective.prototype, "defaultColor", null);
    HighlightDirective = __decorate([
        core_1.Directive({
            selector: '[myHighlight]',
            host: {
                '(mouseenter)': 'onMouseEnter()',
                '(mouseleave)': 'onMouseLeave()'
            }
        }), 
        __metadata('design:paramtypes', [core_1.ElementRef])
    ], HighlightDirective);
    return HighlightDirective;
}());
exports.HighlightDirective = HighlightDirective;
var Bt06 = (function () {
    function Bt06() {
    }
    Bt06 = __decorate([
        core_1.Component({
            selector: 'bt06',
            template: "\n        <div class=\"lesson\">\n            <h3 class=\"title\">B\u00E0i 6: Custom Attribute Directives</h3>\n            <p class=\"info\">S\u1EED d\u1EE5ng khi c\u1EA7n can thi\u1EC7p v\u00E0o c\u00E1c Element mong mu\u1ED1n</p>\n            <p [myHighlight] = \"'Hello World'\" [defaultColor]=\"'red'\">\u0110o\u1EA1n v\u0103n b\u1EA3n m\u1EABu</p>\n        </div>\n    ",
            directives: [
                HighlightDirective
            ]
        }), 
        __metadata('design:paramtypes', [])
    ], Bt06);
    return Bt06;
}());
exports.Bt06 = Bt06;
//# sourceMappingURL=bt06.js.map