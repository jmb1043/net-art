var myButton = document.getElementById('btn');
var myHeading = document.getElementById('text');

function changePage() {
    myHeading.innerHTML = "The button was clicked!";
    myHeading.style.color = "red";
}

myButton.addEventListener('click', changePage);