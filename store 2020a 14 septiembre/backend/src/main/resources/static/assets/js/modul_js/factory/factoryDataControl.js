import { FactoryFrame } from "../factory/factoryFrame.js";
import { VALIDATOR } from "../enum/enum_validator.js";
import { PHONE } from "../enum/enum_phone.js";

export function FactoryDataControl() {
  const API = {};
  let x = 0;
  const factoryFrame = new FactoryFrame();
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
      return factoryFrame.createControl(params,"phone");
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
              return factoryFrame.createControl(params,"input");
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
        return factoryFrame.createControl(params,"input");
    };   
API.address = function(){
  const  params = {
        id : "address",
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
API.birthdate = function(){
    const params = {
            id: "birthdate",
            validate: VALIDATOR.DATE,
            labelOn : true,
            type: "date",
            size: "25",
            minLength: "10",
            maxLength: "10",
            //required: false,
            placeholder: "into your birthdate",
            title: "10 to 10 characters",
            errorBox : true
        }
          return factoryFrame.createControl(params,"input");
}
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
      return factoryFrame.createControl(params,"input");
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
     return factoryFrame.createControl(params,"input");
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
     return factoryFrame.createControl(params,"input");
    };  
  API.phone = function(tipo, num, node){
        let   i = parseInt(sessionStorage.getItem("autoIncrementPhone"));
       alert(i);
        /*
      if (sessionStorage.getItem("autoIncrementPhone")) {
         autoIncrementPhone = sessionStorage.getItem("autoIncrementPhone");
         autoIncrementPhone = parseInt(autoIncrementPhone);}
         else {
                       autoIncrementPhone = 0;
         }    */

            
           const end = num + i;
          for (  i; i<end; i++){              
                node.appendChild(tfno(i,tipo));
          }
        
         sessionStorage.setItem("autoIncrementPhone",i);        
          return node;
  }  
 /* API.resetPhoneInicio = function(){
    x=0;
    //sessionStorage.setItem("phoneInicio",0);
  }*/
  API.postalCode = function(num,node,label) {
    for (let  i = 0; i< num;  i++){
             node.appendChild(cp(i,label[i]));
          }          
    return node;
  }



  return API;
}
