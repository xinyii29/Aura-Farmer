const cards =[
    {english:"Hello", russian:"Привет", pinyin:"pree-vyet", image:"image/hello.jpeg", audio:["audio/hello.mp3"]},
    {english:"Goodbye", russian:" Пока", pinyin:" pa-ka", image:"image/goodbye.jpeg", audio:["audio/goodbye.mp3"]},
    {english:"Thank You", russian:"Спасибо", pinyin:"spa-see-ba", image:"image/thanks.jpeg", audio:["audio/thank you.mp3"]},
    {english:"Please", russian:"Пожалуйста", pinyin:"pa-zha-lu-sta", image:"image/please.jpeg", audio:["audio/please.mp3"]},
    {english:"Sorry", russian:"Извините", pinyin:"eez-vee-nee-tye", image:"image/sorry.jpeg", audio:["audio/sorry.mp3"]},
    {english:"Yes", russian:"Да", pinyin:"da", image:"image/yes.jpeg", audio:["audio/yes.mp3"]},
    {english:"No", russian:"Нет", pinyin:"nyet", image:"image/no.jpeg", audio:["audio/no.mp3"]},
    {english:"Water", russian:"Вода", pinyin:"va-da", image:"image/water.jpeg", audio:["audio/water.mp3"]},
    {english:"Food", russian:"Еда", pinyin:"ye-da", image:"image/food.jpeg", audio:["audio/food.mp3"]},
    {english:"House", russian:"Дом", pinyin:"dom", image:"image/house.jpeg", audio:["audio/house.mp3"]},
    {english:"Phone", russian:"Телефон", pinyin:"tee-le-fon", image:"image/phone.jpeg", audio:["audio/phone.mp3"]},
    {english:"Book", russian:"Книга", pinyin:"knee-ga", image:"image/book.jpeg", audio:["audio/book.mp3"]},
    {english:"Table", russian:"Стол", pinyin:"stol", image:"image/table.jpeg", audio:["audio/table.mp3"]},
    {english:"Door", russian:"Дверь", pinyin:"dvyer", image:"image/door.jpeg", audio:["audio/door.mp3"]},
    {english:"I", russian:"Я", pinyin:"ya", image:"image/me.jpeg", audio:["audio/I.mp3"]},
    {english:"You", russian:" Ты", pinyin:"ty", image:"image/you.jpeg", audio:["audio/you.mp3"]},
    {english:"He/She", russian:"Он / Она", pinyin:"on / a-na", image:"image/HeShe.jpeg", audio:["audio/heshe.mp3"]},
    {english:"We", russian:"Мы", pinyin:"mwi", image:"image/we.jpeg", audio:["audio/we.mp3"]},
    {english:"They", russian:"Они", pinyin:"a-nee", image:"image/they.jpeg", audio:["audio/they.mp3"]},
    {english:"Friend", russian:"Друг", pinyin:"drook", image:"image/friend.jpeg", audio:["audio/friend.mp3"]},
    {english:"Teacher", russian:"Учитель", pinyin:"oo-chee-tyel", image:"image/teacher.jpeg", audio:["audio/teacher.mp3"]},
    {english:"Eat", russian:"Есть", pinyin:"yesst", image:"image/eat.jpeg", audio:["audio/eat.mp3"]},
    {english:"Drink", russian:" Пить", pinyin:"peet", image:"image/drink.jpeg", audio:["audio/drink.mp3"]},
    {english:"Go", russian:"Идти", pinyin:"eed-tee", image:"image/go.jpeg", audio:["audio/go.mp3"]},
    {english:"Come", russian:"Приходить", pinyin:"pree-ha-deet", image:"image/come.jpeg", audio:["audio/come.mp3"]},
    {english:"See", russian:"Видеть", pinyin:"vee-dyet", image:"image/see.jpeg", audio:["audio/see.mp3"]},
    {english:"Want", russian:"Хотеть", pinyin:"kha-tyet", image:"image/want.jpeg", audio:["audio/want.mp3"]},
    {english:"Like", russian:"Нравиться", pinyin:"nra-veet-sa", image:"image/like.jpeg", audio:["audio/like.mp3"]},
    {english:"Big", russian:" Большой", pinyin:"bal-shoy", image:"image/big.jpeg", audio:["audio/big.mp3"]},
    {english:"Small", russian:"Маленький", pinyin:"mah-len-kee", image:"image/small.jpeg", audio:["audio/small.mp3"]},
    {english:"Good", russian:"Хорошо", pinyin:"kha-ra-sho", image:"image/good.jpeg", audio:["audio/good.mp3"]},
    {english:"Bad", russian:"Плохой", pinyin:"pla-khoy", image:"image/bad.jpeg", audio:["audio/bad.mp3"]},
    {english:"Hot", russian:"Горячий", pinyin:"ga-rya-chee", image:"image/hot.jpeg", audio:["audio/hot.mp3"]},
    {english:"Cold", russian:" Холодный", pinyin:"kho-lod-nee", image:"image/cold.jpeg", audio:["audio/cold.mp3"]},
    {english:"Today", russian:"Сегодня", pinyin:"see-vod-nya", image:"image/today.jpeg", audio:["audio/today.mp3"]},
    {english:"Tomorrow", russian:"Завтра", pinyin:"zaf-tra", image:"image/tomorrow.jpeg", audio:["audio/tomorrow.mp3"]},
    {english:"Yesterday", russian:"Вчера", pinyin:"fchee-ra", image:"image/yesterday.jpeg", audio:["audio/yesterday.mp3"]},
    {english:"Now", russian:"Сейчас", pinyin:"shee-cas", image:"image/now.jpeg", audio:["audio/now.mp3"]},
    {english:"Morning", russian:"Утро", pinyin:"oo-tra", image:"image/morning.jpeg", audio:["audio/morning.mp3"]},
    {english:"Night", russian:"Ночь", pinyin:"noch", image:"image/night.jpeg", audio:["audio/night.mp3"]},
]
let current = 0;
 
function playSound(){
  console.log(cards[current].audio);
  let audio = new Audio(cards[current].audio);

  audio.play();
}


const clickSound = new Audio("audio/click.mp3");
clickSound.play();

function playClickSound(){
  const clickEl = document.getElementById("clickSound");
  clickEl.currentTime = 0;
  clickEl.play();
}
document.getElementById("prevBtn").onclick = () => {
  if (current > 0) {
    current--;
    render();
    document.getElementById("clickSound").play();
  }
};

document.getElementById("nextBtn").onclick = () => {
  if (current < cards.length - 1) {
    current++;
    render();
    document.getElementById("clickSound").play();
  }
};



function buildDots() {
  const dotsEl = document.getElementById('dots');
  dotsEl.innerHTML = '';
  cards.forEach((_, i) => {
    const d = document.createElement('div');
    d.className = 'dot' + (i === 0 ? ' active' : '');
    d.onclick = () => goTo(i);
    dotsEl.appendChild(d);
  });
}
 
function updateDots() {
  document.querySelectorAll('.dot').forEach((d, i) => {
    d.className = 'dot' + (i === current ? ' active' : i < current ? ' visited' : '');
  });
}
 
function render() {
  const data = cards[current];
 
  // Re-trigger slide animation
  const card = document.getElementById('card');
  card.style.animation = 'none';
  card.offsetHeight; // force reflow
  card.style.animation = '';
 
  // Fill in the text
  document.getElementById('engWord').textContent  = data.english;
  document.getElementById('russianChar').textContent = data.russian;
  document.getElementById('pinyin').textContent       = data.pinyin;
  document.getElementById('count').textContent      = `Card ${current + 1} of ${cards.length}`;
 
  // Update progress bar
  document.getElementById('barFill').style.width =
    `${((current + 1) / cards.length) * 100}%`;
 
  // Show image or placeholder
  const box = document.getElementById('imageBox');
  if (data.image) {
    box.innerHTML = `<img src="${data.image}" alt="${data.english}">`;
  } else {
    box.innerHTML = `
      <div class="image-placeholder">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
          <rect x="3" y="3" width="18" height="18" rx="3"/>
          <circle cx="8.5" cy="8.5" r="1.5"/>
          <path d="M21 15l-5-5L5 21"/>
        </svg>
        <span>${data.english.toUpperCase()}</span>
      </div>`;
  }
 
  // Enable / disable buttons
  document.getElementById('prevBtn').disabled = current === 0;
  document.getElementById('nextBtn').disabled = current === cards.length - 1;
 
  updateDots();
}
 
function navigate(dir) {
  goTo(current + dir);
}
 
function goTo(idx) {
  if (idx < 0 || idx >= cards.length) return;
  current = idx;
  render();
}

function GoToHomePage(pageName) {
  const sound = document.getElementById('clickSound');
  sound.currentTime = 0;
  sound.play();

  setTimeout(() => {
    window.location.href = pageName; 
  }, 300);
}
 
document.addEventListener('keydown', e => {
  if (e.key === 'ArrowRight') navigate(1);
  if (e.key === 'ArrowLeft')  navigate(-1);
});
 
// Start
buildDots();
render();