const input = [99, 1098, 1, 0, 2, 1, 100, 105, 1098, 9];
const functionDefinitions = [];
const functionsInfo = {
  1098: { start: 0, end: 6, reference: input.slice(2, 6) },
};

const compile = (code, ip) => {
  if (code[ip] === 99) {
    const functionEnd = code.indexOf(100) + 1;
    const functionBody = code.slice(ip, functionEnd);
    functionDefinitions.push(functionBody);
    return compile(code, functionEnd);
  }

  if (code[ip] === 9) {
    return true;
  }

  return compile(code, ip + 1);
};

const add = (code, ip) => {
  const [o1, o2, res] = code.slice(ip + 1, ip + 4);
  console.log(o1, o2, res);
  code[res] = code[o1] + code[o2];
  console.log(code[o1], code[o2], code[res], code);
};

const functionStart = (code, ip) => {
  const updatedIp = functionsInfo[code[ip + 1]]["end"];

  return execute(code, updatedIp + 1);
};

const functionCall = (code, ip) => {
  const funBody = functionsInfo[code[ip + 1]]["reference"];
  execute(funBody, 0);
  return execute(code, ip + 2);
};

const halt = (code) => {
  // console.log(code);
  return code;
};

const operations = {
  1: add,
  99: functionStart,
  105: functionCall,
  9: halt,
};

const execute = (code, ip) => {
  return operations[code[ip]](code, ip);
};

const sprint = (code, ip) => {
  const isValid = compile(code, ip);
  console.log(isValid);

  if (isValid) {
    return execute(code, ip);
  }
};

const main = () => {
  return sprint(input, 0);
};

console.log(main());
