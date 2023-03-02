const operations = {
  "+": (a, b) => a + b,
  "-": (a, b) => a - b,
  "/": (a, b) => a / b,
  "*": (a, b) => a * b,
};
function operator(props) {
  
  const [a, op, b] = props.split(/([+]|[-]|[/]|[*])/);
  const num1 = Number(a);
  const num2 = Number(b);
  const result = operations[op]?.(num1, num2) ?? "invalid operation";
  return result.toString();
}
export default operator;
