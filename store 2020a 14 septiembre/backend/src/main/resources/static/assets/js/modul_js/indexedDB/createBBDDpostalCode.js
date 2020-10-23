
import {$} from "../function/global.js"
export function CreateBBDDpostalCode(){

const myIndexdDB = window.indexedDB || window.mozIndexedDB || window.webkitIndexedDB || window.msIndexedDB;

window.IDBTransaction = window.IDBTransaction || window.webkitIDBTransaction || window.msIDBTransaction;
window.IDBKeyRange = window.IDBKeyRange || window.webkitIDBKeyRange || window.msIDBKeyRange;
if (!myIndexdDB) {
    window.alert("Su navegador no soporta una versión estable de indexedDB. Tal y como las características no serán validas");
}
console.log(myIndexdDB);

const myPostalCode = [ 
{
  "codigopostal": "06200",
	"municipality": "Almendralejo(Badajoz)"
},
{
		"codigopostal	": 	"06300",
	"municipality": 	"Zafra(Badajoz)"
},
{
	"codigopostal": "06209",
	"municipality": "Solana de los Barros(Badajoz)"
},
{
	"codigopostal": "06810",
	"municipality": "Calamonte(Badajoz)"
}
];
    let db = null;
    const dbNombre = "postalCodeBBDD";
    const request = myIndexdDB.open(dbNombre, 1);

    request.onerror = function (event) {
        alert('Fallo en la apertura: ' + event.target.message);
    };
    request.onupgradeneeded = function (event) {
        db = event.target.result;
        const store = db.createObjectStore("postalCode", {
            keyPath: "idCp",
            autoIncrement: true
        });
        store.createIndex("postalCodeIndex", "codigopostal", {
            unique: false
        });
        store.transaction.oncomplete = function(event) {
            const customerObjectStore = db.transaction("postalCode", "readwrite").objectStore("postalCode");
            //customerObjectStore.add({codigopostal:"06200" ,municipality:"Almendralejo"});
            for (let i in myPostalCode) {
                customerObjectStore.add(myPostalCode[i]);
            }
             alert("Creada y completada postalCode");
        }

        
    };

}

export function getCity(myCP){
  alert(myCP);
return new Promise(function (resolve, reject) {
const myIndexdDB = window.indexedDB || window.mozIndexedDB || window.webkitIndexedDB || window.msIndexedDB;

window.IDBTransaction = window.IDBTransaction || window.webkitIDBTransaction || window.msIDBTransaction;
window.IDBKeyRange = window.IDBKeyRange || window.webkitIDBKeyRange || window.msIDBKeyRange;
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
                        $("cp").style.background = "red";
                        reject('No está error code:');
                    }
                };
            };


})
}