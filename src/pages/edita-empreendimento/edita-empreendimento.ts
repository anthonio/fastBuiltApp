import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { RoutesProvider } from '../../providers/routes/routes';
import { UserProvider } from '../../providers/user/user';
import moment from 'moment';


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
      this.dtBegin = ret[0].dt_begin;
      this.dtEnd = ret[0].dt_end;

    }, error =>{
      console.log("error",error);
    });
  }

  update(){

    let dateFormat = moment(this.dtBegin).format("L").split("/");
    let dtBegin = `${dateFormat[1]}/${dateFormat[0]}/${dateFormat[2]}`;

    dateFormat = moment(this.dtEnd).format("L").split("/");
    let dtEnd = `${dateFormat[1]}/${dateFormat[0]}/${dateFormat[2]}`;

    let body = {
      name: this.name,
      address: this.address,
      dt_begin: dtBegin,
      dt_end: dtEnd,
      id_user: this.userData.idUser,
      id_company: this.navParams.get("id_company")
    }
    
    this.routes.putData("/empreendimento",`/${this.navParams.get("id_building")}`, body).subscribe(data => {
      this.navCtrl.pop();
    }, error => {
      console.error(error);
    });
    
  }

}
