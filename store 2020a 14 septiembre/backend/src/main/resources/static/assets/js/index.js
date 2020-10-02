import { FactoryHeader } from "./modul_js/factoryHeader.js";
import { FactoryFooter } from "./modul_js/factoryFooter.js";
import { FactoryFunction } from "./modul_js/factoryFunction.js";
import { FactoryHome } from "./modul_js/factoryHome.js";

const d = document;
const factoryFunction = new FactoryFunction();

d.addEventListener("DOMContentLoaded", (e) => {
  d.getElementById("myFooter").appendChild(FactoryFooter());
  d.getElementById("myHeader").appendChild(FactoryHeader());
  d.getElementById("myBody").appendChild(FactoryHome());
  factoryFunction.darkLight("dark-mode");
  factoryFunction.weather();
});

//d.addEventListener("load", (e) => {});
