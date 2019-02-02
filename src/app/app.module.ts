import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';
import { EmpresaPage } from '../pages/empresa/empresa';
import { ConfiguracaoPage } from '../pages/configuracao/configuracao';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { LoginPageModule } from '../pages/login/login.module';
import { RoutesProvider } from '../providers/routes/routes';
import { RegistroPageModule } from '../pages/registro/registro.module';
import { HTTP } from '@ionic-native/http/ngx';
import { HttpModule } from '@angular/http';
import { UserProvider } from '../providers/user/user';
import { CadastroEmpresaPageModule } from '../pages/cadastro-empresa/cadastro-empresa.module';
import { EditaEmpresaPageModule } from '../pages/edita-empresa/edita-empresa.module';
import { EmpreendimentoPageModule } from '../pages/empreendimento/empreendimento.module';
import { CadastoEmpreendimentoPageModule } from '../pages/cadasto-empreendimento/cadasto-empreendimento.module';


@NgModule({
  declarations: [
    MyApp,
    EmpresaPage,
    ConfiguracaoPage,
    HomePage,
    TabsPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    LoginPageModule,
    RegistroPageModule,
    HttpModule,
    CadastroEmpresaPageModule,
    EditaEmpresaPageModule,
    EmpreendimentoPageModule,
    CadastoEmpreendimentoPageModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    EmpresaPage,
    ConfiguracaoPage,
    HomePage,
    TabsPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    RoutesProvider,
    HTTP,
    UserProvider
  ]
})
export class AppModule {}
