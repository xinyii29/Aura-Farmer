function goNext() {
  const sound = document.getElementById('clickSound');
  sound.currentTime = 0;
  sound.play();

  setTimeout(() => {
    window.location.href = 'Canflashcard.html';
  }, 300);
}