const calculate = (input) => {
    let result;
    try {
      const operators = ["+", "/", "-", "*", "%"];
      let operator = null;
  
    
      for (let op of operators) {
        if (input.includes(op)) {
          operator = op;
          break;
        }
      }
  
      if (!operator) throw new Error("Invalid Expression");
  
  
      const [op1, op2] = input.split(operator).map(parseFloat);
  
      
      switch (operator) {
        case "+":
          result = op1 + op2;
          break;
        case "-":
          result = op1 - op2;
          break;
        case "*":
          result = op1 * op2;
          break;
        case "/":
          result = op2 !== 0 ? op1 / op2 : "Error"; 
          break;
        case "%":
          result = op2 !== 0 ? op1 % op2 : "Error"; 
          break;
        default:
          throw new Error("Unsupported Operator");
      }
  
      return result.toString(); 
    } catch (err) {
      console.error(err.message);
      return "Error";
    }
  };
  
  export default calculate;
  