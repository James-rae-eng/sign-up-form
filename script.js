//Checks password entered meets the criteria outlined, purely visual, does not enforce change on submit
function verifyPassword() {  
   var pw = document.getElementById("userPassword").value;  
   var upperCaseLetters = /[A-Z]/g;
   var lowerCaseLetters = /[a-z]/g;
   var numbers = /[0-9]/g;
   //minimum password length validation  
   if(pw.length < 6) {  
      document.getElementById("userPassword").style.borderColor = 'red';
      document.getElementById("pwMsg").style.display = 'flex';
      document.getElementById("pwMsg").style.width = '185px';
   } //at least one uppercase validation
   else if(!pw.match(upperCaseLetters)) {
      document.getElementById("userPassword").style.borderColor = 'red';
      document.getElementById("pwMsg").style.display = 'flex';
      document.getElementById("pwMsg").style.width = '185px';
   } //at least one lowercase validation
   else if(!pw.match(lowerCaseLetters)) {
      document.getElementById("userPassword").style.borderColor = 'red';
      document.getElementById("pwMsg").style.display = 'flex';
      document.getElementById("pwMsg").style.width = '185px';
   } //at least one number validation
   else if(!pw.match(numbers)) {
      document.getElementById("userPassword").style.borderColor = 'red';
      document.getElementById("pwMsg").style.display = 'flex';
      document.getElementById("pwMsg").style.width = '185px';
   }
   else {
      document.getElementById("userPassword").style.borderColor = 'green';
      document.getElementById("pwMsg").style.display = 'none';
   }   
} 

//checks the confirm password matches the main password
function matchPassword() {  
    var pw1 = document.getElementById("userPassword").value;  
    var pw2 = document.getElementById("confirmPassword").value;  
    if(pw1 != pw2)  {   
        document.getElementById("confirmPassword").style.borderColor = 'red';
    } else {
        document.getElementById("confirmPassword").style.borderColor = 'green';
    }
}  
