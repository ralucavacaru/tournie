import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { HomePage } from '../home/home';
import { TournamentDetailPage } from '../tournament-detail/tournament-detail';

@IonicPage()
@Component({
  selector: 'page-tournaments',
  templateUrl: 'tournaments.html',
})
export class TournamentsPage {

  tournaments: any = [];

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.tournaments = [
      {expanded: false, name: "Belgrade Open"},
      {expanded: false, name: "Novi Sad EUDC"},
      {expanded: false, name: "Lorem Ipsum IV"},
      {expanded: false, name: "Amet Open"},
    ];
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
