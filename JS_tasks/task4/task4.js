function date(){
    let date = new Date;
    let element = document.getElementById("hello")
    element.innerText = date.getDate() + "//" + date.getMonth() + "//" + date.getFullYear();
}
function time(){
    let date = new Date;
    let element = document.getElementById("hello1")
    element.innerText = date.toUTCString();
}