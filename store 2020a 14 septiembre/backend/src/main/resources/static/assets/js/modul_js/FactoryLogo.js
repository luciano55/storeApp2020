import { FactoryTag } from "./factoryTag.js";
export function FactoryLogo() {
  const API = {};
  const factoryTag = new FactoryTag();
  let params = {};

  API.harnina = function () {
    params.class = "logo";
    const article = factoryTag.article(params);
    params.class = "";
    params.href = "https://iesarroyoharnina.educarex.es/";
    params.target = "_blank";
    params.title = "I.E.S. Arroyo Harnina";
    const a = factoryTag.a(params);
    params = {};
    params.class = "imageLogo";
    params.src = "assets/img/harni01.png";
    const img = factoryTag.img(params);
    a.appendChild(img);
    article.appendChild(a);
    return article;
  };
  API.informatica = function () {
    params.class = "logo";
    const article = factoryTag.article(params);
    params.class = "";
    params.src = "assets/img/escudo02.png";
    params.alt = "Escudo Informática";
    const img = factoryTag.img(params);

    article.appendChild(img);
    return article;
  };
  API.rotuloDiagonal = function () {
    params.class = "logo";
    const article = factoryTag.article(params);

    article.innerHTML = `<a href = '#0'> <svg height='60' width='200'><text x='14' y='15' fill='pink' transform='rotate(30 20,40)'> DAM 20-21</text>     Sorry, your browser does not support inline SVG. </svg> </a >`;

    /*
    params = {};
    params.href = "#0";
    const a = factoryTag.a(params);
    params = {};
    params.class = "rotuloCaja";
    params.text = `<text x='14' y='15' fill='pink' transform='rotate(30 20, 40)'> DAM 2020</text> Sorry, your browser does not support inline SVG.`;
    //  params.width = "200";
    const svg = factoryTag.svg(params);

    params = {};
    params.class = "rotuloDiagonal";
    params.text = "  DAM 2020";
    //const text = factoryTag.text(params);
    //svg.appendChild(text);
    a.appendChild(svg);
    article.appendChild(a);

    */
    return article;
  };
  return API;
}
