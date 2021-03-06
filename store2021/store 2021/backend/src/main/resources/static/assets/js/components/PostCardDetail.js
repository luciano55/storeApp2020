export function PostCardDetail(props){

  let {id, brand ,modelo,memoria, precio, imageModel,stock, proveedor} = props,
  myFoto = imageModel ? ("assets/img/imageModel/" + imageModel): "assets/favicon.ico";
 
const idClient =  sessionStorage.getItem("idClient");
//  <img src="https:/placeimg.com/200/200/any" alt="">
  return `  
<div class="flex flex-row  h-82 max-h-full justify-center">
    <div>
      <img src=${myFoto} class="w-40">
      <div class="text-center text-blue-500 m-3"> ${brand}</div>
    </div>
    <div class="grid grid-cols-3 gap-7 m-2 p-4 text-gray-600">
     <div class="col-span-3 text-blue-800"> 
          <img id ="addShoppingCart" src="assets/img/shoppingCart.png" 
           data-idproduct=${id} 
           data-model ='${modelo}'
           data-price =${precio}
           data-photo ='${imageModel}'
                  alt="no sale"> 
      </div>
      <div class="col-span-3">${modelo}</div>
      <div class="">€ ${precio}</div>
      <div class="text-gray-200 line-through">€ 20,00</div>
      <div class="text-gray-400">iva incluido</div>
      <div class="col-span-3">Garantía: 24 meses</div>
      <div class="col-span-3">¡Ahorras 148 g de residuos!</div>  
      <br><br>   
      <span id="backShowcase"> Volver </span>
    </div>
  </div>`;
}