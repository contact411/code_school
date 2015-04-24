var userAge = prompt("What's your age, user?");
var ageIsCorrect = false;

while (ageIsCorrect == false){
  if (confirm("You entered " + userAge + ". Is this correct?") == true){
    prompt("Great! Your age is logged as " + userAge + ".");
    ageIsCorrect = true;
  } else {
    userAge = prompt("What's your age, user?");
  }
};