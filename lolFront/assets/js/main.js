var user = document.getElementsByClassName("user");
var pass = document.getElementsByClassName("pass");
var use = document.getElementsByClassName("use");
var pas = document.getElementsByClassName("pas");
user[0].addEventListener("click", function () {
    user[0].placeholder = "";
    use[0].style.display = "block";
});
pass[0].addEventListener("click", function () {
    pass[0].placeholder = "";
    pas[0].style.display = "block";
});
