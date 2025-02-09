const add = (code, index) => {
  const [operand1, operand2, result] = code.slice(index + 1, index + 4);
  code[result] = code[operand1] + code[operand2];

  return sprint(code, index + 4);
};

const subtract = (code, index) => {
  const [operand1, operand2, result] = code.slice(index + 1, index + 4);
  code[result] = code[operand1] - code[operand2];

  return sprint(code, index + 4);
};

const multiply = (code, index) => {
  const [operand1, operand2, result] = code.slice(index + 1, index + 4);
  code[result] = code[operand1] * code[operand2];

  return sprint(code, index + 4);
};

const moveBy = (code, index) => {
  const [destination] = code.slice(index + 1, index + 2);
  console.log(destination);

  return sprint(code, destination);
};

const copy = (code, index) => {
  const [source, destination] = code.slice(index + 1, index + 3);
  code[destination] = code[source];

  return sprint(code, index + 3);
};

const areEqual = (code, index) => {
  const [operand1, operand2, destination] = code.slice(index + 1, index + 4);

  return code[operand1] === code[operand2]
    ? sprint(code, destination)
    : sprint(code, index + 4);
};

const lessThan = (code, index) => {
  const [operand1, operand2, destination] = code.slice(index + 1, index + 4);

  return code[operand1] < code[operand2]
    ? sprint(code, destination)
    : sprint(code, index + 4);
};

const halt = (code) => {
  console.log("Halting execution");
  return code;
};

const sprint = (code, index) => {
  const operations = {
    1: add,
    2: subtract,
    3: moveBy,
    4: areEqual,
    5: lessThan,
    7: copy,
    9: halt,
  };
  console.log(code[index]);

  const opcode = code[index];
  const operation = operations[opcode];

  if (operation) {
    return operation(code, index);
  } else {
    return `Invalid opcode at position ${index}`;
  }
};

const main = () => {
  const input = [, 3, 3, 1, 4, 4, 1, 7, 1, 2, 9];
  return sprint(input, 1);
};

console.log(main());
