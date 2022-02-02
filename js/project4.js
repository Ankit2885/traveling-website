console.log('this is project 4');
const name = document.getElementById('name');
const email = document.getElementById('email');
const phone = document.getElementById('phone');
let validName = false;
let validEmail = false;
let validPhone = false;
$('#failure').hide();
$('#success').hide();

name.addEventListener('blur', () => {
    console.log('name is blurred');
    // validate name here
    let regex = /^[a-zA-Z]([0-9a-zA-Z]){2,10}$/;   // ^ means start with  // $ means ends with 
    let str = name.value;
    console.log(regex, str);
    if (regex.test(str)) {
        console.log('your name is valid');
        name.classList.remove('is-invalid');
        validName = true;

    }
    else {
        console.log('your name is not valid');
        name.classList.add('is-invalid');
        validName = false;

    }
})

email.addEventListener('blur', () => {
    console.log('email is blurred');
    // validate email here
    let regex = /^([_\-\.0-9a-zA-Z]+)@([_\-\.0-9a-zA-Z]+)\.([a-zA-Z]){2,7}$/;   // ^ means start with  // $ means ends with 
    let str = email.value;
    console.log(regex, str);
    if (regex.test(str)) {
        console.log('your email is valid');
        email.classList.remove('is-invalid');
        validEmail = true;

    }
    else {
        console.log('your email is not valid');
        email.classList.add('is-invalid');
        validEmail = false;
    }
})

phone.addEventListener('blur', () => {
    console.log('phone is blurred');
    // validate phone here
    let regex = /^([0-9]){10}$/;   // ^ means start with  // $ means ends with 
    let str = phone.value;
    console.log(regex, str);
    if (regex.test(str)) {
        console.log('your phone number is valid');
        phone.classList.remove('is-invalid');
        validPhone = true;

    }
    else {
        console.log('your phone number is not valid');
        phone.classList.add('is-invalid');
        validPhone = false;
    }
})

let submit = document.getElementById('submit');
submit.addEventListener('click', (e) => {
    e.preventDefault();
    console.log('you click submit button');
    //submit your form here write code
    if (validEmail && validName && validPhone) {
        console.log('phone email phone are valid submitting the from');
        let success = document.getElementById('success');
        success.classList.add('show');
        // failure.alert('close');
        $('#failure').hide();
        $('#success').show();
    }
    else {
        console.log('phone email phone are not valid please correct the details and try again');
        let failure = document.getElementById('failure');
        failure.classList.add('show');
        $('#success').hide();
        $('#failure').show();
    }
})