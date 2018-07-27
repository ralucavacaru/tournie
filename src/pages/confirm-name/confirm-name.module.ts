import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ConfirmNamePage } from './confirm-name';

@NgModule({
  declarations: [
    ConfirmNamePage,
  ],
  imports: [
    IonicPageModule.forChild(ConfirmNamePage),
  ],
})
export class ConfirmNamePageModule {}
