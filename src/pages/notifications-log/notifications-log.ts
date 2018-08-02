import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { RestProvider } from '../../providers/rest/rest';
import { Storage } from '@ionic/storage';


@IonicPage()
@Component({
  selector: 'page-notifications-log',
  templateUrl: 'notifications-log.html',
})
export class NotificationsLogPage {
  // Does not support Date yet.
  notifications: any = [];

  constructor(public navCtrl: NavController, 
              public navParams: NavParams,
              public restProvider: RestProvider,
              private storage: Storage) {

    this.restProvider.getNotificationLog().then((notifications) => {
      this.notifications = notifications;
    })
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad NotificationsLogPage');
  }

}
