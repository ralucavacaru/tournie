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
import { RestProvider } from '../providers/rest/rest';

import { ToastController, NavController } from 'ionic-angular';
import { Subject } from 'rxjs/Subject';
import { tap } from 'rxjs/operators';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

  rootPage: any = TournamentsPage;
  activeTournament: any;
  activeUser: any;

  pages: Array<{title: string, component: any}>;

  @ViewChild('content') navCtrl: NavController;

  constructor(public platform: Platform, 
              public statusBar: StatusBar, 
              public splashScreen: SplashScreen, 
              private storage: Storage, 
              public fcm: FcmProvider, 
              public toastCtrl: ToastController,
              public restProvider: RestProvider) {
    this.initializeApp();

    // used for sidebar navigation
    this.pages = [
      { title: 'Home', component: HomePage },
      { title: 'Notifications Log', component: NotificationsLogPage},
      { title: 'Schedule', component: SchedulePage },
      { title: 'Profile', component: ProfilePage },
    ];

    this.storage.get('activeTournament').then((tournament) => {
      this.activeTournament = tournament;
      this.storage.get('activeUser').then((user) => {
        this.activeUser = user;

        if (this.activeTournament != null && this.activeUser != null) {
          this.rootPage = HomePage;
        }
      })
    })

  }

  initializeApp() {
    if (!document.URL.includes('http://') && !document.URL.includes('https://')) {  
      this.platform.ready().then(() => {
        this.statusBar.styleDefault();
        this.splashScreen.hide();

        // Get a FCM token
        this.fcm.getToken()

        // Listen to incoming messages
        this.fcm.listenToNotifications()
        .subscribe(notification => {
            if (notification.wasTapped) {
              this.navCtrl.setRoot(NotificationsLogPage);
            }
            else {
              this.navCtrl.setRoot(NotificationsLogPage);
            }        
        })
      });
    }
  }

  openPage(page) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    this.nav.setRoot(page.component);
  }
}
