//const form=document.getElementById("form");
//const username=document.getElementById("username");
//const email=document.getElementById("email");
//const password=document.getElementById("password");
//const repassword=document.getElementById("repassword");
//const phone=document.getElementById("phone");

const validateEmail = (email) => {
    const regularExpressionMail=/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    if(regularExpressionMail.test(email.value)){
      success(email)
    }else{
      error(email,"hatalı bir mail formatı")
    }
  };

function error(input,message){
    input.className='form-control is-invalid'
    const div=input.nextElementSibling;
    div.innerText=message;
    div.className="invalid-feedback"
}
function success(input){
    input.className='form-control is-valid'
}

function checkRequired(inputs){
  inputs.forEach(element => {
    if (element.value=='') {
      error(element,`${element.id} gerekli`)
    }else{
      success(element)
    }
  });

}
function checkLength(input,min,max){
  if(input.value.length<min){
    error(input,`${input.id} en az ${min} karakter olmalı`)
  }else if(input.value.length>max){
    error(input,`${input.id} en fazla ${max} karakter olmalı`)
  }else{
    success(input);
  }
}
function checkPassword(input1,input2){
if(input1.value!==input2.value){
  error(input2,"Parolalar aynı değil ");
}
}

function checkPhone(input){
  var regularExpressionPhone=/^\d{11}$/
  if (!regularExpressionPhone.test(input.value)) {
    error(input ," telefon 11 karakterli olmalıdır.");    
  }
}
form.addEventListener("submit",function(e){
 e.preventDefault();
 checkRequired([username,email,password,repassword,phone])
 validateEmail(email);
 checkLength(username,3,5);
 checkLength(password,4,7);
 checkPassword(a,b);
 checkPhone(phone);
});
