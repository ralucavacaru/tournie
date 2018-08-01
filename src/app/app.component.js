var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component, ViewChild } from '@angular/core';
import { Nav, Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { Storage } from '@ionic/storage';
import { HomePage } from '../pages/home/home';
import { NotificationsLogPage } from '../pages/notifications-log/notifications-log';
import { SchedulePage } from '../pages/schedule/schedule';
import { ProfilePage } from '../pages/profile/profile';
import { TournamentsPage } from '../pages/tournaments/tournaments';
import { FcmProvider } from '../providers/fcm/fcm';
import { ToastController } from 'ionic-angular';
var MyApp = /** @class */ (function () {
    function MyApp(platform, statusBar, splashScreen, storage, fcm, toastCtrl) {
        var _this = this;
        this.platform = platform;
        this.statusBar = statusBar;
        this.splashScreen = splashScreen;
        this.storage = storage;
        this.fcm = fcm;
        this.toastCtrl = toastCtrl;
        this.rootPage = TournamentsPage;
        this.initializeApp();
        // used for sidebar navigation
        this.pages = [
            { title: 'Home', component: HomePage },
            { title: 'Notifications Log', component: NotificationsLogPage },
            { title: 'Schedule', component: SchedulePage },
            { title: 'Profile', component: ProfilePage },
        ];
        this.storage.get('activeTournament').then(function (tournament) {
            _this.activeTournament = tournament;
            _this.storage.get('activeUser').then(function (user) {
                _this.activeUser = user;
                if (_this.activeTournament != null && _this.activeUser != null) {
                    _this.rootPage = HomePage;
                }
            });
        });
    }
    MyApp.prototype.initializeApp = function () {
        var _this = this;
        this.platform.ready().then(function () {
            _this.statusBar.styleDefault();
            _this.splashScreen.hide();
            // Get a FCM token
            _this.fcm.getToken();
            // Listen to incoming messages
            _this.fcm.listenToNotifications()
                .subscribe(function (notification) {
                if (notification.wasTapped) {
                    _this.nav.setRoot(NotificationsLogPage);
                }
                else {
                }
            });
        });
    };
    MyApp.prototype.openPage = function (page) {
        // Reset the content nav to have just this page
        // we wouldn't want the back button to show in this scenario
        this.nav.setRoot(page.component);
    };
    __decorate([
        ViewChild(Nav),
        __metadata("design:type", Nav)
    ], MyApp.prototype, "nav", void 0);
    MyApp = __decorate([
        Component({
            templateUrl: 'app.html'
        }),
        __metadata("design:paramtypes", [Platform,
            StatusBar,
            SplashScreen,
            Storage,
            FcmProvider,
            ToastController])
    ], MyApp);
    return MyApp;
}());
export { MyApp };
//# sourceMappingURL=app.component.js.map