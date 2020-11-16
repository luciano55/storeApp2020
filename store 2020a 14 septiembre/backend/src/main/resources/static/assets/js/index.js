import { ViewHeader } from "./modul_js/view/viewHeader.js";
import { ViewFooter } from "./modul_js/view/viewFooter.js";
import { ManagerFunctions } from "./modul_js/function/manager_functions.js";
import { ViewHome } from "./modul_js/view/viewHome.js";
import { ViewClient } from "./modul_js/view/viewClient.js";
import {d,$,Q,Qa,sS} from "./modul_js/function/global.js";
import {STRATEGY} from "./modul_js/enum/enum_stratey.js";
import{FactoryDataControl} from "./modul_js/factory/factoryDataControl.js";
import { GeneralPurposeFunctions } from "./modul_js/function/general_purpose_functions.js";

import {FactoryImg} from "./modul_js/factory/factoryImg.js"
let url;
const managerFunctions = new ManagerFunctions();
const viewClient = new ViewClient();
const factoryImg = new FactoryImg();

d.addEventListener("DOMContentLoaded", (e) => {
  $("myFooter").appendChild(ViewFooter());
  $("myHeader").appendChild(ViewHeader());
  $("myBody").appendChild(ViewHome());
  managerFunctions.darkLight("dark-mode");
  managerFunctions.weather();
  managerFunctions.CreateBBDDpostalCode();
  managerFunctions.dado();
  managerFunctions.scrollTopButton(".scroll-top-btn");
});
  
d.addEventListener("click", (e) => {
  if (e.target.id == "linkRegister") {
     url = "/addClient88";
     const globalFunction = new GeneralPurposeFunctions();
      globalFunction.resetAutoIncrementPhoneCP();
      let myBody = $("myBody");
      myBody.innerHTML = "";
      myBody.appendChild(viewClient.register());    
      managerFunctions.validations();     
      managerFunctions.phone();   
     managerFunctions.saveDataControls();
     managerFunctions.showIniStrategy(STRATEGY.ONETOONE);
  }
  if (e.target.id == "submit") {     
      const dataControl =  managerFunctions.getDataControls();     
       $("loader").style.display = "block";
       managerFunctions.ajaxForm({
         url,
         dataControl
       });       
   }
});
