package com.example.demo.validate.old;
/*
 * import harnina.entity.Login; import harnina.entity.StringLimit; import
 * harnina.entity.User; import harnina.entity.UserData; import
 * harnina.errror.ErrorValidate;
 * 
 * import java.util.ArrayList; import java.util.HashMap; import java.util.Map;
 * 
 * public class ValidateSizeComposite { private Map<String,
 * ArrayList<StringLimit>> validateMap = new HashMap<String,
 * ArrayList<StringLimit>>();
 * 
 * private ValidateSizeManager manager = ValidateSizeManager.getInstance();
 * 
 * public HashMap<String, ErrorValidator> validate(User user) {
 * 
 * addValidate(Validator.size.getName(), user.getFirstName(), 2, 50);
 * addValidate(Validator.size.getName(), user.getLastName(), 2, 100);
 * addValidate(Validator.size.getName(), user.getEmail(), 5, 150);
 * addValidate(Validator.size.getName(), user.getCp(), 5, 5);
 * addValidate(Validator.size.getName(), user.getBirthday(), 10, 10);
 * addValidate(Validator.size.getName(), user.getLandline(), 11, 13);
 * addValidate(Validator.size.getName(), user.getMobile(), 11, 13);
 * 
 * return generateError(); }
 * 
 * public HashMap<String, ErrorValidator> validate(UserData user) {
 * 
 * addValidate(Validator.size.getName(), user.getFirstName(), 2, 50);
 * addValidate(Validator.size.getName(), user.getLastName(), 2, 100);
 * addValidate(Validator.size.getName(), user.getEmail(), 5, 150);
 * addValidate(Validator.size.getName(), user.getCp(), 5, 5);
 * addValidate(Validator.size.getName(), user.getBirthday(), 10, 10);
 * addValidate(Validator.size.getName(), user.getLandline(), 11, 13);
 * addValidate(Validator.size.getName(), user.getMobile(), 11, 13);
 * 
 * return generateError(); }
 * 
 * public HashMap<String, ErrorValidator> validate(Login login) {
 * addValidate(Validator.size.getName(), login.getUser(), 7, 12);
 * addValidate(Validator.size.getName(), login.getPassword(), 7, 12); return
 * generateError(); }
 * 
 * private HashMap<String, ErrorValidator> generateError() { HashMap<String,
 * ErrorValidator> errors = new HashMap<>(); for (Map.Entry<String,
 * ArrayList<StringLimit>> line : this.validateMap.entrySet()) { String
 * nameValidador = line.getKey(); ArrayList<StringLimit> lineValue =
 * line.getValue(); lineValue.forEach((value) -> { ValidableLength validable =
 * this.manager.getValidate(nameValidador); ErrorValidator error =
 * validable.validate(value.getString(), value.getMin(), value.getMax()); if
 * (error.getId() != 0) { errors.put(value.getString(), error); } }); } return
 * errors; }
 * 
 * private void addValidate(String key, String control, int min, int max) {
 * ArrayList<StringLimit> temporaryList = null; StringLimit stringLimit = new
 * StringLimit(control, min, max); if (validateMap.containsKey(key)) {
 * temporaryList = validateMap.get(key); if (temporaryList == null) {
 * temporaryList = new ArrayList<StringLimit>(); }
 * temporaryList.add(stringLimit); } else { temporaryList = new
 * ArrayList<StringLimit>(); temporaryList.add(stringLimit); }
 * validateMap.put(key, temporaryList); } }
 */