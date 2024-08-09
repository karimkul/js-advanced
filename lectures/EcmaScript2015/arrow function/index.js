// Simple Functions

function add1(a, b) {
    return a + b;
}

// Arrow Functions

// Explicit Return
const add2 = (a, b) => {
    return a + b;
};

// Implicit Return
const add3 = (a, b) => a + b;

// Variations

// No Parameters: Use empty parentheses ().
const sayHello = () => "hello";

// Single Parameter: Parentheses around the parameter can be omitted.
const sayHello2 = (x) => x * x;

// Conclusion
// Arrow functions in JavaScript offer a concise syntax that can streamline your code, especially for simple, one-expression functions. With the support of both explicit and implicit returns, they provide flexibility in defining the function's body. By understanding how to convert traditional function expressions into arrow functions, developers can choose the most fitting approach for their code, improving readability and maintainability.

// Please note that this explanation has been focused solely on the syntax and functionality of arrow functions and simple functions, excluding aspects such as lexical scope.
