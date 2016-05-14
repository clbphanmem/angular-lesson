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
/**
 * Child Component
 */
var Child = (function () {
    function Child() {
        this.childNode = new core_1.EventEmitter();
        // Không emit trong Constructor
        //this.childNode.emit('Child Value');
    }
    Child.prototype.ngOnInit = function () {
        this.childNode.emit('Child Value');
    };
    __decorate([
        core_1.Input(), 
        __metadata('design:type', String)
    ], Child.prototype, "parentVal", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', Object)
    ], Child.prototype, "childNode", void 0);
    Child = __decorate([
        core_1.Component({
            selector: 'child',
            template: "\n        <div>This is Child View</div>\n        <div>D\u1EEF li\u1EC7u t\u1EEB Parent: {{ parentVal }}</div>\n    "
        }), 
        __metadata('design:paramtypes', [])
    ], Child);
    return Child;
}());
/**
 * Parent Component
 */
var Parent = (function () {
    function Parent() {
        this.parentVal = 'Parent Value';
    }
    Parent.prototype.childGet = function (val) {
        this.childVal = val;
    };
    Parent = __decorate([
        core_1.Component({
            selector: 'parent',
            template: "\n        <div>This is Parent View</div>\n        <div>D\u1EEF li\u1EC7u t\u1EEB Child: {{ childVal }}</div>\n        <br/>\n        <child [parentVal]=\"parentVal\" (childNode)=\"childGet($event)\"></child>\n        \n    ",
            directives: [
                Child
            ]
        }), 
        __metadata('design:paramtypes', [])
    ], Parent);
    return Parent;
}());
var Bt07 = (function () {
    function Bt07() {
    }
    Bt07 = __decorate([
        core_1.Component({
            selector: 'bt07',
            template: "\n        <div class=\"lesson\">\n            <h3 class=\"title\">B\u00E0i 7: T\u00ECm hi\u1EC3u Component n\u00E2ng cao</h3>\n            <p class=\"info\">C\u00E1ch truy\u1EC1n d\u1EEF li\u1EC7u qua c\u00E1c Component parent, child trong Angular 2</p>\n            <parent></parent>\n            \n        </div>\n    ",
            directives: [
                Parent
            ]
        }), 
        __metadata('design:paramtypes', [])
    ], Bt07);
    return Bt07;
}());
exports.Bt07 = Bt07;
//# sourceMappingURL=bt07.js.map