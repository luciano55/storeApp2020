const validateUtil = {
  getLimitNode: function (node) {
    var limite = {};
    if (node.minLength && node.maxLength) {
      limite.limiteInferior = node.minLength;
      limite.limiteSuperior = node.maxLength;
      return limite;
    }
    return null;
  },
  addLimitPattern: function (params) {
    params.limite = STORE.validateUtil.getLimitNode(params.nodo);
    if (params.limite.limiteInferior > 0 && params.limite.limiteSuperior > 0) {
      params.patron +=
        "{" +
        params.limite.limiteInferior +
        "," +
        params.limite.limiteSuperior +
        "})$";

      params.mensajeError +=
        " ; entre " +
        params.limite.limiteInferior +
        ", " +
        params.limite.limiteSuperior;
    } else {
      params.patron += "*)$";
    }
  },
  validateAllNumber: function (cadena) {
    var i,
      j = 0;

    var unNumero = "";

    var temporal = 0;

    var numeros = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];

    for (i = 0; i < cadena.length; i++) {
      unNumero = cadena.substr(i, i + 1);

      if (numeros.indexOf(unNumero)) {
        temporal++;
      }
    }

    if (temporal != cadena.length) {
      return false;
    }
    return true;
  },
  validateLetterDNI: function (dni) {
    var letra_dni = dni.substr(8, 1);

    var numeros_dni = dni.substr(0, 8);

    var letras = [
      "T",
      "R",
      "W",
      "A",
      "G",
      "M",
      "Y",
      "F",
      "P",
      "D",
      "X",
      "B",
      "N",
      "J",
      "Z",
      "S",
      "Q",
      "V",
      "H",
      "L",
      "C",
      "K",
      "E",
    ];

    var resto = numeros_dni % 23;

    var letra = letras[resto];

    return letra == letra_dni;
  },
  validateListOfValues: function (miValue, lista) {
    var iterador = lista.values();

    var result = false;

    for (var i = 0; i < iterador.length; i++) {
      if (iterador[i] == miValue) {
        result = true;
        break;
      }
    }
    return result;
  },
  execExpRegular: function (pattern, value) {
    var regExp = new RegExp(pattern);

    return regExp.test(value);
  },
  assessConsequences: function (result, params) {
    if (result) {
      params.nodo.style.backgroundColor = STORE.color.validColor;
      if (STORE.stratregyType == "oneByOne") {
        STORE.nodeList.nextVisible(params.nodo);
      }
      STORE.error.off();
      STORE.submit.on();
      $("labelError_" + params.nodo.id).style.display = "none";
      // STORE.reponsiWindow();
    } else {
      params.nodo.style.backgroundColor = STORE.color.errorColor;
      STORE.error.set_message(params.mensajeError);
      STORE.error.on();
      STORE.submit.off();
    }
  },
  callAssessConsequences: function (params) {
    STORE.validateUtil.assessConsequences(
      STORE.validateUtil.execExpRegular(params.patron, params.nodo.value),
      params
    );
  },
};
const validations = {
  lettersWithSpace: function (evt) {
    var params = {};
    params.nodo = evt.target;
    params.patron = "^([a-zA-ZñÑáéíóúÁÉÍÓÚ\\s]";
    params.mensajeError = "ERROR: Solo Letras con Espacio ";

    validateUtil.addLimitPattern(params);
    validateUtil.callAssessConsequences(params);
  },
  lettersWithoutSpace: function (evt) {
    params.nodo = evt.target;

    params.patron = "^([a-zA-ZñÑáéíóúÁÉÍÓÚ]";

    params.mensajeError = "ERROR: Letras sin Espacio ";

    ValidacionUtil.addLimitePatron(params);

    //STORE.ValidacionUtil.valorarConsecuencia(
    // STORE.ValidacionUtil.validarExpRegular(params),
    //  params    );
  },
};
