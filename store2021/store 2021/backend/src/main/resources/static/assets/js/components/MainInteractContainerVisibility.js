export function MainInteractContainerVisibility(active){

       switch (active) {

             case 'upClientForm':
                document.getElementById("upClientForm").style.display ="block"; 
                 document.getElementById("mainContainerForm").style.display ="none";
                 document.getElementById("confirmExit").style.display ="none";
                 document.getElementById("infoBox").style.display ="none";         
                  break;
             case 'mainContainerForm':
                document.getElementById("upClientForm").style.display ="none"; 
                 document.getElementById("mainContainerForm").style.display ="block";
                 document.getElementById("confirmExit").style.display ="none";
                 document.getElementById("infoBox").style.display ="none";         
                  break;
                   case 'upClientForm':
                document.getElementById("upClientForm").style.display ="block"; 
                 document.getElementById("mainContainerForm").style.display ="none";
                 document.getElementById("confirmExit").style.display ="none";
                 document.getElementById("infoBox").style.display ="none";         
                  break;
             case 'confirmExit':
                document.getElementById("upClientForm").style.display ="none"; 
                 document.getElementById("mainContainerForm").style.display ="none";
                 document.getElementById("confirmExit").style.display ="block";
                 document.getElementById("infoBox").style.display ="none";         
                  break;
              case 'infoBox':
                document.getElementById("upClientForm").style.display ="none"; 
                 document.getElementById("mainContainerForm").style.display ="none";
                 document.getElementById("confirmExit").style.display ="none";
                 document.getElementById("infoBox").style.display ="block";         
                  break;
       }
            
       
}