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
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
//import { setTimeout } from 'timers';
var ShoppingListComponent = /** @class */ (function () {
    function ShoppingListComponent() {
        var _this = this;
        this.allowclick = false;
        this.serverCreatedStatus = "No server created!";
        setTimeout(function () {
            _this.allowclick = true;
        }, 3000);
        setInterval(function () {
            console.log("call");
        }, 5000);
    }
    ShoppingListComponent.prototype.ngOnInit = function () {
    };
    ShoppingListComponent.prototype.serverCreated = function () {
        console.log('click');
        this.serverCreatedStatus = "Server has been created!";
    };
    ShoppingListComponent.prototype.onUpdateServerName = function (event) {
        console.log(event);
        this.serverName = event.target.value;
    };
    ShoppingListComponent = __decorate([
        core_1.Component({
            selector: 'app-shopping-list',
            templateUrl: './shopping-list.component.html',
            styleUrls: ['./shopping-list.component.css']
        }),
        __metadata("design:paramtypes", [])
    ], ShoppingListComponent);
    return ShoppingListComponent;
}());
exports.ShoppingListComponent = ShoppingListComponent;
//# sourceMappingURL=shopping-list.component.js.map