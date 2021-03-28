package com.example.demo.validate.validable.validable;

import java.util.regex.Pattern;

import com.example.demo.error.ErrorValidate;
import com.example.demo.validate.validable.ValidableValue;

public class CifValidate implements ValidableValue {

  public static final String VALIDATE_NAME = "cifValidate";

  @Override
  public String getValidateName() {
    return VALIDATE_NAME;
  }

  private static final Pattern cifPattern = Pattern.compile("^([ABCDEFGHJKLMNPQRSUVW])(\\d{7})([0-9A-J])$");
  private static final String CONTROL_SOLO_NUMEROS = "ABEH"; // Sólo admiten números como caracter de control
  private static final String CONTROL_SOLO_LETRAS = "KPQS"; // Sólo admiten letras como caracter de control
  private static final String CONTROL_NUMERO_A_LETRA = "JABCDEFGHI"; // Conversión de dígito a letra de control.

  @Override
  public ErrorValidate validate(String cif) {
    try {
      if (!cifPattern.matcher(cif).matches()) {
        return ErrorValidate.ERROR_CIF_BAD_PATTERN;
      }
      int parA = 0;
      for (int i = 2; i < 8; i += 2) {
        final int digito = Character.digit(cif.charAt(i), 10);
        if (digito < 0) {
          return ErrorValidate.ERROR_CIF_BAD_PATTERN;
        }
        parA += digito;
      }
      int nonB = 0;
      for (int i = 1; i < 9; i += 2) {
        final int digito = Character.digit(cif.charAt(i), 10);
        if (digito < 0) {
          return ErrorValidate.ERROR_CIF_BAD;
        }
        int nn = 2 * digito;
        if (nn > 9) {
          nn = 1 + (nn - 10);
        }
        nonB += nn;
      }
      final int parcialC = parA + nonB;
      final int digitoE = parcialC % 10;
      final int digitoD = (digitoE > 0) ? (10 - digitoE) : 0;
      final char letraIni = cif.charAt(0);
      final char caracterFin = cif.charAt(8);
      final boolean esControlValido =
          // ¿el caracter de control es válido como letra?
          (CONTROL_SOLO_NUMEROS.indexOf(letraIni) < 0 && CONTROL_NUMERO_A_LETRA.charAt(digitoD) == caracterFin) ||
          // ¿el caracter de control es válido como dígito?
              (CONTROL_SOLO_LETRAS.indexOf(letraIni) < 0 && digitoD == Character.digit(caracterFin, 10));
      if (esControlValido)
        return ErrorValidate.ERROR_NULL;
      else
        return ErrorValidate.ERROR_CIF_BAD;

    } catch (Exception e) {
      return ErrorValidate.ERROR_MISSING;
    }
  }
}
