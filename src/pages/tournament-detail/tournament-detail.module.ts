import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { TournamentDetailPage } from './tournament-detail';

@NgModule({
  declarations: [
    TournamentDetailPage,
  ],
  imports: [
    IonicPageModule.forChild(TournamentDetailPage),
  ],
})
export class TournamentDetailPageModule {}
