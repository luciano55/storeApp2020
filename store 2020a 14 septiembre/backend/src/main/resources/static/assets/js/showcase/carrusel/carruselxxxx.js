STORE.namespace('STORE.Carrusel');

STORE.Carrusel = {
    
    pageItem : 3,
    angulo : 0,
    
    createCarrusel : function(){  
    
      STORE.Carrusel.angulo = 360 / STORE.Carrusel.pageItem;
     for (var i = 0; i < 3 ; i++) { // STORE.Carrito.carruselActivo
        (function (i) {
           var nodoPanelMobil = document.createElement("div");
           nodoPanelMobil.className = "nodoPanelMobil"; 
    
          var nodoElementoCarruselDelantero = document.createElement("div");
          var nodoElementoCarruselTrasero = document.createElement("div");
          var nodoElementoCarruselLateralDerecho = document.createElement("div");
          var nodoElementoCarruselLateralIzquierdo = document.createElement("div");
    
            nodoElementoCarruselDelantero.className = "nodoElementoCarruselDelantero";
            nodoElementoCarruselTrasero.className = "nodoElementoCarruselTrasero";
            nodoElementoCarruselLateralDerecho.className = "nodoElementoCarruselLateralDerecho";
            nodoElementoCarruselLateralIzquierdo.className = "nodoElementoCarruselLateralIzquierdo";
    
            nodoPanelMobil.appendChild(nodoElementoCarruselDelantero);
            nodoPanelMobil.appendChild(nodoElementoCarruselTrasero);
            nodoPanelMobil.appendChild(nodoElementoCarruselLateralDerecho);
            nodoPanelMobil.appendChild(nodoElementoCarruselLateralIzquierdo);
 
    nodoPanelMobil.style.transform = "rotateY(-" + STORE.Carrusel.angulo * i + "deg) translateX(140px) rotatey(0deg)";

            var nodoImagenDelantera = document.createElement("img");
            var nodoImagenTrasera = document.createElement("img");
            var nodoImagenDerecha = document.createElement("img");
            var nodoImagenIzquierda = document.createElement("img");
                nodoImagenDelantera.className = "nodoImagenDelantera";
                nodoImagenTrasera.className = "nodoImagenTrasera";
                nodoImagenDerecha.className = "nodoImagenDerecha";
                nodoImagenIzquierda.className = "nodoImagenIzquierda";

   //var modelo = JSON.parse(localStorage.getItem(localStorage.getItem("producto:" + (STORE.Carrito.inicioModelo + i))));
            
    
    var rutaImagenDelantera = "img/imageModel/AppleIPhone6sFront.jpg"; // + modelo.imagenDelantera;
                var rutaImagenTrasera = "img/imageModel/AppleIPhone6sBack.jpg" ;
                //+ modelo.imagenTrasera;
                var rutaImagenIzquierda = "img/imageModel/HuaweiP20LiteSide.jpg";
            //+ modelo.imagenLado;
                var rutaImagenDerecha = "img/imageModel/HuaweiPSmart2019Dual.jpg" 
                //+ modelo.imagenLado;
                nodoImagenDelantera.src = rutaImagenDelantera;
                nodoImagenTrasera.src = rutaImagenTrasera;
                nodoImagenIzquierda.src = rutaImagenIzquierda;
                nodoImagenDerecha.src = rutaImagenDerecha;
    
    console.info(rutaImagenDelantera);
                console.info(nodoImagenTrasera);
                console.info(nodoImagenIzquierda);
                console.info(nodoImagenDerecha);

                nodoElementoCarruselDelantero.appendChild(nodoImagenDelantera);
                nodoElementoCarruselTrasero.appendChild(nodoImagenTrasera);
                nodoElementoCarruselLateralIzquierdo.appendChild(nodoImagenIzquierda);
                nodoElementoCarruselLateralDerecho.appendChild(nodoImagenDerecha);
    
    
        var nodoPanelBase = document.createElement("div");
                nodoPanelBase.className = "nodoPanelBase";

                var nodoBaseElementoCarruselArriba = document.createElement("div");
                nodoBaseElementoCarruselArriba.className = "nodoBaseElementoCarruselArriba s4";

                var nodoBaseElementoCarruselAbajo = document.createElement("div");
                nodoBaseElementoCarruselAbajo.className = "nodoBaseElementoCarruselAbajo s4";

                var nodoBaseElementoCarruselFrontal = document.createElement("div");
                nodoBaseElementoCarruselFrontal.className = "nodoBaseElementoCarruselFrontal s4";

                var nodoBaseElementoCarruselTrasero = document.createElement("div");
                nodoBaseElementoCarruselTrasero.className = "nodoBaseElementoCarruselTrasero s4";

                var nodoBaseElementoCarruselLateralIquierdo = document.createElement("div");
                nodoBaseElementoCarruselLateralIquierdo.className = "nodoBaseElementoCarruselLateralIquierdo s4";

                var nodoBaseElementoCarruselLateralDerecho = document.createElement("div");
                nodoBaseElementoCarruselLateralDerecho.className = "nodoBaseElementoCarruselLateralDerecho s4";

                nodoPanelBase.appendChild(nodoBaseElementoCarruselArriba);
                nodoPanelBase.appendChild(nodoBaseElementoCarruselAbajo);
                nodoPanelBase.appendChild(nodoBaseElementoCarruselFrontal);
                nodoPanelBase.appendChild(nodoBaseElementoCarruselTrasero);
                nodoPanelBase.appendChild(nodoBaseElementoCarruselLateralIquierdo);
                nodoPanelBase.appendChild(nodoBaseElementoCarruselLateralDerecho);

                nodoBaseElementoCarruselLateralDerecho.innerText = "Samsung s8"; //modelo.nombreModelo;
                nodoBaseElementoCarruselLateralIquierdo.innerText = "Samsung s8"; //modelo.nombreModelo;
                nodoBaseElementoCarruselFrontal.innerText = "Samsung s8"; //modelo.nombreModelo;
                nodoBaseElementoCarruselTrasero.innerText = "Samsung s8"; //modelo.nombreModelo;

                nodoPanelMobil.appendChild(nodoPanelBase);

/*
                var idModelo = document.createElement("p");
                idModelo.setAttribute("id", "idmodelo" + modelo.IdModelo);
                idModelo.innerHTML = modelo.IdModelo;
                idModelo.style.display = 'none';
                nodoPanelMobil.appendChild(idModelo);
                nodoPanelMobil.addEventListener("click", function (event) {
                    STORE.Carrito.formVerProducto($("idmodelo" + modelo.IdModelo).innerHTML);
                });
*/
            var idModelo = document.createElement("p");
                idModelo.setAttribute("id", "idmodelo",1);
                                      //+ modelo.IdModelo);
                idModelo.innerHTML = 1; //  modelo.IdModelo;
                idModelo.style.display = 'none';
                nodoPanelMobil.appendChild(idModelo);
                nodoPanelMobil.addEventListener("click", function (event) {
                    alert("Mostrar producto");
                   // STORE.Carrito.formVerProducto($("idmodelo" + modelo.IdModelo).innerHTML);
                });            
            
                $('giran').appendChild(nodoPanelMobil);
            }(i));
        }

    } 
    
}
STORE.Carrusel.createCarrusel();
