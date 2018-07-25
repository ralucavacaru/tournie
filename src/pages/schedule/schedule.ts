import { Component } from '@angular/core';
import { IonicPage, NavController } from 'ionic-angular';


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
            {expanded: false, type: 1},
            {expanded: false, type: 2},
            {expanded: false, type: 3},
            {expanded: false, type: 4},
            {expanded: false, type: 5},
            {expanded: false, type: 6},
            {expanded: false, type: 7},
            {expanded: false, type: 8},
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
