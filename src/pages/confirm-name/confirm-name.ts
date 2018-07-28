import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Storage } from '@ionic/storage';
import { RestProvider } from '../../providers/rest/rest';
import { HomePage } from '../home/home';


@IonicPage()
@Component({
  selector: 'page-confirm-name',
  templateUrl: 'confirm-name.html',
})
export class ConfirmNamePage {
  
  url: any;
  tournament: any;
  users: any = [];
  homePage = HomePage;

  constructor(public navCtrl: NavController, 
			  public navParams: NavParams,
			  private storage: Storage, 
        public restProvider: RestProvider) {
  	this.url = this.navParams.get('url');
  	this.tournament = this.navParams.get('tournament');

  	this.restProvider.getUsersByUrl(this.url, this.tournament.id).then(res => {
      this.users = res;
      console.log(this.users);
    });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ConfirmNamePage');
  }

  logIn(user) {
    this.storage.set('activeTournament', this.tournament);
    this.storage.set('activeUser', user);
    this.navCtrl.setRoot(this.homePage, {}, {animate: true, direction: "forward"});
  }

}
