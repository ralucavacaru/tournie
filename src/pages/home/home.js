var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Storage } from '@ionic/storage';
import { RestProvider } from '../../providers/rest/rest';
import moment from 'moment';
var HomePage = /** @class */ (function () {
    function HomePage(navCtrl, storage, restProvider) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.storage = storage;
        this.restProvider = restProvider;
        this.items = [];
        this.itemExpandHeight = 100;
        this.events = [];
        this.expandedEvents = [];
        this.isEventOver = false;
        this.storage.get('activeTournament').then(function (val) {
            _this.tournament = val;
            var currentDate = new Date();
            console.log(currentDate);
            var transformedDate = moment().format('YYYY-MM-DD HH:mm:ss');
            console.log(transformedDate);
            _this.restProvider.getHomepageEvents(_this.tournament.id, transformedDate).then(function (res) {
                _this.events = res;
                console.log(_this.events);
                for (var i = 0; i < _this.events.length; i++) {
                    _this.expandedEvents.push({
                        event: _this.events[i],
                        expanded: false,
                    });
                }
                _this.expandedEvents[0].expanded = true;
            }, function (err) {
                _this.isEventOver = true;
            });
        });
    }
    HomePage.prototype.expandItem = function (item) {
        this.expandedEvents.map(function (listItem) {
            if (item == listItem) {
                listItem.expanded = !listItem.expanded;
            }
            else {
                listItem.expanded = false;
            }
            return listItem;
        });
    };
    HomePage = __decorate([
        Component({
            selector: 'page-home',
            templateUrl: 'home.html'
        }),
        __metadata("design:paramtypes", [NavController, Storage, RestProvider])
    ], HomePage);
    return HomePage;
}());
export { HomePage };
//# sourceMappingURL=home.js.map