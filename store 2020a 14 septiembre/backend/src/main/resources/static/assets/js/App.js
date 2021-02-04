import { PageClient } from "./modul_js/page/pageClient.js";
import { Router} from "./components/Router.js";
import { Main} from "./components/Main.js";
import { Loader} from "./components/Loader.js";
import { GetMenuShowcase } from "./showcase/getMenuShowcase.js";


        


export function App(){

   const  $root = document.getElementById("myBody");//document.getElementById("root");
  //$root.innerHTML = null;
  
  const visorSize =3;
  let cacheSize;
  if(visorSize == 1) cacheSize =  visorSize;
   else cacheSize = visorSize * 2;
        

  if(!localStorage.getItem("visorSize")) {
     localStorage.setItem("visorSize",visorSize);
     localStorage.setItem("activePage",1);
     localStorage.setItem("cacheSize", cacheSize);
  }
localStorage.setItem("visorSize",visorSize); // Eliminar en explotación
localStorage.setItem("activePage",1);// Eliminar en explotación
localStorage.setItem("cacheSize", cacheSize);// Eliminar en explotación 

  PageClient();
  $root.appendChild(Main());
  GetMenuShowcase($root);
  $root.appendChild(Loader()); 
    Router();


}