import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { RoutesProvider } from '../../providers/routes/routes';
import { UserProvider } from '../../providers/user/user';

@IonicPage()
@Component({
  selector: 'page-edita-empreendimento',
  templateUrl: 'edita-empreendimento.html',
  providers: [
    RoutesProvider,
    UserProvider
  ]
})
export class EditaEmpreendimentoPage {

  public name:string = "";
  public address:string = "";
  public dtBegin:any;
  public dtEnd:any;
  public userData: any;

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    private routes: RoutesProvider,
    private user: UserProvider) {
  }

  ionViewWillEnter() {
    this.userData = this.user.getUserData();

    this.routes.getData("/empreendimento",`/${this.navParams.get("id_building")}/${this.userData.idUser}`).subscribe(data =>{

      let response = (data as any);

      let ret = JSON.parse(response._body);
      
      this.name = ret[0].name;
      this.address = ret[0].address;
      this.dtBegin = {day: "02", month: "02", year:"2019"};//ret[0].dt_begin;
      this.dtEnd = //ret[0].dt_end;


      console.log(ret);

    }, error =>{
      console.log("error",error);
    });
  }

  update(){

    console.log(this.name, this.address, this.dtBegin);
  }

}
