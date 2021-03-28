package com.example.demo.model;

import java.sql.SQLException;
import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.HashMap;
import org.json.JSONArray;
import net.minidev.json.JSONObject;

import org.springframework.web.context.request.RequestAttributes;
import org.springframework.web.context.request.RequestContextHolder;

import com.example.demo.DAO.procedure.CallerClient;
import com.example.demo.entity.Client;
import com.example.demo.entity.Login;
import com.example.demo.entity.LoginPass;
import com.example.demo.entity.Credential;
import com.example.demo.error.ErrorValidate;
import com.example.demo.error.ErrorVerify;
import com.example.demo.error.ErrorResponse;
import com.example.demo.util.AddErrorArrayError;
import com.example.demo.util.GetDataControlFromValue;
import com.example.demo.util.HiloSendEmailAdd;
import com.example.demo.util.HiloSendEmailLogin;

import com.example.demo.validate.ValidatorLengthComposite;
import com.example.demo.validate.ValidatorValueComposite;
import com.example.demo.verify.VerifyClient;
import com.example.demo.verify.VerifyCredentialClient;
import com.example.demo.verify.VerifyLoginClient;
import com.example.demo.verify.VerifyLoginClientUpdate;
import com.example.demo.verify.VerifyPersonClientUpdate;

public class CRUDclient {

  JSONArray arrayJson;
  HashMap<String, ArrayList<ErrorValidate>> errorsValidation;
  HashMap<String, ErrorVerify> errorsVerification;

  Boolean error = false;

  private int myIdClient = 0;

  public CRUDclient() {
    arrayJson = new JSONArray();
    errorsValidation = new HashMap<String, ArrayList<ErrorValidate>>();
    errorsVerification = new HashMap<String, ErrorVerify>();
  }

  public JSONArray addData(Client client) throws SQLException {
    String operation = "addClient";
    errorsValidation = getErrorsLength(client);
    CallerClient callerClient;
    if (errorsValidation.isEmpty()) {
      errorsValidation = getErrorsValue(client);
      if (errorsValidation.isEmpty()) {
        errorsVerification = getErrorsVerify(client);
        if (errorsVerification.isEmpty()) {
          try {
            callerClient = new CallerClient();
            if (callerClient.addClient(client)) {
              // myIdClient = callerClient.getIdClient(client.getNif());
              HiloSendEmailAdd hiloSendEmail = new HiloSendEmailAdd(client.getEmail(),
                  "Bienvenido a APP Harnina Store 2021");
              successfulAction(operation, callerClient.getIdClient(client.getNif()));
            } else {
              failedAction(operation);
            }
          } catch (ClassNotFoundException | SQLException e) {
            e.printStackTrace();
          }
        } else {
          for (java.util.Map.Entry<String, ErrorVerify> entry : errorsVerification.entrySet()) {
            JSONObject oneJson = new JSONObject();
            oneJson.put("error", ErrorResponse.ERRORVERIFICATION);
            oneJson.put("messageErrorControl", entry.getValue().getMsgEs());
            oneJson.put("messageValueControl", entry.getKey());
            oneJson.put("messageNameControl", GetDataControlFromValue.getDataControlClient(client, entry.getKey()));
            arrayJson.put(oneJson);
          }
        }
      } else {
        errorValidateClient(client);
      }
    } else {
      errorValidateClient(client);
    }
    return arrayJson;
  }

  public JSONArray checkLogin(Login login) throws ClassNotFoundException, SQLException {
    String operation = "loginClient";
    int tryNumber = (Integer) RequestContextHolder.currentRequestAttributes().getAttribute("tryNumber",
        RequestAttributes.SCOPE_SESSION);
    int totalAttempt = (Integer) RequestContextHolder.currentRequestAttributes().getAttribute("totalAttempt",
        RequestAttributes.SCOPE_SESSION);
    CallerClient callerClient = null;

    callerClient = new CallerClient();

    errorsValidation = getErrorsLength(login);
    if (errorsValidation.isEmpty()) {
      errorsValidation = getErrorsValue(login);
      if (errorsValidation.isEmpty()) {
        if (myIdClient == 0) {
          myIdClient = callerClient.getIdClientFromUser(login.getUser());
        }

        if (!callerClient.isBlocked(myIdClient)) {
          errorsVerification = getErrorsVerify(login);
          if (errorsVerification.isEmpty()) {

            RequestContextHolder.currentRequestAttributes().setAttribute("myPassword", login.getPassword(),
                RequestAttributes.SCOPE_SESSION);

            successfulAction(operation, callerClient.getIdClientFromUser(login.getUser()));

          } else {
            tryNumber++;
            if (tryNumber > totalAttempt) {
              String email = callerClient.getEmailFromUser(login.getUser());
              if (!email.equals("0")) { // Si existe el cliente
                if (callerClient.blockUser(myIdClient)) {
                  HiloSendEmailLogin hiloSendEmailLogin = new HiloSendEmailLogin(email);
                  JSONObject oneJson = new JSONObject();
                  oneJson.put("error", ErrorResponse.ERRORUSERBLOCK);
                  oneJson.put("emailblocked", "ok");
                  arrayJson.put(oneJson);
                } else {
                  failedAction(operation);
                  System.out.println("Usuario NO se ha podido Bloquear");
                }
              } else {
                RequestContextHolder.currentRequestAttributes().setAttribute("tryNumber", 0,
                    RequestAttributes.SCOPE_SESSION);
                RequestContextHolder.currentRequestAttributes().setAttribute("instantLock", LocalDateTime.now(),
                    RequestAttributes.SCOPE_SESSION);
                JSONObject oneJson = new JSONObject();
                oneJson.put("error", ErrorResponse.ERRORUSERNOTFOUND);
                oneJson.put("lockDuration", RequestContextHolder.currentRequestAttributes().getAttribute("lockDuration",
                    RequestAttributes.SCOPE_SESSION));
                oneJson.put("agotado", "ok");
                arrayJson.put(oneJson);
              }
            }
            System.out.println("tryNumber:" + tryNumber);
            RequestContextHolder.currentRequestAttributes().setAttribute("tryNumber", tryNumber,
                RequestAttributes.SCOPE_SESSION);
            for (java.util.Map.Entry<String, ErrorVerify> entry : errorsVerification.entrySet()) {
              JSONObject oneJson = new JSONObject();
              oneJson.put("error", ErrorResponse.ERRORVERIFICATION);
              oneJson.put("messageErrorControl", entry.getValue().getMsgEs());
              oneJson.put("messageValueControl", entry.getKey());
              oneJson.put("messageNameControl", GetDataControlFromValue.getDataControlClient(login, entry.getKey()));
              arrayJson.put(oneJson);
            }
          }
        } else {
          JSONObject oneJson = new JSONObject();
          oneJson.put("error", ErrorResponse.ERRORUSERBLOCK);
          oneJson.put("blocked", "ok");
          arrayJson.put(oneJson);
        }
      } else {
        errorValidateLogin(login);
      }
    } else {
      errorValidateLogin(login);
    }
    return arrayJson;
  }

  public JSONArray checkCredential(Credential credential) throws ClassNotFoundException, SQLException {
    String operation = "updateCredential";
    CallerClient callerClient = null;
    callerClient = new CallerClient();
    errorsValidation = getErrorsValue(credential);
    if (errorsValidation.isEmpty()) {
      errorsValidation = getErrorsLength(credential);
      if (errorsValidation.isEmpty()) {
        errorsVerification = getErrorsVerify(credential);
        if (errorsVerification.isEmpty()) {
          if (callerClient.updateCredential(credential.getNif())) {
            HiloSendEmailAdd hiloSendEmail = new HiloSendEmailAdd(credential.getEmail(),
                "Has recuperado tus credenciales ");
            JSONObject oneJson = new JSONObject();
            oneJson.put("error", ErrorResponse.NOERROR);
            // oneJson.put("reload", "ok");
            oneJson.put("sendForget", "ok");
            arrayJson.put(oneJson);
          } else {
            System.out.println("Fallo en updateCredential()");
            failedAction(operation);
          }
        } else {
          for (java.util.Map.Entry<String, ErrorVerify> entry : errorsVerification.entrySet()) {
            JSONObject oneJson = new JSONObject();
            oneJson.put("error", ErrorResponse.ERRORVERIFICATION);
            oneJson.put("messageErrorControl", entry.getValue().getMsgEs());
            oneJson.put("messageValueControl", entry.getKey());
            oneJson.put("messageNameControl", GetDataControlFromValue.getDataControlClient(credential, entry.getKey()));
            arrayJson.put(oneJson);
          }
        }
      } else {
        errorValidateCredential(credential);
      }
    } else {
      errorValidateCredential(credential);
    }
    return arrayJson;
  }

  public JSONArray updateLogin(LoginPass loginPass) throws ClassNotFoundException, SQLException {
    String operation = "updateLoginClient";
    int tryNumber = (Integer) RequestContextHolder.currentRequestAttributes().getAttribute("tryNumber",
        RequestAttributes.SCOPE_SESSION);
    int totalAttempt = (Integer) RequestContextHolder.currentRequestAttributes().getAttribute("totalAttempt",
        RequestAttributes.SCOPE_SESSION);
    CallerClient callerClient = new CallerClient();
    if (loginPass.getPassword().equals(loginPass.getPasswordRepeat())) {
      Login login = new Login();
      login.setUser(loginPass.getUser());
      login.setPassword(loginPass.getPassword());
      errorsValidation = getErrorsLength(login);
      if (errorsValidation.isEmpty()) {
        errorsValidation = getErrorsValue(login);
        if (errorsValidation.isEmpty()) {

          myIdClient = (int) RequestContextHolder.currentRequestAttributes().getAttribute("idClient",
              RequestAttributes.SCOPE_SESSION);

          if (!callerClient.isBlocked(myIdClient)) {
            errorsVerification = getErrorsVerify(login, myIdClient);
            if (errorsVerification.isEmpty()) {
              String message = callerClient.updateLogin(myIdClient, login);

              if (message.indexOf("Error") != -1) {
                JSONObject oneJson = new JSONObject();
                oneJson.put("error", ErrorResponse.ERRORUPDATELOGIN);
                oneJson.put("message", message);
                arrayJson.put(oneJson);
              } else {
                JSONObject oneJson = new JSONObject();
                oneJson.put("error", ErrorResponse.EXITACTION);
                oneJson.put("action", "Update login");
                arrayJson.put(oneJson);
              }

              RequestContextHolder.currentRequestAttributes().setAttribute("myPassword", login.getPassword(),
                  RequestAttributes.SCOPE_SESSION);

            } else {
              tryNumber++;
              if (tryNumber > totalAttempt) {
                String email = callerClient.getEmailFromUser(login.getUser());
                if (!email.equals("0")) { // Si existe el cliente
                  if (callerClient.blockUser(myIdClient)) {
                    HiloSendEmailLogin hiloSendEmailLogin = new HiloSendEmailLogin(email);
                    JSONObject oneJson = new JSONObject();
                    oneJson.put("error", ErrorResponse.ERRORUSERBLOCK);
                    oneJson.put("emailblocked", "ok");
                    arrayJson.put(oneJson);
                  } else {
                    failedAction(operation);
                    System.out.println("Usuario NO se ha podido Bloquear");
                  }
                } else {
                  RequestContextHolder.currentRequestAttributes().setAttribute("instantLock", LocalDateTime.now(),
                      RequestAttributes.SCOPE_SESSION);
                  JSONObject oneJson = new JSONObject();
                  oneJson.put("error", ErrorResponse.ERRORUSERNOTFOUND);
                  oneJson.put("lockDuration", RequestContextHolder.currentRequestAttributes()
                      .getAttribute("lockDuration", RequestAttributes.SCOPE_SESSION));
                  oneJson.put("agotado", "ok");
                  arrayJson.put(oneJson);
                }
              }
              System.out.println("tryNumber:" + tryNumber);
              RequestContextHolder.currentRequestAttributes().setAttribute("tryNumber", tryNumber,
                  RequestAttributes.SCOPE_SESSION);
              for (java.util.Map.Entry<String, ErrorVerify> entry : errorsVerification.entrySet()) {
                JSONObject oneJson = new JSONObject();
                oneJson.put("error", ErrorResponse.ERRORVERIFICATION);
                oneJson.put("messageErrorControl", entry.getValue().getMsgEs());
                oneJson.put("messageValueControl", entry.getKey());
                oneJson.put("messageNameControl", GetDataControlFromValue.getDataControlClient(login, entry.getKey()));
                arrayJson.put(oneJson);
              }
            }
          } else {
            JSONObject oneJson = new JSONObject();
            oneJson.put("error", ErrorResponse.ERRORUSERBLOCK);
            oneJson.put("blocked", "ok");
            arrayJson.put(oneJson);
          }
        } else {
          errorValidateLogin(login);
        }
      } else {
        errorValidateLogin(login);
      }

    } else {
      JSONObject oneJson = new JSONObject();
      oneJson.put("error", ErrorResponse.ERRORPASSWORDREPEAT);
      oneJson.put("passwordrepeat", "error");
      arrayJson.put(oneJson);
      System.out.println("Falla password repeat");
    }
    return arrayJson;
  }

  public JSONArray updatePerson(Client client) throws ClassNotFoundException, SQLException {
    errorsValidation = getErrorsLength(client);
    if (errorsValidation.isEmpty()) {
      errorsValidation = getErrorsValue(client);
      if (errorsValidation.isEmpty()) {
        myIdClient = (int) RequestContextHolder.currentRequestAttributes().getAttribute("idClient",
            RequestAttributes.SCOPE_SESSION);
        errorsVerification = getErrorsVerify(client, myIdClient);
        if (errorsVerification.isEmpty()) {
          CallerClient callerClient = new CallerClient();
          String message = callerClient.updatePersonClient(myIdClient, client);

          if (message.indexOf("Error") != -1) {
            JSONObject oneJson = new JSONObject();
            oneJson.put("error", ErrorResponse.ERRORUPDATELOGIN);
            oneJson.put("message", message);
            arrayJson.put(oneJson);
          } else {
            JSONObject oneJson = new JSONObject();
            oneJson.put("error", ErrorResponse.EXITACTION);
            oneJson.put("action", "Update Person Client");
            arrayJson.put(oneJson);
          }
        } else {
          for (java.util.Map.Entry<String, ErrorVerify> entry : errorsVerification.entrySet()) {
            JSONObject oneJson = new JSONObject();
            oneJson.put("error", ErrorResponse.ERRORVERIFICATION);
            oneJson.put("messageErrorControl", entry.getValue().getMsgEs());
            oneJson.put("messageValueControl", entry.getKey());
            oneJson.put("messageNameControl", GetDataControlFromValue.getDataControlClient(client, entry.getKey()));
            arrayJson.put(oneJson);
          }
        }

      } else {
        errorValidateClient(client);
      }
    } else {
      errorValidateClient(client);
    }

    return arrayJson;
  }

  private HashMap<String, ArrayList<ErrorValidate>> getErrorsValue(Client client) {
    HashMap<String, ArrayList<ErrorValidate>> errorsAll = new HashMap<>();
    errorsAll = new AddErrorArrayError(new ValidatorValueComposite().validate(client), errorsAll).getErrorsAll();
    return errorsAll;
  }

  private HashMap<String, ArrayList<ErrorValidate>> getErrorsValue(Login login) {
    HashMap<String, ArrayList<ErrorValidate>> errorsAll = new HashMap<>();
    errorsAll = new AddErrorArrayError(new ValidatorValueComposite().validate(login), errorsAll).getErrorsAll();
    return errorsAll;
  }

  private HashMap<String, ArrayList<ErrorValidate>> getErrorsValue(Credential credential) {
    HashMap<String, ArrayList<ErrorValidate>> errorsAll = new HashMap<>();
    errorsAll = new AddErrorArrayError(new ValidatorValueComposite().validate(credential), errorsAll).getErrorsAll();
    return errorsAll;
  }

  private HashMap<String, ArrayList<ErrorValidate>> getErrorsLength(Client client) {
    HashMap<String, ArrayList<ErrorValidate>> errorsAll = new HashMap<>();
    errorsAll = new AddErrorArrayError(new ValidatorLengthComposite().validate(client), errorsAll).getErrorsAll();
    return errorsAll;
  }

  private HashMap<String, ArrayList<ErrorValidate>> getErrorsLength(Login login) {
    HashMap<String, ArrayList<ErrorValidate>> errorsAll = new HashMap<>();
    errorsAll = new AddErrorArrayError(new ValidatorLengthComposite().validate(login), errorsAll).getErrorsAll();
    return errorsAll;
  }

  private HashMap<String, ArrayList<ErrorValidate>> getErrorsLength(Credential credential) {
    HashMap<String, ArrayList<ErrorValidate>> errorsAll = new HashMap<>();
    errorsAll = new AddErrorArrayError(new ValidatorLengthComposite().validate(credential), errorsAll).getErrorsAll();
    return errorsAll;
  }

  private HashMap<String, ErrorVerify> getErrorsVerify(Client client) throws SQLException {
    VerifyClient verifyClient = null;
    try {
      verifyClient = new VerifyClient(client);
    } catch (ClassNotFoundException e) {

      e.printStackTrace();
    } catch (SQLException e) {

      e.printStackTrace();
    }
    return verifyClient.verify();
  }

  private HashMap<String, ErrorVerify> getErrorsVerify(Login login) throws SQLException {
    VerifyLoginClient verifyClient = null;
    try {
      verifyClient = new VerifyLoginClient(login);
    } catch (ClassNotFoundException e) {

      e.printStackTrace();
    } catch (SQLException e) {

      e.printStackTrace();
    }
    return verifyClient.verify();
  }

  private HashMap<String, ErrorVerify> getErrorsVerify(Credential credential) throws SQLException {
    VerifyCredentialClient verifyCredentialClient = null;
    try {
      verifyCredentialClient = new VerifyCredentialClient(credential);
    } catch (ClassNotFoundException e) {

      e.printStackTrace();
    } catch (SQLException e) {

      e.printStackTrace();
    }
    return verifyCredentialClient.verify();
  }

  private HashMap<String, ErrorVerify> getErrorsVerify(Login login, int idClient) throws SQLException {
    VerifyLoginClientUpdate verifyClientUpdate = null;
    try {
      verifyClientUpdate = new VerifyLoginClientUpdate(login, idClient);
    } catch (ClassNotFoundException e) {

      e.printStackTrace();
    } catch (SQLException e) {

      e.printStackTrace();
    }
    return verifyClientUpdate.verify();
  }

  private HashMap<String, ErrorVerify> getErrorsVerify(Client client, int idClient) throws SQLException {
    VerifyPersonClientUpdate verifyPersonClientUpdate = null;
    try {
      verifyPersonClientUpdate = new VerifyPersonClientUpdate(client, idClient);
    } catch (ClassNotFoundException e) {

      e.printStackTrace();
    } catch (SQLException e) {

      e.printStackTrace();
    }
    return verifyPersonClientUpdate.verify();
  }

  private void successfulAction(String operation, int idClient) {
    RequestContextHolder.currentRequestAttributes().setAttribute("activePage", "client",
        RequestAttributes.SCOPE_SESSION);
    RequestContextHolder.currentRequestAttributes().setAttribute("idClient", idClient, RequestAttributes.SCOPE_SESSION);
    JSONObject oneJson = new JSONObject();
    RequestContextHolder.currentRequestAttributes().setAttribute("tryNumber", 0, RequestAttributes.SCOPE_SESSION);
    oneJson.put("error", ErrorResponse.ADDLOGINEXIT);
    oneJson.put("validation", "ok");
    oneJson.put("verification", "ok");
    oneJson.put(operation, "ok");
    oneJson.put("idClient", idClient);
    oneJson.put("action", operation);
    arrayJson.put(oneJson);
  }

  private void failedAction(String operation) {
    JSONObject oneJson = new JSONObject();
    oneJson.put("error", ErrorResponse.ERROROPERATION);
    oneJson.put("validation", "ok");
    oneJson.put("verification", "ok");
    oneJson.put("errorOperation", operation);
    arrayJson.put(oneJson);

  }

  private void errorValidateLogin(Login login) {
    for (java.util.Map.Entry<String, ArrayList<ErrorValidate>> entry : errorsValidation.entrySet()) {
      ArrayList<ErrorValidate> myerror = entry.getValue();
      myerror.forEach((n) -> {
        JSONObject oneJson = new JSONObject();
        oneJson.put("error", ErrorResponse.ERRORVALIDATION);
        oneJson.put("messageErrorControl", n.getMsgEs());
        oneJson.put("messageValueControl", entry.getKey());
        oneJson.put("messageNameControl", GetDataControlFromValue.getDataControlClient(login, entry.getKey()));
        arrayJson.put(oneJson);
      });
    }
  }

  private void errorValidateClient(Client client) {
    for (java.util.Map.Entry<String, ArrayList<ErrorValidate>> entry : errorsValidation.entrySet()) {
      ArrayList<ErrorValidate> myerror = entry.getValue();
      myerror.forEach((n) -> {
        JSONObject oneJson = new JSONObject();
        oneJson.put("error", ErrorResponse.ERRORVALIDATION);
        oneJson.put("messageErrorControl", n.getMsgEs());
        oneJson.put("messageValueControl", entry.getKey());
        oneJson.put("messageNameControl", GetDataControlFromValue.getDataControlClient(client, entry.getKey()));
        arrayJson.put(oneJson);
      });
    }
  }

  private void errorValidateCredential(Credential credential) {
    for (java.util.Map.Entry<String, ArrayList<ErrorValidate>> entry : errorsValidation.entrySet()) {
      ArrayList<ErrorValidate> myerror = entry.getValue();
      myerror.forEach((n) -> {
        JSONObject oneJson = new JSONObject();
        oneJson.put("error", ErrorResponse.ERRORVALIDATION);
        oneJson.put("messageErrorControl", n.getMsgEs());
        oneJson.put("messageValueControl", entry.getKey());
        oneJson.put("messageNameControl", GetDataControlFromValue.getDataControlClient(credential, entry.getKey()));
        arrayJson.put(oneJson);
      });
    }
  }

}
