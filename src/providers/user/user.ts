import { Injectable } from '@angular/core';

const USER_DATA_KEY = "userData";

@Injectable()
export class UserProvider {

  constructor() {
  
  }

  setUserData(id?:number, id_type?:number, name?:string, user?:string, email?:string){

    let userData = {
      idUser: null,
      idType: null,
      nameUser: "",
      userUser: "",
      emailUser: ""
    };

    if(id != null){

      userData.idUser = id;

    }

    if(id_type != null){

      userData.idType = id_type;

    }

    if(name != ""){
      
      userData.nameUser = name;

    }

    if(user != ""){

      userData.userUser = user;

    }

    if(email != ""){

      userData.emailUser = email;

    }

    localStorage.setItem(USER_DATA_KEY, JSON.stringify(userData));

  }

  getUserData(): any{

    return JSON.parse(localStorage.getItem(USER_DATA_KEY));

  }

}