// De momento cuatro formas

//STORE2021.includeBranchHTML("[data-include]", "data-include");
/*
import { includeBranchHTML } from "./modul_js/lookhtml.js";

const d = document;

d.addEventListener("DOMContentLoaded", (e) => {
  includeBranchHTML();
});

document.querySelectorAll("[data-include]").forEach((el) =>
  fetch(el.getAttribute("data-include"))
    .then(function (response) {
      // The API call was successful!
      return response.text();
    })
    .then(function (html) {
      // This is the HTML from our response as a text string
      el.outerHTML = html;
    })
    .catch(function (err) {
      // There was an error
      console.warn("Something went wrong.", err);
    })
);
const header = new STORE2021.FactoryHeader();
header.getHeader();

const footer = new STORE2021.FactoryFooter();
footer.getFooter();*/

import { FactoryHeader } from "./modul_js/factoryHeader.js";
import { FactoryFooter } from "./modul_js/factoryFooter.js";

const d = document,
  ls = localStorage;
var sw = 0;
function darkLight(classDark) {
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

d.addEventListener("DOMContentLoaded", (e) => {
  d.getElementById("myFooter").appendChild(FactoryFooter());
  d.getElementById("myHeader").appendChild(FactoryHeader());
  darkLight("dark-mode");
});

d.addEventListener("load", (e) => {});
