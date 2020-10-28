import { FactoryTag } from "./factoryTag.js";
import { FactoryBox } from "./factoryBox.js";
import { FactoryMenu } from "./factoryMenu.js";
import { FactoryButton } from "./factoryButton.js";
import { GeneralPurposeFunctions } from "../function/general_purpose_functions.js";
import {VALIDATOR} from "../enum/enum_validator.js";


export function FactoryFrame() {
  const API = {};
  const factoryTag = new FactoryTag();
  const factoryMenu = new FactoryMenu();
  const factoryButton = new FactoryButton();
  const factoryBox = new FactoryBox();
  const generalPurposeFunctions = new GeneralPurposeFunctions();

API.input = function(params){
  const myId = params.id;
  const divBoxInput = factoryTag.div(params);
  divBoxInput.id = "divbox_input_" + params.id;
  params.class?divBoxInput.className = params.class : divBoxInput.className = "box-input";
 
  
  if(params.labelOn){
    params.for =  params.id;
     params.id = "label_" + params.id;
     params.class = "box-input-children";
     params.text =  generalPurposeFunctions.capital(myId) + ": ";
    divBoxInput.appendChild(factoryTag.label(params));  
      params.text  ="";
       params.id = myId;
  }
  const divInput =  factoryTag.div(params);
  divInput.id = "div_input_" + params.id;
  if(params.required){
    params.text = "* "
   params.id = "span_" + params.id;
   divInput.appendChild(factoryTag.span(params));
    params.id = myId;
  }
  params.validate = params.validate || VALIDATOR.ACCEPTED;
  const myInput = factoryTag.input(params);
  
  if (params.phoneType){
       myInput.setAttribute("data-phoneType", params.phoneType);  
     }     
  divInput.appendChild(myInput);     
  divBoxInput.appendChild(divInput);
  if(params.errorBox){
    const errorBox =  factoryBox.error();
    errorBox.id = "boxerror_" + params.id;
    //errorBox.classList.add("box-input-children");
    divBoxInput.appendChild(errorBox);
  }
  if(params.infoBox){
     const errorInfo =  factoryBox.info();
     errorInfo.id = "boxinfo_" + params.id;
     divBoxInput.appendChild(errorInfo);
    }    
    return divBoxInput;
}
  API.phone = function(params){  
    //params.s = "box-input-children";
      const phone  = factoryTag.div(params);
      phone.id = "div_" + params.id;    
      phone.className = "box-input";
      params.class = "box-input-children";   
      const littleImgBox = factoryBox.littleImgBox();
         littleImgBox.id = "litleImg_"  + params.id;
         //littleImgBox.className = "box-input-children";   
         phone.appendChild(littleImgBox);
         const myId = params.id;
         params.id = "select_" + myId;
        const select = factoryTag.select(params);
        //select.className = "box-input-children";   
        select.setAttribute("data-phoneType", params.phoneType);  
          phone .appendChild(select);
        params.id = myId;
      //  const input = API.input(params);
      //  input.setAttribute("data-phoneType", params.phoneType);  
     //   phone.appendChild(input);
     // params.class = "box-input-children";   
       phone.appendChild(API.input(params));
        return phone;    
};
  API.menuButton = function () {
    let params = {};
    params.class = "header-content container";
    const section = factoryTag.section(params);

    section.appendChild(factoryMenu.index());
    section.appendChild(factoryButton.darkLight());
    return section;
  };
API.weatherLocation = function () {
    
let params = {};
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
