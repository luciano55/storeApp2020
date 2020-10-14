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
  const generalPurposeFunctions = new GeneralPurposeFunctions();
 
  let params = {};

  API.input = function (params) {

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
   return div;
    /*
    var x = params.id;
    params.id = "div_" + params.id;
    params.class = "contenedorFila";
    params.text = "";
    var div = factoryTag.div(params);
    params.id = x;

    var miLabel = {
      id: "label_" + params.id,
      class: "labelInput",
      for: params.id,
      title: STORE.generalPurposeFunctions.capital(params.id) + ": ",
    };
    var label = factoryTag.label(miLabel);

    var miInput = {
      id: params.id,
      validate: params.validate || "STORE.validate.accepted",
      class: "etiqueta19 s8",
      type: params.type,
      size: params.size,
      minLength: params.minLength,
      maxLength: params.maxLength,
      required: params.required,
      placeholder: params.placeholder,
      title: params.title,
    };
    var input = factoryTag.input(miInput);

    var miLabelError = {
      id: "labelError_" + params.id,
      class: "labelInput",
      for: params.id,
      title: "Aviso: ",
    };
    var labelError = factoryTag.label(miLabelError);

    div.appendChild(label);
    div.appendChild(input);
    div.appendChild(labelError);
    return div;*/
  };
  API.labelSelectInput = function(params){    
    
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
        validate : params.validate || "",
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
    return div;
};
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
