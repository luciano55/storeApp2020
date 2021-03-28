import {d,$,sS,lS} from "./modul_js/function/global.js";
import { PageClient } from "./modul_js/page/pageClient.js";
import { Router} from "./components/Router.js";
import {NodeMainCarousel, NodePagination,  NodeShowCase, NodeShoppingCart, NodeProductDetail, NodeUpClient, NodeConfirmExit, NodeMainContainerForm} from "./components/NodeCreate.js";
//import { Main} from "./components/Main.js";
import { Loader} from "./components/Loader.js";
import { GetMenuShowcase } from "./showcase/getMenuShowcase.js";
import {FooterPageButton} from "./components/FooterPageButton.js";
import{MainContainerVisibility} from "./components/MainContainerVisibility.js";
import{MainStoreContainerVisibility} from "./components/MainStoreContainerVisibility.js";
import {FactoryBox} from "./modul_js/factory/factoryBox.js";
        


export function App(){

   const  $myInteract = $("myInteract"),
            $myStore = $("myStore"),
            $footer = $("myFooter");
   
   $myInteract.innerHTML ="";
   $myStore.innerHTML ="";
   $footer.innerHTML ="";

   const factoryBox = new FactoryBox();
  
  const visorSize =2;
  let cacheSize;
  if(visorSize == 1) cacheSize =  visorSize;
   else cacheSize = visorSize * 2;
        

  if(!lS.getItem("visorSize")) {
     lS.setItem("visorSize",visorSize);
     lS.setItem("activePage",1);
     lS.setItem("cacheSize", cacheSize);
     lS.setItem("cacheInicio", 0);
     lS.setItem("cacheFinal" , visorSize -1);
     lS.setItem("activePageCache", 1);
  }
//lS.setItem("visorSize",visorSize); // Eliminar en explotación
//lS.setItem("activePage",1);// Eliminar en explotación
//lS.setItem("cacheSize", cacheSize);// Eliminar en explotación 
   //  lS.setItem("cacheInicio", 0);
   //  lS.setItem("cacheFinal", visorSize -1);
   //lS.setItem("activePageCache", 1);
  PageClient();
  $myInteract.appendChild(NodeUpClient());
  $myInteract.appendChild(NodeMainContainerForm());
  $myStore.appendChild(NodeShowCase());
  $myStore.appendChild(NodeProductDetail());
  $myStore.appendChild(NodeShoppingCart()); 
  $myInteract.appendChild(NodeConfirmExit());
  $myInteract.appendChild(factoryBox.info());   

  const  $showcase = $("showcase");
  GetMenuShowcase($showcase);
  $showcase.appendChild(NodeMainCarousel()); 
  $showcase.appendChild(NodePagination()); 
  $showcase.appendChild(Loader()); 
  MainContainerVisibility("myStore");
  MainStoreContainerVisibility("showcase");
  FooterPageButton().then(()=>Router());    


}