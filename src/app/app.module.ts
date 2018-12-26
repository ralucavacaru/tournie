import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { HttpClientModule } from '@angular/common/http';
import { IonicStorageModule } from '@ionic/storage';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { NotificationsLogPage } from '../pages/notifications-log/notifications-log';
import { SchedulePage } from '../pages/schedule/schedule';
import { ProfilePage } from '../pages/profile/profile';
import { TournamentsPage } from '../pages/tournaments/tournaments';
import { EventDetailComponent } from '../components/event-detail/event-detail';
import { TournamentDetailPage } from '../pages/tournament-detail/tournament-detail';
import { ConfirmNamePage } from '../pages/confirm-name/confirm-name';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { RestProvider } from '../providers/rest/rest';

import { Firebase } from '@ionic-native/firebase';

import { AngularFireModule } from 'angularfire2';
import { AngularFirestoreModule } from 'angularfire2/firestore';
import { FcmProvider } from '../providers/fcm/fcm';
import { SearchPipe } from '../pipes/search/search';

const firebase = {
  apiKey: 'AIzaSyAXiAk7go-tHQV03YGOL8D-tu39A5KsnXs',
  authDomain: 'tournie-ff873.firebaseapp.com',
  databaseURL: 'https://tournie-ff873.firebaseio.com',
  projectId: 'tournie-ff873',
  storageBucket: 'tournie-ff873.appspot.com',
  messagingSenderId: '737864435118'
};

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    NotificationsLogPage,
    SchedulePage,
    ProfilePage,
    TournamentsPage,
    EventDetailComponent,
    TournamentDetailPage,
    ConfirmNamePage,
    SearchPipe
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    // RestProvider,
    IonicModule.forRoot(MyApp, {
      mode: 'md'
    }),
    IonicStorageModule.forRoot(),
    AngularFireModule.initializeApp(firebase),
    AngularFirestoreModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    NotificationsLogPage,
    SchedulePage,
    ProfilePage,
    TournamentsPage,
    TournamentDetailPage,
    ConfirmNamePage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    { provide: ErrorHandler, useClass: IonicErrorHandler },
    RestProvider,
    Firebase,
    FcmProvider
  ]
})
export class AppModule {}
