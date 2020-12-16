import {FactoryFrame} from "./factoryFrame.js";
import {FactoryDataControl} from "./factoryDataControl.js";
import {FactoryButton} from "./factoryButton.js";
import {FactoryBox} from "./factoryBox.js";
import {PHONE} from "../enum/enum_phone.js";
import {FactoryImg} from "./factoryImg.js"
export function FactoryView() {
  const factoryFrame = FactoryFrame();
  const factoryDataControl = FactoryDataControl();
  const factoryButton = FactoryButton();
  const factoryBox = FactoryBox();
  const factoryImg = FactoryImg();

  const API = {};

  const createView = function(data,title){
      let nodeView  = "node";
     const node = factoryFrame.viewTitle("div_view_crud",title); 
     for (let i in data){       
        let k = 0;
        for (k in data[i].field){ 
                let exec =nodeView + ".appendChild(" +data[i].factory+ "( '" + data[i].field[k] + "'";         
                let j=0;
                for (j in data[i].params){
                  exec += "," + data[i].params[j];
                }
                exec += "))" ;
            //alert(exec);
            eval(exec);
        }
        if (!data[i].field.length){
            let exec =nodeView + ".appendChild(" +data[i].factory+ "( ";     
            let j=0;
            for (j in data[i].params){
                 if (j==0){
                         exec += "'"+ data[i].params[j] + "'";
                 }else {
                       exec += ",'"+ data[i].params[j] + "'";
                 }                 
                }   
            exec += "))" ; 
             //alert(exec);
            eval(exec);
        }
      }
      return node;
  }
  API.clientRegister = function(){
      const data = [           
     { 
       field : ["name"],
       factory : "factoryDataControl.lettersWithSpace",
       params : [2,50]        
      },      
     { 
       field : ["surname"],
       factory : "factoryDataControl.lettersWithSpace",
        params : [2,100]        
      },
       { 
       field : ["nif"],
       factory : "factoryDataControl.dniNieCif"         
      },  
       
      { 
       field : ["mobile"],
       factory : "factoryDataControl.phone" ,
       params : ["PHONE.MOBILE"]       
      },      
      { 
       field : ["email"],
       factory : "factoryDataControl.email"         
      },      
       { 
       field : ["birthdate"],
       factory : "factoryDataControl.date"         
      },
       { 
       field : ["postalCode"],
       factory : "factoryDataControl.postalCode"         
      },
      { 
       field : ["address"],
       factory : "factoryDataControl.address"         
      },
       { 
       field : [],
       factory : "factoryFrame.divSubmit"                 
      }
          ];     
      return createView(data, "Register Customer");   
  }
   API.clientLogin = function(){
      const data = [           
     { 
       field : ["user"],
       factory : "factoryDataControl.user",
       params : [7,7]        
      },         
     { 
       field : ["password"],
       factory : "factoryDataControl.password",
        params : [9,15]        
      },   
       { 
       field : [],
       factory : "factoryFrame.divSubmit"                 
      },
       { 
       field : [],
       factory : "factoryFrame.divForgetPassword"                 
      }
          ];     
      return createView(data, "Login Customer");   
  }
  API.clientForgetPassword = function(){
    const data = [ 
      {
        field:[],
        factory : "factoryBox.informationPanel" 
      },
       { 
       field : ["nif"],
       factory : "factoryDataControl.dniNieCif"         
      },           
     { 
       field : ["email"],
       factory : "factoryDataControl.email"         
      },  
       { 
       field : [],
       factory : "factoryFrame.divSubmit"                 
      },             
      { 
       field : [],
       factory : "factoryButton.cancel"         
      }     
          ];     
      return createView(data, "Forget Password");  
  }
  API.clientUpdateAvatar = function(){
     return factoryFrame.formUpImage();
  }
  return API;
}  
