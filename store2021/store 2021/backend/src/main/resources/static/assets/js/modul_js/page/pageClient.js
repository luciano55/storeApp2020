import { ViewHeaderClient } from "../view/viewHeaderClient.js";
import { ViewFooter } from "../view/viewFooter.js";
import {$} from "../function/global.js";
import { ManagerFunctions } from "../function/manager_functions.js";

export function PageClient() {
 
 const managerFunctions = new ManagerFunctions();
 $("myHeader").appendChild(ViewHeaderClient());
 $("myFooter").appendChild(ViewFooter()); 
  managerFunctions.darkLight("dark-mode");
  managerFunctions.weather();
  managerFunctions.dado();
  managerFunctions.scrollTopButton(".scroll-top-btn");
  managerFunctions.diceAvatar();
  
}