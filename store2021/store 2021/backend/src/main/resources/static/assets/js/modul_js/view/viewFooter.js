import { FactoryButton } from "../factory/factoryButton.js";

export function ViewFooter() {  
  const factoryButton = new FactoryButton();
  const footer  = document.createElement("div");
  const humburgerButton = factoryButton.hamburger();
  footer.appendChild(humburgerButton);
  const scroll = factoryButton.scrollTop();
  footer.appendChild(scroll);
  return footer;
}
