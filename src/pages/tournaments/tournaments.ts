import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { TournamentDetailPage } from '../tournament-detail/tournament-detail';
import { Http } from '@angular/http';

import { Observable } from 'rxjs';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';

@IonicPage()
@Component({
  selector: 'page-tournaments',
  templateUrl: 'tournaments.html',
})
export class TournamentsPage {

  tournaments: any = [];
  loadTournamentsURL = "http://www.eudc-app.com/debate/tournament/get-all";

  constructor(public navCtrl: NavController, public navParams: NavParams, private http: Http) {
    this.tournaments = [
      {expanded: false, name: "Belgrade Open"},
      {expanded: false, name: "Novi Sad EUDC"},
      {expanded: false, name: "Lorem Ipsum IV"},
      {expanded: false, name: "Amet Open"},
    ];
  }

  ionViewWillEnter() {
    console.log("ionViewWillEnter TournamentsPage");
    // this.tournaments = this.loadTournaments();
    console.log(this.loadTournaments());        
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad TournamentsPage');
  }

  onClickTournament(tournament) {
    this.navCtrl.push(TournamentDetailPage, {
      tournament: tournament,
    });
  }

  async loadTournaments() {
    let response = await this.http.get(this.loadTournamentsURL)
                                  .map(res => res.json().name)
                                  .subscribe(
                                    (res)=> {
                                      console.log(res)
                                    },
                                    (err)=>{
                                      console.log(err)
                                    }
                                  );
    return response;
  }
}
