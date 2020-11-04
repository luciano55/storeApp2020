package com.example.demo.validate;

/*
 * 
 * import harnina.validate.validators.*;
 * 
 * import java.util.HashMap;
 * 
 * public class ValidateValueManager { private static ValidateValueManager
 * validateManager; private static final HashMap<String, Class<? extends
 * ValidableValue>> VALIDATES = new HashMap<String, Class<? extends
 * ValidableValue>>();
 * 
 * private ValidateValueManager() { registValidate(CifValidate.VALIDATE_NAME,
 * CifValidate.class); registValidate(NieValidate.VALIDATE_NAME,
 * NieValidate.class); registValidate(NifValidate.VALIDATE_NAME,
 * NifValidate.class); registValidate(CifNieNifValidate.VALIDATE_NAME,
 * CifNieNifValidate.class);
 * registValidate(LettersWithSpaceValidate.VALIDATE_NAME,
 * LettersWithSpaceValidate.class);
 * registValidate(AddressValidate.VALIDATE_NAME, AddressValidate.class);
 * registValidate(CodigoPostalValidate.VALIDATE_NAME,
 * CodigoPostalValidate.class); registValidate(EmailValidate.VALIDATE_NAME,
 * EmailValidate.class); registValidate(BirthdayValidate.VALIDATE_NAME,
 * BirthdayValidate.class); registValidate(LandlineSpainValidate.VALIDATE_NAME,
 * LandlineSpainValidate.class);
 * registValidate(LandlineFranceValidate.VALIDATE_NAME,
 * LandlineFranceValidate.class);
 * registValidate(LandlineUSAValidate.VALIDATE_NAME, LandlineUSAValidate.class);
 * registValidate(LandlineValidate.VALIDATE_NAME, LandlineValidate.class);
 * registValidate(MobileSpainValidate.VALIDATE_NAME, MobileSpainValidate.class);
 * registValidate(MobileFranceValidate.VALIDATE_NAME,
 * MobileFranceValidate.class); registValidate(MobileUSAValidate.VALIDATE_NAME,
 * MobileUSAValidate.class); registValidate(MobileValidate.VALIDATE_NAME,
 * MobileValidate.class); registValidate(UserValidate.VALIDATE_NAME,
 * UserValidate.class); registValidate(PasswordValidate.VALIDATE_NAME,
 * PasswordValidate.class); }
 * 
 * public void registValidate(String validateName, Class<? extends
 * ValidableValue> validate) { VALIDATES.put(validateName.toUpperCase(),
 * validate); }
 * 
 * public ValidableValue getValidate(String validateName) { if
 * (VALIDATES.containsKey(validateName.toUpperCase())) { try { return
 * VALIDATES.get(validateName.toUpperCase()).getConstructor().newInstance(); }
 * catch (Exception e) { e.printStackTrace(); return new ErrorValidator(); } }
 * else { return new NotFoundValidate(); } }
 * 
 * public static synchronized ValidateValueManager getInstance() { if
 * (validateManager == null) { validateManager = new ValidateValueManager(); }
 * return validateManager; } }
 */