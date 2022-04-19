"use strict";

let email = document.getElementsByName("email")[0];
  let pass1 = document.getElementById("validationCustom02");
  let pass11 = document.getElementsByName("pass")[0];
  let pass2 = document.getElementById("validationCustom03");
 let pass22 =  document.getElementsByName("pass22")[0];
  let firstName = document.getElementsByName("firstname")[0];
  let lastName = document.getElementsByName("lastname")[0];
  let genderM = document.getElementsByName("inlineRadioOptions")[0];
  let genderF = document.getElementsByName("inlineRadioOptions")[1];
  let check1 =  document.getElementsByName("agreement")[0];
  let check2 =  document.getElementsByName("agreement2")[0];
  let country = document.getElementsByName("validationCustom06");
  
  let subimtBtn = document.querySelector('button[type="submit"]');


window.addEventListener('load', function () {
    const urlParams = new URLSearchParams(window.location.search);
   
    if(urlParams.entries().length==0)
        return;
    email.value = urlParams.get('email');
    firstName.value =  urlParams.get('firstname');
    lastName.value =  urlParams.get('lastname');
    pass11.value = urlParams.get('pass');
    pass22.value = urlParams.get('pass22')

   if(urlParams.get('inlineRadioOptions') === "Male"){
     genderM.checked = true
   }else if(urlParams.get('inlineRadioOptions') === "Female"){
    genderF.checked = true
   }

   if(urlParams.get('select').length==0)
        return;
    for(let eachOption of document.getElementsByName("select")[0].options){
        if(urlParams.get('select').split(",").includes(eachOption.value))
            eachOption.selected= true;
        else
            eachOption.selected= false;
    }

   if(urlParams.get('agreement') !== null){
    check1.checked = true;
  }

 
  if(urlParams.get('agreement2') !== null){
   check2.checked = true;
  }
    
    
});



(function () {
    'use strict'
  
    // Fetch all the forms we want to apply custom Bootstrap validation styles to
    var forms = document.querySelectorAll('.needs-validation')
  
    // Loop over them and prevent submission
    Array.prototype.slice.call(forms)
      .forEach(function (form) {
        form.addEventListener('submit', function (event) {
          if (!form.checkValidity()) {
            event.preventDefault()
            event.stopPropagation()
          }
   if(!passwordValidation()){
            event.preventDefault()
            event.stopPropagation();
          }
          form.classList.add('was-validated')
         
          
        }, false)
      })
      
  })()

  
  
  function passwordValidation(){
    if(pass1.value !== pass2.value){
        alert ("Please enter confirm password");
        pass2.value = "";
        return false;
    }
    return true;

  }