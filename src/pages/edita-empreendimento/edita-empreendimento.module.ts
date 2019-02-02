import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { EditaEmpreendimentoPage } from './edita-empreendimento';

@NgModule({
  declarations: [
    EditaEmpreendimentoPage,
  ],
  imports: [
    IonicPageModule.forChild(EditaEmpreendimentoPage),
  ],
})
export class EditaEmpreendimentoPageModule {}
