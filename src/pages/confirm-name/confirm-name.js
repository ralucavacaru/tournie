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
import { Storage } from '@ionic/storage';
import { RestProvider } from '../../providers/rest/rest';
import { HomePage } from '../home/home';
import { FcmProvider } from '../../providers/fcm/fcm';
var ConfirmNamePage = /** @class */ (function () {
    function ConfirmNamePage(navCtrl, navParams, storage, restProvider, fcm) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.storage = storage;
        this.restProvider = restProvider;
        this.fcm = fcm;
        this.users = null;
        this.homePage = HomePage;
        this.url = this.navParams.get('url');
        this.tournament = this.navParams.get('tournament');
        this.restProvider.getUsersByUrl(this.url, this.tournament.id).then(function (res) {
            _this.users = res;
            console.log(_this.users);
        }, (function (err) {
            if (err.status == '404') {
                _this.users = [];
            }
        }));
    }
    ConfirmNamePage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad ConfirmNamePage');
    };
    ConfirmNamePage.prototype.logIn = function (user) {
        var _this = this;
        this.storage.set('activeTournament', this.tournament);
        this.storage.set('activeUser', user);
        this.fcm.getTokenForRest().then(function (token) {
            _this.restProvider.setDeviceId(user.user.id, token).then(function (response) {
                _this.response = response;
                console.log(response);
            }, (function (err) {
                console.log(err);
            }));
        });
        this.navCtrl.setRoot(this.homePage, {}, { animate: true, direction: "forward" });
    };
    ConfirmNamePage = __decorate([
        IonicPage(),
        Component({
            selector: 'page-confirm-name',
            templateUrl: 'confirm-name.html',
        }),
        __metadata("design:paramtypes", [NavController,
            NavParams,
            Storage,
            RestProvider,
            FcmProvider])
    ], ConfirmNamePage);
    return ConfirmNamePage;
}());
export { ConfirmNamePage };
//# sourceMappingURL=confirm-name.js.map