import { ViewHeader } from "../view/viewHeader.js";
import { ViewFooter } from "../view/viewFooter.js";
import { ViewHome } from "../view/viewHome.js";
import {$} from "../function/global.js";
import { ManagerFunctions } from "../function/manager_functions.js";

export function PageIndex() {
  const managerFunctions = new ManagerFunctions();
  $("myFooter").appendChild(ViewFooter());
  $("myHeader").appendChild(ViewHeader());
  $("myBody").appendChild(ViewHome());
  managerFunctions.darkLight("dark-mode");
  managerFunctions.weather();
  managerFunctions.CreateBBDDpostalCode();
  managerFunctions.dado();
  managerFunctions.scrollTopButton(".scroll-top-btn");
}