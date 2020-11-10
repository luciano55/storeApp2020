package com.example.demo.validate.old;

/*
 * 
 * import harnina.entity.Login; import harnina.entity.User; import
 * harnina.entity.UserData; import harnina.errror.ErrorValidate;
 * 
 * import java.util.ArrayList; import java.util.HashMap; import java.util.Map;
 * 
 * public class ValidateValueComposite { private Map<String, ArrayList<String>>
 * validateMap = new HashMap<String, ArrayList<String>>(); private
 * ValidateValueManager manager = ValidateValueManager.getInstance();
 * 
 * public HashMap<String, ErrorValidator> validate(User user) {
 * addValidate(Validator.nif.getName(), user.getNif());
 * addValidate(Validator.letterWithSpace.getName(), user.getFirstName());
 * addValidate(Validator.letterWithSpace.getName(), user.getLastName());
 * addValidate(Validator.adress.getName(), user.getAdress());
 * addValidate(Validator.cp.getName(), user.getCp());
 * addValidate(Validator.email.getName(), user.getEmail());
 * addValidate(Validator.birthday.getName(), user.getBirthday());
 * addValidate(Validator.landline.getName(), user.getLandline());
 * addValidate(Validator.mobile.getName(), user.getMobile()); Login login = new
 * Login(user.getUser(), user.getPassword()); return validate(login); }
 * 
 * public HashMap<String, ErrorValidator> validate(Login login) {
 * 
 * addValidate(Validator.user.getName(), login.getUser());
 * addValidate(Validator.password.getName(), login.getPassword()); return
 * generateError(); }
 * 
 * public HashMap<String, ErrorValidator> validate(UserData user) {
 * addValidate(Validator.nif.getName(), user.getNif());
 * addValidate(Validator.letterWithSpace.getName(), user.getFirstName());
 * addValidate(Validator.letterWithSpace.getName(), user.getLastName());
 * addValidate(Validator.adress.getName(), user.getAdress());
 * addValidate(Validator.cp.getName(), user.getCp());
 * addValidate(Validator.email.getName(), user.getEmail());
 * addValidate(Validator.birthday.getName(), user.getBirthday());
 * addValidate(Validator.landline.getName(), user.getLandline());
 * addValidate(Validator.mobile.getName(), user.getMobile()); return
 * generateError(); }
 * 
 * private HashMap<String, ErrorValidator> generateError() { HashMap<String,
 * ErrorValidator> errors = new HashMap<>(); for (Map.Entry<String,
 * ArrayList<String>> line : this.validateMap.entrySet()) { String nameValidador
 * = line.getKey(); ArrayList<String> lineValue = line.getValue();
 * lineValue.forEach((value) -> { ValidableValue validable =
 * this.manager.getValidate(nameValidador); ErrorValidator error =
 * validable.validate((String) value); if (error.getId() != 0) {
 * errors.put((String) value, error); } }); } return errors; }
 * 
 * private void addValidate(String key, String value) { ArrayList temporaryList
 * = null; if (validateMap.containsKey(key)) { temporaryList =
 * validateMap.get(key); // Por si hay null para esa clave, lo machaco if
 * (temporaryList == null) { temporaryList = new ArrayList(); }
 * temporaryList.add(value); } else { temporaryList = new ArrayList();
 * temporaryList.add(value); } validateMap.put(key, temporaryList); }
 * 
 * }
 */