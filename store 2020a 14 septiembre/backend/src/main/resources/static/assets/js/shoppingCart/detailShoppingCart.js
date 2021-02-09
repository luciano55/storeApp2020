export function detailShoppingCart(props) {
  let { idClient, idProduct, model, units, price } = props,
    totalPrice = price * units;
  return `
 <div class="product">
 <div class="product-image">
   <img src="https://s.cdpn.io/3/large-NutroNaturalChoiceAdultLambMealandRiceDryDogFood.png">
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
 <div class="product-line-price">${totalPrice}</div>
</div>
 `;
}
