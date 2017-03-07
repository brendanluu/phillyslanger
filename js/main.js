//
// Declare global vars here


var firstName;
var birthDayObj;

var weekDays = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];

var capObj = document.getElementById("whiz");

var sagObj = document.getElementById("drawlin");

var scoObj = document.getElementById("salpeppaketchup");

var libObj = document.getElementById("ard");

var virObj = document.getElementById("jawn");

var leoObj = document.getElementById("yungboul");

var canObj = document.getElementById("wooderice");

var gemObj = document.getElementById("ocky");

var tauObj = document.getElementById("outtapocket");

var ariObj = document.getElementById("wildin");

var pisObj = document.getElementById("widdout");

var aquObj = document.getElementById("bread");

var helpObj = document.getElementById("help");

capObj.addEventListener('click', function (evt){
  playAudio('whizaudio');
  document.getElementById('whizover').style.display='inline';
},false);

sagObj.addEventListener('click', function (evt){
  playAudio('drawlinaudio');
  document.getElementById('drawlinover').style.display='inline';
},false);

scoObj.addEventListener('click', function (evt){
  playAudio('salpeppaketchupaudio');
  document.getElementById('salpeppaketchupover').style.display='inline';
},false);

libObj.addEventListener('click', function (evt){
  playAudio('ardaudio');
  document.getElementById('ardover').style.display='inline';
},false);

virObj.addEventListener('click', function (evt){
  playAudio('jawnaudio');
  document.getElementById('jawnover').style.display='inline';
},false);

leoObj.addEventListener('click', function (evt){
  playAudio('yungboulaudio');
  document.getElementById('yungboulover').style.display='inline';
},false);

canObj.addEventListener('click', function (evt){
  playAudio('woodericeaudio');
  document.getElementById('woodericeover').style.display='inline';
},false);

gemObj.addEventListener('click', function (evt){
  playAudio('ockyaudio');
  document.getElementById('ockyover').style.display='inline';
},false);

tauObj.addEventListener('click', function (evt){
  playAudio('outtapocketaudio');
  document.getElementById('outtapocketover').style.display='inline';
},false);

ariObj.addEventListener('click', function (evt){
  playAudio('wildinaudio');
  document.getElementById('wildinover').style.display='inline';
},false);

pisObj.addEventListener('click', function (evt){
  playAudio('widdoutaudio');
  document.getElementById('widdoutover').style.display='inline';
},false);

aquObj.addEventListener('click', function (evt){
  playAudio('breadaudio');
  document.getElementById('breadover').style.display='inline';
},false);

helpObj.addEventListener('click', function (evt){
  document.getElementById('helpover').style.display='inline';
},false);


function playAudio(whichSound) {
    //play sound based on whichSound parameter
    document.getElementById(whichSound).play();

}




function calZodiac() {
  var outputArea = document.getElementById('displayMsg');
  // outputArea.innerHTML = 'calZodiac called';

  firstName = document.getElementById('fname').value;
  // outputArea.innerHTML = 'Hello ' + firstName;

  birthDayObj = new Date(document.getElementById('bday').value);
  console.log('birthDayObj parsed is' + Date.parse(birthDayObj));

  if(isNaN(Date.parse(birthDayObj))) {
    alert('Invalid date. Please retry!')
    //exit/jump out of this function
    return false;
  }

  var whichDayNdx = birthDayObj.getDay();

  //
  // Calulate zodiac sign

  var monthNum = birthDayObj.getMonth();
  var dayNum = birthDayObj.getDate();

  //
  // Normalize day and month number for readability
  monthNum ++;
  dayNum ++;

  var astroSign;

  if ((monthNum == 12 && dayNum >= 22) || (monthNum == 1 && dayNum <= 19 )) {
    astroSign = 'Cap';
  } else if ((monthNum == 11 && dayNum >= 22) || (monthNum == 12 && dayNum <= 21)) {
    astroSign = 'Sag';
  } else if ((monthNum == 10 && dayNum >= 24) || (monthNum == 11 && dayNum <= 21)) {
    astroSign = 'Sco';
  } else if ((monthNum == 9 && dayNum >= 23) || (monthNum == 10 && dayNum <= 23)) {
    astroSign = 'Lib';
  } else if ((monthNum == 8 && dayNum >= 23) || (monthNum == 9 && dayNum <= 22)) {
    astroSign = 'Vir';
  } else if ((monthNum == 7 && dayNum >= 23) || (monthNum == 8 && dayNum <= 22)) {
    astroSign = 'Leo';
  } else if ((monthNum == 6 && dayNum >= 22) || (monthNum == 7 && dayNum <= 22)) {
    astroSign = 'Can';
  } else if ((monthNum == 5 && dayNum >= 21) || (monthNum == 6 && dayNum <= 21)) {
    astroSign = 'Gem';
  } else if ((monthNum == 4 && dayNum >= 20) || (monthNum == 5 && dayNum <= 20)) {
    astroSign = 'Tau';
  } else if ((monthNum == 3 && dayNum >= 21) || (monthNum == 4 && dayNum <= 19)) {
    astroSign = 'Ari';
  } else if ((monthNum == 2 && dayNum >= 19) || (monthNum == 3 && dayNum <= 20)) {
    astroSign = 'Pis';
  } else {
    astroSign = 'Aqu';
  }



  //determine users age ... do not declare a variable twice
  var currentAge = calculate_age(birthDayObj.getMonth (), birthDayObj.getDate (), birthDayObj.getFullYear ());

  var msg = '';
  msg += '<p>Hello ' + firstName + '. </p>';
  msg += '<p>Your zodiac sign is ' + astroSign + '. </p>'
  msg += '<p>Your age is <strong>' + currentAge + '</strong>.</p>'
  msg += '<p>CANDLES: ';
  //add CANDLES
  for (lp = 0; lp < currentAge; lp++) {
    msg += 'i ';
  }
  msg += '</p>';

  outputArea.innerHTML = msg;

  //
  // retun false to prevent form from resetting
  return false;
}


//new function
function calculate_age (bMonth, bDay, bYear){
  var today_date = new Date ();
  var today_year = today_date.getFullYear();
  var today_month = today_date.getMonth();
  var today_day = today_date.getDate();

  var age = today_year - bYear;

  if (today_month < (bMonth-1)) {
    age--;
  }
  if (((bMonth - 1) == today_month) && (today_day < bDay)){
    age--;
  }
  return age;

}
