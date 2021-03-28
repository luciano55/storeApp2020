export function DetailShoppingCart(props) {
  let {  idProduct, model, units, price, photo } = props,
    totalPrice = price * units;
    const idClient = sessionStorage.getItem("idClient"),
        myFoto = photo ? ("assets/img/imageModel/" + photo): "assets/favicon.ico";
      
  return `
 <div class="product">
 <div class="product-image">
   <img src="${myFoto}">
 </div>
 <div class="product-details">
    <p class="product-description">${model}</p>
 </div>
 <div class="product-price">${price}</div>
 <div class="product-quantity">
   <input id="unitsProduct" type="number" value="${units}" data-idclient=${idClient} data-idproduct=${idProduct}>
 </div>
 <div  class="product-removal">
   <button id="remove-product" class="remove-product" data-idclient=${idClient} data-idproduct=${idProduct}>
     Remove
   </button>
 </div>
 <div class="product-line-price" id="totalProduct${idProduct}" >${totalPrice}</div>
</div>
 `;
}
