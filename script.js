
const form= document.getElementsByTagName('form')[0];
var details = document.querySelector('.details');
var error_message =document.querySelector('.errormessage');
const password =document.getElementById('password');
const reenter_password =document.getElementById('reenter');




 form.addEventListener('submit',(e)=>
 {
  const name = document.querySelector('input[type=text]');
 const email = document.querySelector('input[type=email]');
 const phone = document.querySelector('input[type=tel]');
  var radios = document.getElementsByName('gender');
 var selected = Array.from(radios).find(radio=>radio.checked);
 const address =document.querySelector('textarea');
 const pincode = document.querySelector('input[type=pincode]');
 let sentence ="";
 
 if(name.value == "")
 {
    name.style.border="2px red solid";
    sentence += "<li>please enter a name</li>";
 }
 if(email.value == "")
 {
    email.style.border="2px red solid";
    sentence += "<li>please enter a email</li>";
 }
 if(phone.value=="")
 {
   phone.style.border="2px red solid";
   sentence += "<li>please enter a phone</li>";
 }
 if(password.value=="")
 {
   password.style.border="2px red solid";
   sentence += "<li>please enter a password</li>";
 }
 if(reenter_password.value=="")
 {
   reenter_password.style.border="2px red solid";
   sentence += "<li>please re-enter the password</li>";
 }
 if(reenter_password.value === password.value)
 {
  reenter_password.style.border="0";

 }
 if(password.value!="" && reenter_password.value!="")
 {
   if(password.value !=reenter_password.value)
   {
      reenter_password.style.border="2px yellow solid";
      sentence += "<li>password doesnt match</li>";

   }

 }




 
  if(sentence=== "")
  {
  var t = `<li>name:${name.value}</li><li>email:${email.value}</li><li>phone:${phone.value}</li><li>gender:${selected.value}</li><li> address:${address.value}</li><li>pincode:${pincode.value}</li><li>password:${password.value}</li>`;
  details.innerHTML =  t;
  details.style.opacity="1";
  error_message.style.opacity="0";
  }
  else{
  
  error_message.innerHTML = sentence;
  error_message.style.opacity="1";
  details.style.opacity="0";


  }
  e.preventDefault();
  
 }
 )