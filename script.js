let fields = [];

let submit = document.getElementById("submit");

let isNotEmpty = (value) => {
    if (value == null || typeof value  == 'undefined' ) return false;
    return (value.length > 0)
}

let isNumber = (num) => {
    return (num.length > 0) && !isNaN(num);
}

let isEmail = (email) => {
    let regex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;
    return regex.test(String(email).toLowerCase());
   }

let fieldValidation = (field, validationFunction) => {
    if (field == null) return false;

    let isFieldValid = validationFunction(field.value)
    if (!isFieldValid) {
        field.className = 'placeholderRed';
    } else {
        field.className = '';
    }
    return isFieldValid;
}

submit.addEventListener("click", (event) => {
    const first = document.querySelector("#firstName").value;
    const last = document.querySelector("#lastName").value;
    const email = document.querySelector("#email").value;
    const message = document.querySelector("#message").value;
    fields.push(first,last,email,message)

    console.log(fields)
})

