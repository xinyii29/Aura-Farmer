const cards =[
    {english:"Hello", malay:"Apa Khabar", pinyin:"a-pa ka-ba", image:"image/hello.jpeg", audio:["audio/apa khabar.mp3"]},
    {english:"Goodbye", malay:"Selamat Tinggal", pinyin:"seh-lah-mat ting-gal", image:"image/goodbye.jpeg", audio:["audio/selamat tinggal.mp3"]},
    {english:"Thank You", malay:"Terima Kasih", pinyin:"teh-ree-ma ka-seh", image:"image/thanks.jpeg", audio:["audio/terima kasih.mp3"]},
    {english:"Please", malay:"Sila", pinyin:"see-la", image:"image/please.jpeg", audio:["audio/sila.mp3"]},
    {english:"Sorry", malay:"Maaf", pinyin:"mah-af", image:"image/sorry.jpeg", audio:["audio/maaf.mp3"]},
    {english:"Yes", malay:"Ya", pinyin:"yah", image:"image/yes.jpeg", audio:["audio/ya.mp3"]},
    {english:"No", malay:"Tak/Tidak", pinyin:"tak/tee-dak", image:"image/no.jpeg", audio:["audio/taktidak.mp3"]},
    {english:"Water", malay:"Air", pinyin:"ah-yer", image:"image/water.jpeg", audio:["audio/air.mp3"]},
    {english:"Food", malay:"Makanan", pinyin:"mah-kah-nan", image:"image/food.jpeg", audio:["audio/makanan.mp3"]},
    {english:"House", malay:"Rumah", pinyin:"roo-mah", image:"image/house.jpeg", audio:["audio/rumah.mp3"]},
    {english:"Phone", malay:"Telefon", pinyin:"teh-leh-fon", image:"image/phone.jpeg", audio:["audio/telefon.mp3"]},
    {english:"Book", malay:"Buku", pinyin:"boo-koo", image:"image/book.jpeg", audio:["audio/buku.mp3"]},
    {english:"Table", malay:"Meja", pinyin:"may-jah", image:"image/table.jpeg", audio:["audio/meja.mp3"]},
    {english:"Door", malay:"Pintu", pinyin:"peen-too", image:"image/door.jpeg", audio:["audio/pintu.mp3"]},
    {english:"I", malay:"Saya/Aku", pinyin:"sah-yah/ah-koo", image:"image/me.jpeg", audio:["audio/sayaaku.mp3.wav"]},
    {english:"You", malay:"Kamu/Awak", pinyin:"kah-moo/ah-wak", image:"image/you.jpeg", audio:["audio/kamuawak.mp3.wav"]},
    {english:"He/She", malay:"Dia", pinyin:"dee-ah", image:"image/HeShe.jpeg", audio:["audio/dia.mp3"]},
    {english:"We", malay:"Kita/Kami", pinyin:"kee-ta/kah-mee", image:"image/we.jpeg", audio:["audio/kitakami.mp3"]},
    {english:"They", malay:"Mereka", pinyin:"meh-reh-kah", image:"image/they.jpeg", audio:["audio/mereka.mp3"]},
    {english:"Friend", malay:"Kawan", pinyin:"kah-wan", image:"image/friend.jpeg", audio:["audio/kawan.mp3"]},
    {english:"Teacher", malay:"Cikgu/Guru", pinyin:"cheek-goo/goo-roo", image:"image/teacher.jpeg", audio:["audio/cikguguru.mp3"]},
    {english:"Eat", malay:"Makan", pinyin:"mah-kan", image:"image/eat.jpeg", audio:["audio/makan.mp3"]},
    {english:"Drink", malay:"Minum", pinyin:"mee-noom", image:"image/drink.jpeg", audio:["audio/minum.mp3"]},
    {english:"Go", malay:"Pergi", pinyin:"per-gee", image:"image/go.jpeg", audio:["audio/pergi.mp3"]},
    {english:"Come", malay:"Datang", pinyin:"dah-tang", image:"image/come.jpeg", audio:["audio/datang.mp3"]},
    {english:"See", malay:"Lihat", pinyin:"lee-hat", image:"image/see.jpeg", audio:["audio/lihat.mp3"]},
    {english:"Want", malay:"Mahu/Nak", pinyin:"mah-hoo/nak", image:"image/want.jpeg", audio:["audio/mahunak.mp3"]},
    {english:"Like", malay:"Suka", pinyin:"soo-kah", image:"image/like.jpeg", audio:["audio/suka.mp3"]},
    {english:"Big", malay:"Besar", pinyin:"beh-sar", image:"image/big.jpeg", audio:["audio/besar.mp3"]},
    {english:"Small", malay:"Kecil", pinyin:"keh-cheel", image:"image/small.jpeg", audio:["audio/kecil.mp3"]},
    {english:"Good", malay:"Baik", pinyin:"bah-ik", image:"image/good.jpeg", audio:["audio/baik.mp3"]},
    {english:"Bad", malay:" Buruk", pinyin:"boo-rook", image:"image/bad.jpeg", audio:["audio/buruk.mp3"]},
    {english:"Hot", malay:"Panas", pinyin:"pah-nas", image:"image/hot.jpeg", audio:["audio/panas.mp3"]},
    {english:"Cold", malay:"Sejuk", pinyin:"seh-jook", image:"image/cold.jpeg", audio:["audio/sejuk.mp3"]},
    {english:"Today", malay:"Hari ini", pinyin:"ha-ree ee-nee", image:"image/today.jpeg", audio:["audio/hari ini.mp3"]},
    {english:"Tomorrow", malay:"Esok", pinyin:"eh-sok", image:"image/tomorrow.jpeg", audio:["audio/esok.mp3"]},
    {english:"Yesterday", malay:"Semalam", pinyin:"seh-mah-lam", image:"image/yesterday.jpeg", audio:["audio/semalam.mp3"]},
    {english:"Now", malay:"Sekarang", pinyin:"seh-kah-rang", image:"image/now.jpeg", audio:["audio/sekarang.mp3"]},
    {english:"Morning", malay:"Pagi", pinyin:"pah-gee", image:"image/morning.jpeg", audio:["audio/pagi.mp3"]},
    {english:"Night", malay:"Malam", pinyin:"mah-lam", image:"image/night.jpeg", audio:["audio/malam.mp3"]},
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
  document.getElementById('MalayChar').textContent = data.malay;
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

