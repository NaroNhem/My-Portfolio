let fields = {};

let submit = document.getElementById("submit");

// let isNotEmpty = (value) => {
//     if (value == null || typeof value  == 'undefined' ) return false;
//     return (value.length > 0)
// }


let isEmail = (email) => {
    let regex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;
    return regex.test(String(email).toLowerCase());
   }

// let fieldValidation = (field, validationFunction) => {
//     if (field == null) return false;

//     let isFieldValid = validationFunction(field.value)
//     if (!isFieldValid) {
//         field.className = 'placeholderRed';
//     } else {
//         field.className = '';
//     }
//     return isFieldValid;
// }

// function isValid() {
//     var valid = true;
//     valid &= fieldValidation(fields.first, isNotEmpty);
//     // valid &= fieldValidation(fields.last, isNotEmpty);
//     // valid &= fieldValidation(fields.email, isEmail);
//     // valid &= fieldValidation(fields.message, isNotEmpty);
//     return valid;
//    }

let formValidate = () => {
    email = isEmail(fields.email);
    for (let value in fields){
        if (fields[value] == "") {
            alert("Please fill in all fields before submitting")
            break;
        }else if (!email) {
            alert("Please enter a valid email.")
            break;
        } 
    }
}

// let validation = () => {
//     formValidate(fields.first)
//     formValidate(fields.last)
//     formValidate(fields.email)
//     formValidate(fields.message)
// }
submit.addEventListener("click", (event) => {
    fields.first = document.querySelector("#firstName").value;
    fields.last = document.querySelector("#lastName").value;
    fields.email = document.querySelector("#email").value;
    fields.message = document.querySelector("#message").value;
    formValidate();
    // alert("Your message has been sent. Thank you!");
    console.log(fields)
})

