import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { TournamentsPage } from '../tournaments/tournaments';
import { Storage } from '@ionic/storage';
import { RestProvider } from '../../providers/rest/rest';


@IonicPage()
@Component({
  selector: 'page-profile',
  templateUrl: 'profile.html',
})
export class ProfilePage {
  user: any = {};
  url: any;

  tournamentsPage = TournamentsPage;

  constructor(public navCtrl: NavController, 
              public navParams: NavParams,
              private storage: Storage, 
              public restProvider: RestProvider) {
  	
    this.storage.get('activeUser').then((val) => {
        this.user = val;
    });
    this.storage.get('url').then((val) => {
      this.url = val;
    })
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ProfilePage');
  }

  logOut() {
    this.storage.set('activeUser', null);
    this.storage.set('activeTournament', null);
    this.navCtrl.setRoot(this.tournamentsPage, {}, {animate: true, direction: "back"});
  }

}
