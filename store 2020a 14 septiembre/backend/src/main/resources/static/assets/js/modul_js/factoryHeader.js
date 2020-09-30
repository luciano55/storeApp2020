//STORE2021.namespace("STORE2021.FactoryHeader");

import { FactoryBranding } from "./factoryBranding.js";

const factoryBranding = new FactoryBranding();

export function FactoryHeader() {
  return factoryBranding.brandingIndex();
}
