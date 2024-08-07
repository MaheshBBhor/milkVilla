export const calculator1 = (exp) => {
  const tokens = exp.split(" ").filter((token) => {
    return token.length > 0;
  });

  const stack = [];
  for (let i = tokens.length - 1; i >= 0; i--) {
    const token = tokens[i];
    if (["*", "+", "-", "/"].includes(token)) {
      const a = stack.pop();
      const b = stack.pop();
      let result;
      switch (token) {
        case "*":
          result = a * b;
          break;
        case "/":
          result = a / b;
          break;
        case "-":
          result = a - b;
          break;
        case "+":
          result = a + b;
          break;
        default:
          result = "unsupported operator";
          break;
      }
      stack.push(result);
    } else {
      stack.push(parseFloat(token));
    }
  }

  return stack[0];
};
console.log(calculator1("* + 2 3  10"), "abcd");
