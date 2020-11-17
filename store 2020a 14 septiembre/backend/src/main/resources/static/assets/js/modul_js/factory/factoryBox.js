import { FactoryTag } from "./factoryTag.js";

export function FactoryBox() {
  const factoryTag = new FactoryTag();

  const API = {};
  let params = {};

  API.error = function () {
    params.id = "boxerror_";
    params.class = "box-error none";
    return factoryTag.span(params);
  };
API.info = function () {
    params.id = "infoBox";
    params.class = "box-info none";
    return factoryTag.span(params);
  };
  API.informationPanel = function(){    
    var informationBox = document.createElement("div");
    informationBox.id = "informationPanel";
    informationBox.className = "infoColor";
    return informationBox;
};
API.littleImgBox = function(){    
    var littleImgBox = document.createElement("img");
    littleImgBox.style.width = "2em";
    littleImgBox.style.height = "1.5em";
    return littleImgBox;
}

  return API;
}
