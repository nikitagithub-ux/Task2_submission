function error_checking(event){
    event = event || window.event;
    event.preventDefault();
    let name_element = document.getElementById("name");
    let name_error_element = document.getElementById("name-error")
    if(name_element.value==""){
        name_error_element.innerText = "POOR"
    }
    else{
        name_error_element.innerText = "";
    }
    let lname_element = document.getElementById("lname");
    let lname_error_element = document.getElementById("lname-error")
    if(lname_element.value==""){
        lname_error_element.innerText = "POOR"
    }
    else{
        lname_error_element.innerText = "";
    }
    let email_element = document.getElementById("email");
    let email_error_element = document.getElementById("email-error")
    if(email_element.value==""){
        email_error_element.innerText = "POOR"
    }
    else{
        email_error_element.innerText = "";
    }
    let password_element = document.getElementById("password");
    let password_error_element = document.getElementById("password-error")
    if(password_element.value==""){
        password_error_element.innerText = "POOR"
    }
    else{
        password_error_element.innerText = "";
    }
    let rpassword_element = document.getElementById("rpassword");
    let rpassword_error_element = document.getElementById("rpassword-error")
    if(rpassword_element.value==""){
        rpassword_error_element.innerText = "POOR OR MISMATCHED"
    }
    else{
        rpassword_error_element.innerText = "";
    }
    let gender_male_element = document.getElementById("male");
    let gender_female_element = document.getElementById("fe-male");

    let gender_error_element = document.getElementById("gender-error")
    if(gender_male_element.value=="" && gender_female_element.value==""){
        gender_error_element.innerText = "POOR"
    }
    else{
        gender_error_element.innerText = "";
    }
    let age_element = document.getElementById("age");
    let age_error_element = document.getElementById("age-error")
    if(age_element.value==""){
        age_error_element.innerText = "POOR"
    }
    else{
        age_error_element.innerText = "";
    }
    let pno_element = document.getElementById("pno");
    let pno_error_element = document.getElementById("pno-error")
    if(pno_element.value==""){
        pno_error_element.innerText = "POOR"
    }
    else{
        pno_error_element.innerText = "";
    }
    let add_element = document.getElementById("address");
    let add_error_element = document.getElementById("address-error")
    if(add_element.value==""){
        add_error_element.innerText = "POOR"
    }
    else{
        add_error_element.innerText = "";
    }
    let state_element = document.getElementById("state");
    let state_error_element = document.getElementById("state-error")
    if(state_element.value==""){
        state_error_element.innerText = "POOR"
    }
    else{
        state_error_element.innerText = "";
    }
}