export async function ajaxPost(props){
  let {url, cbSuccess, method, body} = props;
  var headers = new Headers();

headers.append('Accept', 'application/json'); // This one is enough for GET requests
headers.append('Content-Type', 'application/json'); // This one sends body

await fetch(url,{
  method: method || "GET",
  mode: 'same-origin',
  credentials: 'include',
  redirect: 'follow',
  headers: headers,
  body: JSON.stringify(body)
})
.then(res => res.ok ? cbSuccess() : Promise.reject(res))
.catch(err =>{
  let message = err.statusText || "Ocurrió un error al acceder a la API";
  document.getElementById("main").innerHTML = `
  <div class="error">
    <p> Error ${err.status}: ${message}</p>`;
document.querySelector(".loader").style.display = "none";
    console.log(err);
});
}