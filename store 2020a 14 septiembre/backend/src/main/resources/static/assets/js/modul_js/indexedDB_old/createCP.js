(function () {

    var myHome = [];
    var ajax = STORE.Ajax;
    

    var llamada = new ajax.CargadorContenidos("/getcp", function () {
      var cps = JSON.parse(llamada.req.responseText);
        createBBDD(cps);
    });
})();

var createBBDD = function(myHome){

    window.indexedDB = window.indexedDB || window.mozIndexedDB || window.webkitIndexedDB || window.msIndexedDB;

    window.IDBTransaction = window.IDBTransaction || window.webkitIDBTransaction || window.msIDBTransaction;
    window.IDBKeyRange = window.IDBKeyRange || window.webkitIDBKeyRange || window.msIDBKeyRange;

    if (!window.indexedDB) {
        window.alert("Su navegador no soporta una versión estable de indexedDB. Tal y como las características no serán validas");
    }

    var db = null;
    var dbNombre = "home";
    var request = indexedDB.open(dbNombre, 1);

    request.onerror = function (event) {
        alert('Fallo en la apertura: ' + event.target.message);
    };
    request.onupgradeneeded = function (event) {
        db = event.target.result;
        var store = db.createObjectStore("postalCode", {
            keyPath: "idCp",
            autoIncrement: true
        });
        store.createIndex("postalCodeIndex", "postalCode", {
            unique: false
        });
        store.transaction.oncomplete = function(event) {
            var customerObjectStore = db.transaction("postalCode", "readwrite").objectStore("postalCode");
            for (var i in myHome) {
                customerObjectStore.add(myHome[i]);
            }
        }

        alert("Creada y completada postalCode");
    };

};
