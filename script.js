const icon = document.querySelectorAll(".icon");
const category = document.querySelectorAll(".category");
const score = document.querySelectorAll(".score-num");

fetch("data.json")
  .then((data) => {
    return data.text();
  })
  .then((text) => {
    const json = JSON.parse(text);
    icon.forEach((el, i) => {
      el.src = json[i]["icon"];
    });
    category.forEach((el, i) => {
      el.innerText = json[i]["category"];
    });
    score.forEach((el, i) => {
      el.innerText = json[i]["score"];
    });
  });
