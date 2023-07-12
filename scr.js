var SpeechRecognition = SpeechRecognition || webkitSpeechRecognition
var SpeechGrammarList = SpeechGrammarList || window.webkitSpeechGrammarList
var SpeechRecognitionEvent = SpeechRecognitionEvent || webkitSpeechRecognitionEvent

var colors = [ 'aqua' , 'azure' , 'beige', 'bisque', 'black', 'blue', 'brown', 'chocolate', 'coral', 'crimson', 'cyan', 'fuchsia', 'ghostwhite', 'gold', 'goldenrod', 'gray', 'green', 'indigo', 'ivory', 'khaki', 'lavender', 'lime', 'linen', 'magenta', 'maroon', 'moccasin', 'navy', 'olive', 'orange', 'orchid', 'peru', 'pink', 'plum', 'purple', 'red', 'salmon', 'sienna', 'silver', 'snow', 'tan', 'teal', 'thistle', 'tomato', 'turquoise', 'violet', 'white', 'yellow'];

var recognition = new SpeechRecognition();
if (SpeechGrammarList) {
  // SpeechGrammarList is not currently available in Safari, and does not have any effect in any other browser.
  // This code is provided as a demonstration of possible capability. You may choose not to use it.
  var speechRecognitionList = new SpeechGrammarList();
  var grammar = '#JSGF V1.0; grammar colors; public <color> = ' + colors.join(' | ') + ' ;'
  speechRecognitionList.addFromString(grammar, 1);
  recognition.grammars = speechRecognitionList;
}
recognition.continuous = false;
recognition.lang = 'ru-RU';
recognition.interimResults = false;
recognition.maxAlternatives = 1;

var diagnostic = document.querySelector('.output');
var bg = document.querySelector('html');
var hints = document.querySelector('.hints');
var pic = document.getElementById("myImage")

var colorHTML= '';
colors.forEach(function(v, i, a){
  console.log(v, i);
  colorHTML += '<span style="background-color:' + v + ';"> ' + v + ' </span>';
});
//hints.innerHTML = 'Tap/click then say a color to change the background color of the app. Try ' + colorHTML + '.';

document.body.onclick = function() {
  recognition.start();
  console.log('Ready to receive a color command.');
}

recognition.onresult = function(event) {
  // The SpeechRecognitionEvent results property returns a SpeechRecognitionResultList object
  // The SpeechRecognitionResultList object contains SpeechRecognitionResult objects.
  // It has a getter so it can be accessed like an array
  // The first [0] returns the SpeechRecognitionResult at the last position.
  // Each SpeechRecognitionResult object contains SpeechRecognitionAlternative objects that contain individual results.
  // These also have getters so they can be accessed like arrays.
  // The second [0] returns the SpeechRecognitionAlternative at position 0.
  // We then return the transcript property of the SpeechRecognitionAlternative object
  var color = event.results[0][0].transcript;
  color = color.toLowerCase();
  diagnostic.textContent = color ;

  	if(color == 'золотой') bg.style.backgroundColor = 'gold';
	if(color == 'желтый' || color == 'жёлтый') bg.style.backgroundColor = 'yellow';

	if(color == 'малиновый') bg.style.backgroundColor = 'crimson';
	if(color == 'красный') bg.style.backgroundColor = 'red';
	if(color == 'бордовый') bg.style.backgroundColor = 'maroon';
	if(color == 'розовый') bg.style.backgroundColor = 'pink';
	if(color == 'алый') bg.style.backgroundColor = "#FF2400";

	if(color == 'светло-бирюзовый') bg.style.backgroundColor = 'cyan';
	if(color == 'бирюзовый') bg.style.backgroundColor = 'turquoise';
	if(color == 'темно бирюзовый' || color == 'темный бирюзовый') bg.style.backgroundColor = 'teal';

	if(color == 'пурпурный') bg.style.backgroundColor = 'magenta';
	if(color == 'фиолетовый') bg.style.backgroundColor = 'purple';
	if(color == 'медведь') pic.src = 'https://img5.goodfon.ru/original/320x240/1/ee/medved-mishka-buryi-priroda-morda-progulka-vzgliad-krasavets.jpg'
  if(color == 'барсук') pic.src =           'https://i.pinimg.com/736x/a1/59/bf/a159bfd8b7e82a6d59679766f535c061.jpg'
	switch (color) {
    case 'енот':
      pic.src = ''
      break;
      case 'ай':
        case 'ой':
        pic.src = 'https://drive.google.com/file/d/1aVBvtf22Al92Pc8wOF2oGnJBG0TJkiBM/view?/usp=drivesdk'
        break;
    case 'Papayas':
      console.log('Mangoes and papayas are $2.79 a pound.');
      // Expected output: "Mangoes and papayas are $2.79 a pound."
      break;
    case '':
      pic.src = ''
    break;
  }
	
  console.log('Shit: ' + event.results[0][0].confidence);
}

recognition.onspeechend = function() {
  recognition.stop();
}

recognition.onnomatch = function(event) {
  diagnostic.textContent = "I didn't recognise that color.";
}

recognition.onerror = function(event) {
  diagnostic.textContent = 'Error occurred in recognition: ' + event.error;
}
