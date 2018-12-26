import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { RestProvider } from '../../providers/rest/rest';
import { ConfirmNamePage } from '../confirm-name/confirm-name';

@IonicPage()
@Component({
  selector: 'page-tournament-detail',
  templateUrl: 'tournament-detail.html'
})
export class TournamentDetailPage {
  tournament: any;
  url: any;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public restProvider: RestProvider
  ) {
    this.tournament = this.navParams.get('tournament');
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad TournamentDetailPage');
  }

  onClickLogIn() {
    this.navCtrl.push(ConfirmNamePage, {
      url: this.url,
      tournament: this.tournament
    });
  }
}
