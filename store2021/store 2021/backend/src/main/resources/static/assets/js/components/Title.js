import api from "../helpers/harni_api.js";
export function Title(){
  let fechaActual = new Date(Date.now()).toLocaleTimeString();
  const $h1 = document.createElement("h1");
$h1.innerHTML = ` <a href = "${api.DOMAIN}" target ="_blank" rel="noopener">STORE 
${api.NAME.toUpperCase()}</a>
<h1>${fechaActual}</h1>` ;
return $h1;
}