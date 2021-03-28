export async function ajax(props){
  let {url, cbSuccess, method} = props;
  var headers = new Headers();

  //alert("url:" +url +"method: " + method);

headers.append('Accept', 'application/json'); // This one is enough for GET requests
headers.append('Content-Type', 'application/json'); // This one sends body

await fetch(url,{
  method:method || "GET",
  mode: 'same-origin',
  credentials: 'include',
  redirect: 'follow',
  headers: headers 
})
.then(res => res.ok ? res.json() : Promise.reject(res))
.then(json => cbSuccess(json))
.catch(err =>{
  let message = err.statusText || "Ocurrió un error al acceder a la API";
  document.getElementById("myBody").innerHTML = `
  <div class="error">
    <p> Error ${err.status}: ${message}</p>`;
    document.querySelector(".loader").style.display = "none";
    console.log(err);
});
}