export function Swipper(props){

  let {id, modelo,memoria, precio, imageModel} = props,
  myFoto = imageModel ? ("assets/img/imageModel/" + imageModel): "assets/favicon.ico";
//  <img src="https:/placeimg.com/200/200/any" alt="">
  return ` <div class="swiper-slide">
                <div class="picture">
                          <img src=${myFoto} alt="no sale">
                </div>
                <div class="detail">
                    <h3>${modelo}</h3>
                    <span>  ${precio}</span>
                      <a href="#/post/${id}">Ver hash</a>
                      <span id ="seeMobil" data-valor=${id}>
    Ver-click
  </span>
                </div>
            </div>
 `;

}