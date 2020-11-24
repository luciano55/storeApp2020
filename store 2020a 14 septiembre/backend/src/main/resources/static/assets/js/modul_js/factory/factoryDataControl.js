import { FactoryFrame } from "../factory/factoryFrame.js";
import { VALIDATOR } from "../enum/enum_validator.js";
import { PHONE } from "../enum/enum_phone.js";

export function FactoryDataControl() {
  const API = {};
  let x = 0;
  const factoryFrame = new FactoryFrame();
 const tfno = function(field, myId, tipo){
   const params = {  
             id : "phone_" +myId,
             placeholder : "input your " +tipo,
             labelText : field,
             field : field,
             validate : VALIDATOR.PHONE,
             phoneType : tipo,
             labelOn : true,
            type : "text",   
            minLength : "9",
            maxLength : "9",
            required : true,
            title : "9 characters",
            infoBox : true,
            errorBox : true
     }
      return factoryFrame.createControl(params,"phone");
 } 
 const cp = function (field, i) {
            var params = {
                id: "cp" + i,
                field : field,
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
                labelText: field              
            }
              return factoryFrame.createControl(params,"input");
        };
API.email = function(field){
        const params = {
            id: field,
            field : field,
            validate: VALIDATOR.EMAIL,
            labelOn : true,
            type: "email",
            size: "25",
            minLength: "10",
            maxLength: "150",
            required: true,
            placeholder: "input your " + field,
            title: "10 to 150 characters",
            errorBox : true,
        }
        return factoryFrame.createControl(params,"input");
    };   
API.address = function(field){
  const  params = {
        id : field,
        field : field,
        validate : VALIDATOR.ADDRESS,
        labelOn : true,
        type : "text",
        placeholder : "input your address",
        minLength : "2",
        maxLength : "100",
        required : true,
        title : "2 to 100 characters",
        errorBox : true
   }
      return factoryFrame.createControl(params,"input");
}   
API.date = function(field){
    const params = {
            id: field,
            field : field,
            validate: VALIDATOR.DATE,
            labelOn : true,
            type: "date",
            size: "25",
            minLength: "10",
            maxLength: "10",
            //required: false,
            placeholder: "into your " + field,
            title: "10 to 10 characters",
            errorBox : true
        }
          return factoryFrame.createControl(params,"input");
}
API.lettersWithSpace = function (field, min, max) {
   const  params = {
        id : field,
        field: field,
        validate : VALIDATOR.LETTERSWITHSPACE,
        labelOn : true,
        type : "text",
        placeholder : "input your " + field,
        minLength : min,
        maxLength : max,
        required : true,
        title : "2 to 50 characters",
        errorBox : true
   }
      return factoryFrame.createControl(params,"input");
  }; 
API.lastname = function ( field) {
     const  params = {
        id : "lastname",
         field: field,
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
     return factoryFrame.createControl(params,"input");
  };  
API.dniNieCif = function (field) {
      const  params = {
        id : field,
        field: field,
        validate : VALIDATOR.DNI_NIE_CIF,
        labelOn : true,
        type : "text",
        placeholder : "input your " + field,
        minLength : "9",
        maxLength : "9",
        required : true,
        title : "9 characters",
        errorBox : true,
      } 
     return factoryFrame.createControl(params,"input");
    };  

API.postalCode = function(field, node) {
  let i =0;
  if (sessionStorage.getItem("autoIncrementPostalCode")){
          i = parseInt(sessionStorage.getItem("autoIncrementPostalCode"));
  }    
 if (Array.isArray(field)) {          
          for (let  j= 0; j<  field.length;  j++, i++){
                  node.appendChild(cp(field[j], i));
                }   
     }  else{            
           node = cp(field,i);
           i++;               
        } 
   sessionStorage.setItem("autoIncrementPostalCode",i);
   return node;
  }
  API.phone = function(field, tipo,node){
       let i =0;
  if (sessionStorage.getItem("autoIncrementPhone")){
          i = parseInt(sessionStorage.getItem("autoIncrementPhone"));
  } 
        if (Array.isArray(field)) {           
            for (  let j=0; j< field.length; j++, i++){   
                   node.appendChild(tfno(field[j], i, tipo));
              }
        }else{            
           node = tfno(field, i, tipo);
            i++;
        }
        sessionStorage.setItem("autoIncrementPhone",i);        
        return node;      
  } 
  API.user = function(field, min, max) {
    const  params = {
        id : field,
        field : field,
        validate : VALIDATOR.USER,
        labelOn : true,
        type : "text",
        placeholder : "input your user:",
        minLength : min,
        maxLength : max,
        required : true,
        title : "7: 1 letra nif,  2 y 3 los dos primeros; 4, 5 minuto actual;  6 y 7 segundo actual",
        errorBox : true
   }
      return factoryFrame.createControl(params,"input");
  }
  API.password = function(field,min,max) {
    const  params = {
        id : field,
        field : field,
        validate : VALIDATOR.PASSWORD,
        labelOn : true,
        type : "password",
        placeholder : "input your password:",
        minLength : min,
        maxLength : max,
        required : true,
        title : "8-15: POR DEFECTO: última letra nif en mayuscula,  última letra nif en minúscula, '_' guión bajo, los dos siguiente 4º y 5º del nif y los dos últimos 2º y 3º del nifl",
        errorBox : true
   }
      return factoryFrame.createControl(params,"input");
  }
  return API;
}
