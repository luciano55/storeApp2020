package com.example.demo.validate.old;
/*
 * import harnina.validate.validators.SizeValidate;
 * 
 * import java.util.HashMap;
 * 
 * public class ValidateSizeManager { private static ValidateSizeManager
 * validateLengthManager; private static final HashMap<String, Class<? extends
 * ValidableLength>> VALIDATES = new HashMap<String, Class<? extends
 * ValidableLength>>();
 * 
 * private ValidateSizeManager() { registValidate(SizeValidate.VALIDATE_NAME,
 * SizeValidate.class); }
 * 
 * public void registValidate(String validateName, Class<? extends
 * ValidableLength> validate) { VALIDATES.put(validateName.toUpperCase(),
 * validate); }
 * 
 * public ValidableLength getValidate(String validateName) { if
 * (VALIDATES.containsKey(validateName.toUpperCase())) { try { return
 * VALIDATES.get(validateName.toUpperCase()).getConstructor().newInstance(); }
 * catch (Exception e) { e.printStackTrace(); return (ValidableLength) new
 * ErrorValidator(); } } else { return (ValidableLength) new NotFoundValidate();
 * } }
 * 
 * public static synchronized ValidateSizeManager getInstance() { if
 * (validateLengthManager == null) { validateLengthManager = new
 * ValidateSizeManager(); } return validateLengthManager; }
 * 
 * }
 */
