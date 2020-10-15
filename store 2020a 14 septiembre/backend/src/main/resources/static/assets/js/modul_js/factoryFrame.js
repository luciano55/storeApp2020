import { FactoryTag } from "./factoryTag.js";
import { FactoryBox } from "./factoryBox.js";
import { FactoryMenu } from "./factoryMenu.js";
import { FactoryButton } from "./factoryButton.js";
import { GeneralPurposeFunctions } from "./general_purpose_functions.js";
import {VALIDATOR} from "./enum_validator.js";


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
    params.class = ""; // "harni-form"; 
    const div = factoryTag.div(params);     
   params.id  = myId ;
    return div;    
  }
  API.label_ = function (params) {
    const myId = params.id;
   if(params.labelOn=== true){      
      // myParams ={};
      
      params.for =  params.id;
      params.class = "label-frame-input";
      params.id  =  params.id ;
       params.text =  generalPurposeFunctions.capital( params.id) + ": ";
       params.id = "label_" + params.id;
       const x =  factoryTag.label(params);
       params.id  = myId;
       return x;
    }
  }
  API.select_ = function (params) {
     const select = factoryTag.select(params); 
     alert(select.id);
     //select.id = "select_" + select.id;
     return select;
  }
  API.input_  = function (params) {
      params.validate = params.validate || VALIDATOR.ACCEPTED;
    params.name = params.id;
     return  factoryTag.input(params);
  }

  API.divLabelInput = function (params) {
        const divLabelInput = API.div_(params).appendChild(API.label_(params));
        divLabelInput.appendChild(API.input_(params));
        return divLabelInput;
    /*
    const myId = params.id;
    params.id = "div_" + params.id;
    params.class = ""; // "harni-form"; 
    const div = factoryTag.div(params);      
   
    if(params.labelOn=== true){      
      // myParams ={};
      params.id = "label_" + myId;
      params.for = myId;
      params.class = "label-frame-input";

       params.text =  generalPurposeFunctions.capital(myId) + ": ";
       div.appendChild( factoryTag.label(params));
    }
    params.class ="";
     params.id = myId;
    params.validate = params.validate || VALIDATOR.ACCEPTED;
    params.name = myId;
     div.appendChild(factoryTag.input(params));

     div.appendChild(factoryBox.error());

   return div;
*/
  };
  API.divLabelSelectInput = function(params){
const divLabelSelectInput  = API.div_(params).appendChild(API.label_(params));
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

    return API.divLabelSelectInput(params);

    /*
    let myId = params.id;
    params.id = "div_" + myId;
    params.class = "contenedorFila";
    params.text = "";
    const div = factoryTag.div(params);   

    const myLabel = {
               id : "label_" + myId,
            class : "labelInput",            
              for : myId || "",
            title : generalPurposeFunctions.capital(myId) + ": " 
        }
   const label = factoryTag.label(myLabel); 

   const mySelect = {
        id : myId
    }
    const select = factoryTag.select(mySelect); 
      
  const myInput = {
              id : myId,
        validate : params.validate || VALIDATOR.ACCEPTED,
           class : "etiqueta19 s8" || "",
            type : params.type || "text",
            size : params.size || "", 
       minLength : params.minLength || "",
       maxLength : params.maxLength || "",
        required : params.required || "",
     placeholder : params.placeholder || "",
           title : params.title
        }
  const input = factoryTag.input(myInput);

   const myLabelError = {
        id : "labelError_" + params.id,
        class : "labelInput",
        for : params.id,
        title : "Aviso: "
    }
    const labelError = factoryTag.label(myLabelError);

    div.appendChild(label);
    div.appendChild(select);
    div.appendChild(input);
    div.appendChild(labelError);
    
    return div;*/
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
    /* <div class="subhome">
    <div id="description"></div>
    <h1 id="temp"></h1>
    <div id="location"></div>
  </div>
</div>*/
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
