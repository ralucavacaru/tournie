import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Storage } from '@ionic/storage';
import { RestProvider } from '../../providers/rest/rest';


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

    items: any = [];
    itemExpandHeight: number = 100;
    tournament: any;
 
    constructor(public navCtrl: NavController, private storage: Storage, public restProvider: RestProvider) {
        this.storage.get('activeTournament').then((val) => {
            this.tournament = val;
        });

        this.items = [
            {expanded: false, type: 1},
            {expanded: false, type: 2},
            {expanded: false, type: 5},
        ];
        this.items[0].expanded = true;
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

}
