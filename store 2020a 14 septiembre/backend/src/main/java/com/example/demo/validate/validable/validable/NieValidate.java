package com.example.demo.validate.validable.validable;

import com.example.demo.error.ErrorValidate;
import com.example.demo.validate.validable.ValidableValue;

public class NieValidate implements ValidableValue {
  public static final String VALIDATE_NAME = "nieValidate";

  @Override
  public String getValidateName() {
    return VALIDATE_NAME;
  }

  @Override
  public ErrorValidate validate(String nie) {
    boolean esValido = false;
    int i = 1;
    int caracterASCII = 0;
    char letra = ' ';
    int miNIE = 0;
    int resto = 0;
    char[] asignacionLetra = { 'T', 'R', 'W', 'A', 'G', 'M', 'Y', 'F', 'P', 'D', 'X', 'B', 'N', 'J', 'Z', 'S', 'Q', 'V',
        'H', 'L', 'C', 'K', 'E' };
    if (nie.length() != 9) {
      return ErrorValidate.ERROR_NIE_LENGTH;
    }
    if (nie.length() == 9 && Character.isLetter(nie.charAt(8)) && nie.substring(0, 1).toUpperCase().equals("X")
        || nie.substring(0, 1).toUpperCase().equals("Y") || nie.substring(0, 1).toUpperCase().equals("Z")) {

      do {
        caracterASCII = nie.codePointAt(i);
        esValido = (caracterASCII > 47 && caracterASCII < 58);
        i++;
      } while (i < nie.length() - 1 && esValido);
    } else
      return ErrorValidate.ERROR_NIE_LETTER;
    if (esValido && nie.substring(0, 1).toUpperCase().equals("X")) {
      nie = "0" + nie.substring(1, 9);
    } else if (esValido && nie.substring(0, 1).toUpperCase().equals("Y")) {
      nie = "1" + nie.substring(1, 9);
    } else if (esValido && nie.substring(0, 1).toUpperCase().equals("Z")) {
      nie = "2" + nie.substring(1, 9);
    }

    if (esValido) {
      letra = Character.toUpperCase(nie.charAt(8));
      miNIE = Integer.parseInt(nie.substring(0, 8));
      resto = miNIE % 23;
      esValido = (letra == asignacionLetra[resto]);
    }

    if (esValido)
      return ErrorValidate.ERROR_NULL;
    else
      return ErrorValidate.ERROR_NIE_BAD;
  }

}
