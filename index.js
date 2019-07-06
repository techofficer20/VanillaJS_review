const title = document.querySelector("#title");
const CLICK_CLASS = "clicked";

function handleClick() {
  /* const currentColor = title.style.color;
  if (currentColor === BASE_COLOR) {
    // If the color is same as the initial one
    title.style.color = OTHER_COLOR;
  } else {
    // If the color has changed,
    // we make it into the initial one again
    title.style.color = BASE_COLOR;
  }
  toggle은 이것을 요약.. */
  title.classList.toggle(CLICK_CLASS);
}

function init() {
  title.addEventListener("click", handleClick);
}
init();
