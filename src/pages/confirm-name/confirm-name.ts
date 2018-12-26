import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Storage } from '@ionic/storage';
import { RestProvider } from '../../providers/rest/rest';
import { HomePage } from '../home/home';
import { FcmProvider } from '../../providers/fcm/fcm';
import { SearchPipe } from '../../pipes/search/search';

@IonicPage()
@Component({
  selector: 'page-confirm-name',
  templateUrl: 'confirm-name.html'
})
export class ConfirmNamePage {
  url: any;
  tournament: any;
  users: any = null;
  homePage = HomePage;
  response: any;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private storage: Storage,
    public restProvider: RestProvider,
    public fcm: FcmProvider
  ) {
    this.url = this.navParams.get('url');
    this.tournament = this.navParams.get('tournament');

    this.restProvider.getUsersByUrl(this.url, this.tournament.id).then(
      res => {
        this.users = res;
        console.log(this.users);
      },
      err => {
        if (err.status == '404') {
          this.users = [];
        }
      }
    );
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ConfirmNamePage');
  }

  logIn(user) {
    this.storage.set('activeTournament', this.tournament);
    this.storage.set('activeUser', user);
    this.storage.set('url', this.url);

    this.fcm.getTokenForRest().then(token => {
      this.restProvider.setDeviceId(user.user.id, token).then(
        response => {
          this.response = response;
          console.log(response);
        },
        err => {
          console.log(err);
        }
      );
    });

    this.navCtrl.setRoot(
      this.homePage,
      {},
      { animate: true, direction: 'forward' }
    );
  }
}
