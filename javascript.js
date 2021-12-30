// Oefening 1

document.getElementByID ("mybutton1");

const buttonAlert = document.getElementById ("mybutton1");

buttonAlert.addEventListener( "click", function () {alert = "button clicked!"});






// Oefening 2

document.getElementByID ("mybutton2");

const changeBackgroundColour = document.getElementById ("mybutton2");

changeBackgroundColour.addEventListener ("click", function () {add red-background"});

changeBackgroundColour()







// Oefening 3

document.getElementByID ("mybutton2");
const toggleBackgroundColour = document.getElementByID ("mybutton2");
toggleBackgroundColour.bodyElement.classList.toggle("add red-background");


toggleBackgroundColour()