//TYPE ANIMATION START
document.addEventListener('DOMContentLoaded',function(event){
  // array with texts to type in typewriter
  var dataText = [ "full stack web developer", "software developer", "computer engineer"];
  
  // type one text in the typwriter
  // keeps calling itself until the text is finished
  function typeWriter(text, i, fnCallback) {
    // chekc if text isn't finished yet
    if (i < (text.length)) {
      // add next character to h1
     document.getElementById("landing-role").innerHTML = text.substring(0, i+1) +'<span aria-hidden="true"></span>';

      // wait for a while and call this function again for next character
      setTimeout(function() {
        typeWriter(text, i + 1, fnCallback)
      }, 100);
    }
    // text finished, call callback if there is a callback function
    else if (typeof fnCallback == 'function') {
      // call callback after timeout
      setTimeout(fnCallback, 700);
    }
  }
  // start a typewriter animation for a text in the dataText array
   function StartTextAnimation(i) {
     if (typeof dataText[i] == 'undefined'){
        setTimeout(function() {
          StartTextAnimation(0);
        }, 20000);
     }
     // check if dataText[i] exists
    if (i < dataText[i].length) {
      // text exists! start typewriter animation
     typeWriter(dataText[i], 0, function(){
       // after callback (and whole text has been animated), start next text
       StartTextAnimation(i + 1);
     });
    }
  }
  // start the text animation
  StartTextAnimation(2);
});
// TYPE ANIMATION END





// TOOLS GROUP START
// function flexToNone() {
// 	let x = document.getElementsByClassName("tools-group");
// 	x.classList.remove("d-flex");
// 	x.classList.add("d-none");
// }

function hideThisElement(x) {
	x.classList.remove("d-flex");
	x.classList.add("d-none");
}
// TOOLS GROUP END





// FORM VALIDATION START
function inputCheck() {
	let empt1 = document.forms["contact-form"]["name"].value;
	let empt2 = document.forms["contact-form"]["email"].value;
	let empt3 = document.forms["contact-form"]["message"].value;
	if (empt1 != "" && empt2 != "" && empt3 != "") {
		document.getElementById("message-sent").style.display = "block";
		document.getElementById("message-fail").style.display = "none";
		document.forms["contact-form"]["name"].value = "";
		document.forms["contact-form"]["email"].value = "";
		document.forms["contact-form"]["message"].value = "";
	}
	else if (empt1 == "" || empt2 == "" || empt3 == "") {
		document.getElementById("message-fail").style.display = "block";
		document.getElementById("message-sent").style.display = "none";
	}
}

function closeAlert(x) {
	document.getElementById(x).style.display = "none";
}
// FORM VALIDATION END