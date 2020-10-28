import { FactoryDataControl } from "../factory/factoryDataControl.js";
import { FactoryTag } from "../factory/factoryTag.js";
import {PHONE} from "../enum/enum_phone.js"

export function ViewClient() {
  const factoryDataControl = new FactoryDataControl();
 const factoryTag = new FactoryTag();
  
  const API = {};
  let params = {};
  API.register = function () {
    params.id = "seccion1";
    params.class = "section-formJM harni-form";     
    const section = factoryTag.section(params);
    params = {};
    params.text = "Register Client";
    const titleForm = factoryTag.h1(params);
    section.appendChild(titleForm);

   section.appendChild(factoryDataControl.firstname());
   section.appendChild(factoryDataControl.lastname());
   section.appendChild(factoryDataControl.nif());
 
  factoryDataControl.phone(PHONE.MOBILE, 2, section);
  factoryDataControl.phone(PHONE.LANDLINE, 1, section);

  factoryDataControl.postalCode(2, section);

  section.appendChild(factoryDataControl.email());

    return section;

  };
  return API;
}
