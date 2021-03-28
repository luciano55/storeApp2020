export function Swipper(props){

  let {id, modelo,memoria, precio, imageModel} = props,
  myFoto = imageModel ? ("assets/img/imageModel/" + imageModel): "assets/favicon.ico";
//  <img src="https:/placeimg.com/200/200/any" alt="">
  return ` <div class="swiper-slide">
                <div class="picture">
                          <img src=${myFoto} alt="no sale"  id ="seeDetailMobil" data-valor=${id}>
                </div>
                <div class="detail">
                    <h3>${modelo}</h3>
                    <span>  ${precio}</span>                    
     
                </div>
            </div>
 `;

}