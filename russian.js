function goNext() {
  const sound = document.getElementById('clickSound');
  sound.currentTime = 0;
  sound.play();

  setTimeout(() => {
    window.location.href = 'Rflashcard.html';
  }, 300);
}