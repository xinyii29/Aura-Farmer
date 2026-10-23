const nextBtn = document.getElementById("nextBtn");
const urlParams = new URLSearchParams(window.location.search);
const level = urlParams.get('level');
const lang = urlParams.get('lang');

let score = Number(localStorage.getItem("score")) || 0;

const questions = {
    malay: {
        1:{question:"What is 'Book' in Malay?",options:["Meja","Buku","Air","Rumah"],answer:"Buku", audio:["audio/meja.mp3", "audio/buku.mp3", "audio/air.mp3", "audio/rumah.mp3"]},
        2:{question:"What is 'Thank you' in Malay?",options:["Ya","Tidak","Terima kasih","Maaf"],answer:"Terima kasih", audio:["audio/ya.mp3", "audio/tidak.mp3", "audio/terima kasih.mp3", "audio/sorry.mp3"]},
        3:{question:"What is 'You' in Malay?",options:["Saya","Dia","Kamu","Mereka"],answer:"Kamu", audio:["audio/saya.mp3", "audio/dia.mp3", "audio/kamu.mp3", "audio/mereka.mp3"]},
        4:{question:"What is 'Go' in Malay?",options:["Datang","Pergi","Minum","Lihat"],answer:"Pergi", audio:["audio/datang.mp3", "audio/pergi.mp3", "audio/minum.mp3", "audio/lihat.mp3"]},
        5:{question:"What is 'Small' in Malay?",options:["Besar","Baik","Kecil","Buruk"],answer:"Kecil", audio:["audio/besar.mp3", "audio/baik.mp3", "audio/kecil.mp3", "audio/buruk.mp3"]},
        6:{question:"What is 'Yesterday' in Malay?",options:["Hari ini","Esok","Semalam","Malam"],answer:"Semalam", audio:["audio/hari ini.mp3", "audio/esok.mp3", "audio/semalam.mp3", "audio/malam.mp3"]},
        7:{question:"What is 'Teacher' in Malay?",options:["Kawan","Guru","Rumah","Buku"],answer:"Guru", audio:["audio/kawan.mp3", "audio/guru.mp3", "audio/rumah.mp3", "audio/buku.mp3"]},
        8:{question:"What is 'Drink' in Malay?",options:["Makan","Minum","Pergi","Datang"],answer:"Minum", audio:["audio/makan.mp3", "audio/minum.mp3", "audio/pergi.mp3", "audio/datang.mp3"]},
        9:{question:"What is 'Hot' in Malay?",options:["Sejuk","Panas","Baik","Buruk"],answer:"Panas", audio:["audio/sejuk.mp3", "audio/panas.mp3", "audio/baik.mp3", "audio/buruk.mp3"]},
        10:{question:"What is 'Hello' in Malay?",options:["Apa khabar","Terima kasih","Selamat tinggal","Ya"],answer:"Apa khabar", audio:["audio/apa kahabar.mp3", "audio/terima kasih.mp3", "audio/selamat tinggal.mp3", "audio/ya.mp3"]},
        11:{question:"What is 'Door' in Malay?",options:["Pintu","Meja","Buku","Air"],answer:"Pintu", audio:["audio/pintu.mp3", "audio/meja.mp3", "audio/buku.mp3", "audio/air.mp3"]},
        12:{question:"What is 'They' in Malay?",options:["Saya","Kamu","Dia","Mereka"],answer:"Mereka", audio:["audio/saya.mp3", "audio/kamu.mp3", "audio/dia.mp3", "audio/mereka.mp3"]},
        13:{question:"What is 'See' in Malay?",options:["Lihat","Pergi","Datang","Makan"],answer:"Lihat", audio:["audio/lihat.mp3", "audio/pergi.mp3", "audio/datang.mp3", "audio/makan.mp3"]},
        14:{question:"What is 'Bad' in Malay?",options:["Baik","Buruk","Besar","Kecil"],answer:"Buruk", audio:["audio/baik.mp3", "audio/buruk.mp3", "audio/besar.mp3", "audio/kecil.mp3"]},
        15:{question:"What is 'Night' in Malay?",options:["Pagi","Malam","Hari ini","Esok"],answer:"Malam", audio:["audio/pagi.mp3", "audio/malam.mp3", "audio/hari ini.mp3", "audio/esok.mp3"]}
},


    chinese: {
        1:{question:"What is 'I' in Chinese?",options:["你","我","他","我们"],answer:"我", audio:["audio/ni.mp3", "audio/wo.mp3", "audio/ta.mp3", "audio/women.mp3"]},
        2:{question:"What is 'Goodbye' in Chinese?",options:["谢谢","再见","你好","不"],answer:"再见", audio:["audio/xiexie.mp3", "audio/zaijian.mp3", "audio/nihao.mp3", "audio/bu.mp3"]},
        3:{question:"What is 'Water' in Chinese?",options:["书","水","门","手机"],answer:"水", audio:["audio/shu.mp3", "audio/shui.mp3", "audio/men.mp3", "audio/shouji.mp3"]},
        4:{question:"What is 'Drink' in Chinese?",options:["吃","喝","去","来"],answer:"喝", audio:["audio/chi.mp3", "audio/he.mp3", "audio/qu.mp3", "audio/lai.mp3"]},
        5:{question:"What is 'Cold' in Chinese?",options:["热","冷","好","坏"],answer:"冷", audio:["audio/re.mp3", "audio/leng.mp3", "audio/hao.mp3", "audio/huai.mp3"]},
        6:{question:"What is 'Now' in Chinese?",options:["今天","明天","现在","昨天"],answer:"现在", audio:["audio/jintian.mp3", "audio/mingtian.mp3", "audio/xianzai.mp3", "audio/zuotian.mp3"]},
        7:{question:"What is 'Teacher' in Chinese?",options:["朋友","老师","书","房子"],answer:"老师", audio:["audio/pengyou.mp3", "audio/laoshi.mp3", "audio/shu.mp3", "audio/fangzi.mp3"]},
        8:{question:"What is 'Go' in Chinese?",options:["来","去","吃","看"],answer:"去", audio:["audio/lai.mp3", "audio/qu.mp3", "audio/chi.mp3", "audio/kan.mp3"]},
        9:{question:"What is 'Big' in Chinese?",options:["小","大","好","坏"],answer:"大", audio:["audio/xiao.mp3", "audio/da.mp3", "audio/hao.mp3", "audio/huai.mp3"]},
        10:{question:"What is 'Sorry' in Chinese?",options:["谢谢","你好","对不起","不"],answer:"对不起", audio:["audio/xiexie.mp3", "audio/nihao.mp3", "audio/duibuqi.mp3", "audio/bu.mp3"]},
        11:{question:"What is 'Door' in Chinese?",options:["门","书","水","手机"],answer:"门", audio:["audio/men.mp3", "audio/shu.mp3", "audio/shui.mp3", "audio/shouji.mp3"]},
        12:{question:"What is 'They' in Chinese?",options:["我","你","他们","我们"],answer:"他们", audio:["audio/wo.mp3", "audio/ni.mp3", "audio/tamen.mp3", "audio/women.mp3"]},
        13:{question:"What is 'See' in Chinese?",options:["看","吃","去","来"],answer:"看", audio:["audio/kan.mp3", "audio/chi.mp3", "audio/qu.mp3", "audio/lai.mp3"]},
        14:{question:"What is 'Bad' in Chinese?",options:["好","坏","大","小"],answer:"坏", audio:["audio/hao.mp3", "audio/huai.mp3", "audio/da.mp3", "audio/xiao.mp3"]},
        15:{question:"What is 'Morning' in Chinese?",options:["晚上","早上","今天","明天"],answer:"早上", audio:["audio/wanshang.mp3", "audio/zaoshang.mp3", "audio/jintian.mp3", "audio/mingtian.mp3"]}
},


   cantonese: {
        1:{question:"What is 'Phone' in Cantonese?",options:["書","手機","水","門"],answer:"手機", audio:["audio/can.book.mp3", "audio/can.phone.mp3", "audio/can.water.mp3", "audio/can.door.mp3"]},
        2:{question:"What is 'Sorry' in Cantonese?",options:["多謝","對唔住","你好","唔"],answer:"對唔住", audio:["audio/can.thanks.mp3", "audio/can.sorry.mp3", "audio/can.nihao.mp3", "audio/can.no.mp3"]},
        3:{question:"What is 'He/She' in Cantonese?",options:["我","你","佢","我哋"],answer:"佢", audio:["audio/can.i.mp3", "audio/can.you.mp3", "audio/can.he.mp3", "audio/can.we.mp3"]},
        4:{question:"What is 'Come' in Cantonese?",options:["去","食","嚟","飲"],answer:"嚟", audio:["audio/can.go.mp3", "audio/can.eat.mp3", "audio/can.come.mp3", "audio/can.drink.mp3"]},
        5:{question:"What is 'Good' in Cantonese?",options:["壞","好","細","大"],answer:"好", audio:["audio/can.bad.mp3", "audio/can.good.mp3", "audio/can.small.mp3", "audio/can.big.mp3"]},
        6:{question:"What is 'Now' in Cantonese?",options:["今日","而家","昨日","夜晚"],answer:"而家", audio:["audio/can.today.mp3", "audio/can.now.mp3", "audio/can.yesterday.mp3", "audio/can.night.mp3"]},
        7:{question:"What is 'Friend' in Cantonese?",options:["老師","朋友","書","屋"],answer:"朋友", audio:["audio/can.teacher.mp3", "audio/can.friend.mp3", "audio/can.book.mp3", "audio/can.house.mp3"]},
        8:{question:"What is 'Go' in Cantonese?",options:["嚟","去","食","飲"],answer:"去", audio:["audio/can.come.mp3", "audio/can.go.mp3", "audio/can.eat.mp3", "audio/can.drink.mp3"]},
        9:{question:"What is 'Small' in Cantonese?",options:["大","細","好","壞"],answer:"細", audio:["audio/can.big.mp3", "audio/can.small.mp3", "audio/can.good.mp3", "audio/can.bad.mp3"]},
        10:{question:"What is 'Please' in Cantonese?",options:["請","唔","多謝","你好"],answer:"請", audio:["audio/can.please.mp3", "audio/can.no.mp3", "audio/can.thanks.mp3", "audio/can.nihao.mp3"]},
        11:{question:"What is 'Table' in Cantonese?",options:["枱","書","水","門"],answer:"枱", audio:["audio/can.table.mp3", "audio/can.book.mp3", "audio/can.water.mp3", "audio/can.door.mp3"]},
        12:{question:"What is 'We' in Cantonese?",options:["我","你","我哋","佢哋"],answer:"我哋", audio:["audio/can.i.mp3", "audio/can.you.mp3", "audio/can.we.mp3", "audio/can.they.mp3"]},
        13:{question:"What is 'See' in Cantonese?",options:["睇","食","飲","去"],answer:"睇", audio:["audio/can.see.mp3", "audio/can.eat.mp3", "audio/can.drink.mp3", "audio/can.go.mp3"]},
        14:{question:"What is 'Hot' in Cantonese?",options:["凍","熱","好","壞"],answer:"熱", audio:["audio/can.cold.mp3", "audio/can.hot.mp3", "audio/can.good.mp3", "audio/can.bad.mp3"]},
        15:{question:"What is 'Tomorrow' in Cantonese?",options:["今日","昨日","聽日","夜晚"],answer:"聽日", audio:["audio/can.today.mp3", "audio/can.yesterday.mp3", "audio/can.tomorrow.mp3", "audio/can.night.mp3"]}
},


    russian: {
        1:{question:"What is 'Water' in Russian?",options:["Дом","Вода","Книга","Телефон"],answer:"Вода", audio:["audio/house.mp3", "audio/water.mp3", "audio/book.mp3", "audio/phone.mp3"]},
        2:{question:"What is 'Hello' in Russian?",options:["Спасибо","Пока","Привет","Нет"],answer:"Привет", audio:["audio/thank you.mp3", "audio/goodbye.mp3", "audio/hello.mp3", "audio/no.mp3"]},
        3:{question:"What is 'I' in Russian?",options:["Ты","Мы","Я","Они"],answer:"Я", audio:["audio/you.mp3", "audio/we.mp3", "audio/I.mp3", "audio/they.mp3"]},
        4:{question:"What is 'Eat' in Russian?",options:["Пить","Есть","Идти","Видеть"],answer:"Есть", audio:["audio/drink.mp3", "audio/eat.mp3", "audio/go.mp3", "audio/see.mp3"]},
        5:{question:"What is 'Big' in Russian?",options:["Маленький","Большой","Плохой","Хорошо"],answer:"Большой", audio:["audio/small.mp3", "audio/big.mp3", "audio/bad.mp3", "audio/good.mp3"]},
        6:{question:"What is 'Tomorrow' in Russian?",options:["Сегодня","Вчера","Завтра","Ночь"],answer:"Завтра", audio:["audio/today.mp3", "audio/yesterday.mp3", "audio/tomorrow.mp3", "audio/night.mp3"]},
        7:{question:"What is 'Friend' in Russian?",options:["Учитель","Друг","Дом","Книга"],answer:"Друг", audio:["audio/teacher.mp3", "audio/friend.mp3", "audio/house.mp3", "audio/book.mp3"]},
        8:{question:"What is 'Drink' in Russian?",options:["Есть","Пить","Идти","Видеть"],answer:"Пить", audio:["audio/eat.mp3", "audio/drink.mp3", "audio/go.mp3", "audio/see.mp3"]},
        9:{question:"What is 'Cold' in Russian?",options:["Горячий","Холодный","Плохой","Большой"],answer:"Холодный", audio:["audio/hot.mp3", "audio/cold.mp3", "audio/bad.mp3", "audio/big.mp3"]},
        10:{question:"What is 'Goodbye' in Russian?",options:["Пока","Спасибо","Привет","Нет"],answer:"Пока", audio:["audio/goodbye.mp3", "audio/thank you.mp3", "audio/hello.mp3", "audio/no.mp3"]},
        11:{question:"What is 'House' in Russian?",options:["Книга","Телефон","Дом","Вода"],answer:"Дом", audio:["audio/book.mp3", "audio/phone.mp3", "audio/house.mp3", "audio/water.mp3"]},
        12:{question:"What is 'We' in Russian?",options:["Я","Ты","Мы","Они"],answer:"Мы", audio:["audio/I.mp3", "audio/you.mp3", "audio/we.mp3", "audio/they.mp3"]},
        13:{question:"What is 'Come' in Russian?",options:["Идти","Пить","Приходить","Есть"],answer:"Приходить", audio:["audio/go.mp3", "audio/drink.mp3", "audio/come.mp3", "audio/eat.mp3"]},
        14:{question:"What is 'Good' in Russian?",options:["Плохой","Большой","Хорошо","Маленький"],answer:"Хорошо", audio:["audio/bad.mp3", "audio/big.mp3", "audio/good.mp3", "audio/small.mp3"]},
        15:{question:"What is 'Morning' in Russian?",options:["Ночь","Утро","Сегодня","Вчера"],answer:"Утро", audio:["audio/night.mp3", "audio/morning.mp3", "audio/today.mp3", "audio/yesterday.mp3"]}
}
};



const q = questions[lang][level];

document.getElementById("question").innerText=q.question;
const answersDiv=document.getElementById("answers");
let progress = (level / 15) * 100;
document.getElementById("progress-bar").style.width = progress + "%";

q.options.forEach((option, index) =>{
    let btn=document.createElement("button");
    btn.innerText=option;

    btn.onclick = () => {
    if (q.audio && q.audio[index]){
    playSound(q.audio[index]);

    }

    if(option === q.answer){
        score = Number(score) + 1;
        localStorage.setItem("score", score);
        alert("Aura +1! 🎉");
    } else {
        alert("Aura -1! 🙁");
    }

    document.getElementById("score").innerText = "Score: " + score;

    document.querySelectorAll("#answers button").forEach(b => b.disabled = true);

    nextBtn.style.display = "block";
    };
    answersDiv.appendChild(btn);

});

function playSound(audioFile){
    let audio = new Audio(audioFile);

    audio.play();

}



nextBtn.onclick = () => {
    const clickSound = new Audio("audio/click.mp3");
    clickSound.currentTime = 0;
    clickSound.play();

    setTimeout(() =>{
    let nextLevel = Number(level) + 1;

    if(nextLevel <= 15){
    window.location.href = `quiz.html?lang=${lang}&level=${nextLevel}`;
} else {
    window.location.href = "complete.html?lang=" + lang;
}
},500);
    answersDiv.appendChild(btn);
};



function resetGame(){
    const clickSound = new Audio("audio/click.mp3");
    clickSound.currentTime = 0;
    clickSound.play();

    setTimeout(() => {
        localStorage.setItem("score", 0);
        location.reload();
    },600);   
}





