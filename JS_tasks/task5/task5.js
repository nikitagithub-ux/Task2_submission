function error_checking(event){
    event = event || window.event;
    event.preventDefault();
    let Name_element = document.getElementById("name");
    let Name_error_element = document.getElementById("Name-error");
    if (Name_element.value==""){
        Name_error_element.innerText = "This field is required";
        Name_element.classList.add("border_red");
    }
    else{
        Name_element.classList.remove("border_red");
        Name_error_element.innerText = "";
    }
    let Email_element = document.getElementById("email");
    let Email_error_element = document.getElementById("Email-error");
    if (Email_element.value==""){
        Email_error_element.innerText = "This field is required";
        Email_element.classList.add("border_red");
    }
    else{
        Email_element.classList.remove("border_red");
        Email_error_element.innerText = "";
    }
    let Website_element = document.getElementById("website");
    let Website_error_element = document.getElementById("Website-error");
    if (Website_element.value==""){
        Website_error_element.innerText = "This field is required";
        Website_element.classList.add("border_red");
    }
    else{
        Website_element.classList.remove("border_red");
        Website_error_element.innerText = "";
    }
    let message_element = document.getElementById("message");
    let message_error_element = document.getElementById("Message-error");
    if (message_element.value==""){
        message_error_element.innerText = "This field is required";
        message_element.classList.add("border_red");
    }
    else{
        message_element.classList.remove("border_red");
        message_error_element.innerText = "";
    }
}