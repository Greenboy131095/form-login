// create a function checkEmptyError with an arraylist , the function will notice user that they could not leave blank in any of required-fill-out positin 
// don't forget to customize the value input , 
// create a function name checkEmailError(input), dont forget to validate the input value , use regex on stackoverflow 

// create a function name showError(input, message) create a class error in the function showError and a function name showSuccess(inout)
var username = document.querySelector('#username');
var email= document.querySelector('#email');
var password= document.querySelector('#password');
var confirmpassword= document.querySelector('#confirm-password');
var form= document.querySelector('form');
function showError(input,message){
    let parent = input.parentElement;
    let small=parent.querySelector('small');
    parent.classList.add('error');
    small.innerText=message;
   
}

function showSuccess(input){
let parent = input.parentElement;
let small = parent.querySelector('small');
parent.classList.remove('error');
small.innerText='';

}
function checkEmptyError(listInput){
    let isEmptyError= false;
    listInput.forEach(input=>{
        input.value= input.value.trim();
        if (!input.value){
            isEmptyError=true;
            showError(input,'Please Enter Your ' + input.placeholder);
        }else{
            showSuccess(input);
        }
    });
    return isEmptyError;
}

function checkEmailError(input){
    input.value= input.value.trim();
    const regex= /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i
    let isEmailError= regex.test(input.value);
    if (regex.test(input.value)){
        showSuccess(input)
    }else{
        showError(input,"Please Enter Your Email");
    }
    return isEmailError; 


}
function checkLengthError(input,max,min){
    input.value=input.value.trim();
     if (input.value.length < min){
        showError(input,'The '+input.placeholder+  ' has at lest '+ min+ ' characters')
        return true;
     }else if(input.value.length >max ){
        showError(input,'The password can not excceed ' +max +' characters')
        return true;
     }else{
         showSuccess(input);
         return false;
     }
}
function checkMatchPassword(password,checkPassword){
    if (password.value !== checkPassword.value){
        showError(checkPassword, 'Password not matched');
        return true;
    }else{
        return false;
    }
}
form.addEventListener('submit',function(e){
e.preventDefault();

checkEmptyError([username,password,confirmpassword,email]);

if (!checkEmptyError([username])){
    let isUsernameLengthError= checkLengthError(username,10,3);
  
}
if (!checkEmptyError([email])){
    checkEmailError(input)
}
if (!checkEmptyError([password])){
    let isPasswordLengthError= checkLengthError(password,10,3);
}

if (!checkEmptyError([confirmpassword])){
    checkMatchPassword(password,confirmpassword)
}  
})