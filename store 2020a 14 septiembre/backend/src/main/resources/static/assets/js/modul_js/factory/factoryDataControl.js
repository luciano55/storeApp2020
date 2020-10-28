import { FactoryFrame } from "../factory/factoryFrame.js";
import { VALIDATOR } from "../enum/enum_validator.js";
import { PHONE } from "../enum/enum_phone.js";

export function FactoryDataControl() {
  const API = {};
  const factoryFrame = new FactoryFrame();
  let phoneInicio = 0;
  let params = {};


 const tfno = function(params){
   params.id = "phone_" + params.id;
   params.placeholder = "input your " +params.phoneType;
    params.validate = VALIDATOR.PHONE;
   // params.phoneType =  params.class;
   // params.tipo = params.class;
    params.labelOn = false;
    params.type = "text";    
    params.minLength = "9";
    params.maxLength = "9";
    params.required = true;
    params.title = "9 characters";
    params.infoBox = true;
    params.errorBox = true;
    return factoryFrame.phone(params);

 }
 const landline = function (myId) {
     params = {};
    params.id = myId;
    //params.class = "box-input-children";   
    params.phoneType = PHONE.LANDLINE;
    return tfno(params);
    }
 const mobile = function (myId) {
     params = {};
    params.id = myId;
   // params.class = "box-input-children";
     params.phoneType = PHONE.MOBILE;
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
                errorBox:true,
                infoBox: true
            }
            return factoryFrame.input(params);
        };
API.email = function(){
        const params = {
            id: "email",
            validate: VALIDATOR.EMAIL,
            labelOn : true,
            type: "email",
            size: "25",
            minLength: "10",
            maxLength: "150",
            required: true,
            placeholder: "input your Email",
            title: "10 to 150 characters",
            errorBox : true,
        }
        return factoryFrame.input(params);
    };      
  API.firstname = function () {
   const  params = {
        id : "firstname",
        validate : VALIDATOR.LETTERSWITHSPACE,
        labelOn : true,
        type : "text",
        placeholder : "input your FirstName",
        minLength : "2",
        maxLength : "50",
        required : true,
        title : "2 to 50 characters",
        errorBox : true
   }
    return factoryFrame.input(params);
  }; 
  API.lastname = function () {
     const  params = {
        id : "lastname",
        validate : VALIDATOR.LETTERSWITHSPACE,
        labelOn : true,
        type : "text",
        placeholder : "input your LastName",
        minLength : "2",
        maxLength : "100",
        required : true,
        title : "2 to 100 characters",
        errorBox : true,
      }
    return factoryFrame.input(params);   
  };  
  API.nif = function () {
      const  params = {
        id : "nif",
        validate : VALIDATOR.DNI_NIE_CIF,
        labelOn : true,
        type : "text",
        placeholder : "input your NIF",
        minLength : "9",
        maxLength : "9",
        required : true,
        title : "9 characters",
        errorBox : true,
      } 
    return factoryFrame.input(params);
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
