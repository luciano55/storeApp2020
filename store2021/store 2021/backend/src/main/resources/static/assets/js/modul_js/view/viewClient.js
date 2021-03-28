import {FactoryView} from "../factory/factoryView.js"

export function ViewClient() {

  
  const API = {};
   const factoryView = FactoryView();
  API.register = function () {          
           return factoryView.clientRegister();    
  };
  API.login = function () {           
           return factoryView.clientLogin();    
  };
  API.forgetPassword = function(){
           return factoryView.clientForgetPassword();
  };
  API.updateAvatar = function(){
     return factoryView.clientUpdateAvatar();
  }
  API.updateLogin = function(){
     return factoryView.clientUpdateLogin();
  }
    API.updateLogin = function(){
     return factoryView.clientUpdateLogin();
  }
 API.uuid = function(){
     return factoryView.uuid();
  }
 
  return API;
}
