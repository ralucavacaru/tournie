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
import { TournamentsPage} from '../pages/tournaments/tournaments'
import { EventDetailComponent } from '../components/event-detail/event-detail';
import { TournamentDetailPage } from '../pages/tournament-detail/tournament-detail';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { RestProvider } from '../providers/rest/rest';

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
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    // RestProvider,
    IonicModule.forRoot(MyApp, {
      mode: 'md'
    }),
    IonicStorageModule.forRoot(),
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
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    RestProvider
  ]
})
export class AppModule {}
