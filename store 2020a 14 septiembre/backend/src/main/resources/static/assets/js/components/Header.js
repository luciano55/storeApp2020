import { GetMenuShowcase } from "../showcase/getMenuShowcase.js";
import { Menu } from "./Menu.js";
import { SearchForm } from "./SearchForm.js";
import { Title } from "./Title.js";

export function Header(node){
  const $header = document.createElement("header");
  $header.classList.add("header");
  $header.appendChild(Title());
 $header.appendChild(Menu());
  $header.appendChild(SearchForm());
  node.appendChild($header)
   GetMenuShowcase(node);
 
}