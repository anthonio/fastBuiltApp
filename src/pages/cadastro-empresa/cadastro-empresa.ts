import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { RoutesProvider } from '../../providers/routes/routes';
import { UserProvider } from '../../providers/user/user';

@IonicPage()
@Component({
  selector: 'page-cadastro-empresa',
  templateUrl: 'cadastro-empresa.html',
  providers: [
    RoutesProvider,
    UserProvider
  ]
})
export class CadastroEmpresaPage {

  public type_company = new Array<any>();
  public idType:number = 0;
  private userData:any;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private routes: RoutesProvider,
    private user: UserProvider) {
  }

  ionViewWillEnter() {

    this.routes.getData("/tipo-empresa","").subscribe(data =>{

      let response = (data as any);

      let ret = JSON.parse(response._body);
      
      this.type_company = ret;

    }, error =>{
      console.log("error",error);
    });
  }


  insert(name, address, email){
    this.userData = this.user.getUserData();

    let body = {name, address, email, id_user: this.userData.idUser, id_type: this.idType};

    this.routes.postData("/empresa", body).subscribe(data => {

      let response = (data as any);

      let ret = JSON.parse(response._body);

      if(ret.insertId){
        this.navCtrl.popToRoot();
      } else {
        console.log(ret);
      }

    }, error => {

      console.log(error);

    });

  }

}
