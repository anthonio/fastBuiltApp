import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { RoutesProvider } from '../../providers/routes/routes';
import { UserProvider } from '../../providers/user/user';
import { CadastoEmpreendimentoPage } from '../cadasto-empreendimento/cadasto-empreendimento';

@IonicPage()
@Component({
  selector: 'page-empreendimento',
  templateUrl: 'empreendimento.html',
  providers: [
    RoutesProvider,
    UserProvider
  ]
})
export class EmpreendimentoPage {
  private userData: any;
  public compBuildings = new Array<any>();

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private routes: RoutesProvider,
    private user: UserProvider) {
  }

  ionViewWillEnter(){
    this.getBuilding();
  }

  addNewBuilding(){
    this.navCtrl.push(CadastoEmpreendimentoPage, {id_company: this.navParams.get("id")});
  }

  getBuilding(){
    this.userData = this.user.getUserData();

    this.routes.getData("/empreendimento", `/${this.navParams.get("id")}`).subscribe(data =>{

      let response = (data as any);

      let ret = JSON.parse(response._body);

      this.compBuildings = ret;

    }, error =>{
      console.error("error", error);
    }); 
  }

}
