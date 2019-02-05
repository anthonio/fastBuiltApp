import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { RoutesProvider } from '../../providers/routes/routes';
import { UserProvider } from '../../providers/user/user';

/**
 * Generated class for the UnidadePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-unidade',
  templateUrl: 'unidade.html',
  providers: [
    RoutesProvider,
    UserProvider
  ]
})
export class UnidadePage {

  private userData: any;
  public unities = new Array<any>();

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    private routes: RoutesProvider,
    private user: UserProvider) {
  }

  ionViewWillEnter() {
    this.getUnity();
  }

  addNewUnity(){

  }

  getUnity(){
    this.userData = this.user.getUserData();

    this.routes.getData("/unidade", `/${this.navParams.get("id_building")}`).subscribe(data =>{

      let response = (data as any);

      let ret = JSON.parse(response._body);
      
      this.unities = ret;

    }, error =>{
      console.error("error", error);
    }); 
  }
}
