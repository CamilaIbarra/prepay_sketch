// show sign up form when click 
$('.signup-show').click(function(){
    $('.register-form').show();
    $('.login-form').hide();    
});

// show login form when click
$('.login-show').click(function(){
    $('.login-form').show();    
    $('.register-form').hide();
});

// show password
const showPassword = document.querySelector("#show-password");
const passwordField =document.querySelector("#floatingPassword");

showPassword.addEventListener("click", function(){
    this.classList.toggle("fa-eye");
    const type = passwordField.getAttribute("type")
    === "password" ? "text" : "password";
    passwordField.setAttribute("type", type);
});