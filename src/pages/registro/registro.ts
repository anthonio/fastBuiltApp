import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AlertController } from 'ionic-angular';
import { RoutesProvider } from '../../providers/routes/routes';
import { TabsPage } from '../tabs/tabs';

/**
 * Generated class for the RegistroPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-registro',
  templateUrl: 'registro.html',
  providers: [
    RoutesProvider
  ]
})
export class RegistroPage {

  public tipoUsuario = "";
  public ion_options = new Array<any>();

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public alertCtrl: AlertController,
    private routes: RoutesProvider) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad RegistroPage');
    
    this.routes.getData("/tipo-usuario","").subscribe(data =>{

      let response = (data as any);

      let ret = JSON.parse(response._body);
      
      this.ion_options = ret;

    }, error =>{
      console.log("error",error);
    });
  }

  insert(name, user, email, passOne, passTwo){

    if(passOne.toUpperCase() != passTwo.toUpperCase()){
      const alert = this.alertCtrl.create({
        title: 'Senhas não conferem!',
        subTitle: 'As senhas devem ser iguais!',
        buttons: ['OK']
      });
      alert.present();
    } else {

      let body = {name, user, email, password:passTwo, id_type: this.tipoUsuario};

      this.routes.postData("/usuario", body).subscribe(data => {

        console.log(data);
        let response = (data as any);

        let ret = JSON.parse(response._body);

        if(ret.insertId){
          this.navCtrl.push(TabsPage, {id_user: ret.insertId});
        } else {
          console.log(ret);
        }

      }, error => {

        console.log(error);

      });
      
    }

  }
}
