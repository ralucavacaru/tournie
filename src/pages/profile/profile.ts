import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { TournamentsPage } from '../tournaments/tournaments';

/**
 * Generated class for the ProfilePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-profile',
  templateUrl: 'profile.html',
})
export class ProfilePage {
  user: any = {};

  tournamentsPage = TournamentsPage;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  	// this.user = {
  	// 	id: 2,
  	// 	name: "John Doe",
  	// 	role: 2, // Judge
  	// 	institution: "UCL",
  	// };
  	this.user = {
  		id: 1,
  		name: "Jane Doe",
  		role: 1, // Speaker
  		team: "UCL A",
  		language: "ESL",
  	}
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ProfilePage');
  }

  logOut() {
    this.navCtrl.setRoot(this.tournamentsPage, {}, {animate: true, direction: "back"});
  }

}
