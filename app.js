

function changeColors(){
    var sandwhich = document.getElementById("sa");

    var yellow = document.getElementById("yellow-bar");
    var green = document.getElementById("green-bar");
    var red = document.getElementById("last");

    yellow.style.backgroundColor = "yellow";
    green.style.backgroundColor = "green";
    red.style.backgroundColor = "red";
    sandwhich.style.backgroundColor = "#141b13";
}

function back(){
    var sandwhich = document.getElementById("sa");

    var yellow = document.getElementById("yellow-bar");
    var green = document.getElementById("green-bar");
    var red = document.getElementById("last");

    yellow.style.backgroundColor = "white";
    green.style.backgroundColor = "white";
    red.style.backgroundColor = "white";
}

function bringMenu(){
    var navBar = document.getElementById("navBar");
    var navMenu = document.getElementById("navMenu");
    var flag = document.getElementById("lithuanian-flag");

   

    if(navMenu.style.display === "block"){
        navMenu.style.display = "none";
    }
    else{
        navMenu.style.display = "block";
        flag.style.display = "none";
    }
    

}

function myFunction() {
    var x = document.getElementById("myLinks");
    if (x.style.display === "block") {
      x.style.display = "none";
    } else {
      x.style.display = "block";
    }
  }