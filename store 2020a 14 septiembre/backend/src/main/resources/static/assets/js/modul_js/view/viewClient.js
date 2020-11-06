import { FactoryDataControl } from "../factory/factoryDataControl.js";
import {PHONE} from "../enum/enum_phone.js";
import {FactoryFrame} from "../factory/factoryFrame.js";
import {FactoryButton} from "../factory/factoryButton.js";

export function ViewClient() {
  const factoryDataControl = new FactoryDataControl();
  const factoryFrame = new FactoryFrame();
const factoryButton = new FactoryButton();
  
  const API = {};
  
  API.register = function () {
    const viewRegister = factoryFrame.viewTitle("viewRegister","Register Client"); 

       viewRegister.appendChild(factoryDataControl.firstname());  
     
       viewRegister.appendChild(factoryDataControl.lastname());  
         /*
      viewRegister.appendChild(factoryDataControl.nif());
      viewRegister.appendChild(factoryDataControl.email());
      //factoryDataControl.phone(PHONE.MOBILE, 1, viewRegister);     
      viewRegister.appendChild(factoryDataControl.birthdate());     
     // factoryDataControl.postalCode(1, viewRegister,["cp del domicilio habitual"]);
      viewRegister.appendChild(factoryDataControl.address());*/
      viewRegister.appendChild(factoryButton.submit("none"));

    return viewRegister;
  };
  return API;
}
