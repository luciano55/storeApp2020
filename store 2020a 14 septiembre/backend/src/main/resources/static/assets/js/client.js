import { ViewHeaderClient } from "./modul_js/view/viewHeaderClient.js";
import { ViewFooter } from "./modul_js/view/viewFooter.js";
import { ViewHome } from "./modul_js/view/viewHome.js";
import { ManagerFunctions } from "./modul_js/function/manager_functions.js";
import {d,$,Q,Qa,sS} from "./modul_js/function/global.js";
import { ViewClient } from "./modul_js/view/viewClient.js";
import {STRATEGY} from "./modul_js/enum/enum_stratey.js";

const managerFunctions = new ManagerFunctions();
let url;
const viewClient = new ViewClient();
d.addEventListener("DOMContentLoaded", (e) => {
  $("myHeader").appendChild(ViewHeaderClient());
  $("myFooter").appendChild(ViewFooter());  
  //$("myBody").appendChild(ViewHome());
  managerFunctions.darkLight("dark-mode");
  managerFunctions.weather();
  //managerFunctions.CreateBBDDpostalCode();
  managerFunctions.dado();
  managerFunctions.scrollTopButton(".scroll-top-btn");
  managerFunctions.diceAvatar();
});
d.addEventListener("click", (e) => {
   let myBody = $("myBody");
    if (e.target.id == "linkUpAvatar" || e.target.id == "linkUpData"  || e.target.id == "linkUpLogin") {
       sS.setItem("opcionClient",e.target.id);
         url = "/loginClient";
         myBody.innerHTML = "";
         myBody.appendChild(viewClient.login());    
         managerFunctions.validations();     
         managerFunctions.saveDataControls();
         managerFunctions.showIniStrategy(STRATEGY.ALL);
   }  if (e.target.id == "submit") {     
      const dataControl =  managerFunctions.getDataControls();     
      managerFunctions.loader().on();
      managerFunctions.ajaxForm({
         url,
         dataControl
       });       
   }
});