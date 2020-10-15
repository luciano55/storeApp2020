import { ViewHeader } from "./modul_js/view/viewHeader.js";
import { ViewFooter } from "./modul_js/view/viewFooter.js";
import { ManagerFunctions } from "./modul_js/function/manager_functions.js";
import { ViewHome } from "./modul_js/view/viewHome.js";
import { ViewClient } from "./modul_js/view/viewClient.js";

const d = document;
const managerFunctions = new ManagerFunctions();
const viewClient = new ViewClient();

d.addEventListener("DOMContentLoaded", (e) => {
  d.getElementById("myFooter").appendChild(ViewFooter());
  d.getElementById("myHeader").appendChild(ViewHeader());
  d.getElementById("myBody").appendChild(ViewHome());
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
    managerFunctions.prefix("landline","mobile");
  }
});
