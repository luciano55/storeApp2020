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
  
/*d.addEventListener("load", (e) => {
 
});*/
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
      const dataPersonClient = {
        firstname : $("firstname").value
      }
     // alert(dataPersonClient.firstname);
      let father, myInput;
     for (let i=0; i<   sS.getItem("lenDiv_DataControls"); i++) {   
              father = ($(sS.getItem("div_DataControls"+i)).id).split("_");
               (father[3])? myInput = father[2] + "_" + father[3] :    myInput = father[2] ; 
               if(myInput.indexOf("phone") != -1){
                myInput = "boxinfo_" + myInput;
                dataPersonClient[$(myInput).id] = $(myInput).innerText;
              }else {
                      dataPersonClient[$(myInput).id] = $(myInput).value;
              }
              
     } 
     console.log(dataPersonClient);
 fetch(url, {
  method: 'POST', 
  body: JSON.stringify(dataPersonClient), 
  headers:{
    'Content-Type': 'application/json'
  }
}).then(res => res.json())
.catch(error => console.error('Error:', error))
.then(response => console.log('Success:', response));

  }

});
