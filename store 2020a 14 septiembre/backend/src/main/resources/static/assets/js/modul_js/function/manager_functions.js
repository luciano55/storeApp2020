
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
    
    const countryPattern = {
        NUMERO_FRANCE_FIJO: "^[0-9]{9}$", ///^[1-9](\d{2}){4}$
        NUMERO_FRANCE_MOVIL: "^[6|7][0-9]{8}$",
        NUMERO_SPAIN_FIJO:"^[9][0-9]{8}$",
        NUMERO_SPAIN_MOVIL: "^[6|7][0-9]{8}$",
        NUMERO_US_FIJO: "^[0-9]{10}$",
        NUMERO_US_MOVIL: "^[0-9]{10}$"
    };
    const PREFIJOS = [
        {
            "default": true,
            "prefijo": "ES",
            "value": "+34",
            "maximo": 9,
            "flag": "es.png",
            "expresionRegularMovil": countryPattern.NUMERO_SPAIN_MOVIL,
            "expresionRegularFijo": countryPattern.NUMERO_SPAIN_FIJO
        },
        {
            "prefijo": "FR",
            "value": "+33",
            "maximo": 9,
            "flag": "fr.png",
            "expresionRegularMovil": countryPattern.NUMERO_FRANCE_MOVIL,
            "expresionRegularFijo": countryPattern.NUMERO_FRANCE_FIJO
        },
        {
            "prefijo": "US",
            "value": "+1",
            "maximo": 10,
            "flag": "us.png",
            "expresionRegularMovil": countryPattern.NUMERO_US_MOVIL,
            "expresionRegularFijo": countryPattern.NUMERO_US_FIJO
        },
    ];
    const changeFlag = function (flag, tipo) {
      
       d.getElementById("litleImg_" + tipo).src = "../assets/img/flags/" + flag;        
    }
    const  changePrefix = function (e) {
       let tipo = e.target.className;
          let names =  e.target.id.split("_");
          let inputPhone = names[1]+"_" + names[2];
          $(inputPhone).value = "";
        $(inputPhone).placeholder = "enter new phone";
        $(inputPhone).style.borderColor = COLOR.ERROR
        let selectedValue =  $("select_" + inputPhone).options[ $("select_" + inputPhone).selectedIndex].value;
        for (let index in PREFIJOS) {
            if (PREFIJOS[index].value === selectedValue) {
              let i = names[2];
                
               if(tipo =="mobile"){                 
                   sS.setItem('pattern_'+i, PREFIJOS[index].expresionRegularMovil);
                   /*
                    sS.setItem('minMobile_'+i,  PREFIJOS[index].maximo);
                    sS.setItem('maxMobile_'+ i, PREFIJOS[index].maximo);*/
                }
                else {
                  sS.setItem('pattern_'+i,           PREFIJOS[index].expresionRegularFijo);
                  /*
                   sS.setItem('min_landline_'+i,   PREFIJOS[index].maximo);
                   sS.setItem('max_landline_'+i,  PREFIJOS[index].maximo);*/                } 
                  sS.setItem('numberLength_'+i,   PREFIJOS[index].maximo);
                changeFlag(PREFIJOS[index].flag, inputPhone);  
                  $(inputPhone).setAttribute("maxlength", PREFIJOS[index].maximo);
                    $(inputPhone).setAttribute("minlength", PREFIJOS[index].maximo);
            }
        }
    };
    const createSelectPrefix = function (phone,index) {
        let tipo = phone.className;
        let countries = $("select_" + phone.id);
        for (let i in PREFIJOS) {
            countries.options[countries.options.length] = new Option(PREFIJOS[i].prefijo, PREFIJOS[i].value, undefined, PREFIJOS[i].default);
            if (PREFIJOS[i].default) {  
               if(tipo =="mobile"){       
                   sS.setItem('pattern_'+index, PREFIJOS[i].expresionRegularMovil);
               }else{
                   sS.setItem('pattern_'+index, PREFIJOS[i].expresionRegularFijo);
                  
               }
              /*
                if (phone.id.indexOf("landline") != -1){
                   sS.setItem('patternFijo_'+index, PREFIJOS[i].expresionRegularFijo);
                } else {
                   sS.setItem('patternMovil_'+index,PREFIJOS[i].expresionRegularMovil);                   
                } */
               $(phone.id).setAttribute("maxlength", PREFIJOS[i].maximo);
                $(phone.id).setAttribute("minlength", PREFIJOS[i].maximo);
            
                changeFlag(PREFIJOS[i].flag,phone.id);
            }
        }
        countries.addEventListener("change", function (e) {
            changePrefix(e);
        });
    };
    // Crear dos array con los phones
    const phones = Qa("input.mobile, input.landline");
    console.log(phones);
    phones.forEach(createSelectPrefix);
    // const landlines = d.querySelectorAll("input.landline");
    //console.log(landlines);
    //landlines.forEach(createSelectPrefix);
   /* function myFunction(item, index) {
  createSelectPrefix(item);*/

  //  if (myLandline) {createSelectPrefix(myLandline);}
    /*if (myMobile) {createSelectPrefix(myMobile);}*/

    }

  return API;
}
