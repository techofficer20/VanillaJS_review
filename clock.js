const clockContainer = document.querySelector(".js-clock"),
  clockTitle = clockContainer.querySelector("h1");
function init() {
  /* 시간 설정 방법
  const date = new Date();
  new Date(); ==> 시간 정보 가져옴
  const minutes = date.getMinutes();
  const hours = date.getHours();
  */
  clockTitle.innerText = `${hours}:${minutes}`;
}
init();
