module.exports = function check(str, bracketsConfig) {
  const brackets = new Map();
  bracketsConfig.map(b => brackets.set(b[0], b[1]));
  const stack = [];

  for (let i = 0; i < str.length; i++){
    const c = str.charAt(i);
    if (brackets.has(c)) {
      if (c === brackets.get(c) && stack.length > 0) {
        const t = stack.pop();
        if (t !== c) {
          stack.push(t);
          stack.push(c);
        }
      } else {
        stack.push(c);
      }
    } else {
      if (stack.length === 0 || c !== brackets.get(stack.pop())) {
        return false;
      }
    }
  }
  return stack.length === 0 ? true : false;
}
