import { ViewHeaderClient } from "./modul_js/view/viewHeaderClient.js";
import { ViewFooter } from "./modul_js/view/viewFooter.js";
import { ViewHome } from "./modul_js/view/viewHome.js";
import { ManagerFunctions } from "./modul_js/function/manager_functions.js";
import {d,$,Q,Qa,sS} from "./modul_js/function/global.js";
import { ViewClient } from "./modul_js/view/viewClient.js";
import {STRATEGY} from "./modul_js/enum/enum_stratey.js";
import {FactoryFrame} from "./modul_js/factory/factoryFrame.js";


const managerFunctions = new ManagerFunctions();
let url;
const viewClient = new ViewClient();
const  factoryFrame = FactoryFrame();
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
    if (e.target.id == "linkUpAvatar" || e.target.id == "linkUpData"  || e.target.id == "linkUpLogin" ) {
      //alert("opcion menu client");:
       sS.setItem("opcionClient",e.target.id);
         url = "/loginClient";
         sS.setItem("url", "/loginClient");
         myBody.innerHTML = "";
         myBody.appendChild(viewClient.login());    
         managerFunctions.validations();     
         managerFunctions.saveDataControls();
         managerFunctions.showIniStrategy(STRATEGY.ALL);
   } else{
            if (e.target.id == "submit") {   
               let url = sS.getItem("url");  
               //alert("url:"+ url);
               const dataControl =  managerFunctions.getDataControls();     
                  managerFunctions.loader().on();
                  managerFunctions.ajaxForm({
                    url,
                    dataControl
                  });       
              }else {
                     if(e.target.id == "forgetPassword"){
                    //url = "/forgetPassword";
                    sS.setItem("url", "/forgetPassword");
                  myBody.innerHTML = "";
                  myBody.appendChild(viewClient.forgetPassword());    
                  managerFunctions.validations();     
                  managerFunctions.saveDataControls();
                  managerFunctions.showIniStrategy(STRATEGY.ALL);
                    $("informationPanel").innerHTML  = "Para que te hagamos llegar nuevas credenciales de acceso, introduce a continuación tu Nif y Email. Pulsa despues sobre el botón Get Credentials.";
                     }else {
                            if (e.target.id == "linkExit"){
                                 sS.setItem("opcionClient",e.target.id);
                                myBody.innerHTML = "";
                                myBody.appendChild(factoryFrame.confirm("Deseas salir de la aplicación?",
                                ()=>{
                                  managerFunctions.loader().on();
                                  let url = "/logout";
                                  let dataControl = "";
                                 managerFunctions.ajaxSingle({url,dataControl});
                                },
                                  ()=>{
                                location.reload();
                                }));    

                            }
                      }
              }
           
   } 
});