const calculator = {
  // Object와 같음. (중괄호)
  plus: function(a, b) {
    return a + b; // plus라는 key값은 function(a, b)의 리턴값, 즉 a + b
  }
};
const plus = calculator.plus(5, 5);
console.log(plus);
