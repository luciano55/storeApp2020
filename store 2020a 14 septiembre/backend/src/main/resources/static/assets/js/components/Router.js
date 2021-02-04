import {d,$,sS} from "../modul_js/function/global.js";
import { ViewClient } from "../modul_js/view/viewClient.js";
import { ManagerFunctions } from "../modul_js/function/manager_functions.js";
import {STRATEGY} from "../modul_js/enum/enum_stratey.js";
import {FactoryFrame} from "../modul_js/factory/factoryFrame.js";
import {ajax} from "../helpers/ajax.js";

export async function Router(){
   const state = {
      data: {} ,
      godata:{},
      visorSize: localStorage.getItem("visorSize"), 
      activePage: localStorage.getItem("activePage"),
      activePageCache: 1,     
      cacheSize: localStorage.getItem("cacheSize"),
      cacheInicio: 0, 
      cacheFinal: localStorage.getItem("visorSize") -1
    }

    const setState = obj => {
      for (let key in obj) {
        if (state.hasOwnProperty(key)) {
          state[key] = obj[key];
        }
      }
    }

  const getState = () => JSON.parse(JSON.stringify(state)); 

const managerFunctions = new ManagerFunctions();
const viewClient = new ViewClient();
const  factoryFrame = FactoryFrame();

   let {hash} = location;

  if(!localStorage.getItem("showcaseType")){
        localStorage.setItem("showcaseType", "showcaseshmJM"); 
  }

$("menuClient").addEventListener("click",(e)=>{

        let myBody = $("myBody");
          switch (e.target.id ) {
                case 'linkUpAvatar':
                case 'linkUpData':
                case 'linkUpLogin':
                          sS.setItem("opcionClient",e.target.id);
                          sS.setItem("url", "/loginClient");       
                          myBody.innerHTML = "";
                          myBody.appendChild(viewClient.login());    
                          managerFunctions.validations();     
                          managerFunctions.saveDataControls();
                          managerFunctions.showIniStrategy(STRATEGY.ALL);
                          break;
                case "forgetPassword":
                          sS.setItem("url", "/forgetPassword");          
                          myBody.innerHTML = "";
                          myBody.appendChild(viewClient.forgetPassword());    
                          managerFunctions.validations();     
                          managerFunctions.saveDataControls();
                          managerFunctions.showIniStrategy(STRATEGY.ALL);
                          $("informationPanel").innerHTML  = "Para que te hagamos llegar nuevas credenciales de acceso, introduce a continuación tu Nif y Email. Pulsa despues sobre el botón Get Credentials.";
                          break;
                  case "linkExit":
                          sS.setItem("opcionClient",e.target.id);
                          myBody.innerHTML = "";
                          myBody.appendChild(factoryFrame.confirm("Deseas salir de la aplicación?",
                            ()=>{
                                    managerFunctions.loader().on();
                                    let url = "/logout";
                                    let dataControl = "";
                                    managerFunctions.ajaxSingle({url,dataControl});
                              },
                            ()=>{
                                  location.reload();
                              }
                          ));  
                          break;  
                  case "submit":
                        let url = sS.getItem("url");         
                        const dataControl =  managerFunctions.getDataControls();     
                        managerFunctions.loader().on();
                        managerFunctions.ajaxForm({
                              url,
                              dataControl
                        });  
     }     


});
$("myBody").addEventListener("click",(e)=>{

        let myBody = $("myBody");
          switch (e.target.id ) {
                   case "forgetPassword":
                          sS.setItem("url", "/forgetPassword");          
                          myBody.innerHTML = "";
                          myBody.appendChild(viewClient.forgetPassword());    
                          managerFunctions.validations();     
                          managerFunctions.saveDataControls();
                          managerFunctions.showIniStrategy(STRATEGY.ALL);
                          $("informationPanel").innerHTML  = "Para que te hagamos llegar nuevas credenciales de acceso, introduce a continuación tu Nif y Email. Pulsa despues sobre el botón Get Credentials.";
                          break;
                case "submit":
                        let url = sS.getItem("url");         
                        const dataControl =  managerFunctions.getDataControls();     
                        managerFunctions.loader().on();
                        managerFunctions.ajaxForm({
                              url,
                              dataControl
                        });  
     }     


});


const renderShowcase = function(){
   document.getElementById("div_menu_page").style.display ="block";
   document.getElementById("changeshowcase").style.display ="block";
   let html;
  switch (localStorage.getItem("showcaseType")) {   
      
          case '':                          
          case 'showcaseshmJM': 
              document.getElementById('showcaseshmJM').checked = true;
             document.getElementById("main").innerHTML = render(PostCard);
              break;
          case 'showcaseshmCarrusel': 
            document.getElementById('showcaseshmCarrusel').checked = true;
            renderShowcaseShmCarrusel();
            break;
          case 'showcaseshmJesadri':
              document.getElementById('showcaseshmJesadri').checked = true;
              html = "<div class='bodyImg' id='bodyImg'><div class='slider-container'>";
              html += render(ImageSlider);
              html +=  "<button class='arrow left-arrow' id='left'><i class='fas fa-arrow-left'></i></button><button class='arrow right-arrow' id='right'><i class='fas fa-arrow-right'></i></button> </div></div>";
              document.getElementById("main").innerHTML = html ;      

              MyImageSlider();       
             break;                        
           case 'showcaseshmSwipper': 
               document.getElementById('showcaseshmSwipper').checked = true;
               html = "<div class='swiper-container'> <div class='swiper-wrapper'>";      
               html += render(Swipper);
               html += "</div>";
               html += "<div class='swiper-pagination'></div>  <div class='swiper-scrollbar'></div></div>" ;
              document.getElementById("main").innerHTML=html;  

              MySwiper();
               break;
   }
                  
}
const  preRender = function(){
     setState({visorSize: lS.getItem("visorSize"),cacheSize : lS.getItem("cacheSize")}); 
 
  let inicio = getState().cacheInicio;  
  let final =  getState().cacheFinal;  
  console.log(inicio,",",final);

  const data = getState().data;
   console.log("data:",data);     

  let activeData = [];
     
 for(let i = inicio; i<= final; i++){
          activeData.push(data.content[i]);
 }
 console.log("activeData(cache):", activeData);
return activeData;
}
const render = function(showcase){
   let html = "";
const activeData = preRender();
 activeData.forEach(post => {       
            html += showcase(post);
 }); 
 return html;   
}
const renderShowcaseShmCarrusel = function(){
    let html = "";
     document.getElementById("main").innerHTML= "";   
    let $giran = document.createElement("div");
    $giran.id = "giran";
    document.getElementById("main").appendChild($giran);
    $giran  = document.getElementById("giran");
    const activeData = preRender();
    let i = 0;
    activeData.forEach(post => {
          $giran.appendChild(Carrusel(post, i, activeData.length));       
           i++;        
     });  
}

const renderDetail = async function(id){
   document.querySelector(".loader").style.display = "block";
              await  ajax({
                                    url:"http://localhost:8085/storerest/" + id,
                                      cbSuccess : (post)=>{
                                        console.log(post);
                                        let html = PostCardDetail(post);
                                        document.getElementById("main").innerHTML=html;
                                      }
                        })
        document.getElementById("div_menu_page").style.display ="none";
        document.getElementById("changeshowcase").style.display ="none";
        document.querySelector(".loader").style.display = "none";
}
const  callApiRest = async function(uri){  
   await  ajax({
              url:uri,
              cbSuccess : (posts)=>{             
              console.log("callApiRest:" , posts)
                setState({
                     data: posts                     
                  });              
                 renderShowcase();              
              }
        });
 document.querySelector(".loader").style.display = "none"; 
}
const  callGoApiRest = async function(uri){  
   await  ajax({
              url:uri,
              cbSuccess : (posts)=>{  
                setState({
                     data: posts                     
                  });    
                    console.log("callGoApiRest data:" , getState().data) ;         
              }
        });
 document.querySelector(".loader").style.display = "none"; 
}
 callApiRest("http://localhost:8085/storerest/?page=0&size="+getState().cacheSize);    
}