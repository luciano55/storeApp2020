
import {COLOR} from "../enum/enum_color.js";
import {d,$,lS,sS,Qa} from "./global.js";
import {ValidateUtil, Validations} from "../factory/factoryValidation.js";

export function ManagerFunctions() {
  const API = {};   

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
//const $form = d.querySelector(".contact-form"),
  //    $inputs = d.querySelectorAll(".contact-form [required]");
 //   const factoryBox = FactoryBox();
    //console.log($inputs);
    /*
    $inputs.forEach((input) => {
      /*
      const $span = d.createElement("span");
      $span.id = "span" + input.name;
      $span.textContent = input.title;
      $span.classList.add("contact-form-error", "none");
      */
    /*
      const $errorBox = factoryBox.error();
      $errorBox.id = "span" + input.name;
      $errorBox.textContent = input.title;
      // $errorBox.classList.add("none");

      input.insertAdjacentElement("afterend", $errorBox)
    });;*/

    d.addEventListener("keyup", (e) => {
      if (e.target.matches("[data-validate]")) {
       // alert(typeof e.target.dataset.validate);
        //  alert(e.target.dataset.validate);
        //eval("Validations.lettersWithSpace(e)");
       
        eval(e.target.dataset.validate + "(e)");
      }
      /*
      if (e.target.matches(".contact-form [required]")) {
        let $input = e.target,
          pattern = $input.pattern || $input.dataset.pattern;
        //  console.log($input.value, pattern);
        if (pattern && $input.value !== "") {
          //console.log("Tiene patrón");
          let regex = new RegExp(pattern);
          return !regex.exec($input.value)
            ? d.getElementById("span" + $input.name).classList.add("is-active")
            : d
                .getElementById("span" + $input.name)
                .classList.remove("is-active");
        }
        if (!pattern) {
          //console.log("Tiene NO patrón");
          return $input.value === ""
            ? d.getElementById($input.name).classList.add("is-active")
            : d.getElementById($input.name).classList.remove("is-active");
        }
       
      } */
    });
/*
    d.addEventListener("submit", (e) => {
      //e.preventDefault();
      //alert("Enviando formulario");

      const $loader = d.querySelector(".contact-form-loader"),
        $response = d.querySelector(".contact-form-response");
      $loader.classList.remove("none");
      setTimeout(() => {
        $loader.classList.add("none");
        $response.classList.remove("none");
        $form.reset();
        setTimeout(() => {
          $response.classList.add("none");
        }, 2000);
      }, 2000);
    });*/
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
       let phoneType = e.target.className;
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
              updateChanges(index, i, phone.className);               
             }              
        }
        selectPrefixInternational.addEventListener("change", function (e) {
            changePrefix(e);
        });
    };
    const phones = Qa("input[data-phoneType]");
    console.log(phones);
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


  return API;
}

