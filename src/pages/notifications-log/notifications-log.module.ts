import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { NotificationsLogPage } from './notifications-log';

@NgModule({
  declarations: [
    NotificationsLogPage,
  ],
  imports: [
    IonicPageModule.forChild(NotificationsLogPage),
  ],
})
export class NotificationsLogPageModule {}
