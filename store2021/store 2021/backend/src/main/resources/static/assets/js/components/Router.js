import {d,$,sS,lS} from "../modul_js/function/global.js";
import { ViewClient } from "../modul_js/view/viewClient.js";
import { ManagerFunctions } from "../modul_js/function/manager_functions.js";
import {STRATEGY} from "../modul_js/enum/enum_stratey.js";
import {FactoryFrame} from "../modul_js/factory/factoryFrame.js";
import {ajax} from "../helpers/ajax.js";
import {ajaxPost} from "../helpers/ajaxPost.js";
import { Swipper } from "../showcase/swipper/swipper.js";
import { MySwiper } from "../showcase/swipper/mySwiper.js";
import {PostCard} from "./PostCard.js";
import {PostCardDetail} from "./PostCardDetail.js";
import { Carrusel } from "../showcase/carrusel/carrusel.js";
import { JesAdri } from "../showcase/jesadri/JesAdri.js";
import {NodeMainCarousel, NodePagination,  NodeShowCase} from "./NodeCreate.js";
import { Loader} from "./Loader.js";
import { GetMenuShowcase } from "../showcase/getMenuShowcase.js";
import {FooterPageButton} from "./FooterPageButton.js";
import {ShoppingCartView} from "../shoppingCart/shoppingCartView.js"
import {DetailShoppingCart} from "../shoppingCart/detailShoppingCart.js";
import{MainContainerVisibility} from "./MainContainerVisibility.js";
import { MainInteractContainerVisibility } from "./MainInteractContainerVisibility.js";
import { MainStoreContainerVisibility } from "./MainStoreContainerVisibility.js";
export async function Router(){
  
   const state = {
      data: {} ,
      godata:{},
      url:"",
      dataShoppingCart:{},
      method: "",
      body:{},
      visorSize: lS.getItem("visorSize"), 
      activePage: lS.getItem("activePage"),
      activePageCache: lS.getItem("activePageCache"), 
      cacheSize: lS.getItem("cacheSize"),
      cacheInicio:  lS.getItem("cacheInicio"), 
      cacheFinal: lS.getItem("cacheFinal") 
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

  if(!lS.getItem("showcaseType")){
        lS.setItem("showcaseType", "showcaseshmJM"); 
  }

  setState({ url: "http://localhost:8085/shoppingCarts/View/client/" +sS.getItem("idClient") , method:"GET"});


$("menuClient").addEventListener("click",(e)=>{

        let $root = $("myBody"),
          $upClient = $("upClientForm");   

          switch (e.target.id ) {
                case 'linkUpAvatar':
                case 'linkUpData':
                case 'linkUpLogin':
                          sS.setItem("opcionClient",e.target.id);
                          sS.setItem("url", "/loginClient");       
                          $upClient.innerHTML = "";
                          $upClient.appendChild(viewClient.login());    
                          MainContainerVisibility("myInteract");
                          MainInteractContainerVisibility("upClientForm");
                          managerFunctions.validations();     
                          managerFunctions.saveDataControls();
                          managerFunctions.showIniStrategy(STRATEGY.ALL);
                          break;
                case "forgetPassword":
                          sS.setItem("url", "/forgetPassword");          
                          $root.innerHTML = "";
                          $root.appendChild(viewClient.forgetPassword());    
                          managerFunctions.validations();     
                          managerFunctions.saveDataControls();
                          managerFunctions.showIniStrategy(STRATEGY.ALL);
                          $("informationPanel").innerHTML  = "Para que te hagamos llegar nuevas credenciales de acceso, introduce a continuación tu Nif y Email. Pulsa despues sobre el botón Get Credentials.";
                          break;
                case "linkExit":
                          sS.setItem("opcionClient",e.target.id);
                          $root.innerHTML = "";
                          $root.appendChild(factoryFrame.confirm("Deseas salir de la aplicación?",
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
                  MainContainerVisibility("myStore");
                  MainStoreContainerVisibility("showcase");
                /*
                    $root.innerHTML ="";
                    $root.appendChild(NodeShowCase());
                 const  $showcase = $("showcase");
                    GetMenuShowcase($showcase);
                    $showcase.appendChild(NodeMainCarousel()); 
                    $showcase.appendChild(Loader()); 
                    $showcase.appendChild(NodePagination()); 
                    saveShoppingCart();
                    FooterPageButton().then(()=>Router());  
                    */
                    break;
                case "linkCarry":   
                     renderShoppingCart();
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

        let  $root = $("myBody");
          switch (e.target.id ) {
                case "forgetPassword":
                          sS.setItem("url", "/forgetPassword");          
                           $root.innerHTML = "";
                           $root.appendChild(viewClient.forgetPassword());    
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
                        break;
     }     


});
  
  $("changeshowcase").addEventListener("click",(e)=>{
     let visorSize ;
     const  $showcase = $("showcase");
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
              if(visorSize < 1)  visorSize = 1;   
              lS.setItem("visorSize",visorSize);
              lS.setItem("cacheSize", visorSize*2);  
              lS.setItem("activePage", 1); 
              lS.setItem("cacheInicio", 0); 
              lS.setItem("cacheFinal", (visorSize  - 1)); 
             // setState({visorSize: visorSize, cacheSize: visorSize*2});        
              $showcase.innerHTML = "";
              GetMenuShowcase($showcase);
              $showcase.appendChild(NodeMainCarousel()); 
              $showcase.appendChild(Loader()); 
              $showcase.appendChild(NodePagination()); 
              FooterPageButton().then(()=>Router());          
            break;    
            case 'sizeVisorD' :
              visorSize =  lS.getItem("visorSize");          
              visorSize++;
              if(visorSize >5)  visorSize = 5;   
              lS.setItem("visorSize",visorSize);
              lS.setItem("cacheSize", visorSize*2);
               lS.setItem("activePage", 1); 
               lS.setItem("cacheInicio", 0); 
               lS.setItem("cacheFinal", (visorSize  - 1)); 
              setState({visorSize: visorSize, cacheSize: visorSize*2});    
              $showcase.innerHTML ="";
              GetMenuShowcase($showcase);
              $showcase.appendChild(NodeMainCarousel()); 
              $showcase.appendChild(Loader()); 
              $showcase.appendChild(NodePagination()); 
              FooterPageButton().then(()=>Router());       
            
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
                     acitvePage = +lS.getItem("activePage") ;
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
                  lS.setItem("activePage",pageClicked); 

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
                         lS.setItem("cacheInicio", inicio);
                         lS.setItem("cacheFinal", final);
                         lS.setItem("activePageCache",  activePageCache);
                                       
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
                                lS.setItem("cacheInicio", inicio);
                                lS.setItem("cacheFinal", final);   
                                lS.setItem("activePageCache",  activePageCache);
                    }

                 renderShowcase();     
          
   }        
 
     switch (e.target.id ) {
      case 'botonInicio':
        let ini, fin;
        let oldActivePage = +lS.getItem("oldActivePage") ;
        let actualPageTransferred =  Math.ceil(((oldActivePage) * visorSize)/(visorSize*2)) -1;
         // alert("actualPageTransferred:" + actualPageTransferred);
          if(actualPageTransferred == 0){
             ini = 0;
             if(cacheLength >= visorSize){
                  fin = visorSize -1;
              }else{
                   fin = cacheLength - 1;
                }                      
              
             }else{
              // alert("a transferir la primera página");
           await   callGoApiRest("http://localhost:8085/storerest/?page=0"+"&size="+ getState().cacheSize );
            cacheLength = +getState().data.content.length;
             ini = 0;            
             if(cacheLength >= visorSize){
                 fin = visorSize -1;
              }else{
                 fin = cacheLength - 1;
              }                
             }
           //  alert("cacheLength:"+ cacheLength);
           setState({activePageCache: 1,cacheInicio: ini, cacheFinal : fin});  
            lS.setItem("cacheInicio", ini);
            lS.setItem("cacheFinal", fin);
            lS.setItem("activePageCache",  1);
              renderShowcase();     
          break;
      case 'botonEnd':             
           let endPage = +$("botonEnd").dataset.valor; // pag. 8
          let newPageToTransferred =  Math.ceil(((endPage) * visorSize)/(visorSize*2)) -1;// pageT 3
          const lastPageActive =+lS.getItem("oldActivePage");//  ¿4?
          const endPageTransferred =  Math.ceil(((lastPageActive) * visorSize)/(visorSize*2)) -1;  //¿1? 
          let inicio, final;
          if(visorSize==1) newPageToTransferred  = endPage -1;

           if(endPageTransferred != newPageToTransferred ){
                  //   alert("Estoy en otra cache");
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
          //  alert("inicio: " + inicio +"    final: "+ final);
            setState({activePageCache : activePageCache,cacheInicio :inicio,cacheFinal:final});
            lS.setItem("cacheInicio", inicio);
            lS.setItem("cacheFinal", final);
            lS.setItem("activePageCache",  activePageCache);
            renderShowcase();          
          break;
     case 'botonNext':        
      
            const nextPage =  acitvePage;
              
           $("botonNext").dataset.valor = nextPage + 1;
          if (cacheLength >   (cacheFinal  + visorSize  ) || cacheLength < cacheSize )
          {
               // alert(cacheFinal  + visorSize);
               if(cacheLength < cacheSize ) {
                       setState({cacheInicio : cacheFinal +1, cacheFinal: cacheFinal +(cacheLength - visorSize) ,activePageCache: 1});                         
                        
                }else {
                        setState({cacheInicio : cacheFinal +1, cacheFinal: cacheFinal+ visorSize ,activePageCache: 2});                         
                }
                lS.setItem("cacheInicio",+getState().cacheInicio);
                lS.setItem("cacheFinal", +getState().cacheFinal);
                  lS.setItem("activePageCache", +getState().activePageCache);
                  renderShowcase();
          }else           
          {    
         //  alert("Se agotó la cache");
            setState({activePageCache : 1,cacheInicio :0,cacheFinal:visorSize-1});
                  lS.setItem("activePageCache",  1);
           // lS.setItem("cacheInicio",+getState().cacheInicio);
         //   lS.setItem("cacheFinal", +getState().cacheFinal);
            let page;
            if(visorSize == 1){
                   page= nextPage;
            }else {
                 page = Math.floor((nextPage -1)  / 2);
               //page =  Math.ceil(((nextPage) * visorSize)/(visorSize*2)) ;         
            }
        //alert("Page:" + page);
           
           // callApiRest(uri+"page="+ page + "&size="+getState().cacheSize );
            lS.setItem("cacheInicio",+getState().cacheInicio);
            lS.setItem("cacheFinal", +getState().cacheFinal);           
         loadingProductsCache(uri+"page="+ page + "&size="+getState().cacheSize ); 
          
          }
       
          break;
     case 'botonPrev':
          let iniPrev, finPrev;
          // let oldActivePage = +lS.getItem("oldActivePage") ;
        //  alert("acitvePage:"+ acitvePage);
          let newPageToTransferredPrev =  Math.ceil(((acitvePage) * visorSize)/(visorSize*2)) -1;
          let actualPageTransferredPrev =  Math.ceil(((acitvePage+1) * visorSize)/(visorSize*2)) -1;
         // localStorage.setItem("activePage",acitvePage-1); 
       //  alert("actualPageTransferredPrev ==" +  actualPageTransferredPrev + "newPageToTransferredPrev   == " +newPageToTransferredPrev);
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
         lS.setItem("cacheInicio",+getState().cacheInicio);
         lS.setItem("cacheFinal", +getState().cacheFinal);
         lS.setItem("activePageCache",  activePageCache);
        renderShowcase();  
          break;
     }  
   });
 $("productDetail").addEventListener("click",(e)=>{
     switch (e.target.id ) {
            case 'backShowcase': 
             MainStoreContainerVisibility("showcase");          
             break; 
             
            case "addShoppingCart" :      
               
               //alert("addShoppingCart");
                const cartLine  = {        
                    idProduct : e.target.dataset.idproduct,
                    model : e.target.dataset.model,
                    price : e.target.dataset.price,
                    photo : e.target.dataset.photo
                }
                if  (Object.keys(getState().dataShoppingCart).length === 0 ){
                  addShoppingCart(cartLine);
                }else {
                      const carrito = getState().dataShoppingCart;
                      let i = 0;
                      for ( ; i < carrito.length; i++) {
                              if (carrito[i].idProduct === cartLine.idProduct) {
                                  carrito[i].units = +carrito[i].units + 1; 
                                  alert("Se ha añadido una nueva unidad");
                                    break;
                              }
                      }
                      if (i==carrito.length ){addShoppingCart(cartLine);}
                      else {setState({dataShoppingCart: carrito}); }
                  }
                break;
               
     }
    });

 $("mainCarousel").addEventListener("click",(e)=>{
     switch (e.target.id ) {                 
            case 'seeDetailMobil':          
              renderDetail(e.target.dataset.valor);      
              break; 
     }  
   });
  $("shoppingCart").addEventListener("click",(e)=>{   
        
        switch (e.target.id ) {              
              case "saveShoppingCart": 
                 // alert("saveShoppingCart");
                  saveShoppingCart();
                    e.target.style.background = "blue";
                  break;
               case "purchaseShoppingCart": 
                //  alert("purchaseShoppingCart");
                 purchaseShoppingCart()
                  //  e.target.style.background = "blue";
                  break;
              case "remove-product": 
                  const idProduct = e.target.dataset.idproduct,
                           carrito = getState().dataShoppingCart;
                          let i = 0;
                          for ( ; i < carrito.length; i++) {
                              if (carrito[i].idProduct === idProduct) {
                                      carrito.splice(i,1);
                                      alert("Se ha eliminado el producto");
                                      break;
                                  }
                          }
                        setState({dataShoppingCart: carrito});
                        console.log("Carrito al borrar dataShoppingCart:",getState().dataShoppingCart); 
                        renderShoppingCart();
                        break;
        }
    });
   
 $("shoppingCart").addEventListener("change",(e)=>{   
         const idProduct = e.target.dataset.idproduct; 
        switch (e.target.id ) {
              case "unitsProduct": 
                     const idProduct = e.target.dataset.idproduct,
                               units = e.target.value,
                               carrito = getState().dataShoppingCart;
                       let i = 0,
                            totalCart = 0;
                  for ( ; i < carrito.length; i++) {
                        if (carrito[i].idProduct == idProduct) {
                              carrito[i].units = units; 
                              $("totalProduct" +idProduct).innerHTML = carrito[i].units * carrito[i].price;
                             $("saveShoppingCart").style.background = "red";
                          }
                       totalCart = totalCart +   (carrito[i].units  * carrito[i].price);
                       //alert(totalCart);
                  }
                  $("cart-total").innerHTML = totalCart.toFixed(2);
                  setState({dataShoppingCart: carrito});           
                  console.log("Carrito dataShoppingCart:" , getState().dataShoppingCart);
                  break;
             
        }
    });
const renderShoppingCart = function(){
  
   let $shoppingCart = $("shoppingCart");
                        MainContainerVisibility("myStore");
                        MainStoreContainerVisibility("shoppingCart");
                          $shoppingCart.innerHTML ="";
                          const carrito = getState().dataShoppingCart;
                if(carrito.length == 0) {$shoppingCart.innerHTML =" <h1 class='text-purple-600' >Carrito vacío</h1>";} 
                else {
                          $shoppingCart.innerHTML = ShoppingCartView();
                          let $insertShoppingCart = $("insertShoppingCart"),
                          totalCart = 0;

                          carrito.forEach(el=>{              
                                    $insertShoppingCart .innerHTML +=   DetailShoppingCart(el);
                                    totalCart = totalCart + (el.units * el.price);
                          });
                         $("cart-total").innerHTML = totalCart.toFixed(2); 
             }
 }
const saveShoppingCart = async function(){
  //alert("saveShoppingCart");
  const idClient =  sS.getItem("idClient") ;
  fetch('http://localhost:8085/shoppingCarts/client/' + idClient, {
  method: 'DELETE'
})
  .then(data =>{
    console.log("Cesta eliminada:" + data);
    getState().dataShoppingCart.forEach(async (el) =>{
           await  ajaxPost({
                        url: "http://localhost:8085/shoppingCarts",
                        method:"POST",
                        body:{idclient:idClient, idproduct:el.idProduct, units:el.units},
                        cbSuccess : (posts)=>{               
                            console.log("Almacenando ...  cesta  en la BBDD:"); 
                        }
                  });
       }); 
    });
}
const purchaseShoppingCart = async function(){
 
  const idClient =  sS.getItem("idClient") ;
  //alert("idClient:" + idClient);
  fetch('http://localhost:8085/Cart/managerThePurchase/' + idClient, {
  method: 'GET'
})
  .then(data =>{
    console.log("Compra realizada:" + data);
      alert("Compra realizada:");
       // render carrito         
       loadingShoppingCart().then(() =>renderShoppingCart());
      

    });
}
const addShoppingCart = function(newProduct){
             const json = {
                       idProduct : newProduct.idProduct,
                       units :1,
                       model : newProduct.model,
                       price : newProduct.price,
                       photo : newProduct.photo
                 };
               let aux = getState().dataShoppingCart || {};
                 aux.push(json);
                 setState({dataShoppingCart:aux});
                 console.log("dataShoppingCart:",getState().dataShoppingCart);
                 alert("Añadido al carrito");
}

const renderShowcase = function(){
   document.getElementById("changeshowcase").style.display ="block";
   document.getElementById("pagination").style.display ="block";  
   let html;
  switch (lS.getItem("showcaseType")) {   
      
          case '':                          
          case 'showcaseshmJM': 
              document.getElementById('showcaseshmJM').checked = true;
             document.getElementById("mainCarousel").innerHTML = render(PostCard);
              break;
          case 'showcaseshmCarrusel': 
            document.getElementById('showcaseshmCarrusel').checked = true;
            renderShowcaseShmCarrusel();
            break;
          case 'showcaseshmJesadri':
               document.getElementById('showcaseshmJesadri').checked = true;renderShowcaseShmJesAdri();
             break;                        
           case 'showcaseshmSwipper': 
               document.getElementById('showcaseshmSwipper').checked = true;
               html = "<div class='swiper-container'> <div class='swiper-wrapper'>";      
               html += render(Swipper);
               html += "</div>";
               html += "<div class='swiper-pagination'></div>  <div class='swiper-scrollbar'></div></div>" ;
              $("mainCarousel").innerHTML=html;  
              MySwiper();
               break;
   }
                  
}
const  preRender = function(){
     setState({visorSize: lS.getItem("visorSize"),cacheSize : lS.getItem("cacheSize")}); 
 
  let inicio = getState().cacheInicio;  
  let final =  getState().cacheFinal;  
  //console.log(inicio,",",final);
   //alert("inicio: " + inicio + " final: " + final);
  const data = getState().data;
   //console.log("data:",data);     

  let activeData = [];
     
 for(let i = inicio; i<= final; i++){
          activeData.push(data.content[i]);
 }
// console.log("activeData(cache):", activeData);
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
     document.getElementById("mainCarousel").innerHTML= "";   
    let $giran = document.createElement("div");
    $giran.id = "giran";
    document.getElementById("mainCarousel").appendChild($giran);
    $giran  = document.getElementById("giran");
    const activeData = preRender();
    let i = 0;
    activeData.forEach(post => {
          $giran.appendChild(Carrusel(post, i, activeData.length));       
           i++;        
     });  
}
const renderShowcaseShmJesAdri = function(){
    let  $mainCarousel  = document.getElementById("mainCarousel");
      $mainCarousel.innerHTML= "";     
 
    const activeData = preRender();
    let i = 0;
    activeData.forEach(post => {
           $mainCarousel.appendChild(JesAdri(post, i, activeData.length));       
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
                                        $("productDetail").innerHTML=html;
                                        MainStoreContainerVisibility("productDetail"); 
                                      }
                        })
        //document.getElementById("pagination").style.display ="none";
       // document.getElementById("changeshowcase").style.display ="none";
        document.querySelector(".loader").style.display = "none";
}
/*
const  callApiRest = async function(uri){  
   await  ajax({
              url:uri,
              cbSuccess : (posts)=>{             
            //  console.log("callApiRest:" , posts)
                setState({
                     data: posts                     
                  });              
                 renderShowcase();              
              }
        });
 document.querySelector(".loader").style.display = "none"; 
}*/
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
const   loadingProductsCache = async function(uri){  
   await  ajax({
              url:uri,
              cbSuccess : (posts)=>{  
                setState({
                     data: posts                     
                  });    
                    console.log("loadingProductsCache:" , getState().data) ;    
                 renderShowcase();              
              }
        });
 document.querySelector(".loader").style.display = "none"; 
}
const loadingShoppingCart =  async function(){
    const {url, method} = getState();
    await  ajax({
              url:url,
              method: method,
              cbSuccess : (posts)=>{  
                setState({
                     dataShoppingCart: posts                     
                  });    
                    console.log("AJAX dataShoppingCart:" , getState().dataShoppingCart) ;     
                     // renderShoppingCart();    
              }
        });
}


//let page = Math.floor(  (localStorage.getItem("activePage") ) /getState().cacheSize) ;
let pageActive = +localStorage.getItem("activePage");

let page = Math.floor(  (pageActive -1)  / 2);
//alert("page"+ page + " cacheSize:"+getState().cacheSize );
 loadingProductsCache("http://localhost:8085/storerest/?page="+page +"&size="+getState().cacheSize); 

  loadingShoppingCart();
   
}