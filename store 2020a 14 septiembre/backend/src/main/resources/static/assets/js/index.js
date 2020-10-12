import { FactoryHeader } from "./modul_js/factoryHeader.js";
import { FactoryFooter } from "./modul_js/factoryFooter.js";
import { FactoryFunction } from "./modul_js/factoryFunction.js";
import { FactoryHome } from "./modul_js/factoryHome.js";
import { FactoryClient } from "./modul_js/factoryClient.js";

const d = document;
const factoryFunction = new FactoryFunction();
const factoryClient = new FactoryClient();

d.addEventListener("DOMContentLoaded", (e) => {
  d.getElementById("myFooter").appendChild(FactoryFooter());
  d.getElementById("myHeader").appendChild(FactoryHeader());
  d.getElementById("myBody").appendChild(FactoryHome());
  factoryFunction.darkLight("dark-mode");
  factoryFunction.weather();
});

/*d.addEventListener("load", (e) => {
 
});*/
d.addEventListener("click", (e) => {
  if (e.target.id == "linkRegister") {
    let myBody = d.getElementById("myBody");
    myBody.innerHTML = "";
    myBody.appendChild(factoryClient.register());
    factoryFunction.validations();
    factoryFunction.managePrefix("","mobile");

  }
});
