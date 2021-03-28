export function MainStoreContainerVisibility(active){

       switch (active) {

             case 'showcase':
                document.getElementById("showcase").style.display ="block"; 
                 document.getElementById("productDetail").style.display ="none";
                 document.getElementById("shoppingCart").style.display ="none";                       
                  break;
              case 'productDetail':
                document.getElementById("showcase").style.display ="none"; 
                 document.getElementById("productDetail").style.display ="block";
                 document.getElementById("shoppingCart").style.display ="none";                       
                  break;
             case 'shoppingCart':
                document.getElementById("showcase").style.display ="none"; 
                 document.getElementById("productDetail").style.display ="none";
                 document.getElementById("shoppingCart").style.display ="block";                       
                  break;
             
       }
            
       
}