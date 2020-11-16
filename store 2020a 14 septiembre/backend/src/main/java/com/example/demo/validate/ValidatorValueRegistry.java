package com.example.demo.validate;

import java.util.HashMap;

import com.example.demo.validate.validable.ValidableValue;
import com.example.demo.validate.validable.regexp.AddressValidate;
import com.example.demo.validate.validable.regexp.BirthdayValidate;
import com.example.demo.validate.validable.regexp.CodigoPostalValidate;
import com.example.demo.validate.validable.regexp.EmailValidate;
import com.example.demo.validate.validable.regexp.LandlineFranceValidate;
import com.example.demo.validate.validable.regexp.LandlineSpainValidate;
import com.example.demo.validate.validable.regexp.LandlineUSAValidate;
import com.example.demo.validate.validable.regexp.LettersWithSpaceValidate;
import com.example.demo.validate.validable.regexp.MobileFranceValidate;
import com.example.demo.validate.validable.regexp.MobileSpainValidate;
import com.example.demo.validate.validable.regexp.MobileUSAValidate;
import com.example.demo.validate.validable.regexp.PasswordValidate;
import com.example.demo.validate.validable.regexp.UserValidate;
import com.example.demo.validate.validable.validable.CifNieNifValidate;
import com.example.demo.validate.validable.validable.CifValidate;
import com.example.demo.validate.validable.validable.ErrorValidator;
import com.example.demo.validate.validable.validable.LandlineValidate;
import com.example.demo.validate.validable.validable.MobileValidate;
import com.example.demo.validate.validable.validable.NieValidate;
import com.example.demo.validate.validable.validable.NifValidate;
import com.example.demo.validate.validable.validable.NotFoundValidate;

public class ValidatorValueRegistry {
  private static ValidatorValueRegistry validatorRegistration;
  private static final HashMap<String, Class<? extends ValidableValue>> VALIDATES = new HashMap<String, Class<? extends ValidableValue>>();

  private ValidatorValueRegistry() {
    addValidator(CifValidate.VALIDATE_NAME, CifValidate.class);
    addValidator(NieValidate.VALIDATE_NAME, NieValidate.class);
    addValidator(NifValidate.VALIDATE_NAME, NifValidate.class);
    addValidator(CifNieNifValidate.VALIDATE_NAME, CifNieNifValidate.class);
    addValidator(LettersWithSpaceValidate.VALIDATE_NAME, LettersWithSpaceValidate.class);
    addValidator(AddressValidate.VALIDATE_NAME, AddressValidate.class);
    addValidator(CodigoPostalValidate.VALIDATE_NAME, CodigoPostalValidate.class);
    addValidator(EmailValidate.VALIDATE_NAME, EmailValidate.class);
    addValidator(BirthdayValidate.VALIDATE_NAME, BirthdayValidate.class);
    addValidator(LandlineSpainValidate.VALIDATE_NAME, LandlineSpainValidate.class);
    addValidator(LandlineFranceValidate.VALIDATE_NAME, LandlineFranceValidate.class);
    addValidator(LandlineUSAValidate.VALIDATE_NAME, LandlineUSAValidate.class);
    addValidator(LandlineValidate.VALIDATE_NAME, LandlineValidate.class);
    addValidator(MobileSpainValidate.VALIDATE_NAME, MobileSpainValidate.class);
    addValidator(MobileFranceValidate.VALIDATE_NAME, MobileFranceValidate.class);
    addValidator(MobileUSAValidate.VALIDATE_NAME, MobileUSAValidate.class);
    addValidator(MobileValidate.VALIDATE_NAME, MobileValidate.class);
    addValidator(UserValidate.VALIDATE_NAME, UserValidate.class);
    addValidator(PasswordValidate.VALIDATE_NAME, PasswordValidate.class);
    // addValidator(PasswordValidate.VALIDATE_NAME, PasswordValidate.class);

  }

  public ValidableValue getValidator(String validateName) {
    if (VALIDATES.containsKey(validateName.toUpperCase())) {
      try {
        // Reflection nameclass.getConstructor().newInstance();
        return VALIDATES.get(validateName.toUpperCase()).getConstructor().newInstance();
      } catch (Exception e) {
        e.printStackTrace();
        return new ErrorValidator();
      }
    } else {
      return new NotFoundValidate();
    }
  }

  public void addValidator(String validateName, Class<? extends ValidableValue> validate) {
    if (!VALIDATES.containsKey(validateName.toUpperCase())) {
      VALIDATES.put(validateName.toUpperCase(), validate);
    }
  }

  public static synchronized ValidatorValueRegistry getInstance() {
    if (validatorRegistration == null) {
      validatorRegistration = new ValidatorValueRegistry();
    }
    return validatorRegistration;
  }

  public int getSizeRegistry() { // para test
    return VALIDATES.size();
  }

  /*
   * ****************No interesa ************************* **
   * 
   * private void deleteValidator() { }
   * 
   * por ser final
   * 
   * private void deleteRegistryl() { }
   */
}
