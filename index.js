const something = "Something";

const daysOfWeek = [
  /* 대괄호 사용 */
  /* carmel case = 변수명 사이에 공백이 있어야 했던 것들은
다음 문자를 대문자로 변경하는 것으로 대체 */
  "Mon",
  "Tue",
  "Wed",
  "Thu",
  "Fri",
  "Sat",
  "Sun",
  54 /* 정수형, boolean 값 있어도 상관 X */,
  true,
  "stuff",
  "lalala"
];

console.log(daysOfWeek[4]); /* 0부터 시작하므로 Sat 출력됨. */
