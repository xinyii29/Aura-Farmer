function goToNextPage(pageName) {
  const sound = document.getElementById('clickSound');
  sound.currentTime = 0;
  sound.play();

  setTimeout(() => {
    window.location.href = pageName; 
  }, 300);
}

function startQuiz(){
    sessionStorage.setItem("quizScore", 0);
    window.location.href = "testlanguage.html";
}

