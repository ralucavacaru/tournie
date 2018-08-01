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
import { IonicPage, NavController } from 'ionic-angular';
import { Storage } from '@ionic/storage';
import { RestProvider } from '../../providers/rest/rest';
var SchedulePage = /** @class */ (function () {
    function SchedulePage(navCtrl, restProvider, storage) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.restProvider = restProvider;
        this.storage = storage;
        this.itemExpandHeight = 100;
        this.schedule = [];
        this.expandedSchedule = [];
        this.days = [];
        this.storage.get('activeTournament').then(function (val) {
            _this.restProvider.getSchedule(val.id).then(function (res) {
                console.log(res);
                _this.expandSchedule(res);
            });
        });
    }
    SchedulePage.prototype.expandSchedule = function (schedule) {
        this.schedule = schedule;
        for (var i = 0; i < this.schedule.length; i++) {
            var day = this.schedule[i].event.date_start.substring(0, 10);
            if (!this.days.includes(day)) {
                this.days.push(day);
            }
        }
        for (var i = 0; i < this.days.length; i++) {
            var aux = [];
            for (var j = 0; j < this.schedule.length; j++) {
                if (this.schedule[j].event.date_start.includes(this.days[i])) {
                    aux.push({
                        detail: this.schedule[j],
                        expanded: false,
                    });
                }
            }
            this.expandedSchedule.push({
                date: this.days[i],
                events: aux,
            });
        }
    };
    SchedulePage.prototype.expandItem = function (item) {
        this.expandedSchedule.map(function (day) {
            day.events.map(function (listItem) {
                if (item == listItem) {
                    listItem.expanded = !listItem.expanded;
                }
                else {
                    listItem.expanded = false;
                }
                return listItem;
            });
        });
    };
    SchedulePage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad SchedulePage');
    };
    SchedulePage = __decorate([
        IonicPage(),
        Component({
            selector: 'page-schedule',
            templateUrl: 'schedule.html',
        }),
        __metadata("design:paramtypes", [NavController, RestProvider, Storage])
    ], SchedulePage);
    return SchedulePage;
}());
export { SchedulePage };
//# sourceMappingURL=schedule.js.map