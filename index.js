const nicoInfo = {
  /* 중괄호를 쓴다. */
  name: "Nico",
  age: 33,
  gender: "Male",
  isHandsome: true,
  favMovies: [
    "Along the gods",
    "LOTR",
    "Oldboy"
  ] /* Object 안에 Array 넣기 가능 */,
  favFood: [
    /* Array 안에 Object 넣기 가능 */
    { name: "Kimchi", fatty: false },
    { name: "Cheese burger", fatty: true }
  ]
};
console.log(nicoInfo.gender);
nicoInfo.gender = "Female"; /* 수정 가능 */
console.log(nicoInfo.gender);
