  
  export function GetMenuShowcase(node){
    const showcaseTypeContainer = document.createElement("div");
        showcaseTypeContainer.id = "changeshowcase";
        showcaseTypeContainer.className = "contenido01";
        const params = {
            type :"radio",
            name : "showcaseRadio",
            class : "radio-buttonOff",
            checked : "checked"
        };
        const showcaseTypeList = ['shmJM','shmCarrusel','shmJesadri','shmSwipper'];
        for (var i = 0; i < showcaseTypeList.length; i++) {
               if (i)  {
                        params.checked = "";
                }
               params.id = "showcase" + showcaseTypeList[i];
               params.value =  showcaseTypeList[i];
               params.title =  showcaseTypeList[i];
              showcaseTypeContainer.appendChild(inputRadio(params));
        }
        const paramsHeader = {
            id : "headerShowcaseFilter",
            class : "showcaseFilter"
        };
        const header = headerf(paramsHeader);
        for (var i = 0; i < showcaseTypeList.length; i++) {

            params.id = showcaseTypeList[i];
            params.for =  "showcase" + showcaseTypeList[i];
            params.title =  showcaseTypeList[i].substring(3);
            params.class = "showcaseFilter-label " + showcaseTypeList[i];
            params.change = i + 1;
            header.appendChild(label(params));
        }
        const  botonI = document.createElement("span");
        botonI.id = "sizeVisorI";
        botonI.innerHTML = "&#9668;<<";
        header.appendChild(botonI);
        const  botonD = document.createElement("span");
        botonD.id = "sizeVisorD"
        botonD.innerHTML = ">>&#9658;";
        header.appendChild(botonD);

       showcaseTypeContainer.appendChild(header);
       node.appendChild(showcaseTypeContainer);
       
        for (var i = 0; i < showcaseTypeList.length; i++) {
           document.getElementById(showcaseTypeList[i]).addEventListener("click", changeShowcase);
        }
  return  showcaseTypeContainer;
  }

  // factoryTag
  const inputRadio = function (params) {
        var input = document.createElement("INPUT");
        input.id = params.id;
        input.setAttribute("data-validate", params.validate);
        input.className = params.class || "";
        input.type = params.type || "";
        input.name = params.name || "";
        input.checked = params.checked || "";
        input.value = params.value || "";
        return input;
    };
  const headerf = function (params) {
        var header = document.createElement("header");
        header.id = params.id || "";
        header.className = params.class || "";
        return header;
    };
  const label = function(params){    
          var label = document.createElement("label");
          label.id = params.id;
          label.className = params.class || "";
          label.htmlFor = params.for || "";
          label.innerHTML = params.title || "";
          label.dataset.change = params.change || "";
          return label;    
  };

// ManagerShowCase

const  changeShowcase = function(evt){
       // STORE.ManagerShowcase.showcaseType = evt.target.id;
      // alert(evt.target.id)
       sessionStorage.setItem("showcaseType", evt.target.id);

        //STORE.ManagerShowcase.createShowcase();
    };


