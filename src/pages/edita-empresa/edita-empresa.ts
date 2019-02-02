import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { RoutesProvider } from '../../providers/routes/routes';
import { UserProvider } from '../../providers/user/user';

@IonicPage()
@Component({
  selector: 'page-edita-empresa',
  templateUrl: 'edita-empresa.html',
  providers: [
    RoutesProvider,
    UserProvider
  ]
})
export class EditaEmpresaPage {

  public type_company = new Array<any>();
  public idType:number = 0;
  public name:string = "";
  public address:string = "";
  public email:string = "";
  public userData: any;

  private idCompany:number = 0;

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

    this.userData = this.user.getUserData();

    this.routes.getData("/empresa",`/${this.navParams.get("id")}/${this.userData.idUser}`).subscribe(data =>{

      let response = (data as any);

      let ret = JSON.parse(response._body);
      
      this.name = ret[0].name;
      this.address = ret[0].address;
      this.email = ret[0].email;
      this.idType = ret[0].id_type;
      this.idCompany = ret[0].id;

    }, error =>{
      console.log("error",error);
    });
  }

  update(){

    let body = {
        name: this.name, 
        address: this.address,
        email: this.email,
        id_user: this.userData.idUser,
        id_type: this.idType
      };

    this.routes.putData("/empresa",`/${this.idCompany}`, body).subscribe(data => {
      this.navCtrl.popToRoot();
    }, error => {
      console.error(error);
    });

  }

}
