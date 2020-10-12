import { FactoryFrame } from "./factoryFrame.js";
import { VALIDATOR } from "./validator.js";

export function FactoryDataControl() {
  const API = {};
  const factoryFrame = new FactoryFrame();

  let params = {};

  API.firstname = function () {
    params = {};
    params.id = "firstname";
    params.validate = VALIDATOR.LETTERSWITHSPACE;
    params.labelOn = true;
    params.type = "text";
    params.placeholder = "input your FirstName";
    params.minLength = "2";
    params.maxLength = "50";
    params.required = true;
    params.title = "2 to 50 characters";

    return factoryFrame.input(params);
    /*

    var myObject = {
      id: "firstname",
      validate: "STORE.validate.lettersWithSpace",
      type: "text",
      size: "25",
      minLength: "2",
      maxLength: "50",
      required: true,
      placeholder: "input your FirstName",
      title: "2 to 50 characters",
    };
    return STORE.frameLabelInput(myObject);*/
  };
  API.lastname = function () {
     params = {};
    params.id = "lastname";
    params.validate = VALIDATOR.LETTERSWITHSPACE;
    params.labelOn = true;
    params.type = "text";
    params.placeholder = "input your LastName";
    params.minLength = "2";
    params.maxLength = "100";
    params.required = true;
    params.title = "2 to 100 characters";
    return factoryFrame.input(params);   
  };
  API.nif = function () {
     params = {};
    params.id = "nif";
    params.validate = VALIDATOR.DNI_NIE_CIF;
    params.labelOn = true;
    params.type = "text";
    params.placeholder = "input your nif";
    params.minLength = "9";
    params.maxLength = "9";
    params.required = true;
    params.title = "9 characters";
    return factoryFrame.input(params);
    };
  API.mobile = function () {
     params = {};
    params.id = "mobile";
    params.validate = VALIDATOR.MOBILE;
    params.labelOn = true;
    params.type = "text";
    params.placeholder = "input your mobile";
    params.minLength = "9";
    params.maxLength = "9";
    params.required = true;
    params.title = "9 characters";
    return factoryFrame.labelSelectInput(params);
    }
  return API;
}
