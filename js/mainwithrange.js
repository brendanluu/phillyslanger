//
//Declare global vars here

function callSlang() {
  var outputArea = document.getElementById('displayMsg');
  // outputArea.innerHTML = 'callSlang called';

  firstName = document.getElementById('fname').value;

  lastName = document.getElementById('lname').value;

  //outputArea.innerHTML = 'Hello ' + firstName;

  birthDayObj = new Date (document.getElementById('bday').value);

  var today = new Date();
  var currentAge = today.getFullYear() - birthDayObj.getFullYear();



  var monthNum = birthDayObj.getMonth();
  var dayNum = birthDayObj.getDate();
  var yearNum = birthDayObj.getFullYear();
  var dateNow = new Date();
  var currentYear = dateNow.getFullYear();
  var currentMon = dateNow.getMonth();
  var currentDay = dateNow.getDay();

  //
  // Normalize day and month for readability


  monthNum ++;
  dayNum ++;
  currentAge --;

  // alert(currentAge);

  var age = (currentYear - yearNum);

  var phillySlang;

  if ((monthNum == 12 && dayNum >= 22) || (monthNum == 1 && dayNum <= 19)){
    phillySlang = 'some "Whiz"';
  } else if ((monthNum == 11 && dayNum >= 22) || (monthNum == 12 && dayNum <= 21)){
    phillySlang = '"Drawlin"';
  } else if ((monthNum == 10 && dayNum >= 24) || (monthNum == 11 && dayNum <= 21)){
    phillySlang = '"SalPeppaKetchup"';
  } else if ((monthNum == 9 && dayNum >= 23) || (monthNum == 10 && dayNum <= 23)){
    phillySlang = '"Ard"';
  } else if ((monthNum == 8 && dayNum >= 23) || (monthNum == 9 && dayNum <= 22)){
    phillySlang = 'a "Young Boul"';
  } else if ((monthNum == 7 && dayNum >= 23) || (monthNum == 8 && dayNum <= 22)){
    phillySlang = 'a "Jawn"';
  } else if ((monthNum == 6 && dayNum >= 22) || (monthNum == 7 && dayNum <= 22)){
    phillySlang = 'some "Wooder Ice"';
  } else if ((monthNum == 5 && dayNum >= 21) || (monthNum == 6 && dayNum <= 21)){
    phillySlang = '"Ocky"';
  } else if ((monthNum == 4 && dayNum >= 20) || (monthNum == 5 && dayNum <= 20)){
    phillySlang = '"Out of Pocket"';
  } else if ((monthNum == 3 && dayNum >= 21) || (monthNum == 4 && dayNum <= 19)){
    phillySlang = '"Wildin"';
  } else if ((monthNum == 2 && dayNum >= 19) || (monthNum == 3 && dayNum <= 20)){
    phillySlang = '"Widdout"';
  } else {
    phillySlang = '"Bread"';
  }





  outputArea.innerHTML = 'Hello ' + firstName + ' ' + lastName + ' you are ' + currentAge + ' years old and are ' + phillySlang;


  //
  // return false to prevent form from resetting
  return false;
}
