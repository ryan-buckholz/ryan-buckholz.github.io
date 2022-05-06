function biggerButtonClick(){
    //alert("Hello, world!");
    if( document.getElementById("textarea").style.fontSize == "8pt"){
        document.getElementById("btn").innerHTML = "smaller";
    document.getElementById("textarea").style.fontSize = "24pt";
    }
    else{
        document.getElementById("btn").innerHTML = "Bigger!";
        document.getElementById("textarea").style.fontSize = "8pt";
    }
}

function mooClick(){
    var textarea = document.getElementById("textarea");
    
    textarea.value = textarea.value.toUpperCase();

    var parts = textarea.value.split(".");
    for( let i = 0; i < parts.length - 1; i++ ){
        parts[i] += "-Moo.";
    }

    textarea.value = parts.join(" ");

}

function radioChange(){
    var fancy = document.getElementById("fancy");
    var boring = document.getElementById("boring");
    var textarea = document.getElementById("textarea").style;

    if( fancy.checked){
        textarea.fontWeight = "bold";
        textarea.color = "blue";
        textarea.textDecoration = "underline";
    }
    else if( boring.checked){
        textarea.fontWeight = "normal";
        textarea.color = "black";
        textarea.textDecoration = "none";
    }
}




//background-color: white; color: black; box-shadow: 0em 0em 0.2em 0.2em blue;