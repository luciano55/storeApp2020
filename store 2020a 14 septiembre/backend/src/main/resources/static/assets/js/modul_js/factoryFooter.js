STORE2021.namespace("STORE2021.FactoryFooter");
export function STORE2021.FactoryFooter() {
  const API = {};
  var factoryTag = new STORE2021.FactoryTag();
  API.getFooter = function () {
    var params = {
      text: "Sitio diseñado por luqui",
    };
    var p = factoryTag.p(params);
    params.text = "";
    params.class = "footer container";
    var footer = factoryTag.footer(params);
    footer.appendChild(p);
    document.body.appendChild(footer);
  };
  return API;
};
