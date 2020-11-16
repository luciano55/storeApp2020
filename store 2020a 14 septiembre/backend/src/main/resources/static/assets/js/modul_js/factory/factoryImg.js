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
/*
  API.loaderAudio = function(){
    params = {};
    params.id = "loaderAudio";   
    params.src = "../../../assets/img/SVG_loader/audio.svg"; 
   return  loader();  
  };
  API.loaderCircles = function(){
    params = {};
    params.id = "loaderCircle";   
    params.src = "../../../assets/img/SVG_loader/circles.svg"; 
   return  loader();  
  };
    API.loaderBars = function(){
    params = {};
    params.id = "loaderBars";   
    params.src = "../../../assets/img/SVG_loader/Bars.svg"; 
   return  loader();  
  };
 API.loaderBallTriangle = function(){
    params = {};
    params.id = "loaderBallTriangle";   
    params.src = "../../../assets/img/SVG_loader/ball-triangle.svg"; 
   return  loader();  
  };
API.loaderGrid = function(){
    params = {};
    params.id = "loaderBallTriangle";   
    params.src = "../../../assets/img/SVG_loader/grid.svg"; 
   return  loader();  
  };
 API.loaderHearts = function(){
    params = {};
    params.id = "loaderHearts";   
    params.src = "../../../assets/img/SVG_loader/hearts.svg"; 
   return  loader();  
  };
   API.loaderOval = function(){
    params = {};
    params.id = "loaderOval";   
    params.src = "../../../assets/img/SVG_loader/oval.svg"; 
   return  loader();  
  };
*/




  return API;
}
