
import api from "../helpers/harni_api.js";
import {ajax} from "../helpers/ajax.js";
import { Router } from "./Router.js";

export async function FooterPageButton(){

  const $menu = document.createElement("footer");
  $menu.classList.add("footer");
 const step = 1;
var init =   async function() { 
  const  visorSize  = localStorage.getItem("visorSize"),
            activePage = localStorage.getItem("activePage");
       await  ajax({
                      url:api.API_HARNINA,
                      cbSuccess : (posts)=>{             
                       let   totalElements = posts.totalElements;   
                     console.log("posts:",posts);
                          Pagination.Init(document.getElementById('pagination'), {       
                                          totalPage:  Math.ceil(totalElements/visorSize), 
                                          activePage, 
                                          step
                            });                    
                      }
             });    
};
await init();
}

const Pagination = {
    code: '',
    
    Init: function(divPagination, data) {
        Pagination.constructor(data);
        Pagination.create(divPagination);
        Pagination.showMenu();
    },
    constructor: function(data) {
        Pagination.totalPage = data.totalPage || 10;
        Pagination.activePage = data.activePage || 1; 
        Pagination.step = data.step || 1;
    },
   create: function(divPagination) {

        var html = [
            '<div id="div_menu_page"><a>&#129092;</a>', // Inicio
            '<a>&#9668;</a>', // previous button
            '<span></span>',  // pagination container
            '<a>&#9658;</a>',  // next button
            '<a>&#129094;</a></div>'  // End
        ];

        divPagination.innerHTML = html.join('');
        Pagination.menuNumbers = divPagination.getElementsByTagName('span')[0];
        Pagination.buttons(divPagination);
    },
   buttons: function(divPagination) {
        var nav = divPagination.getElementsByTagName('a');
        nav[0].id = "botonInicio";
         nav[0].dataset.valor = 0;
        nav[0].addEventListener('click', Pagination.inicio, false);
        nav[1].id = "botonPrev";
        nav[1].dataset.valor = 0;
        nav[1].addEventListener('click', Pagination.prev, false);
        nav[2].id = "botonNext";
        nav[2].dataset.valor = 2;
        nav[2].addEventListener('click', Pagination.next, false);
        nav[3].id = "botonEnd";
        nav[3].dataset.valor =  Pagination.totalPage;
        nav[3].addEventListener('click', Pagination.end, false);
    },    
   showMenu: function() {        
        
        if (Pagination.activePage == 1) {
            document.getElementById('botonInicio').style.display ="none";
            document.getElementById('botonPrev').style.display ="none";
        }else {
            document.getElementById('botonInicio').style.display ="";
            document.getElementById('botonPrev').style.display ="";
        }
        if (Pagination.activePage == Pagination.totalPage ) {
            document.getElementById('botonNext').style.display ="none";
            document.getElementById('botonEnd').style.display ="none";
        }else {
            document.getElementById('botonNext').style.display ="";
            document.getElementById('botonEnd').style.display ="";
        }        
        
        if (Pagination.totalPage < Pagination.step * 2 + 6) {
         
            Pagination.add(1, Pagination.totalPage + 1);
        }
        else if (Pagination.activePage < Pagination.step * 2 + 1) {
            Pagination.add(1, Pagination.step * 2 + 4);
            Pagination.addLast();
        }
        else if (Pagination.activePage > Pagination.totalPage - Pagination.step * 2) {            
            Pagination.addFirst();
            Pagination.add(Pagination.totalPage - Pagination.step * 2 - 2, Pagination.totalPage + 1);
        }
        else {      
            Pagination.addFirst();
            Pagination.add(Pagination.activePage - Pagination.step, Pagination.activePage + Pagination.step + 1);
            Pagination.addLast();
        }
        Pagination.write();
    },
  
    add: function(s, f) {
        for (var i = s; i < f; i++) {
            Pagination.code += '<a>' + i + '</a>';
        }
    },

    addLast: function() {
        Pagination.code += '<i>...</i><a>' + Pagination.totalPage + '</a>';
    },

    addFirst: function() {
        Pagination.code += '<a>1</a><i>...</i>';
    },
  
    inicio: function(){
        Pagination.activePage = 1;
        Pagination.showMenu();
    },
    prev: function() {    
       document.getElementById("botonPrev").dataset.valor = Pagination.activePage -2;    
        Pagination.activePage--;
        if (Pagination.activePage < 1) {
            Pagination.activePage = 1;
        }
        Pagination.showMenu();
    },
    
    end: function(){
        Pagination.activePage = Pagination.totalPage;
        Pagination.showMenu();
    },      
    next: function() {
       document.getElementById("botonNext").dataset.valor = Pagination.activePage;
        Pagination.activePage++;       
        if (Pagination.activePage > Pagination.totalPage) {
             Pagination.activePage = Pagination.totalPage;
        }
        localStorage.setItem("activePage", Pagination.activePage);
        Pagination.showMenu();
    },


   setActivePage: function(evt) {     
        Pagination.activePage = +this.innerHTML;
        Pagination.showMenu();
    }, 
  activeActivePage: function() {
        var a =  Pagination.menuNumbers.getElementsByTagName('a');
        
        for (var i = 0; i < a.length; i++) {
          if (+a[i].innerHTML == Pagination.activePage) a[i].className = 'current';            
           a[i].addEventListener('click', Pagination.setActivePage, false);
        }
    },
  write: function() {
        Pagination.menuNumbers.innerHTML = Pagination.code;
        Pagination.code = '';
        Pagination.activeActivePage();
    }

};