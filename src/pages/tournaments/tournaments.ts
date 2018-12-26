import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { TournamentDetailPage } from '../tournament-detail/tournament-detail';
import { RestProvider } from '../../providers/rest/rest';

import { FcmProvider } from '../../providers/fcm/fcm';

@IonicPage()
@Component({
  selector: 'page-tournaments',
  templateUrl: 'tournaments.html'
})
export class TournamentsPage {
  tournaments: any = [];
  token: any;
  response: any;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public restProvider: RestProvider,
    public fcm: FcmProvider
  ) {
    this.fcm.getTokenForRest().then(res => {
      this.token = res;
      console.log('TOKEN IS');
      console.log(this.token);
    });
  }

  ionViewWillEnter() {
    this.restProvider.getAllTournaments().then(data => {
      this.tournaments = data;
      console.log(data);
    });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad TournamentsPage');
    console.log(this.tournaments);
  }

  onClickTournament(tournament) {
    this.navCtrl.push(TournamentDetailPage, {
      tournament: tournament
    });
  }
}
