import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  // This assumes the following type mappings:
  // 0 = round
  // 1 = not round
  // Does not support Date for start & end yet.
  // let events: { id: number, name: string, start: string, end: string, type: number, venue: string }[] = [
  //   { "id": 0, "name": "Round 1",  "start": "11:00", "end": "13:00", "type": "0", "venue": "AB01"},
  //   { "id": 1, "name": "Lunch",  "start": "13:00", "end": "14:00", "type": "1", "venue": "CD02"},
  // ];

  constructor(public navCtrl: NavController) {

  }

}
