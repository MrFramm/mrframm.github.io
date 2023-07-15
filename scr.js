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

  if(color == 'синий') bg.style.backgroundColor = 'blue';
  if(color == 'голубой') bg.style.backgroundColor = '#81abdb';

	if(color == 'медведь') pic.src = 'https://img5.goodfon.ru/original/320x240/1/ee/medved-mishka-buryi-priroda-morda-progulka-vzgliad-krasavets.jpg'
  if(color == 'барсук') pic.src =           'https://i.pinimg.com/736x/a1/59/bf/a159bfd8b7e82a6d59679766f535c061.jpg'
	switch (color) {
    case 'енот':
      pic.src = 'https://smallivingworld.ru/800/600/http/boxbat.ru/wp-content/uploads/8/3/3/8335e780eed3310af9b4e9d67326ee6c.jpeg'
      break;
      case 'ай':
        case 'ой':
        case 'ой-ой-ой':
        case 'ань':
        pic.src = './IMG_0190.jpg'
         break;
    
    case 'лев':
      pic.src = 'https://superwalls.top/uploads/posts/2022-09/thumbs/1662302447_3-gamerwall-pro-p-lev-i-lvenok-zhivotnie-3.jpg'
    break;
    case 'кот':
      pic.src = 'https://kot-pes.com/wp-content/uploads/2019/03/post_5c906e06057ea.jpg'
    break;
    case 'лиса':
      pic.src = 'https://fanibani.ru/images/wp-content/uploads/2021/05/image085-3-1079x720.jpg'
    break;
    case 'волк':
      pic.src = 'https://s.yimg.com/ny/api/res/1.2/gjPTHkGsl.3.Yirk1zUtkQ--/YXBwaWQ9aGlnaGxhbmRlcjt3PTk2MDtoPTYzOQ--/https://media.zenfs.com/en/business_insider_articles_888/c09d3871c28677f4386f16647f63fd00'
    break;
    case 'заяц':
      pic.src = 'https://media.1istochnik.ru/attachments/istochnik/publications/10/105244/large_1628497804-60342adf09.jpeg'
    break;
    case 'мышь':
      pic.src = 'https://i.pinimg.com/736x/71/3b/cb/713bcbcfeb725782792df9a4f599e3cf--house-mouse-rodents.jpg'
    break;
    case 'лягушка':
      pic.src = 'https://fb.ru/misc/i/gallery/62230/2297936.jpg'
    break;
    case 'черепаха':
      pic.src = 'https://national-travel.ru/wp-content/uploads/wtt-images/2023/04/gde-zhivut-cherepahi-701.jpg'
    break;
    case 'муха':
      pic.src = 'https://цифокс.рф/images/Housefly_1.jpg'
    break;
    case 'осёл':
      pic.src = 'https://avatars.dzeninfra.ru/get-zen_doc/1711960/pub_5f6c6e0f3ea1c17961776b30_5f6c6ee13ea1c17961791506/scale_1200'
    break;
    case 'слон':
      pic.src = 'https://w.forfun.com/fetch/2e/2ed552bdb4a00b0524e61ff725e811d3.jpeg'
    break;
    case 'аист':
      pic.src = 'https://proprikol.ru/wp-content/uploads/2020/03/kartinki-aist-51.jpg'
    break;
    case 'верблюд':
      pic.src = 'https://avatars.dzeninfra.ru/get-zen_doc/3683658/pub_621185a1d41b1c157dee914c_62118685b65a7d01d3f9c103/scale_1200'
    case 'мороженое':
      pic.src = 'https://www.novotest.ru/upload/iblock/92a/lyubitelyam_morozhenogo_na_zametku_sovety_rosstandarta_po_vyboru_kachestvennogo_produkta.png'
    break;
    case 'пицца':
      pic.src = 'https://insanelygoodrecipes.com/wp-content/uploads/2022/04/Homemade-Pizza-with-Pepperoni-and-Cheese.jpg'
    break;
    case 'пельмени':
      pic.src = 'https://i2.wp.com/sanya-anya.ru/wp-content/uploads/kak-prigotovit-domashnie-pelmeni-recept-bystryj-i-prostoj-03-930x620.jpg'
    break;
    case 'шашлык':
      pic.src = 'https://fb.ru/media/i/2/3/4/5/5/2/7/i/2345527.jpg?1618765212'
    break;
    case 'бургер':
      pic.src = 'https://i.mycdn.me/i?r=AzEPZsRbOZEKgBhR0XGMT1RkCKa2VlEv6l5mEoBjiOqv-aaKTM5SRkZCeTgDn6uOyic'
    break;
    case 'черешня':
      pic.src = 'https://s-zametki.ru/wp-content/uploads/2019/06/poleznye-svojstva-chereshni-komu-osobenno-polezno-est-chereshnyu-po-mneniyu-uchenyh-foto-krasnaya-i-zheltaya-chereshnya.jpg'
    break;
    case 'виноград':
      pic.src = 'https://weblinks.ru/wp-content/uploads/2022/01/32-11.jpg'
    break;
    case 'клубника':
      pic.src = 'https://www.restoran.ru/upload/resize_cache/iblock/c81/948_800_2/klubnika.jpg'
    break;
    case 'яблоко':
      pic.src = 'https://stopa03.ru/images/blog/11/apple.jpg'
    break;
    case 'ананас':
      pic.src = 'https://zdraveda.ru/wp-content/uploads/2018/06/ananas.jpg'
    break;
    case 'арбуз':
    case 'арбуз арбуз':
      pic.src = 'https://avon-c.ru/wp-content/uploads/6/a/0/6a03693b4026ca3f907ad572a93c2b92.jpeg'
    break;
    case 'дыня':
      pic.src = 'https://avatars.dzeninfra.ru/get-zen_doc/4944693/pub_60eac42c563f1251152237e9_60eac49a0f1e1b2a8ced86a3/scale_1200'
    break;
    case 'банан':
      pic.src = 'https://m-chu.ru/wp-content/uploads/2018/03/30b7731ff6c7965f__Banana.xxxlarge.jpg'
    break;
    case 'мандарин':
      pic.src = 'https://d2gg9evh47fn9z.cloudfront.net/800px_COLOURBOX5431942.jpg'
    break;
    case 'персик':
      pic.src = 'https://www.shkolazhizni.ru/img/content/i239/239468_or.jpg'
    break;
    case 'манго':
      pic.src = 'https://e7.pngegg.com/pngimages/521/99/png-clipart-mango-tropical-fruit-juice-drupe-mango-natural-foods-food.png'
    break;
    case 'помидор':
      pic.src = 'https://mir-ogorodik.ru/wp-content/uploads/2018/09/Kak-zagotovit-semena-pomidorov-v-domashnih-uslovijah-1.jpeg'
    break;
    case 'огурец':
      pic.src = 'https://zagadki-dlya-detej.ru/wp-content/uploads/2021/08/ogurets.jpg'
    break;
    case 'сладкий перец':
      pic.src = 'https://cityfan.ru/files/2021/01/Perets2.jpg'
    break;
    case 'колбаса':
      pic.src = 'https://vkusvill.ru/upload/resize/58096/58096_1200x600x70_c_o.webp'
    break;
    case 'грецкий орех':
      pic.src = 'https://kubnews.ru/upload/resize_cache/iblock/b9a/1200_630_2/b9a42c3074349a061b45c87d1232c15f.jpg'
    break;
    case 'сочень':
    case 'сочник':
      pic.src = 'http://i.mycdn.me/i?r=AzEPZsRbOZEKgBhR0XGMT1RkyTwoMhOSQHMv5VD995Dx3KaKTM5SRkZCeTgDn6uOyic'
    break;
    case 'сыр':
      pic.src = 'https://avatars.mds.yandex.net/get-eda/3529908/2d26143b4131ae7b109554041f3c5741/800x800nocrop'
    break;
    case 'шоколад':
    case 'шоколадка':
      pic.src = 'https://mk.mrgcdn.ru/4ecc41f6b05d1c943ea71aa1c11d57a2_w720_h540.jpg'
    break;
    case 'суши':
      pic.src = 'https://avatars.mds.yandex.net/get-altay/5499862/2a00000182c9297be98a309453aa64a6d5bf/XXL'
    break;
    case 'форель':
      pic.src = 'https://www.victoria-group.ru/upload/iblock/8f8/8f8d11f49ac35f4ef956a71fd44851dd.jpg'
    break;
    case 'суп':
      pic.src = 'https://kvashenaya-kapusta.ru/wp-content/uploads/b/b/1/bb1a2dfea6ce7586c1a5a2189b929613.jpeg'
    break;
    case 'каша':
      pic.src = 'https://detkisuper.ru/wp-content/uploads/d/3/1/d31c1c81afbc03ecc45cec0cb4300f0a.jpeg'
    break;
    case 'азия':
    case 'ася':
    case 'хозя':
    case 'настя':
    case 'азиза':
      pic.src = 'https://sun9-76.userapi.com/impg/5EUOphc3FSBRNlHYwmJMam3S5il62gcIQEy0Sg/mSclRMjSZu0.jpg?size=807x605&quality=95&sign=2c182e114fc661a508bdb276df3802dc&c_uniq_tag=juOyuCAb277kxhJXJPF4NqZahX9Et9TL_VQHAmC4Pi0&type=album'
    break;
    case 'конфета':
      pic.src = 'https://office-dedamoroza.ru/img/conf/33.jpg'
    break;
    case 'ряженка':
      pic.src = 'https://i8.otzovik.com/2020/09/17/10648806/img/1576350_28259021.jpeg'
    break;
    case 'йогурт':
      pic.src = 'https://tvoydom.ru/photos/1002658930/1002658930_1.jpg'
    break;
    case 'пирожок':
      pic.src = 'https://lh3.googleusercontent.com/F0jme2jFQnBmhyARE0UnYrZilxyW1ukPR1dXZRNVRuDzk1yxl7bZKxMMotgRY-2jNaosHVOyue-CPZdcPab2pkatB4F0I4M9uM8pcJJstGs1B7KJtec2s9h_If4U5QZIt1OgP7_b'
    break;
    case 'мама':
    case 'мама мама':
      pic.src = 'https://sun9-81.userapi.com/impf/c831309/v831309550/ef16c/y78hi_Cx_24.jpg?size=320x569&quality=96&rotate=270&sign=5c52e2f930bd04d4a1ede6d61a69b70d&c_uniq_tag=7XIfXuuDLdpjTOnyc6s5dq9ygSeYV3BmQPftPXAPTfE&type=album'
    break;
    case 'папа':
      pic.src = 'https://sun1-91.userapi.com/s/v1/if1/tYT2JVGP8x44A3MhZWp14clEwLg9ADuhbXpiCSPvAvVv_Hsc-QEsKZ0SDTxGvQaY4deysnhu.jpg?size=400x600&quality=96&crop=0,0,402,604&ava=1'
    break;
    case 'банбан':
      pic.src = 'https://tuttop.com/uploads/posts/2023-03/garten-of-banban-2.jpg'
    break;
    case 'апелла':
      pic.src = 'https://i.ytimg.com/vi/cDKdR2CWIDM/hqdefault.jpg'
    break;
    case 'хаги ваги':
    case 'ходи вадик':
    case 'одевание':
      pic.src = 'https://igroutka.ru/uploads/posts/2022-03/QuizWhoareyoufromHagiVagi_1646146529621e33e1972410.29814031.jpg'
    break;
    case 'мамочка длинные ноги':
      pic.src = 'https://riseupgamer.com/wp-content/uploads/2022/05/how-to-draw-7-1024x818.png'
    break;
    case '':
      pic.src = ''
    break;
    case '':
      pic.src = ''
    break;
    case '':
      pic.src = ''
    break;
    case '':
      pic.src = ''
    break;
    case '':
      pic.src = ''
    break;
    case '':
      pic.src = ''
    break;
    case '':
      pic.src = ''
    break;
    case '':
      pic.src = ''
    break;
    case '':
      pic.src = ''
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
