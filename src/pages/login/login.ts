import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { RoutesProvider } from '../../providers/routes/routes';
import { TabsPage } from '../tabs/tabs';
import { RegistroPage } from '../registro/registro';

/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
  providers: [
    RoutesProvider
  ]
})
export class LoginPage {

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    private routes: RoutesProvider) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }

  isUser(username, password){

    this.routes.getData("/usuario", `/${username}/${password}`).subscribe(data =>{

      let response = (data as any);

      let ret = JSON.parse(response._body);

      if(ret.user){
        this.navCtrl.push(TabsPage);
      } else {
        this.navCtrl.push(RegistroPage);
      }

    }, error =>{
      console.log("error",error);
    });
  }

  goToRegister(){
    this.navCtrl.push(RegistroPage);
  }
}
