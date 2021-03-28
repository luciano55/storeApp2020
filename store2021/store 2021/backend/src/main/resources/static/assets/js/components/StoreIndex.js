import {ajax} from "../helpers/ajax.js";
//import { Swipper } from "../showcase/swipper/swipper.js";
//import { MySwiper } from "../showcase/swipper/mySwiper.js";

import {OfferCard} from "./OfferCard.js";
import {d,$,Q} from "../modul_js/function/global.js";

export async function StoreIndex(){

const state = {
      data: {} ,
      /*
      godata:{},
      url:"",
      dataShoppingCart:{},
      method: "",
      body:{},
      visorSize: localStorage.getItem("visorSize"), 
      activePage: localStorage.getItem("activePage"),
      activePageCache: 1,     
      cacheSize: localStorage.getItem("cacheSize"),
      cacheInicio: 0, 
      cacheFinal: localStorage.getItem("visorSize") -1 */
    };
 const setState = obj => {
      for (let key in obj) {
        if (state.hasOwnProperty(key)) {
          state[key] = obj[key];
        }
      }
    };
const getState = () => JSON.parse(JSON.stringify(state)); 

const render = function(){
   let html = "",
     activeData = [];
   const data = getState().data;
  for(let i = 0; i<= 4; i++){
          activeData.push(data.content[i]);
 }
 activeData.forEach(post => {       
            html += OfferCard(post);
 }); 
 return html;   
}
const renderOfferCards = function(){

  let  html = `<div class="min-h-screen bg-pink-50">
  <div class="container mx-auto p-10 max-w-screen-lg">
    <div class="bg-white rounded shadow p-8">
      <!--  ToastBar  -->
      <div class="w-full bg-orange-200 text-yellow-900 px-4 py-2 flex items-center">
        <img src="https://svgsilh.com/svg/151889.svg" class="w-10 block pr-2">
        <div class="text-sm">Sign in to go to the store</div>
      </div>
      <!-- Order Summary  -->
      <div>
        <h3 class="text-xl mt-4 font-bold">Sales</h3>
`;     
       html += render();
       html += ` <button class="px-4 py-4 bg-purple-400 text-white w-full mt-3 rounded shadow font-bold hover:bg-purple-400">You have found your page</button>
    </div>
    
</div>`;
              
    $("myStore").innerHTML=html;  
             //MySwiper();
}
const   productOffer= async function(uri){  
   await  ajax({
              url:uri,
              cbSuccess : (posts)=>{    
                  console.log("posts: " + posts.content[0].modelo);       
                setState({
                     data: posts                     
                  });              
                  console.log("data: " + getState().data);
                renderOfferCards();             
              }
        });
      //document.querySelector(".loader").style.display = "none"; 
}

productOffer("http://localhost:8085/storerest/"); 


}