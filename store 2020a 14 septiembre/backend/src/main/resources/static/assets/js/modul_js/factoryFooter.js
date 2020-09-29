import { FactoryButton } from "./factoryButton.js";
export function FactoryFooter() {
  const factoryButton = new FactoryButton();
  const humburgerButton = factoryButton.hamburgerButton();
  return humburgerButton;
}
