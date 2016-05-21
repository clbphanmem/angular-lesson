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
// import { Bt01 } from './bt/bt01';
// import { Bt02 } from './bt/bt02';
// import { Bt03 } from './bt/bt03';
// import { Bt04 } from './bt/bt04';
var bt_1 = require('./bt');
var AppComponent = (function () {
    function AppComponent() {
    }
    AppComponent.prototype.ngAfterViewInit = function () {
        window.scrollTo(0, document.body.scrollHeight);
    };
    AppComponent = __decorate([
        core_1.Component({
            selector: 'app',
            template: "\n        <h1>C\u00E1c b\u00E0i h\u1ECDc Angular 2</h1>\n        <bt01></bt01>\n        <hr/>\n        <bt02></bt02>\n        <hr/>\n        <bt03></bt03>\n        <hr/>\n        <bt04></bt04>\n        <hr/>\n        <bt05></bt05>\n        <hr/>\n        <bt06></bt06>\n        <hr/>\n        <bt07></bt07>\n        <hr/>\n        <bt08></bt08>\n        <hr/>\n        <bt09></bt09>\n        <hr/>\n        <bt10></bt10>\n    ",
            directives: [
                bt_1.Bt01,
                bt_1.Bt02,
                bt_1.Bt03,
                bt_1.Bt04,
                bt_1.Bt05,
                bt_1.Bt06,
                bt_1.Bt07,
                bt_1.Bt08,
                bt_1.Bt09,
                bt_1.Bt10
            ]
        }), 
        __metadata('design:paramtypes', [])
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map