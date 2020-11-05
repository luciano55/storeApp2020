package com.example.demo.validate.validable.validable;

import com.example.demo.error.ErrorValidate;
import com.example.demo.validate.validable.ValidableValue;

public class NifValidate implements ValidableValue {
  public static final String VALIDATE_NAME = "nifValidate";

  @Override
  public String getValidateName() {
    return VALIDATE_NAME;
  }

  private String nif;

  @Override
  public ErrorValidate validate(String nif) {
    this.nif = nif;

    if (nif.length() != 9 || Character.isLetter(nif.charAt(8)) == false) {

      return ErrorValidate.ERROR_NIF_LENGTH;
    }

    String letraMayuscula = (this.nif.substring(8)).toUpperCase();
    String losNumeros = this.nif.substring(0, 8);

    if (soloNumeros(losNumeros) == true && getLetraDNI().equals(letraMayuscula)) {
      return ErrorValidate.ERROR_NULL;
    }
    return ErrorValidate.ERROR_NIF_8DIGIT_LETTER;
  }

  private boolean soloNumeros(String cadena) {

    int i, j = 0;

    int cuenta = 0;

    String unNumero = "";

    String[] numeros = { "0", "1", "2", "3", "4", "5", "6", "7", "8", "9" };

    for (i = 0; i < cadena.length(); i++) {

      unNumero = cadena.substring(i, i + 1);

      for (j = 0; j < numeros.length; j++) {
        if (unNumero.equals(numeros[j])) {
          cuenta++;
        }
      }
    }
    if (cuenta != cadena.length()) {
      return false;
    }
    return true;
  }

  private String getLetraDNI() {

    int miDNI = Integer.parseInt(this.nif.substring(0, 8));

    int resto = 0;

    String letra = "";

    String[] letras = { "T", "R", "W", "A", "G", "M", "Y", "F", "P", "D", "X", "B", "N", "J", "Z", "S", "Q", "V", "H",
        "L", "C", "K", "E" };

    resto = miDNI % 23;

    letra = letras[resto];

    return letra;
  }
}
