import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { HomePage } from '../home/home';
import { Storage } from '@ionic/storage';


@IonicPage()
@Component({
  selector: 'page-tournament-detail',
  templateUrl: 'tournament-detail.html',
})
export class TournamentDetailPage {

  homePage = HomePage;
  tournament: any;

  constructor(public navCtrl: NavController, public navParams: NavParams, private storage: Storage) {
  	this.tournament = this.navParams.get('tournament');
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad TournamentDetailPage');
  }

  logIn() {
    this.storage.set('activeTournament', this.tournament);
    this.navCtrl.setRoot(this.homePage, {}, {animate: true, direction: "forward"});
  }

}
