const clockContainer = document.querySelector(".js-clock"),
  clockTitle = clockContainer.querySelector("h1");
function getTime() {
  const date = new Date();
  const minutes = date.getMinutes();
  const hours = date.getHours();
  const seconds = date.getSeconds();
  clockTitle.innerText = `${hours < 10 ? `0${hours}` : hours}:${
    minutes < 10 ? `0${minutes}` : minutes
  }:${seconds < 10 ? `0${seconds}` : seconds}`;
  // 삼항 연산자.
  // hour가 10보다 작으면 0을 붙이고, 아니면 그냥 hours만 출력하는 것처럼..
}
function init() {
  getTime();
  setInterval(getTime, 1000);
}
init();
