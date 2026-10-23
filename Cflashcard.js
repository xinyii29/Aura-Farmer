const cards =[
    {english:"Hello", chinese:"你好", pinyin:"nǐ hǎo", image:"image/hello.jpeg", audio:"audio/nihao.mp3"},
    {english:"Goodbye", chinese:"再见", pinyin:"zài jiàn", image:"image/goodbye.jpeg", audio:"audio/zaijian.mp3"},
    {english:"Thank You", chinese:"谢谢", pinyin:"xiè xie", image:"image/thanks.jpeg", audio:"audio/xiexie.mp3"},
    {english:"Please", chinese:"请", pinyin:"qǐng", image:"image/please.jpeg", audio:"audio/qing.mp3"},
    {english:"Sorry", chinese:"对不起", pinyin:"duì bu qǐ ", image:"image/sorry.jpeg", audio:"audio/duibuqi.mp3"},
    {english:"Yes", chinese:"是", pinyin:"shì", image:"image/yes.jpeg", audio:"audio/shi.mp3"},
    {english:"No", chinese:"不", pinyin:"bù", image:"image/no.jpeg", audio:"audio/bu.mp3"},
    {english:"Water", chinese:"水", pinyin:"shuǐ ", image:"image/water.jpeg", audio:"audio/shui.mp3"},
    {english:"Food", chinese:"食物", pinyin:"shí wù", image:"image/food.jpeg", audio:"audio/shiwu.mp3"},
    {english:"House", chinese:"房子", pinyin:"fáng zi", image:"image/house.jpeg", audio:"audio/fangzi.mp3"},
    {english:"Phone", chinese:"手机", pinyin:"shǒu jī", image:"image/phone.jpeg", audio:"audio/shouji.mp3"},
    {english:"Book", chinese:"书", pinyin:"shū", image:"image/book.jpeg", audio:"audio/shu.mp3"},
    {english:"Table", chinese:"桌子", pinyin:"zhuō zi", image:"image/table.jpeg", audio:"audio/zhuozi.mp3"},
    {english:"Door", chinese:"门", pinyin:"mén", image:"image/door.jpeg", audio:"audio/men.mp3"},
    {english:"I", chinese:"我", pinyin:"wǒ ", image:"image/me.jpeg", audio:"audio/wo.mp3"},
    {english:"You", chinese:"你", pinyin:"nǐ", image:"image/you.jpeg", audio:"audio/ni.mp3"},
    {english:"He/She", chinese:"他 / 她", pinyin:"tā ", image:"image/HeShe.jpeg", audio:"audio/ta.mp3"},
    {english:"We", chinese:"我们", pinyin:"wǒ men", image:"image/we.jpeg", audio:"audio/women.mp3"},
    {english:"They", chinese:"他们 / 她们", pinyin:"tā men", image:"image/they.jpeg", audio:"audio/tamen.mp3"},
    {english:"Friend", chinese:"朋友", pinyin:"péng yǒu", image:"image/friend.jpeg", audio:"audio/pengyou.mp3"},
    {english:"Teacher", chinese:"老师", pinyin:" lǎo shī", image:"image/teacher.jpeg", audio:"audio/laoshi.mp3"},
    {english:"Eat", chinese:"吃", pinyin:"chī", image:"image/eat.jpeg", audio:"audio/chi.mp3"},
    {english:"Drink", chinese:"喝", pinyin:"hē", image:"image/drink.jpeg", audio:"audio/he.mp3"},
    {english:"Go", chinese:"去", pinyin:"qù", image:"image/go.jpeg", audio:"audio/qu.mp3"},
    {english:"Come", chinese:"来", pinyin:"lái", image:"image/come.jpeg", audio:"audio/lai.mp3"},
    {english:"See", chinese:"看", pinyin:"kàn", image:"image/see.jpeg", audio:"audio/kan.mp3"},
    {english:"Want", chinese:"要", pinyin:"yào", image:"image/want.jpeg", audio:"audio/yao.mp3"},
    {english:"Like", chinese:"喜欢", pinyin:"xǐ huān", image:"image/like.jpeg", audio:"audio/xihuan.mp3"},
    {english:"Big", chinese:"大", pinyin:"dà", image:"image/big.jpeg", audio:"audio/da.mp3"},
    {english:"Small", chinese:"小", pinyin:"xiǎo", image:"image/small.jpeg", audio:"audio/xiao.mp3"},
    {english:"Good", chinese:"好", pinyin:"hǎo", image:"image/good.jpeg", audio:"audio/hao.mp3"},
    {english:"Bad", chinese:" 坏", pinyin:" huài", image:"image/bad.jpeg", audio:"audio/huai.mp3"},
    {english:"Hot", chinese:"热", pinyin:"rè", image:"image/hot.jpeg", audio:"audio/re.mp3"},
    {english:"Cold", chinese:"冷", pinyin:"lěng", image:"image/cold.jpeg", audio:"audio/leng.mp3"},
    {english:"Today", chinese:"今天", pinyin:"jīn tiān", image:"image/today.jpeg", audio:"audio/jintian.mp3"},
    {english:"Tomorrow", chinese:"明天", pinyin:"míng tiān", image:"image/tomorrow.jpeg", audio:"audio/mingtian.mp3"},
    {english:"Yesterday", chinese:"昨天", pinyin:"zuó tiān", image:"image/yesterday.jpeg", audio:"audio/zuotian.mp3"},
    {english:"Now", chinese:"现在", pinyin:"xiàn zài", image:"image/now.jpeg", audio:"audio/xianzai.mp3"},
    {english:"Morning", chinese:"早上", pinyin:"zǎo shang", image:"image/morning.jpeg", audio:"audio/zaoshang.mp3"},
    {english:"Night", chinese:"晚上", pinyin:"wǎn shang", image:"image/night.jpeg", audio:"audio/wanshang.mp3"},
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
  document.getElementById('chineseChar').textContent = data.chinese;
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


