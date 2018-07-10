import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { SchedulePage } from './schedule';
// import { EventDetailComponent } from '../../components/event-detail/event-detail';

@NgModule({
  declarations: [
    SchedulePage,
  ],
  imports: [
  	// EventDetailComponent,
    IonicPageModule.forChild(SchedulePage),
  ],
})
export class SchedulePageModule {}
