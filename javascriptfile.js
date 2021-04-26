let email = document.getElementById("email");
let error = document.getElementById("error");
let pwd = document.getElementById("pwd");
function validate(){
    let regexp = /^([A-Za-z0-9\.-]+)@([A-Za-z0-9\-]+).([a-z]{2,3})(.[a-z]{2,3})?$/
    let validate = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/
    if(regexp.test(email.value)&&validate.test(pwd.value)){
        error.innerHTML = "Valid";
        error.style.color = "green";
        return true;
    }
    else{
        error.innerHTML = "Invalid";
        error.style.color = "red";
        return false;
    }  
}
// var myInput = document.getElementById("psw");
// var letter = document.getElementById("letter");
// var capital = document.getElementById("capital");
// var number = document.getElementById("number");
// var length = document.getElementById("length");

// // When the user clicks on the password field, show the message box
// myInput.onfocus = function() {
//   document.getElementById("message").style.display = "block";
// }

// // When the user clicks outside of the password field, hide the message box
// myInput.onblur = function() {
//   document.getElementById("message").style.display = "none";
// }

// // When the user starts to type something inside the password field
// myInput.onkeyup = function() {
//   // Validate lowercase letters
//   var lowerCaseLetters = /[a-z]/g;
//   if(myInput.value.match(lowerCaseLetters)) {
//     letter.classList.remove("invalid");
//     letter.classList.add("valid");
//   } else {
//     letter.classList.remove("valid");
//     letter.classList.add("invalid");
// }

//   // Validate capital letters
//   var upperCaseLetters = /[A-Z]/g;
//   if(myInput.value.match(upperCaseLetters)) {
//     capital.classList.remove("invalid");
//     capital.classList.add("valid");
//   } else {
//     capital.classList.remove("valid");
//     capital.classList.add("invalid");
//   }

//   // Validate numbers
//   var numbers = /[0-9]/g;
//   if(myInput.value.match(numbers)) {
//     number.classList.remove("invalid");
//     number.classList.add("valid");
//   } else {
//     number.classList.remove("valid");
//     number.classList.add("invalid");
//   }

//   // Validate length
//   if(myInput.value.length >= 8) {
//     length.classList.remove("invalid");
//     length.classList.add("valid");
//   } else {
//     length.classList.remove("valid");
//     length.classList.add("invalid");
//   }
// }
// $( document ).ready(function() {
  
//     const changeText = function (el, text, color) {
//       el.text(text).css('color', color);
//     };
    
//     $('.input-1').keyup(function(){
//       let len = this.value.length;
//       const pbText = $('.form-1 .progress-bar_text');
  
//       if (len === 0) {
//         $('.form-1 .progress-bar_item').each(function() {
//           $(this).removeClass('active')
//         });
//         $('.form-1 .active').css('background-color', 'transparent');
//         changeText(pbText, 'Password is blank');
//       } else if (len > 0 && len <= 4) {
//         $('.form-1 .progress-bar_item-1').addClass('active');
//         $('.form-1 .progress-bar_item-2').removeClass('active');
//         $('.form-1 .progress-bar_item-3').removeClass('active');
//         $('.form-1 .active').css('background-color', '#FF4B47');
//         changeText(pbText, 'Too weak');
//       } else if (len > 4 && len <= 8) {
//         $('.form-1 .progress-bar_item-2').addClass('active');
//         $('.form-1 .progress-bar_item-3').removeClass('active');
//         $('.form-1 .active').css('background-color', '#F9AE35');
//         changeText(pbText, 'Could be stronger');
//       } else {
//         $('.form-1 .progress-bar_item').each(function() {
//           $(this).addClass('active');
//         });
//         $('.form-1 .active').css('background-color', '#2DAF7D');
//         changeText(pbText, 'Strong password');
//       } 
//     });
    
    
    
//   });
function passwordChanged() {
    var strength = document.getElementById('strength');
    var strongRegex = new RegExp("^(?=.{8,})(?=.*[A-Z])(?=.*[a-z])(?=.*[0-9])(?=.*).*$", "g");
    var mediumRegex = new RegExp("^(?=.{7,})(((?=.*[A-Z])(?=.*[a-z]))|((?=.*[A-Z])(?=.*[0-9]))|((?=.*[a-z])(?=.*[0-9]))).*$", "g");
    var enoughRegex = new RegExp("(?=.{6,}).*", "g");
    var pwd = document.getElementById("password");
    if (pwd.value.length == 0) {
        strength.innerHTML = 'Type Password';
    } else if (false == enoughRegex.test(pwd.value)) {
        strength.innerHTML = 'More Characters';
    } else if (strongRegex.test(pwd.value)) {
        strength.innerHTML = '<span style="color:green">Strong!</span>';
    } else if (mediumRegex.test(pwd.value)) {
        strength.innerHTML = '<span style="color:orange">Medium!</span>';
    } else {
        strength.innerHTML = '<span style="color:red">Weak!</span>';
    }
}