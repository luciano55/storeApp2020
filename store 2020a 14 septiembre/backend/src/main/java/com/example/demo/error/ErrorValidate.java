package com.example.demo.error;

public enum ErrorValidate {

  ERROR_NULL(0, "No hay ErrorValidate", "Not ErrorValidate"),
  ERROR_MISSING(1, "Error de validación Desconocido", "Validation Error Unknown"),
  ERROR_VALIDATOR_NOT_FOUND(2, "Validador no encontrado", "Validator not found"),
  ERROR_VALIDATE(3, "Error al invokar el validador", "Error invoking validator"),
  ERROR_VALIDATE_PATTERN(4, "No cumple con el patrón", "Does not meet the pattern"),

  ERROR_NIF_LENGTH(10, "NIF longitud incorrecta", "NIF incorrect length"),
  ERROR_NIF_8DIGIT_LETTER(11, "NIF 8 digitos + una letra", "NIF 8 digits + one letter"),

  ERROR_NIE_BAD(15, "NIE Incorrecto", "NIE Incorrect"),
  ERROR_NIE_LENGTH(16, "NIE longitud incorrecta", "NIE incorrect length"),
  ERROR_NIE_LETTER(17, "NIE letra incorrecta", "NIE Wrong Letter"),

  ERROR_CIF_BAD_PATTERN(20, "CIF: patrón incorrecto", "Incorrect pattern CIF"),
  ERROR_CIF_BAD(21, "CIF Incorrecto", "Incorrect CIF"),

  ERROR_DOCUMENT_BAD(25, "Documento Incorrecto", "Incorrect Document"),

  ERROR_LETTER_SPACE(30, "Letras con/sin espacio", "letters with space"),
  ERROR_LETTER_ONLY(32, "Letras sin espacio", "letters without space"),
  ERROR_LETTER_NUMBER(34, "Numeros,Letras,ª,º con/sin espacio", "Numbers, Letters, ª, º with / without space"),

  ERROR_SIZE(40, "Incumple el Tamaño", "Breach the Size"), ERROR_DATE(42, "Formato: AAAA-mm-dd", "Format: AAAA-mm-dd"),
  ERROR_DATE_FULL(44, "Formato de Fecha Inválido", "Invalid Date Format"),

  ERROR_PHONE_LANDLINE(50, "Teléfono fijo erróneo", "Wrong landline"),
  ERROR_PHONE_MOBILE(51, "Teléfono móvil erróneo", "Wrong mobile"),
  ERROR_USER(52, "Incorecto patrón User", "Incorrect pattern CallerUser"),
  ERROR_PASSWORD(53, "Incorecto patrón Password", "Incorrect pattern Password");

  private final int id;
  private final String msgEs;
  private final String msgEn;

  ErrorValidate(int id, String msgEs, String msgEn) {
    this.id = id;
    this.msgEs = msgEs;
    this.msgEn = msgEn;
  }

  public int getId() {
    return id;
  }

  public String getMsgEs() {
    return msgEs;
  }

  public String getMsgEn() {
    return msgEn;
  }
}
