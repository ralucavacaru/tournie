import { Component } from '@angular/core';
import { IonicPage, NavController } from 'ionic-angular';
import { Storage } from '@ionic/storage';
import { RestProvider } from '../../providers/rest/rest';


@IonicPage()
@Component({
  selector: 'page-schedule',
  templateUrl: 'schedule.html',
})
export class SchedulePage {

  	items: any = [];
    itemExpandHeight: number = 100;
    schedule: any = [];
    expandedSchedule: any = [];
    days: any = [];
 
    constructor(public navCtrl: NavController, public restProvider: RestProvider, private storage: Storage) {
 
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

        // this.storage.get('activeTournament').then((val) => {
        //     this.restProvider.getSchedule(val.id).then(
        //       data => {
        //         this.schedule = data;
        //         console.log(this.schedule);
        //       }
        //     );
        // });

        this.schedule = this.restProvider.getSchedule(1);
        // console.log(this.schedule);

        for (let i=0; i<this.schedule.length; i++) {
            let day = this.schedule[i].event.date_start.substring(0,10);
            if (!this.days.includes(day)) {
                this.days.push(day);
            }
        }
        for (let i=0; i<this.days.length; i++) {
            let aux = [];
            for (let j=0; j<this.schedule.length; j++) {
                if (this.schedule[j].event.date_start.includes(this.days[i])) {
                    aux.push({
                        detail: this.schedule[j],
                        expanded: false,
                    })
                }
            }
            this.expandedSchedule.push({
                date: this.days[i],
                events: aux,
            });
        }
        console.log(this.expandedSchedule);
       
 
    }
 
    expandItem(item){
        this.expandedSchedule.map((day) => {
            day.events.map((listItem) => {
                if(item == listItem){
                listItem.expanded = !listItem.expanded;
                } else {
                    listItem.expanded = false;
                }
     
                return listItem;
            })
        })
    }



    ionViewDidLoad() {
    	console.log('ionViewDidLoad SchedulePage');
  	}

}
