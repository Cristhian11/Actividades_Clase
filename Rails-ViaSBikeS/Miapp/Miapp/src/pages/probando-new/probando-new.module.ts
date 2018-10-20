import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ProbandoNewPage } from './probando-new';

@NgModule({
  declarations: [
    ProbandoNewPage,
  ],
  imports: [
    IonicPageModule.forChild(ProbandoNewPage),
  ],
})
export class ProbandoNewPageModule {}
