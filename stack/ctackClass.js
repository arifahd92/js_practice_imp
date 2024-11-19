/** @format */

class Stack {
  constructor() {
    this.item = [];
  }
  push(item) {
    return this.item.push(item);
  }
  pop() {
    return this.item.pop();
  }
  peek() {
    return this.item.at(-1);
  }
  isEmpty() {
    return this.item.length === 0;
  }
}
module.exports = { Stack };
