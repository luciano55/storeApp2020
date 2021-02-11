import {d,$,sS,lS} from "../modul_js/function/global.js";
import { ViewClient } from "../modul_js/view/viewClient.js";
import { ManagerFunctions } from "../modul_js/function/manager_functions.js";
import {STRATEGY} from "../modul_js/enum/enum_stratey.js";
import {FactoryFrame} from "../modul_js/factory/factoryFrame.js";
import {ajax} from "../helpers/ajax.js";
import { Swipper } from "../showcase/swipper/swipper.js";
import { MySwiper } from "../showcase/swipper/mySwiper.js";
import {PostCard} from "./PostCard.js";
import {PostCardDetail} from "./PostCardDetail.js";
import { Carrusel } from "../showcase/carrusel/carrusel.js";
import {NodeMain, NodePagination,  NodeShowCase} from "./NodeCreate.js";
import { Loader} from "./Loader.js";
import { GetMenuShowcase } from "../showcase/getMenuShowcase.js";
import {FooterPageButton} from "./FooterPageButton.js";

export async function Router(){
   const state = {
      data: {} ,
      godata:{},
      url:"",
      dataShoppingCart:{},
      method: "",
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

  setState({ url: "http://localhost:8085/shoppingCarts/View/client/" + sS.getItem("idClient") , method:"GET"});


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
               case "linkStore":
                  const  $root = $("myBody");
                  $root.innerHTML ="";
                  $root.appendChild(NodeShowCase());
                    const  $showcase = $("showcase");
                  GetMenuShowcase($showcase);
                  $showcase.appendChild(NodeMain()); 
                  $showcase.appendChild(Loader()); 
                $showcase.appendChild(NodePagination()); 
                  FooterPageButton().then(()=>Router());    
                      // App();
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
  
  $("changeshowcase").addEventListener("click",(e)=>{
     let visorSize ;
       switch (e.target.id ) {
            case 'showcaseshmJM': 
              localStorage.setItem("showcaseType", "showcaseshmJM");
              renderShowcase();        
              break;         
            case 'showcaseshmCarrusel': 
                localStorage.setItem("showcaseType", "showcaseshmCarrusel");
                renderShowcase();
                break;
            case 'showcaseshmJesadri': 
                localStorage.setItem("showcaseType", "showcaseshmJesadri");
                renderShowcase();
                break;
            case 'showcaseshmSwipper':
                  localStorage.setItem("showcaseType", "showcaseshmSwipper");
                  renderShowcase();
                  break;  
            case 'sizeVisorI' :
              visorSize = +lS.getItem("visorSize"); 
              visorSize--;            
              if (visorSize > 0){        
                   lS.setItem("visorSize",visorSize);
                   let visorSize2 = +lS.getItem("visorSize"); 
                   lS.setItem("cacheSize", visorSize*2);
                  const  $root = $("myBody");
                  $root.innerHTML ="";
                   $root.appendChild(NodeShowCase());
                    const  $showcase = $("showcase");
                  GetMenuShowcase($showcase);
                  $showcase.appendChild(NodeMain()); 
                  $showcase.appendChild(Loader()); 
                $showcase.appendChild(NodePagination()); 
                  FooterPageButton().then(()=>Router());
              }
               break;    
              case 'sizeVisorD' :
              visorSize =  lS.getItem("visorSize");          
              visorSize++;
              if (visorSize < 6){
                   lS.setItem("visorSize",visorSize);
                   lS.setItem("cacheSize", visorSize*2);
                     const  $root = $("myBody");
                  $root.innerHTML ="";
                  $root.appendChild(NodeShowCase());
                    const  $showcase = $("showcase");
                  GetMenuShowcase($showcase);
                  $showcase.appendChild(NodeMain()); 
                  $showcase.appendChild(Loader()); 
                $showcase.appendChild(NodePagination()); 
                  FooterPageButton().then(()=>Router());            
              }
              

              break;    
        }
   });
 $("div_menu_page").addEventListener("click",async (e)=>{
       let uri =  "http://localhost:8085/storerest/?";

        const pageClicked= +e.target.innerHTML;
          let cacheLength = +getState().data.content.length,
               activePageCache = +getState().activePageCache;
          const cacheInicio = +getState().cacheInicio,
                     cacheFinal = +getState().cacheFinal,
                     visorSize =   +getState().visorSize,
                     cacheSize = +getState().cacheSize,
                     acitvePage = localStorage.getItem("activePage") ;
         let inicio=0,
              final=0;
               // pageT 0 -- > 1 / 1,2 /  1,2 / 1,2
               // pageT 1 -- > 2 / 3,4 / 3,4 / 3,4
               // pageT 2 ---> 3 / 5, 6 / 5
               // pageT 3 ---> 4 / 7,8
              //  ............................................................
              // pageT14 -- >15
   if(pageClicked>0){
                  let newPageToTransferred =  Math.ceil(((pageClicked) * visorSize)/(visorSize*2)) -1;
                 let actualPageTransferred =  Math.ceil(((acitvePage) * visorSize)/(visorSize*2)) -1;
                  localStorage.setItem("activePage",pageClicked); 

                   if(actualPageTransferred == newPageToTransferred){
                     if(activePageCache ==  2){
                        activePageCache = 1;
                        inicio = 0;
                        if(cacheLength >= visorSize){
                                final = visorSize -1;
                        }else{
                          final = cacheLength - 1;
                        }                      
                      }else{
                              activePageCache = 2;
                              inicio = visorSize;
                              final = cacheLength - 1;
                      }
                      setState({activePageCache:activePageCache,cacheInicio:inicio, cacheFinal : final});
                                       
                    }else{
                               await callGoApiRest("http://localhost:8085/storerest/?page=" +newPageToTransferred+"&size="+ getState().cacheSize );
                              cacheLength = +getState().data.content.length;
                               if(pageClicked % 2 == 0){
                                  inicio = visorSize;
                                 final = cacheLength - 1;
                                 activePageCache = 2;
                                 
                               }else{
                                    inicio = 0;
                                    activePageCache = 1;
                                      if(cacheLength >= visorSize){
                                                final = visorSize -1;
                                        }else{
                                                 final = cacheLength - 1;
                                      }                                     
                               }
                               setState({activePageCache:activePageCache,cacheInicio:inicio, cacheFinal : final});     
                    }

                 renderShowcase();     
          
   }        
 
     switch (e.target.id ) {
      case 'botonInicio':
        let ini, fin;
          let actualPageTransferred =  Math.ceil(((acitvePage) * visorSize)/(visorSize*2)) -1;
          if(actualPageTransferred == 0){
             ini = 0;
             if(cacheLength >= visorSize){
                  fin = visorSize -1;
              }else{
                   fin = cacheLength - 1;
                }                      
              
             }else{
           await callGoApiRest("http://localhost:8085/storerest/?page=" +0+"&size="+ getState().cacheSize );
            cacheLength = +getState().data.content.length;
             ini = 0;            
             if(cacheLength >= visorSize){
                 fin = visorSize -1;
              }else{
                 fin = cacheLength - 1;
              }                
             }
           setState({activePageCache:1,cacheInicio:ini, cacheFinal : fin});  
              renderShowcase();     
          break;
      case 'botonEnd':             
           let endPage = +document.getElementById("botonEnd").dataset.valor; // pag. 8
          let newPageToTransferred =  Math.ceil(((endPage) * visorSize)/(visorSize*2)) -1;// pageT 3
          const lastPageActive =+localStorage.getItem("activePage");//  ¿4?
          const endPageTransferred =  Math.ceil(((lastPageActive) * visorSize)/(visorSize*2)) -1;  //¿1? 
          let inicio, final;

          if(visorSize==1) newPageToTransferred  = endPage -1;

           if(endPageTransferred != newPageToTransferred ){
                     // alert("Estoy en otra cache");
                await callGoApiRest("http://localhost:8085/storerest/?page=" +newPageToTransferred+"&size="+ getState().cacheSize ); 
               cacheLength = +getState().data.content.length;
           }
          if(cacheLength <= visorSize ){
                   inicio = 0;
                   // inicio = Math.floor(cacheLength / visorSize) ;
                   activePageCache = 1;
            }else {
                    //  inicio = Math.ceil(cacheLength / visorSize) ;
                  //inicio = Math.ceil(cacheSize/ visorSize);
                  inicio = visorSize;
                  activePageCache = 2;
                    }
            final = cacheLength -1;
            //alert("inicio: " + inicio +"    final: "+ final);
            setState({activePageCache : activePageCache,cacheInicio :inicio,cacheFinal:final});
            renderShowcase();          
          break;
     case 'botonNext':        
         const nextPage = +document.getElementById("botonNext").dataset.valor;
           
                      
          if (cacheLength >   (cacheFinal  + visorSize  ) || cacheLength < cacheSize )
          {
               // alert(cacheFinal  + visorSize);
               if(cacheLength < cacheSize ) {
                       setState({cacheInicio : cacheFinal +1, cacheFinal: cacheFinal +(cacheLength - visorSize) ,activePageCache: activePageCache +1})
                        
                }else {
                        setState({cacheInicio : cacheFinal +1, cacheFinal: cacheFinal+ visorSize ,activePageCache: activePageCache +1});
                }
        
                  renderShowcase();
          }else           
          {    
            //alert("Se agotó la cache");
            setState({activePageCache : 1,cacheInicio :0,cacheFinal:visorSize-1});
            let page;
            if(visorSize == 1){
                   page= nextPage;
            }else {
                    page =  Math.ceil(((nextPage) * visorSize)/(visorSize*2)) ;         
            }
      //  alert("PAge:" + page);
           
            callApiRest(uri+"page="+ page + "&size="+getState().cacheSize );

          }
       
          break;
     case 'botonPrev':
          let iniPrev, finPrev;
          let newPageToTransferredPrev =  Math.ceil(((acitvePage -1) * visorSize)/(visorSize*2)) -1;
          let actualPageTransferredPrev =  Math.ceil(((acitvePage) * visorSize)/(visorSize*2)) -1;
          localStorage.setItem("activePage",acitvePage-1); 
          if(actualPageTransferredPrev == newPageToTransferredPrev){
                     if(activePageCache ==  2){
                        activePageCache = 1;
                        iniPrev = 0;
                        if(cacheLength >= visorSize){
                                finPrev = visorSize -1;
                        }else{
                          finPrev = cacheLength - 1;
                        }                      
                      }// No hay else situación imposible
          }else{
               await callGoApiRest("http://localhost:8085/storerest/?page=" +newPageToTransferredPrev+"&size="+ getState().cacheSize );
               cacheLength = +getState().data.content.length;
               activePageCache=2;
              iniPrev = visorSize;
              finPrev = cacheLength - 1;
          }
        setState({activePageCache:activePageCache,cacheInicio:iniPrev, cacheFinal : finPrev}); 
        renderShowcase();  
          break;
     }  
   });
 $("main").addEventListener("click",(e)=>{
     switch (e.target.id ) {
            case 'cardDetail': 
              renderShowcase();
              break;         
            case 'seeMobil': 
            case 'carrusel': 
              renderDetail(e.target.dataset.valor);      
              break; 
              case "goShoppingCart" : 
             const idProduct =e.target.dataset.idproduct;
            
             getState().dataShoppingCart.forEach(ele =>{
               if ( ele.idProduct == idProduct) {
                 alert("Ya está en el carrito");
               }else{
                 const json = {
                       idProduct:idProduct,
                       unit :1,
                       modelo: "",
                       precio: "",
                       foto: ""
                 };
                 let aux = getState().dataShoppingCart;
                 aux.push(json);
                 setState({dataShoppingCart:aux});
               }
             })
          alert(getState().dataShoppingCart);
      }  
   });


const renderShowcase = function(){
   document.getElementById("pagination").style.display ="block";
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
              $("main").innerHTML=html;  
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
        document.getElementById("pagination").style.display ="none";
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
const callShoppingCart =  async function(){
  const {url, method} = getState();
 await  ajax({
              url:url,
              method: method,
              cbSuccess : (posts)=>{  
                setState({
                     dataShoppingCart: posts                     
                  });    
                    console.log("dataShoppingCart:" , getState().dataShoppingCart) ;         
              }
        });

}
 callApiRest("http://localhost:8085/storerest/?page=0&size="+getState().cacheSize);   
 
  callShoppingCart();
}