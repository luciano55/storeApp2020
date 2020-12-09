import { FactoryTag } from "./factoryTag.js";
import { FactoryBox } from "./factoryBox.js";
import { FactoryMenu } from "./factoryMenu.js";
import { FactoryButton } from "./factoryButton.js";
import { GeneralPurposeFunctions } from "../function/general_purpose_functions.js";
import {VALIDATOR} from "../enum/enum_validator.js";
import {FactoryImg} from "../factory/factoryImg.js";
import {LOADER} from "../enum/enum_loader.js";


export function FactoryFrame() {
  const API = {};
  const factoryTag = new FactoryTag();
  const factoryMenu = new FactoryMenu();
  const factoryButton = new FactoryButton();
  const factoryBox = new FactoryBox();
  const generalPurposeFunctions = new GeneralPurposeFunctions();
  const factoryImg = new  FactoryImg();

const input = function(params){
  const myId = params.id;
  const divBoxInput = factoryTag.div(params);
  divBoxInput.id = "divbox_input_" + params.id;
  params.class?divBoxInput.className = params.class : divBoxInput.className = "box-input"; 
  //divBoxInput.setAttribute("data-divcontrol", "true");  
   params.class = "box-input-children";
  if(params.labelOn){
    params.for =  params.id;
     params.id = "label_" + params.id;     
     params.labelText ?  params.text = generalPurposeFunctions.capital(params.labelText) : params.text = generalPurposeFunctions.capital(myId) + ": ";
    divBoxInput.appendChild(factoryTag.label(params));  
      params.text  ="";
       params.id = myId;
  }
  const divInput =  factoryTag.div(params);
  divInput.id = "div_input_" + params.id;

  if(params.required){
    params.text = "*";
   params.id = "span_" + params.id;
   params.class = "asterisco";
   params.title = params.title;
   divInput.appendChild(factoryTag.span(params));
    params.id = myId;
     params.class = "";
  }
  params.validate = params.validate || VALIDATOR.ACCEPTED;
  
  const myInput = factoryTag.input(params);
   myInput.setAttribute("data-field", params.field)
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
const phone = function(params){  
      const phone  = factoryTag.div(params);
      phone.id = "div_" + params.id;    
      phone.className = "box-input";
      params.class = "box-input-children";   
      const littleImgBox = factoryBox.littleImgBox();
         littleImgBox.id = "litleImg_"  + params.id;
         phone.appendChild(littleImgBox);
         const myId = params.id;
         params.id = "select_" + myId;
        const select = factoryTag.select(params);
        select.setAttribute("data-phoneType", params.phoneType);  
          phone .appendChild(select);
        params.id = myId; 
        phone.appendChild(input(params));
        return phone;    
};
API.menuIndexButtonDarkLight = function () {
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
  API.viewTitle = function(id,title){
   let params = {};
    params.id = id;
    params.class = "section-formJM harni-form";     
    const section = factoryTag.section(params);
    params = {};
    params.text = title;
    const titleForm = factoryTag.h1(params);
    section.appendChild(titleForm);
    return section;
  }
  API.createControl = function(params, control){
  const divDataControl = factoryTag.div(params);
 divDataControl.id = "div_dataControl_" + params.id;
 divDataControl.setAttribute("data-divcontrol", "true");  
 divDataControl.appendChild(eval( control + "(params)"));
    return divDataControl;
  }
API.divSubmit = function(params){
  params = {};
  params.id = "div_submit";
  const divSubmit = factoryTag.div(params);
  divSubmit.style.display = "none";
  divSubmit.appendChild(factoryButton.submit());
  const loader = factoryImg.loader(LOADER.BALL_TRIANGLE);
  loader.style.display = "none";
  divSubmit.appendChild(loader);
  const error = factoryBox.error();
   error.style.display = "none";
  divSubmit.appendChild(error);
  return divSubmit;

}
API.divForgetPassword = function(params){
  params = {};
  params.id = "div_lostpassword";
  const divLostPassword = factoryTag.div(params);
  divLostPassword.style.display = "block";
  divLostPassword.appendChild(factoryButton.forgetPassword());  
  return divLostPassword;
}
API.menuClientButtonDarkLight = function () {
    let params = {};
    params.class =   "container mx-auto mt-5 text-center";   //"header-content container";
    const section = factoryTag.section(params);

    section.appendChild(factoryMenu.client());
    section.appendChild(factoryButton.darkLight());
    return section;
  };
  return API;
}
