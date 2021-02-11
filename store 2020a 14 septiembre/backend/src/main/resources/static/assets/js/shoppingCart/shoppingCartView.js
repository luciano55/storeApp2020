export function ShoppingCartView(){
    return `

    <div id="shopping-cart" class="shopping-cart">
    
      <div class="column-labels">
        <label class="product-image">Image</label>
        <label class="product-details">Product</label>
        <label class="product-price">Price</label>
        <label class="product-quantity">Quantity</label>
        <label class="product-removal">Remove</label>
        <label class="product-line-price">Total</label>
      </div>
    
      <div id="insertShoppingCart">

      </div>
    
      <div class="totals">
        <div class="totals-item totals-item-total">
          <label>Total</label>
          <div class="totals-value" id="cart-total">90.57</div>
        </div>
      </div>
          
      <button class="checkout">Checkout</button>
    
    </div>
    
    `;


    //    <link rel="stylesheet" href="./assets/js/shoppingCart/shoppingCart.css">
}
