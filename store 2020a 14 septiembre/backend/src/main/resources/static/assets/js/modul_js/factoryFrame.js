import { FactoryTag } from "./factoryTag.js";
import { FactoryBox } from "./factoryBox.js";
import { FactoryFunction } from "./factoryFunction.js";

export function FactoryFrame() {
  const API = {};
  const factoryTag = new FactoryTag();
  const factoryFunction = new FactoryFunction();
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

       params.text =  factoryFunction.capital(myId) + ": ";
       div.appendChild( factoryTag.label(params));
    }
    params.class ="";
     params.id = myId;
    params.validate = params.validate || "accepted";
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
            title : factoryFunction.capital(myId) + ": " 
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
  return API;
}
