import { UserProvider } from '../../providers/user/user';
import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { RoutesProvider } from '../../providers/routes/routes';
import { CadastroEmpresaPage } from '../cadastro-empresa/cadastro-empresa';
import { EditaEmpresaPage } from '../edita-empresa/edita-empresa';
import { EmpreendimentoPage } from '../empreendimento/empreendimento';


@Component({
  selector: 'page-empresa',
  templateUrl: 'empresa.html',
  providers: [
    RoutesProvider,
    UserProvider
  ]
})
export class EmpresaPage {
  private userData: any;
  public userCompany = new Array<any>();

  constructor(
    public navCtrl: NavController,
    private routes: RoutesProvider,
    private user: UserProvider) {

  }

  ionViewWillEnter(){
    this.getCompanies();
  }

  addNewCompany(){
    this.navCtrl.push(CadastroEmpresaPage);
  }

  editCurrentCompany(idCompany){
    this.navCtrl.push(EditaEmpresaPage, {id:idCompany});
  }

  goToBuilding(idCompany){

    this.navCtrl.push(EmpreendimentoPage, {id:idCompany});

  }

  getCompanies(){
    this.userData = this.user.getUserData();

    this.routes.getData("/empresa", `/${this.userData.idUser}`).subscribe(data =>{

      let response = (data as any);

      let ret = JSON.parse(response._body);

      this.userCompany = ret;

    }, error =>{
      console.log("error", error);
    }); 
  }

}


