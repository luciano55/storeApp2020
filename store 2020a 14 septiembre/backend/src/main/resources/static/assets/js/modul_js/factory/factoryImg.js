import { FactoryTag } from "./factoryTag.js";

export function FactoryImg() {
  const factoryTag = new FactoryTag();
   const API = {};
  let params = {};
  
  API.loader = function(type){
      params = {};
    params.id = "loader";   
    params.class = "loaderjm";   
    params.alt = "Cargando ...";
    params.src = "../../../assets/img/SVG_loader/" + type + ".svg"; 
    return factoryTag.img(params);
  };
 API.avatar = function(){
    params = {};
    params.id ="avatar";
    params.class = "object-fill h-32 w-32 w-full box-border   p-4 border-1 ";   
     params.alt = "Cargando Avatar...";
     params.src = "../../../assets/img/client/"+ sessionStorage.getItem("idClient") + ".png?" + Math.random();
     return factoryTag.img(params);
 };
  return API;
}
/*<img src= \"../img/fotoClient/" + sessionStorage.getItem("idClient") + ".png?" + Math.random() + " alt=\"\" height=\"200px\" width=\"300px\">\n" +*/