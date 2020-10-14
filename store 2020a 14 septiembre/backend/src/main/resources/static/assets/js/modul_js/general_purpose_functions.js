export function GeneralPurposeFunctions() {
  const API = {};
  const d = document,
    ls = localStorage,
    w = window;
    
     API.capital  = function(string){       
      return string.charAt(0).toUpperCase() + string.slice(1).toLowerCase();    
    }
    return API;
  }