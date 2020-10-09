import { FactoryDataControl } from "./factoryDataControl.js";

export function FactoryClient() {
  const factoryDataControl = new FactoryDataControl();

  const d = document;
  const API = {};
  let params = {};
  API.register = function () {
    return factoryDataControl.firstname();
    /*
    params.id = "seccion1";
    params.class = "section-formJM"; // section
    const section = factoryTag.section(params);
    section.setAttribute("data-scroll-spy", "");
    params = {};
    params.class = "contact-form";
    params.action = "https://formsubmit.co/luciano@bme.es";
    params.method = "POST";
    params.target = "_blank";
    const form = factoryTag.form(params);
    params = {};
    params.text = "Register Client";
    const titleForm = factoryTag.h2(params);
    form.appendChild(titleForm);
    params = {};
    params.id = "nameClient";
    params.type = "text";
    params.name = "nameClient";
    params.placeholder = "Write your name";
    params.minLength = 3;
    params.maxLength = 50;
    params.pattern = "^[A-Za-zÑñÁáÉéÍíÓóÚú s]+$";
    params.title = "use letters with or without spaces min:3 & max:50";
    params.required = true;
    const nameClient = factoryTag.input(params);
    form.appendChild(nameClient);
    params = {};
    params.id = "surnameClient";
    params.type = "text";
    params.name = "surnameClient";
    params.placeholder = "Write your surname";
    params.minLength = 3;
    params.maxLength = 100;
    params.pattern = "^[A-Za-zÑñÁáÉéÍíÓóÚú s-]+$";
    params.title =
      "use letters with or without spaces and guion min:3 & max:100";
    params.required = true;
    const surnameClient = factoryTag.input(params);
    form.appendChild(surnameClient);

    const submit = factoryButton.submit();
    form.appendChild(submit);
    section.appendChild(form);
    return section;*/
  };
  return API;
}
