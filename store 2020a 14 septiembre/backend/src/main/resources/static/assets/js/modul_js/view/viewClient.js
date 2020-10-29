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
   viewRegister.appendChild(factoryDataControl.email());
    factoryDataControl.phone(PHONE.MOBILE, 2, viewRegister);
     viewRegister.appendChild(factoryDataControl.birthdate());
  factoryDataControl.postalCode(1, viewRegister,["domicilio habitual"]);
  viewRegister.appendChild(factoryDataControl.address());



    return viewRegister;

  };
  return API;
}
