import { FactoryFrame } from "../factory/factoryFrame.js";
import { VALIDATOR } from "../enum/enum_validator.js";

export function FactoryDataControl() {
  const API = {};
  const factoryFrame = new FactoryFrame();
  let phoneInicio = 0;
  let params = {};


 const tfno = function(params){
   params.id = "phone_" + params.id;
   params.placeholder = "input your " + params.class;
    params.validate = VALIDATOR.PHONE;
    params.phoneType =  params.class;
    params.tipo = params.class;
    params.labelOn = true;
    params.type = "text";    
    params.minLength = "9";
    params.maxLength = "9";
    params.required = true;
    params.title = "9 characters";
    params.infoBox = true;
    return factoryFrame.phone(params);

 }
 const landline = function (myId) {
     params = {};
    params.id = myId;
    params.class = "landline";   
    return tfno(params);
    }
 const mobile = function (myId) {
     params = {};
    params.id = myId;
    params.class = "mobile";
    return tfno(params);    
    }
 const cp = function (i) {
            var params = {
                id: "cp" + i,
                validate: VALIDATOR.CP,
                  labelOn : true,
                type: "text",
                required: true,
                title: "Código Postal",
                size: "5",
                minLength: "5",
                maxLength: "5",
                placeholder: "Intro postal code",
                infoBox: true
            }
            return factoryFrame.divLabelInput(params);
        };
API.email = function(){
        var params = {
            id: "email",
            validate: VALIDATOR.EMAIL,
            labelOn : true,
            type: "email",
            size: "25",
            minLength: "10",
            maxLength: "150",
            required: true,
            placeholder: "input your Email",
            title: "10 to 150 characters"
        }
        return factoryFrame.divLabelInput(params);
    };      
  API.firstname = function () {
    params = {};
    params.id = "firstname";
    params.validate = VALIDATOR.LETTERSWITHSPACE;
    params.labelOn = true;
    params.type = "text";
    params.placeholder = "input your FirstName";
    params.minLength = "2";
    params.maxLength = "50";
    params.required = true;
    params.title = "2 to 50 characters";

    return factoryFrame.divLabelInput(params);
    /*

    var myObject = {
      id: "firstname",
      validate: "STORE.validate.lettersWithSpace",
      type: "text",
      size: "25",
      minLength: "2",
      maxLength: "50",
      required: true,
      placeholder: "input your FirstName",
      title: "2 to 50 characters",
    };
    return STORE.frameLabelInput(myObject);*/
  }; 
  API.lastname = function () {
     params = {};
    params.id = "lastname";
    params.validate = VALIDATOR.LETTERSWITHSPACE;
    params.labelOn = true;
    params.type = "text";
    params.placeholder = "input your LastName";
    params.minLength = "2";
    params.maxLength = "100";
    params.required = true;
    params.title = "2 to 100 characters";
    return factoryFrame.divLabelInput(params);   
  };  
  API.nif = function () {
     params = {};
    params.id = "nif";
    params.validate = VALIDATOR.DNI_NIE_CIF;
    params.labelOn = true;
    params.type = "text";
    params.placeholder = "input your nif";
    params.minLength = "9";
    params.maxLength = "9";
    params.required = true;
    params.title = "9 characters";
    return factoryFrame.divLabelInput(params);
    };  
  API.phone = function(tipo, num, node){
        let i;
          for ( i=phoneInicio; i<(num + phoneInicio); i++){
            // node.appendChild(tipo=="mobile"?mobile(i):landline(i));
             node.appendChild(eval(tipo + "(i)"));
          }
          phoneInicio = i;
          return node;
  }  
  API.postalCode = function(num, node) {
    for (let  i = 0; i< num; i++){
             node.appendChild(cp(i));
          }          
    return node;
  }
  return API;
}
