const cards =[
    {english:"Hello", cantonese:"你好", pinyin:"nay how", image:"image/hello.jpeg", audio:"audio/can.nihao.mp3"},
    {english:"Goodbye", cantonese:" 再見 ", pinyin:"joy gin", image:"image/goodbye.jpeg", audio:"audio/can.bye.mp3"},
    {english:"Thank You", cantonese:"多謝", pinyin:"doh jeh", image:"image/thanks.jpeg", audio:"audio/can.thanks.mp3"},
    {english:"Please", cantonese:"請", pinyin:"cheng", image:"image/please.jpeg", audio:"audio/can.please.mp3"},
    {english:"Sorry", cantonese:"對唔住", pinyin:"doi mm jyu", image:"image/sorry.jpeg", audio:"audio/can.sorry.mp3"},
    {english:"Yes", cantonese:"係", pinyin:"hai", image:"image/yes.jpeg", audio:"audio/can.yes.mp3"},
    {english:"No", cantonese:"唔 ", pinyin:"mm", image:"image/no.jpeg", audio:"audio/can.no.mp3"},
    {english:"Water", cantonese:"水", pinyin:"soy", image:"image/water.jpeg", audio:"audio/can.water.mp3"},
    {english:"Food", cantonese:"食物", pinyin:"sek mat", image:"image/food.jpeg", audio:"audio/can.food.mp3"},
    {english:"House", cantonese:"屋", pinyin:"ook", image:"image/house.jpeg", audio:"audio/can.house.mp3"},
    {english:"Phone", cantonese:"手機", pinyin:"saw gay", image:"image/phone.jpeg", audio:"audio/can.phone.mp3"},
    {english:"Book", cantonese:"書", pinyin:"shyu", image:"image/book.jpeg", audio:"audio/can.book.mp3"},
    {english:"Table", cantonese:"枱", pinyin:"toy", image:"image/table.jpeg", audio:"audio/can.table.mp3"},
    {english:"Door", cantonese:" 門", pinyin:"moon", image:"image/door.jpeg", audio:"audio/can.door.mp3"},
    {english:"I", cantonese:"我", pinyin:"ng-or", image:"image/me.jpeg", audio:"audio/can.i.mp3"},
    {english:"You", cantonese:"你", pinyin:"nay", image:"image/you.jpeg", audio:"audio/can.you.mp3"},
    {english:"He/She", cantonese:"佢", pinyin:"koy", image:"image/HeShe.jpeg", audio:"audio/can.he.she.mp3"},
    {english:"We", cantonese:" 我哋", pinyin:"ng-or day", image:"image/we.jpeg", audio:"audio/can.we.mp3"},
    {english:"They", cantonese:"佢哋", pinyin:"koy day", image:"image/they.jpeg", audio:"audio/can.they.mp3"},
    {english:"Friend", cantonese:"朋友", pinyin:"pang yau", image:"image/friend.jpeg", audio:"audio/can.friend.mp3"},
    {english:"Teacher", cantonese:"老師", pinyin:"low see", image:"image/teacher.jpeg", audio:"audio/can.teacher.mp3"},
    {english:"Eat", cantonese:"食", pinyin:"sek", image:"image/eat.jpeg", audio:"audio/can.eat.mp3"},
    {english:"Drink", cantonese:"飲", pinyin:"yam", image:"image/drink.jpeg", audio:"audio/can.drink.mp3"},
    {english:"Go", cantonese:"去", pinyin:"hoy", image:"image/go.jpeg", audio:"audio/can.go.mp3"},
    {english:"Come", cantonese:"嚟", pinyin:"lei", image:"image/come.jpeg" ,audio:"audio/can.come.mp3"},
    {english:"See", cantonese:"睇 ", pinyin:"tie", image:"image/see.jpeg", audio:"audio/can.see.mp3"},
    {english:"Want", cantonese:"要", pinyin:"yiu", image:"image/want.jpeg", audio:"audio/can.want.mp3"},
    {english:"Like", cantonese:"鍾意", pinyin:"joong yee", image:"image/like.jpeg", audio:"audio/can.like.mp3"},
    {english:"Big", cantonese:"大", pinyin:"die", image:"image/big.jpeg", audio:"audio/can.big.mp3"},
    {english:"Small", cantonese:" 細", pinyin:"sigh", image:"image/small.jpeg", audio:"audio/can.small.mp3"},
    {english:"Good", cantonese:"好", pinyin:"ho", image:"image/good.jpeg", audio:"audio/can.good.mp3"},
    {english:"Bad", cantonese:"壞", pinyin:"why", image:"image/bad.jpeg", audio:"audio/can.bad.mp3"},
    {english:"Hot", cantonese:"熱", pinyin:"yit", image:"image/hot.jpeg", audio:"audio/can.hot.mp3"},
    {english:"Cold", cantonese:"凍", pinyin:"doong", image:"image/cold.jpeg", audio:"audio/can.cold.mp3"},
    {english:"Today", cantonese:"今日", pinyin:"gum yat", image:"image/today.jpeg", audio:"audio/can.today.mp3"},
    {english:"Tomorrow", cantonese:"聽日", pinyin:"ting yat", image:"image/tomorrow.jpeg", audio:"audio/can.tomorrow.mp3"},
    {english:"Yesterday", cantonese:"昨日", pinyin:"jok yat", image:"image/yesterday.jpeg", audio:"audio/can.yesterday.mp3"},
    {english:"Now", cantonese:"而家", pinyin:"yee ga", image:"image/now.jpeg", audio:"audio/can.now.mp3"},
    {english:"Morning", cantonese:"早晨", pinyin:"joe san", image:"image/morning.jpeg", audio:"audio/can.morning.mp3"},
    {english:"Night", cantonese:"夜晚", pinyin:"yeh maan", image:"image/night.jpeg", audio:"audio/can.night.mp3"},
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
  document.getElementById('cantoneseChar').textContent = data.cantonese;
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
 
buildDots();
render();
