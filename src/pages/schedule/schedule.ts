import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { EventDetailComponent } from '../../components/event-detail/event-detail';

/**
 * Generated class for the SchedulePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-schedule',
  templateUrl: 'schedule.html',
})
export class SchedulePage {

  items: any = [];
    itemExpandHeight: number = 100;
 
    constructor(public navCtrl: NavController) {
 
        this.items = [
            {expanded: false},
            {expanded: false},
            {expanded: false},
            {expanded: false},
            {expanded: false},
            {expanded: false},
            {expanded: false},
            {expanded: false},
            {expanded: false}
        ];
 
    }
 
    expandItem(item){
 
        this.items.map((listItem) => {
 
            if(item == listItem){
                listItem.expanded = !listItem.expanded;
            } else {
                listItem.expanded = false;
            }
 
            return listItem;
 
        });
 
    }

    ionViewDidLoad() {
    	console.log('ionViewDidLoad SchedulePage');
  	}

}
