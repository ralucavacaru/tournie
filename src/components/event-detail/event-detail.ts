import { Component } from '@angular/core';

/**
 * Generated class for the EventDetailComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'event-detail',
  templateUrl: 'event-detail.html'
})
export class EventDetailComponent {

  text: string;

  constructor() {
    console.log('Hello EventDetailComponent Component');
    this.text = 'Hello World';
  }

}
