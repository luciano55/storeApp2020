export function PostCard(props){

  let {id, modelo,memoria, precio, imageModel, descuento, stock} = props,
  myFoto = imageModel ? ("assets/img/imageModel/" + imageModel): "assets/favicon.ico";

  return `  
  <article class="border w-full rounded mt-5 flex p-4 justify-between items-center flex-wrap"  >  

      <img src=${myFoto} class="w-12" id ="seeDetailMobil" data-valor=${id}> 
<div class="w-2/3">
                <h3 class="text-lg font-medium">${modelo}</h3>
                <p class="text-gray-600 text-xs">stock: <b> ${stock}</b></p>
                <h4 class="text-red-700 text-xs font-bold mt-1">   ${memoria}</h4>
              </div>
              <div>
                <h4 class="text-3xl font-medium"><sup class="text-lg text-purple-800">€</sup>   ${precio}</h4>
                <h5 class="text-sm font-bold text-purple-800">${descuento}% OFF</h5>
              </div>         

  </article>  
  `;
}