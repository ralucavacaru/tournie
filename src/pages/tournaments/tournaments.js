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
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { TournamentDetailPage } from '../tournament-detail/tournament-detail';
import { RestProvider } from '../../providers/rest/rest';
import { FcmProvider } from '../../providers/fcm/fcm';
var TournamentsPage = /** @class */ (function () {
    function TournamentsPage(navCtrl, navParams, restProvider, fcm) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.restProvider = restProvider;
        this.fcm = fcm;
        this.tournaments = [];
        this.fcm.getTokenForRest().then(function (res) {
            _this.token = res;
            console.log('TOKEN IS');
            console.log(_this.token);
        });
    }
    TournamentsPage.prototype.ionViewWillEnter = function () {
        var _this = this;
        this.restProvider.getAllTournaments().then(function (data) {
            _this.tournaments = data;
            console.log(data);
        });
    };
    TournamentsPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad TournamentsPage');
        console.log(this.tournaments);
    };
    TournamentsPage.prototype.onClickTournament = function (tournament) {
        this.navCtrl.push(TournamentDetailPage, {
            tournament: tournament,
        });
    };
    TournamentsPage = __decorate([
        IonicPage(),
        Component({
            selector: 'page-tournaments',
            templateUrl: 'tournaments.html',
        }),
        __metadata("design:paramtypes", [NavController, NavParams, RestProvider, FcmProvider])
    ], TournamentsPage);
    return TournamentsPage;
}());
export { TournamentsPage };
//# sourceMappingURL=tournaments.js.map