import { FactoryBranding } from "./factoryBranding.js";
import { FactoryMenu } from "./factoryMenu.js";

const factoryBranding = new FactoryBranding();
const factoryMenu = new FactoryMenu();

export function FactoryHeader() {
  const div = document.createElement("div");
  div.appendChild(factoryBranding.index());
  div.appendChild(factoryMenu.index());
  return div;
}
