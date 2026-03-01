document.getElementById("registrationForm").addEventListener("submit", function(e){

e.preventDefault();

var name = document.getElementById("name").value;
var email = document.getElementById("email").value;
var phone = document.getElementById("phone").value;

alert("Registration Successful\n\nName: " + name);

});