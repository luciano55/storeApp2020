import { FactoryFrame } from "../factory/factoryFrame.js";
import { VALIDATOR } from "../enum/enum_validator.js";
import { PHONE } from "../enum/enum_phone.js";

export function FactoryDataControl() {
  const API = {};
  const factoryFrame = new FactoryFrame();
  let phoneInicio = 0;
  let params = {};


 const tfno = function(myId, tipo){
   const params = {  
             id : "phone_" +myId,
             placeholder : "input your " +tipo,
             validate : VALIDATOR.PHONE,
             phoneType : tipo,
             labelOn : false,
            type : "text",   
            minLength : "9",
            maxLength : "9",
            required : true,
            title : "9 characters",
            infoBox : true,
            errorBox : true
     }
    return factoryFrame.phone(params);
 } 
 const cp = function (i,label) {
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
                infoBox: true,
                labelText: label              
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
                //node.appendChild(eval(tipo + "(i)"));
                node.appendChild(tfno(i,tipo));
          }
          phoneInicio = i;
          return node;
  }  
  API.postalCode = function(num, node,label) {
    for (let  i = 0; i< num; i++){
             node.appendChild(cp(i,label[i]));
          }          
    return node;
  }
  return API;
}
