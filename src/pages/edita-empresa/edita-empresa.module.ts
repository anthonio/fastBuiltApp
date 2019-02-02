import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { EditaEmpresaPage } from './edita-empresa';

@NgModule({
  declarations: [
    EditaEmpresaPage,
  ],
  imports: [
    IonicPageModule.forChild(EditaEmpresaPage),
  ],
})
export class EditaEmpresaPageModule {}
