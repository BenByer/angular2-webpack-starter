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
var core_1 = require('@angular/core');
var router_1 = require('@angular/router');
var index_1 = require('../+heroes/shared/index');
var HeaderComponent = (function () {
    function HeaderComponent(router, heroService) {
        this.router = router;
        this.heroService = heroService;
        this.heroes = [];
    }
    HeaderComponent.prototype.ngOnInit = function () {
        // this.heroService.getHeroes().then(heroes => this.heroes = heroes.slice(2, 7));
    };
    HeaderComponent.prototype.gotoDetail = function (hero) {
        var link = ['/detail', hero.id];
        this.router.navigate(link);
    };
    HeaderComponent = __decorate([
        core_1.Component({
            selector: 'toh-header',
            templateUrl: 'app/header/header.component.html',
            styleUrls: ['app/header/header.component.css']
        }), 
        __metadata('design:paramtypes', [router_1.Router, index_1.HeroService])
    ], HeaderComponent);
    return HeaderComponent;
}());
exports.HeaderComponent = HeaderComponent;
//# sourceMappingURL=header.component.js.map