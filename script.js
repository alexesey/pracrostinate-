let phrases = [
  { text: 'посидеть в тик токе', image: 'https://p16-amd-va.tiktokcdn.com/obj/musically-maliva-obj/981cb84ac7f96d6fbdd2a911bdb8ff91.png' },
  { text: 'научиться готовить', image: 'https://world-languages.ru/wp-content/uploads/2020/12/eda-na-nemeckom-930x612.jpg' },
  { text: 'попробовать собрать лего', image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/19/Lego_bricks.jpg/274px-Lego_bricks.jpg' },
  { text: 'поиграть в компьютерные игры', image: 'https://i.playground.ru/p/Obvg9oVuXJoXbadtNTmNyw.jpeg' },
  { text: 'вынести мусор', image: 'https://s9.travelask.ru/uploads/post/000/029/437/main_image/full-5ebaac3855ac8dfb805087831bbefc91.jpg' },
  { text: 'представить что ты в Нью-Йорке', image: 'https://www.iqconsultancy.ru/upload/medialibrary/3d8/ny_image_01.jpg' },
  { text: 'написать коментарий под видео Николая Соболева', image: 'https://icdn.lenta.ru/images/2017/04/05/16/20170405165226260/detail_91f3482908b1cca373caa25b612f2fdb.jpg' },
  { text: 'прослушать плейлист с любимыми песнями', image: 'https://aif-s3.aif.ru/images/017/031/c530f80e3d543240a4104c7e5fdf2298.jpg' },
  { text: 'почитать статью об Австралии', image: 'https://cameralabs.org/media/k2/items/cache/78fba61b29bc723a34cdef47465e5cac_L.jpg' },
  { text: 'полежать на диване', image:'https://img3.cliparto.com/pic/xl/267529/6382335-young-smiling-bearded-man-lying-on-ligh-blue-sofa.jpg'}
];

function getRandomElement(arr) {
  let randIndex = Math.floor(Math.random() * arr.length);
  return arr[randIndex];
}

let button = document.querySelector('.button');
let phrase = document.querySelector('.phrase');
let advice = document.querySelector('.advice');
let image = document.querySelector('.image');

button.addEventListener('click', function () {
  let randomElement = getRandomElement(phrases);
  smoothly(phrase, 'textContent', randomElement.text)
  smoothly(image, 'src', randomElement.image)

  if (randomElement.text.length > 40) {
    advice.style.fontSize = '33px';
  } else {
    advice.style.fontSize = '42px';
  }
});

for (let i = 0; i <= 2; i = i + 1) {
  // выводите элементы массива в консоль, используя i
 // console.log(phrases[i]);
  smoothly(phrase, 'textContent', phrases[i].text); 
  smoothly(image, 'src', phrases[i].image); 
} 