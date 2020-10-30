import { ViewHeader } from "./modul_js/view/viewHeader.js";
import { ViewFooter } from "./modul_js/view/viewFooter.js";
import { ManagerFunctions } from "./modul_js/function/manager_functions.js";
import { ViewHome } from "./modul_js/view/viewHome.js";
import { ViewClient } from "./modul_js/view/viewClient.js";
import {d,$,Qa,sS} from "./modul_js/function/global.js";
//import {CreateBBDDpostalCode} from "./modul_js/function/indexedDB.js";


const managerFunctions = new ManagerFunctions();
const viewClient = new ViewClient();
d.addEventListener("DOMContentLoaded", (e) => {
  $("myFooter").appendChild(ViewFooter());
  $("myHeader").appendChild(ViewHeader());
  $("myBody").appendChild(ViewHome());
  managerFunctions.darkLight("dark-mode");
  managerFunctions.weather();
  managerFunctions.CreateBBDDpostalCode();
  managerFunctions.dado();
});
  const saveDataControls = function(){
          const  dataControls =  Qa("input[data-validate][required]"); 
          sS.setItem("lenDataControls",dataControls.length);
          for (let i=0; i< dataControls.length; i++) {   
                  sS.setItem("dataControls" + i,dataControls[i].id);
            }             
      }
/*d.addEventListener("load", (e) => {
 
});*/
d.addEventListener("click", (e) => {
  if (e.target.id == "linkRegister") {
    let myBody = $("myBody");
    myBody.innerHTML = "";
    myBody.appendChild(viewClient.register());    
    managerFunctions.validations();
    managerFunctions.phone();
    saveDataControls();
  }


  
});
