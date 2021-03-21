"use strict";

module.exports = class Queue {
  constructor() {
    this._items = [];
  }

  enqueue(item) {
    this._items.push(item);
  }

  dequeue() {
    return this._items.splice(0, 1)?.[0];
  }

  peek() {
    // O(1)
    return this._items[0];
  }

  get length() {
    // O(n)
    return this._items.length;
  }
};
