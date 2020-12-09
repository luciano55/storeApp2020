import { FactoryBranding } from "../factory/factoryBranding.js";
import { FactoryFrame } from "../factory/factoryFrame.js";

const factoryBranding = new FactoryBranding();
const factoryFrame = new FactoryFrame();

export function ViewHeaderClient() {
  const div = document.createElement("div");
  div.appendChild(factoryBranding.dices());
  div.appendChild(factoryFrame.menuClientButtonDarkLight());
  return div;
}
