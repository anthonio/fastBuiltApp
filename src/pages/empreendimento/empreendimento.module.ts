import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { EmpreendimentoPage } from './empreendimento';

@NgModule({
  declarations: [
    EmpreendimentoPage,
  ],
  imports: [
    IonicPageModule.forChild(EmpreendimentoPage),
  ],
})
export class EmpreendimentoPageModule {}
