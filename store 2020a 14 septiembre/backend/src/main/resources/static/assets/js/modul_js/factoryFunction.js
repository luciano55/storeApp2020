import { FactoryBox } from "./factoryBox.js";
import { ValidateUtil, Validations } from "./factoryValidation.js";

export function FactoryFunction() {
  const API = {};
  const d = document,
    ls = localStorage,
    w = window;

  var sw = 0;
  API.darkLight = function (classDark) {
    const $selectors = d.querySelectorAll("[data-dark]");
    const $btn = d.getElementById("darkMode");

    const setThemeInitial = function () {
      if (ls.getItem("theme") === null) {
        ls.setItem("theme", "light");
      } else {
        if (ls.getItem("theme") === "light") {
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
      ls.setItem("theme", state);
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
      d.getElementById("temp").innerHTML = "Remember to add your api key!";

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

      d.getElementById("description").innerHTML = description;
      d.getElementById("temp").innerHTML = celcius + "&deg;";
      d.getElementById("location").innerHTML = data.name;

      if (description.indexOf("rain") > 0) {
        d.getElementById("myHome").className = "cwbody rainy";
      } else if (description.indexOf("cloud") > 0) {
        d.getElementById("myHome").className = "cwbody cloudy";
      } else if (description.indexOf("sunny") > 0) {
        d.getElementById("myHome").className = "cwbody sunny";
      } else {
        d.getElementById("myHome").className = "cwbody clear";
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

  API.contactFormValidations = function () {
    const $form = d.querySelector(".contact-form"),
      $inputs = d.querySelectorAll(".contact-form [required]");
    const factoryBox = FactoryBox();
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
        alert(typeof e.target.dataset.validate);
          alert(e.target.dataset.validate);
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
    });
  };

  return API;
}
