export const calculator = (expression) => {
  if (typeof expression !== "string") {
    throw new Error("Expression must be a string");
  }

  function applyOperation(op, a, b) {
    switch (op) {
      case "+":
        return a + b;
      case "-":
        return a - b;
      case "*":
        return a * b;
      case "/":
        return a / b;
      default:
        throw new Error("unsupported operator" + op);
    }
  }

  const tokens = expression.split(" ").filter((token) => token.length > 0);
  const stack = [];
  console.log(tokens, "tokens");

  for (let i = tokens.length - 1; i >= 0; i--) {
    const token = tokens[i];
    if (token == "+" || token == "*" || token == "/" || token == "-") {
      const a = stack.pop();
      const b = stack.pop();

      stack.push(applyOperation(token, a, b));
    } else {
      stack.push(parseFloat(token));
    }
   
  }

  return stack[0];
  
};
