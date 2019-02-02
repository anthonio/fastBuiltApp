import { Injectable } from '@angular/core';

const COMPANY_DATA_KEY = "companyData";

@Injectable()
export class CompanyProvider {

  constructor() {

  }

  setcompanyData(id?:number, id_user?:number, id_type?:number, name?:string, address?:string, email?:string){

    let companyData = {
      idCompany: null,
      idUser: null,
      idType: null,
      nameCompany: "",
      addressCompany: "",
      emailCompany: ""
    };


    if(id != null){

      companyData.idCompany = id;

    }

    if(id_user != null){

      companyData.idUser = id_user;

    }

    if(id_type != null){

      companyData.idType = id_type;

    }

    if(name != ""){
      
      companyData.nameCompany = name;

    }

    if(address != ""){

      companyData.addressCompany = address;

    }

    if(email != ""){

      companyData.emailCompany = email;

    }

    localStorage.setItem(COMPANY_DATA_KEY, JSON.stringify(companyData));

  }

  getcompanyData(): any{

    return JSON.parse(localStorage.getItem(COMPANY_DATA_KEY));

  }

}
