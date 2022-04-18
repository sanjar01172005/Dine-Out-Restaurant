// sign up
const names = document.getElementById("name");
const email = document.getElementById("email");
const phone = document.getElementById("phone");
const massge = document.getElementById("massge");
const submit = document.getElementById("btn");


submit.addEventListener("click", function () {
    names.value = ''
    email.value = ''
    phone.value = ''
    massge.value = ''
})