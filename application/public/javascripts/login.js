/**********************************************************
 * FILE: public/js/login.js
 * 
 * DESCRIPTION: 
**********************************************************/

/* switching signIn/signUp forms Start */
const loginToggleBtn = document.querySelector('.signin .side .login-btn');
const registerToggleBtn = document.querySelector('.signup .side .login-btn');
const signIn = document.querySelector('.signin');
const signUp = document.querySelector('.signup');
const sides = document.querySelectorAll('.side');
const forms = document.querySelectorAll('.form');

loginToggleBtn.addEventListener('click',loginToggle);
registerToggleBtn.addEventListener('click',registerToggle);

function loginToggle(){
    signIn.classList.add('hidden');
    signUp.classList.remove('hidden');
    sides.forEach(side => {side.classList.toggle('left')});
    forms.forEach(form => {form.classList.toggle('right')});
}

function registerToggle(){
    signIn.classList.remove('hidden');
    signUp.classList.add('hidden');
    sides.forEach(side => {side.classList.toggle('left')});
    forms.forEach(form => {form.classList.toggle('right')});
}
/*switching signIn/signUp forms End*/

/*Mobile Layout Animation Start*/
const mobileLoginBtn = document.querySelector('.signin .login-btn.mobile-only');
const mobileRegisterBtn = document.querySelector('.signup .login-btn.mobile-only');

console.log(mobileLoginBtn);

mobileLoginBtn.addEventListener('click',mobileLoginToggle);
mobileRegisterBtn.addEventListener('click',mobileRegisterToggle);

function mobileLoginToggle(){
    //signIn.classList.add('hidden');
    signUp.classList.remove('hidden');
    signIn.classList.add('top');
}

function mobileRegisterToggle(){
    signIn.classList.remove('hidden');
    signUp.classList.add('hidden');
    signIn.classList.remove('top');
}
/*Mobile Layout Animation End*/

/*SignUp form validation Start*/
const signUpForm = document.querySelector('.signup .form');
const firstname = document.querySelector('#firstname');
const lastname = document.querySelector('#lastname');
const email = document.querySelector('#email');
const password = document.querySelector('#password');
const password2 = document.querySelector('#password2');

signUpForm.addEventListener('submit',checkValues);

function checkValues(e){
    // e.preventDefault();

    const firstnameValue = firstname.value.trim();
    const lastnameValue = lastname.value.trim();
    const emailValue = email.value.trim();
    const passwordValue = password.value.trim();
    const password2Value = password2.value.trim();

    let isError = false;

    if(firstnameValue === ""){
        showError(firstname,'First Name cannot be empty');
        isError = true;
    }
    else{
        success(firstname);
    }

    if(lastnameValue === ""){
        showError(lastname,'Last Name cannot be empty');
        isError = true;
    }
    else{
        success(lastname);
    }

    if(emailValue === ""){
        showError(email,'Email cannot be empty');
        isError = true;
    }
    else if(emailValue.indexOf('@mail.sfsu.edu') === -1 && emailValue.indexOf("@sfsu.edu") === -1){
        showError(email,'Please enter a valid SFSU email');
        isError = true;
    }
    else{
        success(email);
    }

    if(passwordValue === ""){
        showError(password,'Password cannot be empty');
        isError = true;
    }
    else if(passwordValue.length < 10){
        showError(password,'Password should be at least 10 characters');
        isError = true;
    }
    else{
        success(password);
    }

    if(password2Value !== passwordValue){
        showError(password2,'Password does not match');
        isError = true;
    }
    else{
        success(password2);
    }

    // If any validation checks fail (aka any errors), the submit button
    // doesn't do the POST action to /users/register
    if(isError){
        e.preventDefault();
    }
}

function showError(input,message){
    const formControl = input.parentElement;
    const error = formControl.querySelector('small');
    input.style.border = '2px solid red';
    error.innerText = message;
    error.style.visibility = 'visible';
}

function success(input){
    const formControl = input.parentElement;
    const error = formControl.querySelector('small');
    input.style.border = 'none';
    error.style.visibility = 'hidden';
}
/* SignUp form validation End */

/* Show password functionality Start */
const loginPass = document.querySelector('#loginPass');
const showPass = document.querySelector('#showPass');

showPass.addEventListener('click',togglePass);

function togglePass(){
    if(showPass.checked === true){
        loginPass.setAttribute('type','text');
    }
    else{
        loginPass.setAttribute('type','password');
    }
}
/* Show password functionality End */
