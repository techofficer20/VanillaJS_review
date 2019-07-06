/* const title = document.getElementById("title"); */
const title = document.querySelector("#title"); // querySelector: 노드의 첫 번째 자식을 반환.
title.innerHTML = "Hi! From JS";
title.style.color = "red";
document.title = "I own you now";
/* console.dir(title); */
/* 주의 사항 */
/* DOM은 단순한 값 대입이 아니다. C언어로 치면 포인터와 비슷하다고 생각하면 된다. (개인적인 생각으론) 
ex) title.style.color = "red"를 쓰면, title이라는 상수에 적용이 된다기보다는
html에서 id가 title이었던 것에 있던 color가 red로 바뀌는 거로 생각.
*/
