import { FactoryBranding } from "./factoryBranding.js";
import { FactoryObject } from "./factoryObject.js";

const factoryBranding = new FactoryBranding();
const factoryObject = new FactoryObject();

export function FactoryHeader() {
  const div = document.createElement("div");
  div.appendChild(factoryBranding.index());
  div.appendChild(factoryObject.menuButton());
  return div;
}
