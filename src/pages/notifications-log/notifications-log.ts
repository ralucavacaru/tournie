import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';


@IonicPage()
@Component({
  selector: 'page-notifications-log',
  templateUrl: 'notifications-log.html',
})
export class NotificationsLogPage {
  // Does not support Date yet.
  notifications: { 
    id: number, 
    seen: boolean,
    title: string,
    text: string,
    timestamp: string,
  }[];

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  	this.notifications = [
      { 
        "id": 0,
        "seen": false,
        "title": "Lorem ipsum dolor sit amet",
        "text": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris pharetra lobortis eros, sed lobortis sapien hendrerit eget. Suspendisse iaculis quam turpis, id pulvinar sem fringilla at. Fusce eget ullamcorper tellus. Duis bibendum tincidunt metus, sed viverra nulla viverra ultricies. Morbi efficitur neque dolor, quis tempus dolor pellentesque ut. Maecenas scelerisque et justo sed hendrerit. Morbi et facilisis odio.",
        "timestamp": "12:23",
      },
      { 
        "id": 1,
        "seen": false,
        "title": "Phasellus porttitor mauris",
        "text": "Phasellus porttitor mauris eu sem molestie, sit amet vulputate nibh porta. Morbi consequat tincidunt urna. Vivamus tincidunt dui nec mauris accumsan malesuada. In diam lorem, egestas in magna sed, pharetra vestibulum tellus. Sed ullamcorper libero in mauris dictum, id lacinia risus dictum. Praesent mollis et tellus ut blandit. Donec convallis tellus ac leo convallis finibus in eget purus. Praesent ac libero ornare, sagittis ipsum aliquam, viverra nisl.",
        "timestamp": "12:10",
      },
      { 
        "id": 2,
        "seen": true,
        "title": "Fusce finibus",
        "text": "Fusce finibus sem non semper tincidunt. Pellentesque in porttitor elit, sit amet mollis turpis. Morbi dictum consectetur risus, ac viverra ligula congue a. Mauris eleifend suscipit aliquam. Cras et enim vel nulla eleifend commodo vel molestie nunc. Nullam congue efficitur vehicula. Praesent gravida sagittis facilisis. Vivamus vel urna in lorem vehicula tincidunt. Suspendisse quis orci blandit, aliquam libero eu, posuere arcu. Aliquam porttitor nisl mattis ligula dictum, ac sodales velit convallis. Sed aliquet, nibh vitae condimentum vulputate, nulla purus euismod lectus, ut laoreet tellus nisi id ipsum. Etiam eu sapien id justo porta tincidunt maximus vitae nisi. Etiam vitae sem est. Praesent in nisi convallis, dapibus dui at, blandit orci. Interdum et malesuada fames ac ante ipsum primis in faucibus. Pellentesque pharetra dapibus sem, id tempus nisi dapibus sit amet.",
        "timestamp": "11:40",
      },
      { 
        "id": 3,
        "seen": true,
        "title": "Duis urna metus",
        "text": "Duis urna metus, interdum nec porttitor id, dictum eu libero. Nullam lacinia massa justo, et congue nibh viverra non. Morbi id venenatis mi, nec hendrerit turpis. Proin id justo id erat tincidunt luctus. Proin ornare dignissim tempor. Sed dui quam, tincidunt quis leo id, rhoncus rhoncus est. Sed consectetur augue nibh, et rhoncus massa euismod non. Morbi vel imperdiet magna. Praesent porta tortor sit amet nibh iaculis, in fermentum ante iaculis. Nullam id scelerisque metus. Aliquam scelerisque, dolor in tempor volutpat, neque elit euismod arcu, vel varius nulla enim vel lacus. Donec leo tortor, rhoncus nec turpis eget, pretium euismod elit. Suspendisse potenti. Sed sagittis tortor in gravida tincidunt. Nam quis imperdiet augue. Nulla vel porttitor dolor, ut consectetur erat.",
        "timestamp": "10:02",
      },
      { 
        "id": 4,
        "seen": true,
        "title": "Nunc odio eros",
        "text": "Nunc odio eros, accumsan et fringilla ut, tincidunt sit amet neque. Maecenas ex mauris, porttitor vitae diam et, feugiat dictum odio. Aliquam blandit sagittis elit molestie dictum. Nullam lectus odio, mollis sit amet mauris convallis, tempus gravida est. Nulla fermentum justo in ligula congue euismod. Cras vulputate quam nulla, id lobortis velit hendrerit ut. Etiam tincidunt justo enim, pellentesque tempus diam ornare non. Nam sollicitudin ante at metus feugiat, eget tempus nulla sollicitudin. Nulla aliquet non dolor eu ultricies. Praesent imperdiet, nulla ut placerat interdum, metus augue suscipit ligula, ac hendrerit urna orci et diam. Nullam eget odio lacinia, vehicula libero eu, commodo nisl. Aenean ac elit eget risus condimentum luctus.",
        "timestamp": "09:15",
      },
    ];
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad NotificationsLogPage');
  }

}
