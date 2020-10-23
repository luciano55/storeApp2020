STORE.namespace("STORE.getCityByCp");
STORE.getCityByCp = function (cp) {
    return new Promise(function (resolve, reject) {
            //window.indexedDB = window.indexedDB || window.mozIndexedDB || window.webkitIndexedDB || window.msIndexedDB;
            window.IDBTransaction = window.IDBTransaction || window.webkitIDBTransaction || window.msIDBTransaction;
            window.IDBKeyRange = window.IDBKeyRange || window.webkitIDBKeyRange || window.msIDBKeyRange;
            if (!window.indexedDB) {
                window.alert("Su navegador no soporta una versión estable de indexedDB. Tal y como las características no serán validas");
            };

            var db = null;
            var dbNombre = "home";
            var request = indexedDB.open(dbNombre, 1);

            request.onerror = function (event) {
                alert('Fallo en la apertura: ' + event.target.message);
            };

            request.onsuccess = function (event) {
                db = event.target.result;
                var range = IDBKeyRange.only(cp);
                var transaction = db.transaction(["postalCode"], "readwrite");
                var store = transaction.objectStore("postalCode");
                var index = store.index("postalCodeIndex");
                index.openCursor(range).onsuccess = function (evt) {
                    var cursor = evt.target.result;
                    if (cursor) {
                        resolve(cursor.value.municipality);
                    } else {
                        $("cp").style.background = "red";
                        reject('No está error code:');
                    }
                };
            };
       
    });
};
