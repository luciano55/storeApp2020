import {FactoryView} from "../factory/factoryView.js"

export function ViewClient() {

  
  const API = {};
  
  API.register = function () {
           const factoryView = FactoryView();
           return factoryView.clientRegister();
       
    /*
    const viewRegister = factoryFrame.viewTitle("viewRegister","Register Client"); 

    const view = [
      
     { 
       field : ["nameClient"],
       factory : "factoryDataControl.lettersWithSpace",
       params : [2,50]        
      },      
     { 
       field : ["surnameClient"],
       factory : "factoryDataControl.lettersWithSpace",
        params : [2,100]        
      },
       { 
       field : ["nifClient"],
       factory : "factoryDataControl.dniNieCif"         
      },  
        
      { 
       field : ["mobileClient", "mobilePrivateClient"],
       factory : "factoryDataControl.phone" ,
       params : ["PHONE.MOBILE"]       
      },
      { 
       field : ["emailClient"],
       factory : "factoryDataControl.email"         
      },      
       { 
       field : ["birthdateClient"],
       factory : "factoryDataControl.date"         
      },
       { 
       field : ["postalCodeClient","postalCodeJobClient"],
       factory : "factoryDataControl.postalCode"         
      },
      { 
       field : ["clientAddress"],
       factory : "factoryDataControl.address"         
      },
       { 
       field : [],
       factory : "factoryButton.submit" ,
       params : ["none"]            
      }

    ];

    let nodeView  = "viewRegister";
      for (let i in view){       
        let k = 0;
        for (k in view[i].field){ 
                let exec =nodeView + ".appendChild(" +view[i].factory+ "( '" + view[i].field[k] + "'";         
                let j=0;
                for (j in view[i].params){
                  exec += "," + view[i].params[j];
                }
                exec += "))" ;
            // alert(exec);
            eval(exec);
        }
        if (!view[i].field.length){
            let exec =nodeView + ".appendChild(" +view[i].factory+ "( ";     
            let j=0;
            for (j in view[i].params){
                 if (j==0){
                         exec += "'"+ view[i].params[j] + "'";
                 }else {
                       exec += ",'"+ view[i].params[j] + "'";
                 }                 
                }   
            exec += "))" ; 
             alert(exec);
            eval(exec);
        }
      }
      /*
      // viewRegister.appendChild(factoryDataControl.lettersWithSpace ("nameClient",2,50));     
     //  viewRegister.appendChild(factoryDataControl.lettersWithSpace ("surnameClient",2,150));   
    
     viewRegister.appendChild(factoryDataControl.dniNieCif("nifClient"));
       factoryDataControl.phone(["mobileClient2", "mobilePrivateClient2"], PHONE.MOBILE,  viewRegister);    
       
       viewRegister.appendChild(factoryDataControl.email("emailClient"));   
       viewRegister.appendChild(factoryDataControl.date("birthdateClient"));   
       factoryDataControl.postalCode(["postalCodeClient","postalCodeJobClient"], viewRegister);
       viewRegister.appendChild(factoryDataControl.address("clientAddress"));*/
      // viewRegister.appendChild(factoryButton.submit("none"));

  };
  return API;
}
