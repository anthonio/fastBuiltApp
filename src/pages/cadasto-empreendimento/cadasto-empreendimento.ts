import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { RoutesProvider } from '../../providers/routes/routes';
import { UserProvider } from '../../providers/user/user';

@IonicPage()
@Component({
  selector: 'page-cadasto-empreendimento',
  templateUrl: 'cadasto-empreendimento.html',
  providers: [
    RoutesProvider,
    UserProvider
  ]
})
export class CadastoEmpreendimentoPage {
  private userData:any;

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    private routes: RoutesProvider,
    private user: UserProvider) {
  }

  ionViewWillEnter(){
    console.log(this.navParams.get("id_company"));
  }

  insert(name, address, dtBegin, dtEnd){
    let dt_begin = `${dtBegin.day}/${dtBegin.month}/${dtBegin.year}`;
    let dt_end = `${dtEnd.day}/${dtEnd.month}/${dtEnd.year}`;

    this.userData = this.user.getUserData();

    let body = {name, address, dt_begin, dt_end, id_user: this.userData.idUser, id_company:this.navParams.get("id_company")};

    this.routes.postData("/empreendimento", body).subscribe(data => {

      let response = (data as any);

      let ret = JSON.parse(response._body);

      if(ret.insertId){
        this.navCtrl.pop();
      } else {
        console.log(ret);
      }

    }, error => {

      console.log(error);

    });

  }

}
