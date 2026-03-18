const form = document.getElementById("feedbackForm");

form.addEventListener("submit", function(event){

event.preventDefault(); // stops page from reloading

alert("Thank you for giving your feedback! ☕");

form.reset(); // clears the form

});