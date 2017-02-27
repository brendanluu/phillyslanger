//
//
//
function fade2Content() {
  console.log('fade2Content called');
  document.body.classList.remove("blackScreen");
}

var pisObj = document.getElementById('pis');

var scoObj = document.getElementById('sco');

var aquObj = document.getElementById('aqu');

var allPicsObj =
document.getElementById('allPics')

// var displayObj = document.getElementById('display');

pisObj.addEventListener('click', function (evt){
  displayZodSign(evt, 'pis');
},false);

scoObj.addEventListener('click', function (evt){
  displayZodSign(evt, 'sco');
},false);

aquObj.addEventListener('click', function (evt){
  displayZodSign(evt, 'aqu');
},false);

function displayZodSign(evt, whichOne){
  console.log('displayZodSign called' + whichOne);

var imgArray = allPicsObj.children;
console.log('imgArray is' + imgArray);
console.log('imgArray is' + imgArray.length);
console.log('imgArray2 is' + imgArray[2].tagName);

imgArray[0].classList.remove('display');
// loop through array and remove display class from everything //
for (lp=0; lp < imgArray.length; lp++) {
  imgArray[lp].classList.remove('display');
}

  switch (whichOne) {
    case 'pis':
      //display big image for PISCES//
      // displayObj.src ='img/ful_pisces.png';
      imgArray[1].classList.add('display');
      break;
    case 'sco':
      //display big image for SCORPIO//
      // displayObj.src ='img/ful_scorpio.png';
      imgArray[2].classList.add('display');
      break;
    case 'aqu':
      //display big image for AQUARIUS//
        // displayObj.src = 'img/ful_aquarius.png';
        imgArray[3].classList.add('display');
      break;
        // displayObj.src = 'img/ful_blank.png';
        imgArray[0].classList.add('display');

    default:
  }
}
