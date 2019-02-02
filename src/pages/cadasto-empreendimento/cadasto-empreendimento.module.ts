import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { CadastoEmpreendimentoPage } from './cadasto-empreendimento';

@NgModule({
  declarations: [
    CadastoEmpreendimentoPage,
  ],
  imports: [
    IonicPageModule.forChild(CadastoEmpreendimentoPage),
  ],
})
export class CadastoEmpreendimentoPageModule {}
