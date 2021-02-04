export function Carrusel(props, i, pageItem ){
    let {id, modelo,memoria, precio, imageModel} = props,
  myFoto = imageModel ? ("assets/img/imageModel/" + imageModel): "assets/favicon.ico";
   const angulo = 360 /  pageItem;

   const nodoPanelMobil = document.createElement("div");
             nodoPanelMobil.className = "nodoPanelMobil";          

   const nodoElementoCarruselDelantero = document.createElement("div");
   const nodoElementoCarruselTrasero = document.createElement("div");
   const nodoElementoCarruselLateralDerecho = document.createElement("div");
  const nodoElementoCarruselLateralIzquierdo = document.createElement("div");
            nodoElementoCarruselDelantero.className = "nodoElementoCarruselDelantero";
            nodoElementoCarruselTrasero.className = "nodoElementoCarruselTrasero";
            nodoElementoCarruselLateralDerecho.className = "nodoElementoCarruselLateralDerecho";
            nodoElementoCarruselLateralIzquierdo.className = "nodoElementoCarruselLateralIzquierdo";

            nodoPanelMobil.appendChild(nodoElementoCarruselDelantero);
            nodoPanelMobil.appendChild(nodoElementoCarruselTrasero);
            nodoPanelMobil.appendChild(nodoElementoCarruselLateralDerecho);
            nodoPanelMobil.appendChild(nodoElementoCarruselLateralIzquierdo);

            nodoPanelMobil.appendChild(nodoElementoCarruselDelantero);
            nodoPanelMobil.appendChild(nodoElementoCarruselTrasero);
            nodoPanelMobil.appendChild(nodoElementoCarruselLateralDerecho);
            nodoPanelMobil.appendChild(nodoElementoCarruselLateralIzquierdo);

            nodoPanelMobil.style.transform = "rotateY(-" + angulo* i + "deg) translateX(140px) rotatey(0deg)";

      const nodoImagenDelantera = document.createElement("img");
          nodoImagenDelantera.id="carrusel";
          nodoImagenDelantera.dataset.valor = id;
      
      const nodoImagenTrasera = document.createElement("img");
      const nodoImagenDerecha = document.createElement("img");
      const nodoImagenIzquierda = document.createElement("img");
                nodoImagenDelantera.className = "nodoImagenDelantera";
                nodoImagenTrasera.className = "nodoImagenTrasera";
                nodoImagenDerecha.className = "nodoImagenDerecha";
                nodoImagenIzquierda.className = "nodoImagenIzquierda";

      const rutaImagenDelantera = myFoto;      
      const rutaImagenTrasera =  "assets/img/imageModel/HuaweiP20LiteSide.jpg";
      const rutaImagenIzquierda = "assets/img/imageModel/AppleIPhone6sBack.jpg" ;
      const rutaImagenDerecha = "assets/img/imageModel/HuaweiPSmart2019Dual.jpg" ;
                //+ modelo.imagenLado;
                nodoImagenDelantera.src = rutaImagenDelantera;
                nodoImagenTrasera.src = rutaImagenTrasera;
                nodoImagenIzquierda.src = rutaImagenIzquierda;
                nodoImagenDerecha.src = rutaImagenDerecha;

              nodoElementoCarruselDelantero.appendChild(nodoImagenDelantera);
                nodoElementoCarruselTrasero.appendChild(nodoImagenTrasera);
                nodoElementoCarruselLateralIzquierdo.appendChild(nodoImagenIzquierda);
                nodoElementoCarruselLateralDerecho.appendChild(nodoImagenDerecha);

      const nodoPanelBase = document.createElement("div");
                nodoPanelBase.className = "nodoPanelBase";
      const nodoBaseElementoCarruselArriba = document.createElement("div");
              nodoBaseElementoCarruselArriba.className = "nodoBaseElementoCarruselArriba s4";

      const nodoBaseElementoCarruselAbajo = document.createElement("div");
                nodoBaseElementoCarruselAbajo.className = "nodoBaseElementoCarruselAbajo s4";

      const nodoBaseElementoCarruselFrontal = document.createElement("div");
               nodoBaseElementoCarruselFrontal.className = "nodoBaseElementoCarruselFrontal s4";

      const nodoBaseElementoCarruselTrasero = document.createElement("div");
              nodoBaseElementoCarruselTrasero.className = "nodoBaseElementoCarruselTrasero s4";

      const nodoBaseElementoCarruselLateralIquierdo = document.createElement("div");
              nodoBaseElementoCarruselLateralIquierdo.className = "nodoBaseElementoCarruselLateralIquierdo s4";

      const nodoBaseElementoCarruselLateralDerecho = document.createElement("div");
              nodoBaseElementoCarruselLateralDerecho.className = "nodoBaseElementoCarruselLateralDerecho s4";

              nodoPanelBase.appendChild(nodoBaseElementoCarruselArriba);
              nodoPanelBase.appendChild(nodoBaseElementoCarruselAbajo);
              nodoPanelBase.appendChild(nodoBaseElementoCarruselFrontal);
              nodoPanelBase.appendChild(nodoBaseElementoCarruselTrasero);
              nodoPanelBase.appendChild(nodoBaseElementoCarruselLateralIquierdo);
              nodoPanelBase.appendChild(nodoBaseElementoCarruselLateralDerecho);

              nodoBaseElementoCarruselLateralDerecho.innerText = modelo;  //modelo.nombreModelo;
              nodoBaseElementoCarruselLateralIquierdo.innerText = modelo;  //modelo.nombreModelo;
              nodoBaseElementoCarruselFrontal.innerText = modelo; //modelo.nombreModelo;
              nodoBaseElementoCarruselTrasero.innerText = modelo; //modelo.nombreModelo;

              nodoPanelMobil.appendChild(nodoPanelBase);
/*
     const idModelo = document.createElement("p");
                idModelo.setAttribute("id", "idmodelo",1);
                                      //+ modelo.IdModelo);
                idModelo.innerHTML = 1; //  modelo.IdModelo;
                idModelo.style.display = 'none';
                nodoPanelMobil.appendChild(idModelo);
                nodoPanelMobil.addEventListener("click", function (event) {
                     //<a href="#/post/${id}">Ver publicación</a>         
                });           
                */


        /*        
      const detail = document.createElement("a");
      detail.href= "#/post/" + id;*/

        //  detail.appendChild(nodoPanelMobil);
 return  nodoPanelMobil;


}