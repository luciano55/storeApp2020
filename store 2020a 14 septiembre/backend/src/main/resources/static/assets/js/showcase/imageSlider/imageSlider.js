export function ImageSlider(props){

  let {id, modelo,memoria, precio, imageModel} = props,
  myFoto = imageModel ? ("assets/img/imageModel/" + imageModel): "assets/favicon.ico";

  return ` <div class="slide" style="
          background-image: url('${myFoto}');
        "  id ="seeMobil" data-valor=${id}></div>`;
} 