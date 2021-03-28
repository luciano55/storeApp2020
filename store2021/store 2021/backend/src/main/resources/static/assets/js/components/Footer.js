export function Footer(){

    const $menu = document.createElement("footer");
  $menu.classList.add("menu");
  $menu.innerHTML = `<div class="flex flex-row justify-center "><span id="firstPage">First</span>
  <span>-</span>
  <span id="previousPage" data-valor="">Previous</span>
  <span>-</span>
    <span id="currentPage"></span>
   <span>-</span>
  <span id="nextPage" data-valor="">Next</span>
  <span>-</span>
  <span id="endPage">End</span></div>`;
  return $menu;

}