import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { RoutesProvider } from '../../providers/routes/routes';
import { UserProvider } from '../../providers/user/user';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
  providers: [
    RoutesProvider,
    UserProvider
  ]
})
export class HomePage {
  public user_name:string = "";
  private userData:any;

  constructor(
    public navCtrl: NavController,
    private routes: RoutesProvider,
    private user: UserProvider) {

  }

  ionViewDidLoad() {
    this.userData = this.user.getUserData();

    this.routes.getData("/usuario", `/${this.userData.idUser}`).subscribe(data =>{

      let response = (data as any);

      let ret = JSON.parse(response._body);

      this.user_name = ret[0].name;

      this.user.setUserData(this.userData.idUser, ret[0].id_type, ret[0].name, ret[0].user, ret[0].email);

    }, error =>{
      console.log("error", error);
    });

  }

}
