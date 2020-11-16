import {FactoryFrame} from "./factoryFrame.js";
import {FactoryDataControl} from "./factoryDataControl.js";
import {FactoryButton} from "./factoryButton.js";
import {PHONE} from "../enum/enum_phone.js"
export function FactoryView() {
  const factoryFrame = FactoryFrame();
  const factoryDataControl = FactoryDataControl();
  const factoryButton = FactoryButton();
  const API = {};

  const createView = function(data,title){
      let nodeView  = "node";
     const node = factoryFrame.viewTitle("viewRegister",title); 
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
  return API;
}  