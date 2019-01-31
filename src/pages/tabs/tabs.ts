import { Component } from '@angular/core';

import { EmpresaPage } from '../empresa/empresa';
import { HomePage } from '../home/home';
import { ConfiguracaoPage } from '../configuracao/configuracao';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = HomePage;
  tab2Root = EmpresaPage;
  tab3Root = ConfiguracaoPage;

  constructor() {

  }
}
