const d = document,
  ls = localStorage;
var sw = 0;

export function includeBranchHTML() {
  const includeHTML = (el, url) => {
    const xhr = new XMLHttpRequest();

    xhr.addEventListener("readystatechange", (e) => {
      if (xhr.readyState !== 4) return;

      if (xhr.status >= 200 && xhr.status < 300) {
        el.outerHTML = xhr.responseText;
        //  themeSwitch();
        if (d.getElementById("darkMode") && sw === 0) {
          sw = 1;
          darkTheme("dark-mode");
          humburgerIcon();
        }
      } else {
        let message =
          xhr.statusText ||
          "Error loading the file, verify that you are making the request by http or https";
        el.outerHTML = `<div><p>Error ${xhr.status}: ${message}</p></div>`;
      }
    });

    xhr.open("GET", url);
    xhr.setRequestHeader("Content-type", "text/html; charset=utf-8");
    xhr.send();
  };

  document
    .querySelectorAll("[data-include]")
    .forEach((el) => includeHTML(el, el.getAttribute("data-include")));
}







export function getHome() {
  const d = document,
    $main = d.querySelector("main");

  const getHTML = (options) => {
    let { url, success, error } = options;
    const xhr = new XMLHttpRequest();

    xhr.addEventListener("readystatechange", (e) => {
      if (xhr.status >= 200 && xhr.status < 300) {
        let html = xhr.responseText;
        success(html);
      } else {
        let message = xhr.statusText || "Ocurrió un error";
        error(`Error ${xhr.status}:${message}`);
      }
    });
    xhr.open("GET", url);
    xhr.setRequestHeader("Content-type", "text/html; charset=utf-8");
    xhr.send();
  };

  getHTML({
    url: "assets/subpage/home.html",
    success: (html) => {
      $main.innerHTML = html;
      weather();
    },
    error: (err) => ($main.innerHTML = `<h1>${err}</h1>`),
  });

  d.addEventListener("click", (e) => {
    if (e.target.matches(".menu a")) {
      e.preventDefault();
      getHTML({
        url: e.target.href,
        success: (html) => {
          $main.innerHTML = html;
          if (e.target.href.indexOf("assets/subpage/home.html")) weather();
        },
        error: (err) => ($main.innerHTML = `<h1>${err}</h1>`),
      });
    }
  });
}

function darkTheme(classDark) {
  const $selectors = d.querySelectorAll("[data-dark]");
  console.log($selectors);

  const lightMode = (e) => {
    e.target.value = "light";
    $selectors.forEach((el) => el.classList.remove(classDark));
    ls.setItem("theme", "light");
  };
  const darkMode = (e) => {
    e.target.value = "dark";
    $selectors.forEach((el) => el.classList.add(classDark));
    ls.setItem("theme", "dark");
  };
  d.addEventListener("click", (e) => {
    if (e.target.id === "darkMode") {
      if (e.target.value === "light") {
        darkMode(e);
      } else {
        lightMode(e);
      }
    }
  });
  let $btn = d.getElementById("darkMode");
  if (ls.getItem("theme") === null) ls.setItem("theme", "light");
  if (ls.getItem("theme") === "light") {
    $btn.value = "light";
    $selectors.forEach((el) => el.classList.remove(classDark));
  }
  if (ls.getItem("theme") === "dark") {
    $btn.value = "dark";
    $selectors.forEach((el) => el.classList.add(classDark));
  }
}

function humburgerIcon() {
  d.addEventListener("click", (e) => {
    if (
      e.target.matches(".humburger-btn") ||
      e.target.matches(`${".humburger-btn"} *`)
    ) {
      let $header = d.getElementById("myHeader");
      d.querySelector(".humburger-btn").classList.toggle("is-active");

      //alert($header.computedStyleMap().get("position"));

      if ($header.computedStyleMap().get("position") == "fixed") {
        $header.style.position = "relative";
        $header.style.opacity = "1";
        $header.style.zIndex = "999";
      } else {
        $header.style.position = "fixed";
        $header.style.opacity = "0";
        $header.style.zIndex = "-99";
      }
    }
  });
}
function weather() {
  const key = "00c14c9fa75c8b84d8f1492058ac4369";
  if (key == "")
    d.getElementById("temp").innerHTML = "Remember to add your api key!";

  function weatherBallon(cityID) {
    //fetch('https://api.openweathermap.org/data/2.5/weather?q=London,uk&APPID=00c14c9fa75c8b84d8f1492058ac4369')
    //fetch('https://api.openweathermap.org/data/2.5/weather?id=' + cityID+ '&appid=' + key)
    //fetch('https://api.openweathermap.org/data/2.5/weather?q=arroyo de san servan,spain&APPID=00c14c9fa75c8b84d8f1492058ac4369')
    fetch(
      "https://api.openweathermap.org/data/2.5/weather?q=calamonte,spain&APPID=00c14c9fa75c8b84d8f1492058ac4369"
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
}
/*
function themeSwitch() {
  const themeSwitch = document.getElementById("themeSwitch");
  if (themeSwitch) {
    initTheme(); // if user has already selected a specific theme -> apply it
    themeSwitch.addEventListener("change", function (event) {
      resetTheme(); // update color theme
    });
  }
  function initTheme() {
    let darkThemeSelected =
      localStorage.getItem("themeSwitch") !== null &&
      localStorage.getItem("themeSwitch") === "dark";
    // update checkbox
    themeSwitch.checked = darkThemeSelected;
    // update body data-theme attribute
    darkThemeSelected
      ? document.body.setAttribute("data-theme", "dark")
      : document.body.removeAttribute("data-theme");
  }
  function resetTheme() {
    if (themeSwitch.checked) {
      // dark theme has been selected
      document.body.setAttribute("data-theme", "dark");
      localStorage.setItem("themeSwitch", "dark");
    } else {
      document.body.removeAttribute("data-theme");
      localStorage.removeItem("themeSwitch");
    }
  }

  // Main Header component JS
  var mainHeader = document.getElementsByClassName("js-main-header")[0];
  if (mainHeader) {
    var trigger = mainHeader.getElementsByClassName(
        "js-main-header__nav-trigger"
      )[0],
      nav = mainHeader.getElementsByClassName("js-main-header__nav")[0];
    //detect click on nav trigger
    trigger.addEventListener("click", function (event) {
      event.preventDefault();
      var ariaExpanded = !Util.hasClass(nav, "main-header__nav--is-visible");
      //show nav and update button aria value
      Util.toggleClass(nav, "main-header__nav--is-visible", ariaExpanded);
      trigger.setAttribute("aria-expanded", ariaExpanded);
      if (ariaExpanded) {
        //opening menu -> move focus to first element inside nav
        nav
          .querySelectorAll(
            "[href], input:not([disabled]), button:not([disabled])"
          )[0]
          .focus();
      }
    });
  }
}*/
