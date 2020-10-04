import { FactoryTag } from "./factoryTag.js";
import { FactoryMenu } from "./factoryMenu.js";
import { FactoryButton } from "./factoryButton.js";

export function FactoryObject() {
  const API = {};
  let params = {};

  const factoryTag = new FactoryTag();
  const factoryMenu = new FactoryMenu();
  const factoryButton = new FactoryButton();

  API.menuButton = function () {
    params.class = "header-content container";
    const section = factoryTag.section(params);

    section.appendChild(factoryMenu.index());
    section.appendChild(factoryButton.darkLight());
    return section;
  };
  API.weatherLocation = function () {
    /* <div class="subhome">
    <div id="description"></div>
    <h1 id="temp"></h1>
    <div id="location"></div>
  </div>
</div>*/
    params.class = "subhome";
    const divExt = factoryTag.div(params);
    params = {};
    params.id = "description";
    const divFirst = factoryTag.div(params);
    params = {};
    params.id = "temp";
    const h1 = factoryTag.h1(params);
    params = {};
    params.id = "location";
    const divSecond = factoryTag.div(params);
    divExt.appendChild(divFirst);
    divExt.appendChild(h1);
    divExt.appendChild(divSecond);
    return divExt;
  };

  return API;
}
