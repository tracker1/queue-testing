"use strict";

module.exports = class Queue {
  constructor() {
    this.items = new Map();
    this.headIndex = 0;
    this.tailIndex = 0;
  }

  enqueue(item) {
    this.items.set(this.tailIndex, item);
    this.tailIndex++;
  }

  dequeue() {
    const item = this.items.get(this.headIndex);
    this.items.set(this.headIndex, undefined);
    this.headIndex++;
    return item;
  }

  peek() {
    return this.items.get(this.headIndex);
  }

  get length() {
    return this.tailIndex - this.headIndex;
  }
};
