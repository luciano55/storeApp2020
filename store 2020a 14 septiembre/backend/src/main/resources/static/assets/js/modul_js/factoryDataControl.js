import { FactoryFrame } from "./factoryFrame.js";

export function FactoryDataControl() {
  const API = {};
  const factoryFrame = new FactoryFrame();
  let params = {};

  API.firstname = function () {
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
    /*
    var myObject = {
      id: "lastname",
      validate: "validate.lettersWithSpace",
      type: "text",
      size: "25",
      minLength: "2",
      maxLength: "100",
      required: true,
      placeholder: "input your LastName",
      title: "2 to 100 characters",
    };
    return STORE.frameLabelInput(myObject);*/
  };
  return API;
}
