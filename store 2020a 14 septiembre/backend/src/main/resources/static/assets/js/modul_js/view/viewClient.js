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
  return API;
}
