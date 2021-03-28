export function Menu(){
  const $menu = document.createElement("nav");
  $menu.classList.add("menu");
  $menu.innerHTML = `<a href="#/">Home</a>
  <span>-</span>
  <a href="#/carousel">Carousel</a>
  <span>-</span>
  <a href="#/search">Búsqueda</a>
  <span>-</span>
    <a href="#/contacto">Contacto</a>
  <a href="#/out">Out</a>
  `;
  return $menu;
}