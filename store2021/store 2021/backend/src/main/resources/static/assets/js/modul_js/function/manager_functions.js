
import {COLOR} from "../enum/enum_color.js";
import {STRATEGY} from "../enum/enum_stratey.js";
import {w,d,$,lS,sS,Q,Qa} from "./global.js";
import {ValidateUtil, Validations} from "../factory/factoryValidation.js";
import {ViewClient}from "../view/viewClient.js";
import {ERRORRESPONSE} from "../enum/enum_errorResponse.js";
import {FactoryBox} from "../factory/factoryBox.js";
import {GeneralPurposeFunctions} from "./general_purpose_functions.js";
import {MainContainerVisibility} from "../../components/MainContainerVisibility.js";
import { MainInteractContainerVisibility } from "../../components/MainInteractContainerVisibility.js";

export function ManagerFunctions() {
  const API = {};   
const viewClient = new ViewClient();
const factoryBox = new FactoryBox();

API.darkLight = function (classDark) {
    const $selectors = Qa("[data-dark]");
    const $btn = $("darkMode");

    const setThemeInitial = function () {
      if (lS.getItem("theme") === null) {
        lS.setItem("theme", "light");
      } else {
        if (lS.getItem("theme") === "light") {
          $btn.value = "light";
          $selectors.forEach((el) => el.classList.remove(classDark));
        } else {
          $btn.value = "dark";
          $selectors.forEach((el) => el.classList.add(classDark));
        }
      }
    };
    const changeMode = (e) => {
      let state = "";
      e.target.value === "light" ? (state = "dark") : (state = "light");
      $selectors.forEach((el) => el.classList.toggle(classDark));
      e.target.value = state;
      lS.setItem("theme", state);
    };
    d.addEventListener("click", (e) => {
      if (e.target.id === "darkMode") {
        changeMode(e);
      }
    });
    setThemeInitial();
  };

API.weather = function () {
    const key = "00c14c9fa75c8b84d8f1492058ac4369";
    if (key == "")
      $("temp").innerHTML = "Remember to add your api key!";

    function weatherBallon(cityID) {
      //fetch('https://api.openweathermap.org/data/2.5/weather?q=London,uk&APPID=00c14c9fa75c8b84d8f1492058ac4369')
      //fetch('https://api.openweathermap.org/data/2.5/weather?id=' + cityID+ '&appid=' + key)
      //fetch('https://api.openweathermap.org/data/2.5/weather?q=arroyo de san servan,spain&APPID=00c14c9fa75c8b84d8f1492058ac4369')
      fetch(
        "https://api.openweathermap.org/data/2.5/weather?q=almendralejo,spain&APPID=00c14c9fa75c8b84d8f1492058ac4369"
      )
        .then(function (resp) {
          return resp.json();
        }) // Convert data to json
        .then(function (data) {
          drawWeather(data);
        })
        .catch(function () {
          // catch any errors
        });
    }
    function drawWeather(data) {
      var celcius = Math.round(parseFloat(data.main.temp) - 273.15);
      var fahrenheit = Math.round(
        (parseFloat(data.main.temp) - 273.15) * 1.8 + 32
      );
      var description = data.weather[0].description;

      $("description").innerHTML = description;
      $("temp").innerHTML = celcius + "&deg;";
      $("location").innerHTML = data.name;

      if (description.indexOf("rain") > 0) {
        $("myHome").className = "cwbody rainy";
      } else if (description.indexOf("cloud") > 0) {
       $("myHome").className = "cwbody cloudy";
      } else if (description.indexOf("sunny") > 0) {
        $("myHome").className = "cwbody sunny";
      } else {
       $("myHome").className = "cwbody clear";
      }
    }

    weatherBallon(4167865);
    //weatherBallon(6167865);
  };

API.scrollTop = function (btn) {
    const $scrollBtn = d.querySelector(btn);

    w.addEventListener("scroll", (e) => {
      let scrollTop = w.pageYOffset || d.documentElement.scrollTop;
      if (scrollTop > 600) {
        $scrollBtn.classList.remove("hidden");
      } else {
        $scrollBtn.classList.add("hidden");
      }
      // console.log(w.pageXOffset,d.documentElement.scrollTop);
    });
    d.addEventListener("click", (e) => {
      if (e.target.matches(btn)) {
        w.scrollTo({
          behavior: "smooth",
          top: 0,
        });
      }
    });
  };

API.validations = function () {
    d.addEventListener("keyup", (e) => {
      if (e.target.matches("[data-validate]")) {    
          ( e.code == "Enter"  || e.code == "Tab") ?  eval(sS.getItem("strategy")): eval(e.target.dataset.validate + "(e)");        
      }     
    });
  };  

 API.phone = function(){
  'use strict';   
    
    const COUNTRYPATTERN = {
        REGEX_FRANCE_FIJO: "^[0-9]{9}$", ///^[1-9](\d{2}){4}$
        REGEX_FRANCE_MOVIL: "^[6|7][0-9]{8}$",
        REGEX_SPAIN_FIJO:"^[9][0-9]{8}$",
        REGEX_SPAIN_MOVIL: "^[6|7][0-9]{8}$",
        REGEX_US_FIJO: "^[0-9]{10}$",
        REGEX_US_MOVIL: "^[0-9]{10}$"
    };
    const Prefix = [
        {
            "default": true,
            "prefijo": "ES",
            "value": "+34",
            "maximo": 9,
            "flag": "es.png",
            "mobile": COUNTRYPATTERN.REGEX_SPAIN_MOVIL,
            "landline": COUNTRYPATTERN.REGEX_SPAIN_FIJO
        },
        {
            "prefijo": "FR",
            "value": "+33",
            "maximo": 9,
            "flag": "fr.png",
            "mobile": COUNTRYPATTERN.REGEX_FRANCE_MOVIL,
            "landline": COUNTRYPATTERN.REGEX_FRANCE_FIJO
        },
        {
            "prefijo": "US",
            "value": "+1",
            "maximo": 10,
            "flag": "us.png",
            "mobile": COUNTRYPATTERN.REGEX_US_MOVIL,
            "landline": COUNTRYPATTERN.REGEX_US_FIJO
        },
    ];
    function updateChanges(phoneNumber, idCountry, phoneType){
        eval("sS.setItem('pattern_'+"+phoneNumber+", Prefix["+idCountry+"]."+phoneType+")");
      sS.setItem('numberLength_'+phoneNumber,   Prefix[idCountry].maximo);
      $("phone_"+phoneNumber).setAttribute("maxlength", Prefix[idCountry].maximo);
      $("phone_"+phoneNumber).setAttribute("minlength", Prefix[idCountry].maximo);
      changeFlag(Prefix[idCountry].flag,$("phone_"+phoneNumber).id);
}

    const changeFlag = function (flag, myId) {
      
       $("litleImg_" + myId).src = "../assets/img/flags/" + flag;        
    }
    const  changePrefix = function (e) {
       let phoneType = e.target.dataset.phonetype;
       let names =  e.target.id.split("_");
       let phoneInput = names[1]+"_" + names[2];
       $(phoneInput).value = "";
       $(phoneInput).placeholder = "enter new phone";
       $(phoneInput).style.borderColor = COLOR.ERROR;
        let selectedValue = e.target.options[ e.target.selectedIndex].value;
        for (let index in Prefix) {
            if (Prefix[index].value === selectedValue) {
                updateChanges(names[2], index, phoneType);            
            }
        };
  }
    const fillSelectPrefix = function (phone,index) {
        let selectPrefixInternational = $("select_" + phone.id);
        for (let i in Prefix) {
            selectPrefixInternational.options[selectPrefixInternational.options.length] = new Option(Prefix[i].prefijo, Prefix[i].value, undefined, Prefix[i].default);
            if (Prefix[i].default) {  
              updateChanges(index, i, selectPrefixInternational.dataset.phonetype);               
             }              
        }
        selectPrefixInternational.addEventListener("change", function (e) {
            changePrefix(e);
        });
    };
    const phones = Qa("input[data-phoneType]");
    //console.log(phones);
    phones.forEach(fillSelectPrefix);
 }
 API.dado = function(){
  const dados = ['dado informatica', 'dado harnina','dado juntaextremadura'];
  const imagenes = ['assets/img/escudo02.png','assets/img/harni01.png','assets/img/Escudo_de_Extremadura.png'];
  const clases = ['cara frontal','cara trasera','cara derecha','cara izquierda','cara arriba','cara abajo'];

const creaImagen = function(imag,a, b, i){
      var imagen = document.createElement("img");
      imagen.setAttribute('src', imag);
      imagen.className = 'Imagen';
      imagen.id = ("cara"+ a + "-" + b + "-" + i);
      return imagen;
  }
 const creaCara = function(dado, a, b, imagen){
    for (let i = 0; i < clases.length; i++){
        var cara = document.createElement('div');
        cara.className = clases[i];
        cara.appendChild(creaImagen(imagen,a,b,i));
        dado[b].appendChild(cara);
    }
}
  
for (let i = 0; i < dados.length; i++) {
    const pageDados = document.getElementsByClassName(dados[i]);
    for (let j = 0; j < pageDados.length; j++){
        creaCara(pageDados,i, j, imagenes[i]);
    }
}

 }
 // IndexedDB
 const browserCompatibility = function(){
                              let myIndexdDB = window.indexedDB || window.mozIndexedDB || window.webkitIndexedDB || window.msIndexedDB;

                              window.IDBTransaction = window.IDBTransaction || window.webkitIDBTransaction || window.msIDBTransaction;
                              window.IDBKeyRange = window.IDBKeyRange || window.webkitIDBKeyRange || window.msIDBKeyRange;
                              if (!myIndexdDB) {
                                          window.alert("Su navegador no soporta una versión estable de indexedDB. Tal y como las características no serán validas");
                              }
                              return myIndexdDB;
}
API.CreateBBDDpostalCode = function(){
        fetch("/getcpExtremadura").then(response => response.json())
                    .then(data => {
                          const  myIndexdDB = browserCompatibility();
                          let db = null;
                          const dbNombre = "postalCodeBBDD";
                          const request = myIndexdDB.open(dbNombre, 1);
                          request.onerror = function (event) {
                                     alert('Fallo en la apertura: 1 ' + event.target.message);
                            };
                            request.onupgradeneeded = function (event) {
                                  db = event.target.result;
                                  const store = db.createObjectStore("postalCode", {
                                                            keyPath: "idCp",
                                                              autoIncrement: true
                                    });
                                  store.createIndex("postalCodeIndex", "postalCode", {
                                      unique: false
                                  });
                                  store.transaction.oncomplete = function(event) {
                                          const customerObjectStore = db.transaction("postalCode", "readwrite").objectStore("postalCode");
                                          for (let i in data) {
                                              //console.log(data[i]);
                                              customerObjectStore.add(data[i]);
                                        }
                                        alert("BBDD cargada");
                                    } 
                            }
                          })              

}
API.getCity = function(myCP){
    return new Promise(function (resolve, reject) {
        const myIndexdDB = browserCompatibility();
        let db = null;
        const dbNombre = "postalCodeBBDD";
        const request = myIndexdDB.open(dbNombre, 1);

        request.onerror = function (e) {
            alert('Fallo en la apertura: ' + e.target.message);
        };
        request.onsuccess = function (e) {
                    db = e.target.result;
                    const range = IDBKeyRange.only(myCP);
                    const transaction = db.transaction(["postalCode"], "readwrite");
                    const store = transaction.objectStore("postalCode");
                    const index = store.index("postalCodeIndex");
                    index.openCursor(range).onsuccess = function (e) {
                        var cursor = e.target.result;
                        console.log(e.target);
                        if (cursor) {
                            resolve(cursor.value.municipality);
                        } else {
                            reject('Wrong error postal code');
                        }
                    };
                };
})
}
API.submit = function(){
   'use strict';
    var submit = $("submit");
    return {
        message : function(content){
            submit.innerHTML = content;
        },
        off  : function(){
            submit.style.display="none";
        },
        onoff  : function(){
             let aviso = true;     
              for (let i=0; i< sS.getItem("lenDataControls");i++){
                   if($(sS.getItem("dataControls"+i)).style.borderColor != COLOR.VALIDRGB){               
                        aviso = false;
                        break; 
                    }             
              }
              aviso?$("div_submit").style.display = "block" :  $("div_submit").style.display = "none"; 
        },
         on  : function(){
            submit.style.display="block";
            submit.classList.remove("none");   
        },
    }
  }
API.error = function(params){
     'use strict';   
        let id ="";
      if(params) id = params.nodo.id;
    return {      
        message : function(params){         
          $("boxerror_"+id).innerHTML = params.mensajeError || params;
        },
        off : function(){         
           $("boxerror_"+id).classList.add("none");  
             $("boxerror_"+id).style.display = "none"; 
        },
        on : function(){            
            $("boxerror_"+id).classList.remove("none");   
            $("boxerror_"+id).style.display = "block";
          }
    }
  }
API.info = function(){
     'use strict';
   
    return {    
      exist : function(params){
        if($("boxinfo_"+params.nodo.id)){
              return true;
        } else{
                return false;
        }
      },
        message : function(params){          
            $("boxinfo_"+params.nodo.id).innerHTML = params.mensajeInfo;
        },
        off : function(params){
           $("boxinfo_"+params.nodo.id).classList.add("none");   
        },
        on : function(params){
              $("boxinfo_"+params.nodo.id).classList.remove("none");   
          }

    }
  }
API.dataControl = function(){
 'use strict';   
    return {      
        get : function(params){          
          return params.node.value;
        },
        error : function(params){
           params.nodo.style.borderColor = COLOR.ERROR;
          params.nodo.style.borderWidth =  COLOR.ERRORBORDER;
        },
        valid : function(params){
             params.nodo.style.borderColor =  COLOR.VALID;
             params.nodo.style.borderWidth = COLOR.VALIDBORDER;
          },
        validData : function(params){
             params.style.borderColor =  COLOR.VALID;
             params.style.borderWidth = COLOR.VALIDBORDER;
          }
    }
  }
API.saveDataControls = function(){
          const  dataControlrequired =  Qa("input[data-validate][required]"); 
          sS.setItem("lenDataControls",dataControlrequired.length);
          for (let i=0; i< dataControlrequired.length; i++) {   
                  sS.setItem("dataControls" + i, dataControlrequired[i].id);
            }  
            const  divDataControls =  Qa("div[data-divcontrol]"); 
            //console.log(divDataControls);
            sS.setItem("lenDiv_DataControls",divDataControls.length);
          for (let i=0; i< divDataControls.length; i++) {   
                  sS.setItem("div_DataControls" + i, divDataControls[i].id);
            }            
            
      }
API.getDataControls = function(){
      const dataControl = {};
      let   father = "div_dataControl_";
      for (let i=0; i<   sS.getItem("lenDiv_DataControls"); i++) {   
                let   myInputId =    ($(sS.getItem("div_DataControls"+i)).id).slice(father.length);
               if(myInputId.indexOf("phone") != -1){
                let myInputBoxinfoId = "boxinfo_" + myInputId;
                dataControl[$(myInputId).dataset.field] = $(myInputBoxinfoId).innerText;
              }else {
                      dataControl[$(myInputId).dataset.field] = $(myInputId).value;
              }              
      } 
      return dataControl;
  }
API.resetDataControl = function(dataControl){  
     if(!dataControl) {dataControl =   API.getDataControls();}        
     for (var key in dataControl) {
           let dataField = Q("input[data-field='" +key +"']");
           let control = dataField.id;
           $(control).style.backgroundColor = "";
           $("boxerror_"+control).style.display = "none";
           if($("boxinfo_"+control)){
                          $("boxinfo_"+control).style.display = "block";
            }             
      }   
  }
  API.showItAllStrategy = function(){
     for (let i=0; i< sS.getItem("lenDiv_DataControls");i++){
          $(sS.getItem("div_DataControls"+i)).style.display = "block" ;   
       }
    }
API.showOneToOneStrategy = function(){
     let   father = "div_dataControl_";
     for (let i=1; i< sS.getItem("lenDiv_DataControls");i++){
            if($(sS.getItem("div_DataControls"+i)).style.display == "none")
            { 
              let   myInput =    ($(sS.getItem("div_DataControls"+(i-1))).id).slice(father.length);
              if($(sS.getItem("div_DataControls"+(i-1))).style.display == "block" && ( $(myInput).style.borderColor == COLOR.VALIDRGB  ||  
                        !$(myInput).required)){       
                                $(sS.getItem("div_DataControls"+i)).style.display = "block";
                              }
               break;
            }          
       }      
    }
API.showIniStrategy = function(strategy){
    if(strategy == STRATEGY.ALL){  
      sS.setItem("strategy","API.showItAllStrategy()");
      API.showItAllStrategy();}
    if(strategy == STRATEGY.ONETOONE){
      sS.setItem("strategy", "API.showOneToOneStrategy()");
     for (let i=1; i< sS.getItem("lenDiv_DataControls");i++){
         $(sS.getItem("div_DataControls"+i)).style.display = "none";              
       }
        $(sS.getItem("div_DataControls0")).style.display = "block";  
      }      
    }
API.scrollTopButton = function(btn){
    const $scrollBtn = d.querySelector(btn);  
    w.addEventListener("scroll",(e)=>{
        let scrollTop = w.pageYOffset || d.documentElement.scrollTop;
        (scrollTop > 300) ? $scrollBtn.classList.remove("hidden") :   $scrollBtn.classList.add("hidden");   
    });
    d.addEventListener("click",(e)=>{
        if(e.target.matches(btn)){
            w.scrollTo({
                behavior: "smooth",
                top:0
            });
        }
    });

}
API.loader = function(){
   'use strict';
   
    return {    
      exist : function(){
        if($("loader")){
              return true;
        } else{
                return false;
        }
      },
        message : function(message){          
            $("loader").innerHTML = message;
        },
        off : function(){
           $("loader").classList.add("none");   
           $("loader").style.display = "none";
        },
        on : function(){
              $("loader").classList.remove("none");   
              $("loader").style.display = "block";
          }
        }
}
API.loginDataControlDisable= function(state){
  if(state) {
    $("user").disabled = true;
   $("password").disabled = true;
  }else { 
  $("user").disabled = false;
  $("password").disabled = false;
  }

}
API.diceAvatar = function(){

let image = new Image();
let avatar = "assets/img/client/" +sS.getItem("idClient") + ".png";

image.onload = function() {
   $("cara1-0-0").src = avatar ;
  $("cara1-0-1").src = avatar;
  $("cara1-0-2").src = avatar;
  $("cara1-0-3").src = avatar;
  $("cara1-0-4").src = avatar;
  $("cara1-0-5").src = avatar; 
    
}
image.onerror = function() {
    avatar = "assets/img/client/fotoSin.png";
    $("cara1-0-0").src = avatar ;
    $("cara1-0-1").src = avatar;
    $("cara1-0-2").src = avatar;
    $("cara1-0-3").src = avatar;
    $("cara1-0-4").src = avatar;
    $("cara1-0-5").src = avatar;   
}
image.src = avatar;  
}
API.serverResponse = function(response){
      console.log("serverResponse from ajax: ", response); 

    if (response.status == 404) { 
      this.error().message("Error 404 "); 
      this.error().on(); 
    } else { 
      eval(eval(`ERRORRESPONSE.${response[0].error}`)); 
    } 
    
       
}
API.ajaxForm = function(props){
     let {url, dataControl, noresetControl} = props;
     fetch(url, {
            method: 'POST', 
            body:  JSON.stringify(dataControl),          
            headers: {
                        'Accept': 'application/json',
                        'Content-Type': 'application/json'
                  }
       }).catch(error=> {
           this.error.message( error.statusText || "Ocurrió un error al acceder al BackEnd");
             this.error.on(); 
     })
       .then(res => res.json())      
       .then(response => {
             this.loader().off();
            if(!noresetControl) API.resetDataControl(dataControl); 
             API.serverResponse(response);          
         });
     
}
API.ajaxSingle = function(props){
     let {url, dataControl} = props;
     fetch(url, {
            method: 'POST', 
            body:  JSON.stringify(dataControl),          
            headers: {
                        'Accept': 'application/json',
                        'Content-Type': 'application/json'
                  }
       }).catch(error=> {
           this.error.message( error.statusText || "Ocurrió un error al acceder al BackEnd");
             this.error.on(); 
     })
       .then(res => res.json())      
       .then(response => {
             this.loader().off();
             //API.resetDataControl(dataControl); 
             API.serverResponse(response);          
         });
     
}

const addLoginExit = (response)=>{
      const dataControl = {};
     fetch("http://www.geoplugin.net/json.gp")
     .then((res) => (res.ok ? res.json() : Promise.reject(res)))
     .then((json) => {
       
          dataControl.idClient = response[0].idClient;          
          sS.setItem("idClient",response[0].idClient);
          dataControl.ip =  json.geoplugin_request;
          dataControl.city = json.geoplugin_city;
          dataControl.country = json.geoplugin_countryName;
          dataControl.action = response[0].action;
          const url = "/addIp";
          API.ajaxForm({url,dataControl});
           if(sS.getItem("opcionClient")==null){
             const factoryBox = new FactoryBox();
            $("myBody").innerHTML = null;
            $("myBody").appendChild(factoryBox.informationPanel());

            if (response[0].action == "loginClient") {
                    $("informationPanel").innerHTML =  "<h1>Te has logeado correctamente. </h1><hr> <br><h1>Bienvenido a Store Harnina</h1>";
            }
              if (response[0].action == "addClient") {
                  $("informationPanel").innerHTML =  "<h1>Has sido registrado correctamente. </h1><br>En tu email están tus credenciales de la aplicación<br><hr> <br><h1>Bienvenido</h1>";
            }
            let timesRun = 0;
            let interval = setInterval(function(){
                            timesRun += 1;
                            if(timesRun === 4){
                                clearInterval(interval);
                                 location.reload();
                            }                  
                         }, 1000);                
             } else {
                 generateOptionClient();
               }
      }).catch((err) => {
             console.log(err);
      });
}
const errorVerificationData = (response) => { 
       for (let i=0; i<response.length;i++){
              let field = response[i].messageNameControl;
              let dataField = Q("input[data-field='" +field +"']");
              let control = dataField.id;
              $(control).style.backgroundColor = COLOR.ERRORBACKEND;
              $("boxerror_"+control).innerHTML = response[i].messageErrorControl;
              $("boxerror_"+control).style.display = "block";
              if($("boxinfo_"+control)){
                   $("boxinfo_"+control).style.display = "none";
               }  
          } 

  }; 
const errorValidationData = (response) => { 
      for (let i=0; i<response.length;i++){
              let field = response[i].messageNameControl;
              let dataField = Q("input[data-field='" +field +"']");
              let control = dataField.id;
              $(control).style.backgroundColor = COLOR.ERRORBACKEND;
              $("boxerror_"+control).innerHTML = response[i].messageErrorControl;
              $("boxerror_"+control).style.display = "block";
              if($("boxinfo_"+control)){
                   $("boxinfo_"+control).style.display = "none";
               }  
          } 

  }; 
const errorOperation = () => { 

    API.error().message("Hemos tenido un problema con la operación, inténtelo en unos minutos"); 

  }; 

const errorUserBloqueado = () => { 
    let myBody = $("myBody");
    myBody.innerHTML = "";
    myBody.appendChild(viewClient.uuid());    
  /*
       API.submit().off();
       API.error().message("Estas Bloqueado. Mira tu correo");
       API.error().on();   
       API.loginDataControlDisable(true); */
  }; 
const errorUserDesconocido = (response) => { 

     API.submit().off();
     API.error().message("Intentos agotados");
     API.error().on();   
     API.loginDataControlDisable(true);
      // INFORMAR AL BACKEND                                        
      API.ajaxForm({
          url:"/resetTried",
          dataControl: ""
       });       
      let timeLocked = response[0].lockDuration;
      let seconds = 0;
      let intervalId = setInterval(()=>{
           if (seconds >= timeLocked) {
                    API.submit().on();
                    API.error().off();  
                    API.loginDataControlDisable(false); 
                    clearInterval(intervalId);
           }else {
                     seconds = seconds + 1;
                     API.error().message("Estas Bloqueado. Te quedan " + (timeLocked - seconds) + " seconds");
            }                        
        }, 1000);              
 }

const errorTodoBien = (response) => { 
     const dataControl = {};
     fetch("http://www.geoplugin.net/json.gp")
     .then((res) => (res.ok ? res.json() : Promise.reject(res)))
     .then((json) => {
          console.log(json);
          dataControl.idClient = response[0].idClient;
          dataControl.action = response[0].action;
          sS.setItem("idClient",response[0].idClient);
          dataControl.ip =  json.geoplugin_request;
          dataControl.city = json.geoplugin_city;
          dataControl.country = json.geoplugin_countryName;
          const url = "/addIp";
          API.ajaxForm({url,dataControl});
           if(sS.getItem("opcionClient")==null){
                            location.reload();
           } else {
               generateOptionClient();
           }
      }).catch((err) => {
             console.log(err);
      });
  }; 
const checkImage =(imageSrc, good, bad) =>{
    var img = new Image();
    img.onload = good; 
    img.onerror = bad;
    img.src = imageSrc;
}
const generateOptionClient = () => { 
    const viewClient = new ViewClient(); 
    let $mainContainerForm = $("mainContainerForm");
    if  ($("upClientForm")){
         $("upClientForm").innerHTML = "";
    } 
   if ($mainContainerForm)  $mainContainerForm.innerHTML = ""; 
    if (sS.getItem("opcionClient") == "linkUpData") { 
          sS.setItem("url", "/updatePerson"); 
          const globalFunction = new GeneralPurposeFunctions();
          globalFunction.resetAutoIncrementPhoneCP(); 
           $mainContainerForm.appendChild(viewClient.register()); 
           MainInteractContainerVisibility("mainContainerForm");
          API.validations(); 
          API.phone();
          API.saveDataControls(); 
          API.ajaxForm({
              url: "/getDataControlPerson", 
              dataControl: "", 
          });
          API.showIniStrategy(STRATEGY.ALL); 

    } else if (sS.getItem("opcionClient") == "linkUpLogin") { 
      //  alert("linkUpLogin");
          sS.setItem("url", "/updateLogin"); 
          $mainContainerForm.appendChild(viewClient.updateLogin()); 
            MainInteractContainerVisibility("mainContainerForm");
          API.validations(); 
          API.saveDataControls();
          API.ajaxForm({ 
            url: "/getDataControlLogin", 
            dataControl: "", 
          }); 
          API.showIniStrategy(STRATEGY.ONETOONE); 
          } else if (sS.getItem("opcionClient") == "linkUpAvatar") {
                       $mainContainerForm.appendChild(viewClient.updateAvatar()); 
                        MainInteractContainerVisibility("mainContainerForm");
                    } else if(sS.getItem("opcionClient") == "linkExit") {
                        location.reload();
                    }
  }; 
const fillDatas = (response) => { 
    const datas = API.getDataControls();  
    let i = 0;
    if (response[0].data == "data") { 
       
      for (const data in datas) {    
        if (data == "mobile") {
         const  myPhone = Q("input[data-field='" + data + "']").id;
         $(myPhone).value = response[0].datos[i].split('-').pop();          
         let idCountry = response[0].datos[i].split('-').shift();
         $("select_"+myPhone).value = idCountry;         
         let country ="";
         if(idCountry == "+34"){country="es";}
         if(idCountry == "+33"){country="fr";}
         if(idCountry == "+1"){
            country="us";
            sS.setItem("numberLength_0","10");
            sS.setItem("pattern_0","^[0-9]{10}$");
            $(myPhone).maxLength= 10;
            $(myPhone).minLength = 10;
           
        }          
         $("litleImg_" + myPhone).src="../assets/img/flags/"+country +".png";
         $("boxinfo_" + myPhone).innerHTML= response[0].datos[i];
         $("boxinfo_" + myPhone).style.display = "block";          
        } else { 
          Q("input[data-field='" + data + "']").value = response[0].datos[i]; 
        } 
        i++;
        API.dataControl().validData(Q("input[data-field='" + data + "']")); 
      } 

    } else { 
              if (response[0].data == "login"){                
                    for (const data in datas) { 
                        Q("input[data-field='" + data + "']").value = response[0].datos[i]; 
                     break; 
                    }
                  }               
      } 

    } 
const errorPasswordRepeat= (response)=>{
 // alert("errorPasswordRepeat(response)");
$("boxerror_passwordrepeat").style.display = "block";
$("boxerror_passwordrepeat").innerHTML = "No coinciden las passwords";
}
const errorUpdateLogin = (response)=>{
  myBody.innerHTML = "";
  myBody.appendChild(factoryBox.error());   
  $("boxerror_").id = "boxerror_updatelogin";
  $("boxerror_updatelogin").style.display = "block";
  $("boxerror_updatelogin").innerHTML = response[0].message;
}
const exitActionClient = (response)=>{     
  //myBody.innerHTML = "";
 // myBody.appendChild(factoryBox.info());   
 // $("infoBox").id = "infoBox_updatelogin";
 // $("infoBox_updatelogin").style.display = "block";

 MainInteractContainerVisibility("infoBox");

  $("infoBox").innerHTML = "Los datos del cliente han sido actualizado correctamente. Puedes continuar.";
  MainContainerVisibility("infoBox");
}


const errorInterno = () => { 

    API.error().message("Hemos tenido un problema intentelo en unos minutos"); 

  }; 

  return API;
} 
 
          