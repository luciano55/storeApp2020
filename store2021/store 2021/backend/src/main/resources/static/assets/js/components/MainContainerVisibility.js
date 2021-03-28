export function MainContainerVisibility(active){

       switch (active) {

             case 'myInteract':
                     document.getElementById("myInteract").style.display ="block"; 
                     document.getElementById("myStore").style.display ="none";
                      break;
             case 'myStore':
                     document.getElementById("myStore").style.display ="block"; 
                     document.getElementById("myInteract").style.display ="none";
                     break;
                      }
}