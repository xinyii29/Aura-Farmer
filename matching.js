const allPairs = {
  mandarin: [
    { word: "你好", image: "image/hello.jpeg", name: "Hello" },
    { word: "再见", image: "image/goodbye.jpeg", name: "Goodbye" },
    { word: "谢谢", image: "image/thanks.jpeg", name: "Thank you" },
    { word: "请", image: "image/please.jpeg", name: "Please" },
    { word: "对不起", image: "image/sorry.jpeg", name: "Sorry" },
    { word: "是", image: "image/yes.jpeg", name: "Yes" },
    { word: "不", image: "image/no.jpeg", name: "No" },
    { word: "水", image: "image/water.jpeg", name: "Water" },
    { word: "食物", image: "image/food.jpeg", name: "Food" },
    { word: "房子", image: "image/house.jpeg", name: "House" },
    { word: "手机", image: "image/phone.jpeg", name: "Phone" },
    { word: "书", image: "image/book.jpeg", name: "Book" },
    { word: "桌子", image: "image/table.jpeg", name: "Table" },
    { word: "门", image: "image/door.jpeg", name: "Door" },
    { word: "我", image: "image/me.jpeg", name: "I" },
    { word: "你", image: "image/you.jpeg", name: "You" },
    { word: "他/她", image: "image/HeShe.jpeg", name: "He/She" },
    { word: "我们", image: "image/we.jpeg", name: "We" },
    { word: "他们/她们", image: "image/they.jpeg", name: "They" },
    { word: "朋友", image: "image/friend.jpeg", name: "Friend" },
    { word: "老师", image: "image/teacher.jpeg", name: "Teacher" },
    { word: "吃", image: "image/eat.jpeg", name: "Eat" },
    { word: "喝", image: "image/drink.jpeg", name: "Drink" },
    { word: "去", image: "image/go.jpeg", name: "Go" },
    { word: "来", image: "image/come.jpeg", name: "Come" },
    { word: "看", image: "image/see.jpeg", name: "See" },
    { word: "要", image: "image/want.jpeg", name: "Want" },
    { word: "喜欢", image: "image/like.jpeg", name: "Like" },
    { word: "大", image: "image/big.jpeg", name: "Big" },
    { word: "小", image: "image/small.jpeg", name: "Small" },
    { word: "好", image: "image/good.jpeg", name: "Good" },
    { word: "坏", image: "image/bad.jpeg", name: "Bad" },
    { word: "热", image: "image/hot.jpeg", name: "Hot" },
    { word: "冷", image: "image/cold.jpeg", name: "Cold" },
    { word: "今天", image: "image/today.jpeg", name: "Today" },
    { word: "明天", image: "image/tomorrow.jpeg", name: "Tomorrow" },
    { word: "昨天", image: "image/yesterday.jpeg", name: "Yesterday" },
    { word: "现在", image: "image/now.jpeg", name: "Now" },
    { word: "早上", image: "image/morning.jpeg", name: "Morning" },
    { word: "晚上", image: "image/night.jpeg", name: "Night" }
  ],
  russian: [
    { word: "Привет", image: "image/hello.jpeg", name: "Hello" },
    { word: "Пока", image: "image/goodbye.jpeg", name: "Goodbye" },
    { word: "Спасибо", image: "image/thanks.jpeg", name: "Thank You" },
    { word: "Пожалуйста", image: "image/please.jpeg", name: "Please" },
    { word: "Извините", image: "image/sorry.jpeg", name: "Sorry" },
    { word: "Да", image: "image/yes.jpeg", name: "Yes" },
    { word: "Нет", image: "image/no.jpeg", name: "No" },
    { word: "Вода", image: "image/water.jpeg", name: "Water" },
    { word: "Еда", image: "image/food.jpeg", name: "Food" },
    { word: "Дом", image: "image/house.jpeg", name: "House" },
    { word: "Телефон", image: "image/phone.jpeg", name: "Phone" },
    { word: "Книга", image: "image/book.jpeg", name: "Book" },
    { word: "Стол", image: "image/table.jpeg", name: "Table" },
    { word: "Дверь", image: "image/door.jpeg", name: "Door" },
    { word: "Я", image: "image/me.jpeg", name: "I" },
    { word: "Ты", image: "image/you.jpeg", name: "You" },
    { word: "Он / Она", image: "image/HeShe.jpeg", name: "He/She" },
    { word: "Мы", image: "image/we.jpeg", name: "We" },
    { word: "Они", image: "image/they.jpeg", name: "They" },
    { word: "Друг", image: "image/friend.jpeg", name: "Friend" },
    { word: "Учитель", image: "image/teacher.jpeg", name: "Teacher" },
    { word: "Есть", image: "image/eat.jpeg", name: "Eat" },
    { word: "Пить", image: "image/drink.jpeg", name: "Drink" },
    { word: "Идти", image: "image/go.jpeg", name: "Go" },
    { word: "Приходить", image: "image/come.jpeg", name: "Come" },
    { word: "Видеть", image: "image/see.jpeg", name: "See" },
    { word: "Хотеть", image: "image/want.jpeg", name: "Want" },
    { word: "Нравиться", image: "image/like.jpeg", name: "Like" },
    { word: "Большой", image: "image/big.jpeg", name: "Big" },
    { word: "Маленький", image: "image/small.jpeg", name: "Small" },
    { word: "Хорошо", image: "image/good.jpeg", name: "Good" },
    { word: "Плохой", image: "image/bad.jpeg", name: "Bad" },
    { word: "Горячий", image: "image/hot.jpeg", name: "Hot" },
    { word: "Холодный", image: "image/cold.jpeg", name: "Cold" },
    { word: "Сегодня", image: "image/today.jpeg", name: "Today" },
    { word: "Завтра", image: "image/tomorrow.jpeg", name: "Tomorrow" },
    { word: "Вчера", image: "image/yesterday.jpeg", name: "Yesterday" },
    { word: "Сейчас", image: "image/now.jpeg", name: "Now" },
    { word: "Утро", image: "image/morning.jpeg", name: "Morning" },
    { word: "Ночь", image: "image/night.jpeg", name: "Night" }
  ],
  cantonese: [
    { word: "你好", image: "image/hello.jpeg", name: "Hello" },
    { word: "再見", image: "image/goodbye.jpeg", name: "Goodbye" },
    { word: "多謝", image: "image/thanks.jpeg", name: "Thank You" },
    { word: "請", image: "image/please.jpeg", name: "Please" },
    { word: "對唔住", image: "image/sorry.jpeg", name: "Sorry" },
    { word: "係", image: "image/yes.jpeg", name: "Yes" },
    { word: "唔", image: "image/no.jpeg", name: "No" },
    { word: "水", image: "image/water.jpeg", name: "Water" },
    { word: "食物", image: "image/food.jpeg", name: "Food" },
    { word: "屋", image: "image/house.jpeg", name: "House" },
    { word: "手機", image: "image/phone.jpeg", name: "Phone" },
    { word: "書", image: "image/book.jpeg", name: "Book" },
    { word: "枱", image: "image/table.jpeg", name: "Table" },
    { word: "門", image: "image/door.jpeg", name: "Door" },
    { word: "我", image: "image/me.jpeg", name: "I" },
    { word: "你", image: "image/you.jpeg", name: "You" },
    { word: "佢", image: "image/HeShe.jpeg", name: "He/She" },
    { word: "我哋", image: "image/we.jpeg", name: "We" },
    { word: "佢哋", image: "image/they.jpeg", name: "They" },
    { word: "朋友", image: "image/friend.jpeg", name: "Friend" },
    { word: "老師", image: "image/teacher.jpeg", name: "Teacher" },
    { word: "食", image: "image/eat.jpeg", name: "Eat" },
    { word: "飲", image: "image/drink.jpeg", name: "Drink" },
    { word: "去", image: "image/go.jpeg", name: "Go" },
    { word: "嚟", image: "image/come.jpeg", name: "Come" },
    { word: "睇", image: "image/see.jpeg", name: "See" },
    { word: "要", image: "image/want.jpeg", name: "Want" },
    { word: "鍾意", image: "image/like.jpeg", name: "Like" },
    { word: "大", image: "image/big.jpeg", name: "Big" },
    { word: "細", image: "image/small.jpeg", name: "Small" },
    { word: "好", image: "image/good.jpeg", name: "Good" },
    { word: "壞", image: "image/bad.jpeg", name: "Bad" },
    { word: "熱", image: "image/hot.jpeg", name: "Hot" },
    { word: "凍", image: "image/cold.jpeg", name: "Cold" },
    { word: "今日", image: "image/today.jpeg", name: "Today" },
    { word: "聽日", image: "image/tomorrow.jpeg", name: "Tomorrow" },
    { word: "昨日", image: "image/yesterday.jpeg", name: "Yesterday" },
    { word: "而家", image: "image/now.jpeg", name: "Now" },
    { word: "早晨", image: "image/morning.jpeg", name: "Morning" },
    { word: "夜晚", image: "image/night.jpeg", name: "Night" }
  ],
  malay: [
    { word: "Apa Khabar", image: "image/hello.jpeg", name: "Hello" },
    { word: "Selamat Tinggal", image: "image/goodbye.jpeg", name: "Goodbye" },
    { word: "Terima Kasih", image: "image/thanks.jpeg", name: "Thank You" },
    { word: "Sila", image: "image/please.jpeg", name: "Please" },
    { word: "Maaf", image: "image/sorry.jpeg", name: "Sorry" },
    { word: "Ya", image: "image/yes.jpeg", name: "Yes" },
    { word: "Tidak/Tak", image: "image/no.jpeg", name: "No" },
    { word: "Air", image: "image/water.jpeg", name: "Water" },
    { word: "Makanan", image: "image/food.jpeg", name: "Food" },
    { word: "Rumah", image: "image/house.jpeg", name: "House" },
    { word: "Telefon", image: "image/phone.jpeg", name: "Phone" },
    { word: "Buku", image: "image/book.jpeg", name: "Book" },
    { word: "Meja", image: "image/table.jpeg", name: "Table" },
    { word: "Pintu", image: "image/door.jpeg", name: "Door" },
    { word: "Saya/Aku", image: "image/me.jpeg", name: "I" },
    { word: "Kamu/Awak", image: "image/you.jpeg", name: "You" },
    { word: "Dia", image: "image/HeShe.jpeg", name: "He/She" },
    { word: "Kita/Kami", image: "image/we.jpeg", name: "We" },
    { word: "Mereka", image: "image/they.jpeg", name: "They" },
    { word: "Kawan", image: "image/friend.jpeg", name: "Friend" },
    { word: "Cikgu/Guru", image: "image/teacher.jpeg", name: "Teacher" },
    { word: "Makan", image: "image/eat.jpeg", name: "Eat" },
    { word: "Minum", image: "image/drink.jpeg", name: "Drink" },
    { word: "Pergi", image: "image/go.jpeg", name: "Go" },
    { word: "Datang", image: "image/come.jpeg", name: "Come" },
    { word: "Lihat", image: "image/see.jpeg", name: "See" },
    { word: "Mahu/Nak", image: "image/want.jpeg", name: "Want" },
    { word: "Suka", image: "image/like.jpeg", name: "Like" },
    { word: "Besar", image: "image/big.jpeg", name: "Big" },
    { word: "Kecil", image: "image/small.jpeg", name: "Small" },
    { word: "Baik", image: "image/good.jpeg", name: "Good" },
    { word: "Buruk", image: "image/bad.jpeg", name: "Bad" },
    { word: "Panas", image: "image/hot.jpeg", name: "Hot" },
    { word: "Sejuk", image: "image/cold.jpeg", name: "Cold" },
    { word: "Hari ini", image: "image/today.jpeg", name: "Today" },
    { word: "Esok", image: "image/tomorrow.jpeg", name: "Tomorrow" },
    { word: "Semalam", image: "image/yesterday.jpeg", name: "Yesterday" },
    { word: "Sekarang", image: "image/now.jpeg", name: "Now" },
    { word: "Pagi", image: "image/morning.jpeg", name: "Morning" },
    { word: "Malam", image: "image/night.jpeg", name: "Night" }
  ]
};

const languageFlags = {
  mandarin: "🇨🇳",
  russian: "🇷🇺",
  cantonese: "🇭🇰",
  malay: "🇲🇾"
};

const languageLabels = {
  mandarin: "Mandarin",
  russian: "Russian",
  cantonese: "Cantonese",
  malay: "Malay"
};

let selectedLanguage = null;
let pairs = [];
let page = 0;
let roundscore = 0;
let selected = [];
let matched = 0;
let locked = false;

const pairsPerPage = 4;
let totalPages = 0;

// Screens
const languageScreen = document.getElementById("languageScreen");
const gameScreen = document.getElementById("gameScreen");

// Game elements
const scoreText = document.getElementById("score");
const countText = document.getElementById("count");
const barFill = document.getElementById("barFill");
const nextBtn = document.getElementById("nextBtn");
const board = document.getElementById("gameBoard");
const langLabel = document.getElementById("langLabel");

function selectLanguage(lang) {
  selectedLanguage = lang;
  pairs = allPairs[lang];
  totalPages = Math.ceil(pairs.length / pairsPerPage);
  page = 0;
  roundscore = 0;
  scoreText.textContent = roundscore;
  langLabel.textContent = languageFlags[lang] + " " + languageLabels[lang];

  languageScreen.style.display = "none";
  gameScreen.style.display = "block";

  startPage();
}

function showLanguageScreen() {
  gameScreen.style.display = "none";
  languageScreen.style.display = "flex";
}

function startPage() {
  selected = [];
  matched = 0;
  locked = false;
  board.innerHTML = "";
  nextBtn.disabled = true;

  countText.textContent = "Level " + (page + 1) + " of " + totalPages;
  barFill.style.width = ((page + 1) / totalPages * 100) + "%";

  const start = page * pairsPerPage;
  const pagePairs = pairs.slice(start, start + pairsPerPage);
  let cards = [];

  pagePairs.forEach((pair, index) => {
    cards.push({ id: index, type: "image", image: pair.image, name: pair.name });
    cards.push({ id: index, type: "word", word: pair.word });
  });

  cards.sort(() => Math.random() - 0.5);

  cards.forEach((card) => {
    const button = document.createElement("button");
    button.className = "card";
    button.dataset.id = card.id;
    button.dataset.type = card.type;

    if (card.type === "image") {
      button.innerHTML = `<img src="${card.image}" alt="${card.name}">`;
    } else {
      button.textContent = card.word;
    }

    button.onclick = function () { chooseCard(button); };
    board.appendChild(button);
  });
}

function chooseCard(card) {
  if (locked || card.classList.contains("matched") || card.classList.contains("selected")) return;

  card.classList.add("selected");
  selected.push(card);

  if (selected.length === 2) checkMatch();
}

function checkMatch() {
  const first = selected[0];
  const second = selected[1];

  const sameId = first.dataset.id === second.dataset.id;
  const differentType = first.dataset.type !== second.dataset.type;

  locked = true;

  if (sameId && differentType) {
    first.classList.add("correct", "matched");
    second.classList.add("correct", "matched");
    first.classList.remove("selected");
    second.classList.remove("selected");

    roundscore += 10;
    addScore(10); // Update the total score in sessionStorage
    matched += 1;
    scoreText.textContent = roundscore;

    selected = [];
    locked = false;

    if (matched === pairsPerPage) nextBtn.disabled = false;
  } else {
    first.classList.add("wrong");
    second.classList.add("wrong");

    setTimeout(() => {
      first.classList.remove("selected", "wrong");
      second.classList.remove("selected", "wrong");
      selected = [];
      locked = false;
    }, 1000);
  }
}

function navigate(step) {
  const sound = document.getElementById('clickSound');
  sound.currentTime = 0;
  sound.play();

  page += step;

  if (page >= totalPages) {
    countText.textContent = "Complete!";
    board.innerHTML = `<div class="complete-msg"> Congratulations! You finished ${languageLabels[selectedLanguage]}! 🎉<br>Final Aura: ${roundscore}</div>`;
    nextBtn.disabled = true;
    return;
  }

  startPage();
}

function GoToHomePage(pageName) {
  const sound = document.getElementById('clickSound');
  sound.currentTime = 0;
  sound.play();

  setTimeout(() => {
    window.location.href = pageName; 
  }, 300);
}
