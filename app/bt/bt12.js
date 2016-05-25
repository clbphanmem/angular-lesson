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
var core_2 = require('@angular/core');
var core_3 = require('@angular/core');
var UnlessDirective = (function () {
    function UnlessDirective(templateRef, viewContainer) {
        this.templateRef = templateRef;
        this.viewContainer = viewContainer;
    }
    Object.defineProperty(UnlessDirective.prototype, "myUnless", {
        set: function (condition) {
            if (!condition) {
                this.viewContainer.createEmbeddedView(this.templateRef);
            }
            else {
                this.viewContainer.clear();
            }
        },
        enumerable: true,
        configurable: true
    });
    __decorate([
        core_2.Input(), 
        __metadata('design:type', Boolean), 
        __metadata('design:paramtypes', [Boolean])
    ], UnlessDirective.prototype, "myUnless", null);
    UnlessDirective = __decorate([
        core_2.Directive({ selector: '[myUnless]' }), 
        __metadata('design:paramtypes', [core_3.TemplateRef, core_3.ViewContainerRef])
    ], UnlessDirective);
    return UnlessDirective;
}());
exports.UnlessDirective = UnlessDirective;
var Bt12 = (function () {
    function Bt12() {
    }
    Bt12 = __decorate([
        core_1.Component({
            selector: 'bt12',
            template: "\n        <div class=\"lesson\">\n            <h3 class=\"title\">B\u00E0i 12: Structural Directives</h3>\n            <p class=\"info\">T\u1EA1o Structural Directives</p>\n            <div *myUnless=\"true\">\n                <p>\u0110\u00E2y l\u00E0 \u0111o\u1EA1n v\u0103n m\u1EABu 1</p>\n                <p>\u0110\u00E2y l\u00E0 \u0111o\u1EA1n v\u0103n m\u1EABu 1</p>\n                <p>\u0110\u00E2y l\u00E0 \u0111o\u1EA1n v\u0103n m\u1EABu 1</p>\n                <p>\u0110\u00E2y l\u00E0 \u0111o\u1EA1n v\u0103n m\u1EABu 1</p>\n            </div>                          \n            <div *myUnless=\"false\">\n                <p>\u0110\u00E2y l\u00E0 \u0111o\u1EA1n v\u0103n m\u1EABu 2</p>\n                <p>\u0110\u00E2y l\u00E0 \u0111o\u1EA1n v\u0103n m\u1EABu 2</p>\n                <p>\u0110\u00E2y l\u00E0 \u0111o\u1EA1n v\u0103n m\u1EABu 2</p>\n                <p>\u0110\u00E2y l\u00E0 \u0111o\u1EA1n v\u0103n m\u1EABu 2</p>\n            </div>         \n        </div>\n    ",
            directives: [
                UnlessDirective
            ]
        }), 
        __metadata('design:paramtypes', [])
    ], Bt12);
    return Bt12;
}());
exports.Bt12 = Bt12;
//# sourceMappingURL=bt12.js.map