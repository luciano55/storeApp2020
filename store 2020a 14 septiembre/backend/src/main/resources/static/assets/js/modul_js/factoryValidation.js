import {COLOR} from "./color.js";
import {FactoryBox} from "./factoryBox.js";


export const ValidateUtil = {
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
    params.limite = ValidateUtil.getLimitNode(params.nodo);
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

      params.nodo.style.borderColor =  COLOR.VALID;
      params.nodo.style.borderWidth =  "5px";

      /*
      params.nodo.style.borderColor = COLOR.VALID;
      params.nodo.style.borderWidth = "1px 5px 10px 20px";
       params.nodo.style.background = COLOR.VALID;
alert(params.nodo.style.backgroundColor);
     
      if (STORE.stratregyType == "oneByOne") {
        STORE.nodeList.nextVisible(params.nodo);
      }
      STORE.error.off();
      STORE.submit.on();
      $("labelError_" + params.nodo.id).style.display = "none";*/
      // STORE.reponsiWindow();
    } else {
        params.nodo.style.borderColor = COLOR.ERROR;
        params.nodo.style.borderWidth =  "10px";

      /*
      params.nodo.style.backgroundColor = STORE.color.errorColor;
      STORE.error.set_message(params.mensajeError);
      STORE.error.on();
      STORE.submit.off();*/
    }
  },
  callAssessConsequences: function (params) {
    ValidateUtil.assessConsequences(
      ValidateUtil.execExpRegular(params.patron, params.nodo.value),
      params
    );
  },
};

export const Validations = {
    accepted : function(evt){
        const params = {};
        params.nodo = evt.target;
        ValidateUtil.assessConsequences(true,params);
    },
    address: function (evt) {
        const params = {};
        params.nodo = evt.target;

        params.patron = "^([0-9ºª.:,/a-zA-ZñÑáéíóúÜüÁÉÍÓÚ\\s]";

        params.mensajeError = "Domicilio NO válido";

        ValidateUtil.addLimitPattern(params);

        ValidateUtil.callAssessConsequences(params);

    },
    cp: function (evt) {
        var informationPanel;
        const params = {};
        params.nodo = evt.target;
        params.patron = "^(?:0[1-9][0-9]{3}|[1-4][0-9]{4}|5[0-2][0-9]{3})$";
        params.mensajeError = "Formato CP No Válido";
        if (!$("informationPanel")) {
            informationPanel = STORE.informationPanel();
        } else {
            informationPanel = $("informationPanel");            
             $("informationPanel").style.display = "";
            
        }
        if (params.nodo.value.length == 5) {
            STORE.getCityByCp(params.nodo.value).then(function (response) {

                informationPanel.innerHTML = response;
                if (params.nodo.nextSibling) {
                    params.nodo.parentNode.insertBefore(informationPanel, params.nodo.nextSibling);
                } else {
                    params.nodo.parentNode.appendChild(informationPanel);
                }

                ValidateUtil.callAssessConsequences(params);


            }, function (Error) {
                params.mensajeError = "CP No Válido";
                params.nodo.value = "?????";
                if ($("informationPanel")) {
                    $("informationPanel").style.display = "none";
                }

                ValidateUtil.callAssessConsequences(params);


            });
        }
        ValidateUtil.callAssessConsequences(params);
    },
    date: function (evt) {
       const params = {};
        params.nodo = evt.target;
        // aaaa-mm-dd
        params.patron = "^(\\d{4})(\\-)(0[1-9]|1[012])(\\-)(0[1-9]|[1-2]\\d|3[01])$";
        params.mensajeError = "Fecha NO válida";
       ValidateUtil.callAssessConsequences(params);

    },
    dni: function (evt) {
        const params = {};
        params.nodo = evt.target;
        params.patron = "^[0-9]{8,8}[A-Za-z]$";
        params.mensajeError = "DNI distinto a 9 caracteres o que el último carácter no es una letra";

        if (params.nodo.value.length == 9) {
            var numero = params.nodo.value.substr(0, params.nodo.value.length - 1);
            var miletra = params.nodo.value.substr(params.nodo.value.length - 1, 1);
            numero = numero % 23;
            letra = 'TRWAGMYFPDXBNJZSQVHLCKET';
            letra = letra.substring(numero, numero + 1);
            if (letra != miletra.toUpperCase()) {
                params.mensajeError = 'Dni erroneo, la letra del NIF no se corresponde';
                params.nodo.value = params.nodo.value.slice(0, -1) + '*';
            }
        }
        ValidateUtil.callAssessConsequences(params);


    },
    nie : function(evt){
            const params = {};
            params.nodo = evt.target;
            params.mensajeError = "NIE no válido";
            var nie = "";
            var esValido = false;
            var i = 1;
            var caracterASCII = 0;
            var letra = ' ';
            var miNIE = 0;
            var resto = 0;
            var asignacionLetra = ['T', 'R', 'W', 'A', 'G', 'M', 'Y', 'F', 'P', 'D', 'X','B', 'N', 'J', 'Z', 'S', 'Q', 'V', 'H', 'L', 'C', 'K', 'E'];
            var patronLetra =  "^([a-zA-Z])$";
            var expregular = new RegExp(patronLetra);


            if( params.nodo.value.length == 9 && expregular.test(params.nodo.value.substr(8,1) )

                && params.nodo.value.substr(0,1).toUpperCase()=="X"
                || params.nodo.value.substring(0,1).toUpperCase() == "Y"
                || params.nodo.value.substring(0,1).toUpperCase() == "Z") {

                do {
                    caracterASCII = params.nodo.value.codePointAt(i);
                    esValido = (caracterASCII > 47 && caracterASCII < 58);
                    i++;

                } while(i < params.nodo.value.length - 1 && esValido);

                if(esValido && params.nodo.value.substring(0,1).toUpperCase() == "X") {
                    nie = "0" + params.nodo.value.substring(1,9);
                } else if(esValido && params.nodo.value.substring(0,1).toUpperCase() == "Y") {
                   nie= "1" + params.nodo.value.substring(1,9);
                } else if(esValido && params.nodo.value.substring(0,1).toUpperCase() == "Z") {
                    nie = "2" + params.nodo.value.substring(1,9);
                }
                alert("nie" + nie);
                if(esValido) {
                    letra =  nie.substr(8).toUpperCase();
                    miNIE = nie.substr(0,8);
                    alert("miNIE: " + miNIE)
                    resto = miNIE % 23;

                    esValido = (letra == asignacionLetra[resto]);
                }

                ValidacionUtil.valorarConsecuencia(esValido,params);
            }

        },
    cifnif : function(evt){
           const  params = {};
            params.nodo = evt.target;
            params.mensajeError = "NIFCIF no válido";
            var par = 0;
            var non = 0;
            var letras = "ABCDEFGHKLMNPQS";
            var letra = params.nodo.value.charAt(0);

            if (params.nodo.value.length!=9)
            {
                params.mensajeError ='El Cif debe tener 9 dígitos';
               ValidateUtil.assessConsequences(false,params);
                return false;
            }
            if (letras.indexOf(letra.toUpperCase())==-1)
            {
                params.mensajeError = "El comienzo del Cif no es válido";
                ValidateUtil.assessConsequences(false,params);
                return false;
            }
            for (var zz=2;zz<8;zz+=2)
            {
                par = par+parseInt(params.nodo.value.charAt(zz));
            }

            for (var zz=1; zz<9; zz+=2)
            {
               var  nn = 2*parseInt(params.nodo.value.charAt(zz));
                if (nn > 9) nn = 1+(nn-10);
                non = non + nn;
            }
            var parcial = par + non;

            var control = (10 - ( parcial % 10));

            if (control==10) control=0;

            if (control  !=  params.nodo.value.charAt(8))
            {
                params.mensajeError = "El Cif no es válido";
                ValidateUtil.assessConsequences(false,parametro);
                return false;
            }
            ValidateUtil.assessConsequences(true,params);
        },
    dniNieCif: function (evt) {
        const params = {};
        params.nodo = evt.target;

        params.mensajeError = "DNI no válido";

        var los8numeros = params.nodo.value.substr(0, 8);

        if (params.nodo.value.length == 9 && params.nodo.value.substr(8, 1)) {

            if (ValidateUtil.validateAllNumber(los8numeros) && ValidateUtil.validateLetterDNI(params.nodo.value)) {

                ValidateUtil.assessConsequences(true, params);
                return true;
            }
        }

        // NIE

        var nie = "";
        var esValido = false;
        var i = 1;
        var caracterASCII = 0;
        var letra = ' ';
        var miNIE = 0;
        var resto = 0;
        var asignacionLetra = ['T', 'R', 'W', 'A', 'G', 'M', 'Y', 'F', 'P', 'D', 'X', 'B', 'N', 'J', 'Z', 'S', 'Q', 'V', 'H', 'L', 'C', 'K', 'E'];
        var patronLetra = "^([a-zA-Z])$";
        var expregular = new RegExp(patronLetra);


        if (params.nodo.value.length == 9 && expregular.test(params.nodo.value.substr(8, 1))

            &&
            params.nodo.value.substr(0, 1).toUpperCase() == "X" ||
            params.nodo.value.substring(0, 1).toUpperCase() == "Y" ||
            params.nodo.value.substring(0, 1).toUpperCase() == "Z") {

            do {
                caracterASCII = parametro.nodo.value.codePointAt(i);
                esValido = (caracterASCII > 47 && caracterASCII < 58);
                i++;

            } while (i < params.nodo.value.length - 1 && esValido);

            if (esValido && params.nodo.value.substring(0, 1).toUpperCase() == "X") {
                nie = "0" + params.nodo.value.substring(1, 9);
            } else if (esValido && parametro.nodo.value.substring(0, 1).toUpperCase() == "Y") {
                nie = "1" + params.nodo.value.substring(1, 9);
            } else if (esValido && params.nodo.value.substring(0, 1).toUpperCase() == "Z") {
                nie = "2" + params.nodo.value.substring(1, 9);
            }

            if (esValido) {
                letra = nie.substr(8).toUpperCase();
                miNIE = nie.substr(0, 8);
                resto = miNIE % 23;
                esValido = (letra == asignacionLetra[resto]);
            }
        }
        if (esValido) {

            ValidateUtil.assessConsequences(true, params);
            return true;
        }

        // CIF

        var par = 0;
        var non = 0;
        var letras = "ABCDEFGHKLMNPQS";
        var letra = params.nodo.value.charAt(0);

        params.mensajeError = 'El documento ni es NIF ni NIE ni CIF';

        if (params.nodo.value.length != 9) {
            ValidateUtil.assessConsequences(false, params);
            return false;
        }
        if (letras.indexOf(letra.toUpperCase()) == -1) {
            ValidateUtil.assessConsequences(false, params);
            return false;
        }
        for (var zz = 2; zz < 8; zz += 2) {
            par = par + parseInt(params.nodo.value.charAt(zz));
        }

        for (var zz = 1; zz < 9; zz += 2) {
            var nn = 2 * parseInt(params.nodo.value.charAt(zz));
            if (nn > 9) nn = 1 + (nn - 10);
            non = non + nn;
        }
        var parcial = par + non;

        var control = (10 - (parcial % 10));

        if (control == 10) control = 0;

        if (control == params.nodo.value.charAt(8)) {

            ValidateUtil.assessConsequences(true, params);
            return false;
        }

        ValidateUtil.assessConsequences(false, params);

    },
    email: function (evt) {
        const params = {};
        params.nodo = evt.target;

        params.patron = "^([a-zA-Z0-9.!#$%&'+/=?^_`{|}~-]+@[a-zA-Z0-9-]{3,20}(?:\\.[a-zA-Z0-9-]{2,3}))$";

        params.mensajeError = "Email NO válido";

        ValidateUtil.callAssessConsequences(params);

    },
    imageName : function(evt){
       const  params = {};
        params.nodo = evt.target;
        var tipo = ['jpg', 'png', 'gif'];
        params.mensajeError = "El tipo de fichero no es válido";
        alert(params.nodo.value);
        if (ValidateUtil.validateListOfValues(STORE.File.getFileExtensionFromURI(params.nodo.value), tipo)){
            params.patron = "^([a-zA-ZñÑáéíóúÁÉÍÓÚ0_9\\\:\.\/])"; 
            params.mensajeError += " Cualquier caracter ";
            if( ValidateUtil.execExpRegular(params.patron,STORE.File.getFileExtensionFromURI(params.nodo.value)))      
               {
                   params.patron = "^([a-zA-ZñÑáéíóúÁÉÍÓÚ0_9\\s])";

                   params.mensajeError = "ERROR:Letras y numeros con Espacio ";

                   params.text = STORE.File.getFileNameFromURI(params.nodo.value);

                   params.expregular = new RegExp( params.patron);
                   
                   ValidateUtil.assessConsequences(params.expregular.test(STORE.File.getFileNameFromURI(params.nodo.value)),params);
                  //STORE.ValidacionUtil.valorarConsecuencia(parametro.expregular.test(STORE.File.getFileNameFromURI(parametro.nodo.value)),parametro);

                  //$("idFile").value = params.nodo.value;
               }
               else {
                   ValidateUtil.assessConsequences(false,params);
                   
               }
            } else {

                   ValidateUtil.assessConsequences(false,params);
            }
    },
    landline : function (evt) {
        var informationPanel;
        const params = {};
        params.nodo = evt.target;
        params.patron = STORE.prefix_input.regExpFijo;
        params.maximo = STORE.prefix_input.maximo_landline || "9";
        params.mensajeError = ("Tlf fijo con formato erróneo y ademas debe tener: " + params.maximo + " dígitos");
        if (!$("informationPanel")) {
            informationPanel = STORE.informationPanel();
        } else {
            informationPanel = $("informationPanel");
        }

        if (params.nodo.value.length == params.maximo) {
            informationPanel.innerHTML = $("select_landline").value + "-" + params.nodo.value;
            if (params.nodo.nextSibling) {
                params.nodo.parentNode.insertBefore(informationPanel, params.nodo.nextSibling);
            } else {
                params.nodo.parentNode.appendChild(informationPanel);
            }

        }
        ValidateUtil.callAssessConsequences(params);

    },
    lettersWithSpace: function (evt) {
        const params = {};
        params.nodo = evt.target;
        params.patron = "^([a-zA-ZñÑáéíóúÁÉÍÓÚ\\s]";
        params.mensajeError = "ERROR: Solo Letras con Espacio ";

        ValidateUtil.addLimitPattern(params);
        ValidateUtil.callAssessConsequences(params);

    },
    lettersWithoutSpace : function(evt){
            const params = {};
            params.nodo = evt.target;
            params.patron =  "^([a-zA-ZñÑáéíóúÁÉÍÓÚ]";
            params.mensajeError = "ERROR: Letras sin Espacio ";

            ValidacionUtil.addLimitePatron(params);

            ValidacionUtil.valorarConsecuencia(STORE.ValidacionUtil.validarExpRegular(params),params);

        },
    mobile: function (evt) {
      const factoryBox = new FactoryBox();
        let informationPanel;
        const params = {};
        params.nodo = evt.target;
        params.patron = sessionStorage.getItem("prefix_input_regExpMovil"); //STORE.prefix_input.regExpMovil;
        alert("params.patron " + params.patron);
        params.maximo = sessionStorage.getItem("prefix_input_maximo_mobile") || 9;//STORE.prefix_input.maximo_mobile || 9;
        params.mensajeError = ("Móvil con formato erróneo y ademas debe tener: " + params.maximo + " dígitos");
        if (!document.getElementById("informationPanel")) {
            informationPanel = factoryBox.informationPanel();
        } else {
            informationPanel = document.getElementById("informationPanel");
        }

        if (params.nodo.value.length == params.maximo) {
            informationPanel.innerHTML = document.getElementById("select_mobile").value + "-" + params.nodo.value;
            if (params.nodo.nextSibling) {
                params.nodo.parentNode.insertBefore(informationPanel, params.nodo.nextSibling);
            } else {
                params.nodo.parentNode.appendChild(informationPanel);
            }

        }
        ValidateUtil.callAssessConsequences(params);

    },
    password : function(evt){
        const params = {};
        params.nodo = evt.target;
        
        // Minimo 8 caracteres y Maximo 15
            // Al menos una letra mayúscula y Al menos una letra minucula
            // Al menos un dígito y Al menos 1 caracter especial
            //  No espacios en blanco
        
        params.patron =  "^(?=.*[a-z])(?=.*[A-Z])(?=.*\\d)(?=.*[$@$!-_%*?&])[A-Za-z\\d$@$!-_%*?&]{8,15}[\\S]$";

        params.mensajeError = "Password no válida";

       ValidateUtil.callAssessConsequences(params);

        
    },
    user: function (evt) {
       const  params = {};
        params.nodo = evt.target;
        // Los usuarios tienen 7 dígitos.
        //El primer dígito es una letra.
        //Los dígitos 2 y 3 pueden ser letras o números.
        //Los 4 últimos son números.

        params.patron = "^[A-Za-z]{1}([A-Za-z]{2}|[0-9]{2}|[A-Za-z][0-9]{2})([0-9]{4})$";

        params.mensajeError = "Usuario no válido";

       ValidateUtil.callAssessConsequences(params);
    }
};
