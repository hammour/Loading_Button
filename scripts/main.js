var button = document.querySelector("input[type=button]");


button.addEventListener("click", function() {
 
 button.value = "Loading...";
 timeoutID = window.setTimeout(changeButton, 4000);
 function changeButton(){
 	button.value = "Submit"
 }
}
);