function error_checking(event){
    event = event || window.event;
    event.preventDefault();
    let username_element = document.getElementById("username");
    let username_error_element = document.getElementById("Username-error");
    if(username_element.value==""){
        username_error_element.innerText = "This field is required";
        username_element.classList.add("error");
    }
    else{
        username_element.classList.remove("error");
        username_error_element.innerText = "";
    }
    let password_element = document.getElementById("password");
    let password_error_element = document.getElementById("password-error");
    if(password_element.value==""){
        password_error_element.innerText = "This field is required";
        password_element.classList.add("error");
    }
    else{
        password_element.classList.remove("error");
        password_error_element.innerText = "";
    }
}