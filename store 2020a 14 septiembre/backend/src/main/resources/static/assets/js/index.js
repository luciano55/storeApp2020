import { FactoryHeader } from "./modul_js/factoryHeader.js";
import { FactoryFooter } from "./modul_js/factoryFooter.js";
import { ManagerFunctions } from "./modul_js/manager_functions.js";
import { FactoryHome } from "./modul_js/factoryHome.js";
import { ViewClient } from "./modul_js/viewClient.js";

const d = document;
const managerFunctions = new ManagerFunctions();
const viewClient = new ViewClient();

d.addEventListener("DOMContentLoaded", (e) => {
  d.getElementById("myFooter").appendChild(FactoryFooter());
  d.getElementById("myHeader").appendChild(FactoryHeader());
  d.getElementById("myBody").appendChild(FactoryHome());
  managerFunctions.darkLight("dark-mode");
  managerFunctions.weather();
});

/*d.addEventListener("load", (e) => {
 
});*/
d.addEventListener("click", (e) => {
  if (e.target.id == "linkRegister") {
    let myBody = d.getElementById("myBody");
    myBody.innerHTML = "";
    myBody.appendChild(viewClient.register());
    managerFunctions.validations();
    managerFunctions.prefix("","mobile");

  }
});
