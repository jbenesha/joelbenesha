

//<!-- HIT226 WEB STRUCTURE 
//S280615
//JOEL BENESHA
//LIVING STYLE GUIDES  -->
// javascript


//----------------Check is local storage is suppported--------------------------\\

function supports_html5_storage(){
    try {
        return 'localStorage' in window && window['localStorage'] !== null;
    } catch(e) {
        return false;
    }
}


if(Modernizr.eventlistener){ //check if addEventListener is supported
    attachEvents();
  }else{  //inform or change elements that use listeners!
  console.log("event listener not supported");
    }


//varaition fo color change through jquery Events 

function changeta(){
    $(document).ready(function(){
        $("button").click(function(){
            $("p").css("color", "red");
        });
    });
}

//hovering over content to be able see changes 
function changeCa(){
$(document).ready(function(){
    $("p").on({
        mouseenter: function(){
            $(this).css("background-color", "lightgray");
        },  
        mouseleave: function(){
            $(this).css("background-color", "lightblue");
        }, 
        click: function(){
            $(this).css("background-color", "yellow");
        }  
    });
});
}

