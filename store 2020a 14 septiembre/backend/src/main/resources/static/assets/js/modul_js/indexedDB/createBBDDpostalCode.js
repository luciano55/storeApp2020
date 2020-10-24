
import {$} from "../function/global.js";


const browserCompatibility = function(){
                              let myIndexdDB = window.indexedDB || window.mozIndexedDB || window.webkitIndexedDB || window.msIndexedDB;

                              window.IDBTransaction = window.IDBTransaction || window.webkitIDBTransaction || window.msIDBTransaction;
                              window.IDBKeyRange = window.IDBKeyRange || window.webkitIDBKeyRange || window.msIDBKeyRange;
                              if (!myIndexdDB) {
                                          window.alert("Su navegador no soporta una versión estable de indexedDB. Tal y como las características no serán validas");
                              }
                              return myIndexdDB;
}


export function CreateBBDDpostalCode(){
        fetch("/getcpExtremadura").then(response => response.json())
                    .then(data => {
                          const  myIndexdDB = browserCompatibility();
                          let db = null;
                          const dbNombre = "postalCodeBBDD";
                          const request = myIndexdDB.open(dbNombre, 1);
                          request.onerror = function (event) {
                                     alert('Fallo en la apertura: 1 ' + event.target.message);
                            };
                            request.onupgradeneeded = function (event) {
                                  db = event.target.result;
                                  const store = db.createObjectStore("postalCode", {
                                                            keyPath: "idCp",
                                                              autoIncrement: true
                                    });
                                  store.createIndex("postalCodeIndex", "postalCode", {
                                      unique: false
                                  });
                                  store.transaction.oncomplete = function(event) {
                                          const customerObjectStore = db.transaction("postalCode", "readwrite").objectStore("postalCode");
                                          for (let i in data) {
                                              //console.log(data[i]);
                                              customerObjectStore.add(data[i]);
                                        }
                                        alert("BBDD cargada");
                                    } 
                            }
                          })              

}


export function getCity(myCP){
    return new Promise(function (resolve, reject) {
        const myIndexdDB = browserCompatibility();
        let db = null;
        const dbNombre = "postalCodeBBDD";
        const request = myIndexdDB.open(dbNombre, 1);

        request.onerror = function (e) {
            alert('Fallo en la apertura: ' + e.target.message);
        };
        request.onsuccess = function (e) {
                    db = e.target.result;
                    const range = IDBKeyRange.only(myCP);
                    const transaction = db.transaction(["postalCode"], "readwrite");
                    const store = transaction.objectStore("postalCode");
                    const index = store.index("postalCodeIndex");
                    index.openCursor(range).onsuccess = function (e) {
                        var cursor = e.target.result;
                        console.log(e.target);
                        if (cursor) {
                            resolve(cursor.value.municipality);
                        } else {
                            $("cp").style.borderColor  = "red";
                            reject('No existe: Code Error code');
                        }
                    };
                };
})
}