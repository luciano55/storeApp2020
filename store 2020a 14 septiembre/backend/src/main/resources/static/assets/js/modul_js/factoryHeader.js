import { FactoryBranding } from "./factoryBranding.js";
import { FactoryFrame } from "./factoryFrame.js";

const factoryBranding = new FactoryBranding();
const factoryFrame = new FactoryFrame();

export function FactoryHeader() {
  const div = document.createElement("div");
  div.appendChild(factoryBranding.index());
  div.appendChild(factoryFrame.menuButton());
  return div;
}
