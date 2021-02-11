export function DetailShoppingCart(props) {
  let {  idProduct, model, unit, price, photo } = props,
    totalPrice = price * unit;
    const idClient = sessionStorage.getItem("idClient");
  return `
 <div class="product">
 <div class="product-image">
   <img src="${photo}">
 </div>
 <div class="product-details">
    <p class="product-description">${model}</p>
 </div>
 <div class="product-price">${price}</div>
 <div class="product-quantity">
   <input id="unitsProduct" type="number" value="${unit}" data-idclient=${idClient} data-idproduct=${idProduct}>
 </div>
 <div  class="product-removal">
   <button id="remove-product" class="remove-product" data-idclient=${idClient} data-idproduct=${idProduct}>
     Remove
   </button>
 </div>
 <div class="product-line-price">${totalPrice}</div>
</div>
 `;
}
