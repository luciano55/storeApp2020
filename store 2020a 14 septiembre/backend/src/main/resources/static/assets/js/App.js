import {d,$,sS,lS} from "./modul_js/function/global.js";
import { PageClient } from "./modul_js/page/pageClient.js";
import { Router} from "./components/Router.js";
import {NodeMain, NodePagination,  NodeShowCase} from "./components/NodeCreate.js";
//import { Main} from "./components/Main.js";
import { Loader} from "./components/Loader.js";
import { GetMenuShowcase } from "./showcase/getMenuShowcase.js";
import {FooterPageButton} from "./components/FooterPageButton.js";
//import{NodePagination} from "./components/NodePagination.js"
        


export function App(){

   const  $root = $("myBody");
   const $footer = $("myFooter").innerHTML ="";
  
  const visorSize =2;
  let cacheSize;
  if(visorSize == 1) cacheSize =  visorSize;
   else cacheSize = visorSize * 2;
        

  if(!lS.getItem("visorSize")) {
     lS.setItem("visorSize",visorSize);
     lS.setItem("activePage",1);
     lS.setItem("cacheSize", cacheSize);
  }
//lS.setItem("visorSize",visorSize); // Eliminar en explotación
//lS.setItem("activePage",1);// Eliminar en explotación
//lS.setItem("cacheSize", cacheSize);// Eliminar en explotación 

  PageClient();
  $root.appendChild(NodeShowCase());
    const  $showcase = $("showcase");
  GetMenuShowcase($showcase);
  $showcase.appendChild(NodeMain()); 
  $showcase.appendChild(Loader()); 
 $showcase.appendChild(NodePagination()); 
  FooterPageButton().then(()=>Router());    


}