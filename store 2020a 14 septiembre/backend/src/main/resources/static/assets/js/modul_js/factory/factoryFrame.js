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

  API.div_ = function (params) {
    const myId = params.id;
    params.id = "div_" + params.id;
   const div = factoryTag.div(params);     
   params.id  = myId ;
    return div;    
  }
  API.label_ = function (params) {  
   
   if(params.labelOn=== true){      
      const myId = params.id;
      params.for =  params.id;
      //params.class = "label-frame-input";
      params.text =  generalPurposeFunctions.capital( params.id) + ": ";
       params.id = "label_" + params.id;
       const x =  factoryTag.label(params);
       params.text ="";
       params.id  = myId;
       return x;
    }
    const labelEmpty ={};
    labelEmpty.class="none";
    return factoryTag.label(labelEmpty);
  }
  API.select_ = function (params) {
     const select = factoryTag.select(params); 
     select.id = "select_" + params.id;
     return select;
  }
  API.input_  = function (params) {
    const myId  = params.id;
    params.id = "div_input_" + myId;
   // params.class = "class";
   const div = factoryTag.div(params);  
   // etiqueta
      params.id = myId;
      params.validate = params.validate || VALIDATOR.ACCEPTED;
      params.phoneType = params.phoneType || "";
     params.name = params.id;   
     const myInput = factoryTag.input(params);
     if (params.phoneType){
       myInput.setAttribute("data-phoneType", params.phoneType);  
     }          
    div.appendChild(myInput);
    div.appendChild(API.errorBox_(params));
    if(params.infoBox){
          div.appendChild(API.infoBox_(params));
    }    
    return div;
  }  
  API.errorBox_ = function(params){
    const errorBox = factoryBox.error();
    errorBox.id = "boxerror_" + params.id;
    return errorBox;
  }
  API.infoBox_ = function(params){
    const infoBox = factoryBox.info();
    infoBox.id = "boxinfo_" + params.id;
    return infoBox;
  }

  API.divLabelInput = function (params) {
        const divLabelInput = API.div_(params);
        divLabelInput.appendChild(API.label_(params));
        divLabelInput.appendChild(API.input_(params));        
        return divLabelInput;    
  };
  API.divLabelSelectInput = function(params){
      const divLabelSelectInput  = API.div_(params);
         divLabelSelectInput.appendChild(API.label_(params));
         divLabelSelectInput .appendChild(API.select_(params));
         divLabelSelectInput .appendChild(API.input_(params));        
        return divLabelSelectInput ;
    /*
      const divLabelInput = API.divLabelInput(params);
      alert()
      const label = document.getElementById("label_"+params.id);
      alert(label.id);
      const select = factoryTag.select(params); 
      label.parentNode.insertBefore(select, label.nextSibling);
      return divLabelInput;*/
  }
  API.phone = function(params){  
      const phone  = API.div_(params);
      const littleImgBox = factoryBox.littleImgBox();
         littleImgBox.id = "litleImg_"  + params.id;
         phone.appendChild(littleImgBox);
         phone .appendChild(API.select_(params));
         phone.appendChild(API.input_(params));       
        return phone ;    
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
