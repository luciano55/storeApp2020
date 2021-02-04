export function PostCardDetail(props){

  let {id, brand ,modelo,memoria, precio, imageModel,stock, proveedor} = props,
  myFoto = imageModel ? ("assets/img/imageModel/" + imageModel): "assets/favicon.ico";
//  <img src="https:/placeimg.com/200/200/any" alt="">
  return `  
<div class="flex flex-row  h-62 max-h-full justify-center">
    <div>
      <img src=${myFoto} class="w-40">
      <div class="text-center text-blue-500 m-3"> ${brand}</div>
    </div>
    <div class="grid grid-cols-3 gap-4 m-2 p-4 text-gray-600">
      <div class="col-span-3">${modelo}</div>
      <div class="">€ ${precio}</div>
      <div class="text-gray-200 line-through">€ 499,00</div>
      <div class="text-gray-400">iva incluido</div>
      <div class="col-span-3">Garantía: 24 meses</div>
      <div class="col-span-3">¡Ahorras 148 g de residuos!</div>
      <div class="text-blue-600"><a href="#/">Volver(hash)</a></div>
      <div class="text-blue-600"><span id="cardDetail">Volver(click)</span>
      </div>
    </div>
  </div>`;

}