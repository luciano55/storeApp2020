export function JesAdri(props, i, pageItem){
  let {id, modelo,memoria, precio, imageModel} = props,
  myFoto = imageModel ? ("assets/img/imageModel/" + imageModel): "assets/favicon.ico";

var movil = document.createElement("div");
      movil.id = "movil_" +id;
      movil.className = "movil";
    var movil3d = document.createElement("div");
          movil3d.className = "movil3d";
          var carafrontal = document.createElement("img");
                carafrontal.id="seeDetailMobil";
                carafrontal.dataset.valor = id;
                carafrontal.className = "caraFrontal";
                carafrontal.src = myFoto;;
               // carafrontal.id = "caraFront_" + id;
          movil3d.appendChild(carafrontal);
          /*
          var caraTrasera = document.createElement("img");
                caraTrasera.className = "caraTrasera";
                caraTrasera.src =  "assets/img/imageModel/HuaweiP20LiteSide.jpg";
                caraTrasera.id =  "caraBack_" + id;          
          movil3d.appendChild(caraTrasera);*/
           
      movil.appendChild(movil3d);




  return movil;




}