import { ViewHeader } from "./modul_js/view/viewHeader.js";
import { ViewFooter } from "./modul_js/view/viewFooter.js";
import { ManagerFunctions } from "./modul_js/function/manager_functions.js";
import { ViewHome } from "./modul_js/view/viewHome.js";
import { ViewClient } from "./modul_js/view/viewClient.js";
import {d,$,Q,Qa,sS} from "./modul_js/function/global.js";
import {STRATEGY} from "./modul_js/enum/enum_stratey.js";
import{FactoryDataControl} from "./modul_js/factory/factoryDataControl.js";
import { GeneralPurposeFunctions } from "./modul_js/function/general_purpose_functions.js";


let url;
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
  managerFunctions.scrollTopButton(".scroll-top-btn");
});
  
d.addEventListener("click", (e) => {
  if (e.target.id == "linkRegister") {
     url = "/addClient";
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
      const dataPersonClient =  managerFunctions.getDataControls();     
       console.log(dataPersonClient);
       fetch(url, {
            method: 'POST', 
            body:  JSON.stringify(dataPersonClient),          
            headers: {
                        'Accept': 'application/json',
                        'Content-Type': 'application/json'
                  }
       }).then(res => res.json())
         .catch(error => console.error('Error:', error))
        .then(response => {
             const state = response;            
             if(Array.isArray(state)){
                for (let i=0; i<state.length;i++){
                     let field = state[i].messageNameControl;
                     let dataField = Q("input[data-field='" +field +"']");
                     let control = dataField.id;
                     $(control).style.backgroundColor = "pink";
                     $("boxerror_"+control).innerHTML = state[i].messageErrorControl;
                     $("boxerror_"+control).style.display = "block";
                     if($("boxinfo_"+control)){
                          $("boxinfo_"+control).style.display = "none";
                     }                   
                 }     
              }else {
                if(typeof state === 'object' && state !== null){
                   console.log("object", state.validation);
                }
              }      
       // location.reload();
         })
   }
});
