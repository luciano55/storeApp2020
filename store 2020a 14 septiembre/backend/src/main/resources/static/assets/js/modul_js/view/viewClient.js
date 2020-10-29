import { FactoryDataControl } from "../factory/factoryDataControl.js";
import {PHONE} from "../enum/enum_phone.js";
import {FactoryFrame} from "../factory/factoryFrame.js"

export function ViewClient() {
  const factoryDataControl = new FactoryDataControl();
  const factoryFrame = new FactoryFrame();
  
  const API = {};
  
  API.register = function () {
    const viewRegister = factoryFrame.viewTitle("viewRegister","Register Client");
       viewRegister.appendChild(factoryDataControl.firstname());
        viewRegister.appendChild(factoryDataControl.lastname());
        viewRegister.appendChild(factoryDataControl.nif());
 
  factoryDataControl.phone(PHONE.MOBILE, 2, viewRegister);
  factoryDataControl.phone(PHONE.LANDLINE, 1, viewRegister);

  factoryDataControl.postalCode(2, viewRegister,["domicilio","2ª residencia"]);

  viewRegister.appendChild(factoryDataControl.email());

    return viewRegister;

  };
  return API;
}
