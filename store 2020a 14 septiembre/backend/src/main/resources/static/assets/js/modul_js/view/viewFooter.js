import { FactoryButton } from "../factory/factoryButton.js";
export function ViewFooter() {
  const factoryButton = new FactoryButton();
  const humburgerButton = factoryButton.hamburger();
  return humburgerButton;
}
