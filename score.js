function getScore() {
  return Number(sessionStorage.getItem("auraScore")) || 0;
}

function addScore(amount) {
  const newScore = getScore() + amount;
  sessionStorage.setItem("auraScore", newScore);
  return newScore;
}
