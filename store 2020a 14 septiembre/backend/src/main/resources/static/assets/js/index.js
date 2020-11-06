import { ViewHeader } from "./modul_js/view/viewHeader.js";
import { ViewFooter } from "./modul_js/view/viewFooter.js";
import { ManagerFunctions } from "./modul_js/function/manager_functions.js";
import { ViewHome } from "./modul_js/view/viewHome.js";
import { ViewClient } from "./modul_js/view/viewClient.js";
import {d,$,Qa,sS} from "./modul_js/function/global.js";
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
     url = "/hola";
     const globalFunction = new GeneralPurposeFunctions();
     globalFunction.resetAutoIncrementPhone();
      let myBody = $("myBody");
      myBody.innerHTML = "";
      myBody.appendChild(viewClient.register());    
      managerFunctions.validations();     
      managerFunctions.phone();   
     managerFunctions.saveDataControls();
     managerFunctions.showIniStrategy(STRATEGY.ONETOONE);
  }

  if (e.target.id == "submit") {     
      const dataPersonClient = {}
      let   father = "div_dataControl_";
     for (let i=0; i<   sS.getItem("lenDiv_DataControls"); i++) {   
                let   myInputId =    ($(sS.getItem("div_DataControls"+i)).id).slice(father.length);
               if(myInputId.indexOf("phone") != -1){
                myInputId = "boxinfo_" + myInputId;
                dataPersonClient[$(myInputId).id] = $(myInputId).innerText;
              }else {
                      dataPersonClient[$(myInputId).id] = $(myInputId).value;
              }              
     } 
       console.log(dataPersonClient);
      fetch(url, {
            method: 'POST', 
            body:  JSON.stringify(dataPersonClient), 
            //body: JSON.stringify({username : "pepin"}),
     headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    }
      }).then(res => res.json())
      .catch(error => console.error('Error:', error))
      .then(response => {
        console.log('Success:', response);
       // location.reload();
      })
   }
});
