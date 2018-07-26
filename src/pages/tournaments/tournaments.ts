import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { TournamentDetailPage } from '../tournament-detail/tournament-detail';
import { RestProvider } from '../../providers/rest/rest';

@IonicPage()
@Component({
  selector: 'page-tournaments',
  templateUrl: 'tournaments.html',
})
export class TournamentsPage {

  tournaments: any = [];

  constructor(public navCtrl: NavController, public navParams: NavParams, public restProvider: RestProvider) {
    this.restProvider.getAllTournaments().then(
      data => {
        this.tournaments = data;
        console.log(this.tournaments);
      }
     );
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad TournamentsPage');
  }

  onClickTournament(tournament) {
    this.navCtrl.push(TournamentDetailPage, {
      tournament: tournament,
    });
  }

}
