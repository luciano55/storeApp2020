export function GeneralPurposeFunctions() {
  const API = {};
   
     API.capital  = function(string){        
      return string.charAt(0).toUpperCase() + string.slice(1).toLowerCase();   
     } 
    API.resetAutoIncrementPhoneCP = function(){
        sessionStorage.setItem("autoIncrementPhone",0);  
        sessionStorage.setItem("autoIncrementPostalCode",0);    
    }
     
    return API;
  }