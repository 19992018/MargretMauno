alert ("Hey I am working!")
var corrAnswer1 = document.getElementbyId('corr1');
var corrAnswer2 = document.getElementbyId('corr2');
var corrAnswer3 = document.getElementbyId('corr3');
var corrAnswer4 = document.getElementbyId('corr4');
var corrAnswer5 = document.getElementbyId('corr5');
var corrAnswer6 = document.getElementbyId('corr6');
var allQuestions = document.getElementByClassName('corrAnswer');

count=0;

function result(){

  if(corrAnswer1.checked){
    count++;
  }
  if(corrAnswer2.checked){
    count++;
  }
  if(corrAnswer3.checked){
    count++;
  }
  if(corrAnswer4checked){
    count++;
  }
  if(corrAnswer5.checked){
    count++;
  }
  if(corrAnswer6.checked){
    count++;
  }

 document.querySelector(".popup").classList.remove("hide");
return document.getElementByClassName("message").innerHTML= "You have scored " + count + " !";


}
