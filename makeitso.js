window.onload = function () {
  setBackground();
  setStatement();
}

setStatement = function(){
  statement = document.getElementById('statement');

  return statement.innerText = randomItem(window.statements);
}

setBackground = function(){
  return document.body.style.background = randomItem(window.backgrounds);
}

randomItem = function(array) {
  return array[Math.floor(Math.random() * array.length)];
}

window.statements = [
  "true",
  "believable",
  "understood",
  "important",
  "essential",
  "acessible",
  "personal",
  "universal",
  "yours",
  "accepted",
  "necessary",
  "matter",
  "reach",
  "connect",
  "click",
  "relevenat",
  "reasonable",
  "undeniable",
  "felt",
  "move",
  "persuasive",
  "authoritative",
  "direct",
  "pure",
  "pivotal",
  "certain",
  "so",
  "real",
  "revolutinary",
  "controversial",
  "rational",
  "urgent",
  "vital",
  "sing",
  "speak",
  "serious",
  "funny",
  "insightful",
  "incisive",
  "decisive",
  "loud",
  "clear",
  "known"
];

window.backgrounds = [
  "#9C8F30",
  "#69913B",
  "#8FD400",
  "#1F3730",
  "#003050",
  "#6EB4CD",
  "#007396",
  "#872434",
  "#C0143C",
  "#673BB8",
  "#612D62",
  "#F4AA00",
  "#EF8200",
  "#DF8D25",
  "#5E4F4A",
  "#6F4C23",
  "#57655F",
  "#9D986D"
];