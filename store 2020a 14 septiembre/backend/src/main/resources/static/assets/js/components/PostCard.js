export function PostCard(props){

  let {id, modelo,memoria, precio, imageModel} = props,
  myFoto = imageModel ? ("assets/img/imageModel/" + imageModel): "assets/favicon.ico";
//  <img src="https:/placeimg.com/200/200/any" alt="">
  return `  
  <article class="post-card">  

     <img src=${myFoto} class="showcaseJM"alt="no sale">
    <h2>${modelo}</h2>
    <p>
                <span>
                  ${memoria}
                </span>
                  <span>
                  ${precio}
                </span>

                  <span id ="seeMobil" data-valor=${id}>
                  Ver detalle
                </span>
    </p>
  </article>  
  `;
}