/**
 * Usage:
 *   node test QUEUENAME ITERATIONS
 *
 * ex:
 *   node test DeletingQueue 100000 && node test UndefinedQueue 100000
 *
 * os.freemem() - was trying to determine memory usage, but the results
 * vary too wildly to be worth recording.
 */
"use strict";

const assert = require("assert");
// const os = require("os");

const formatNum = (n) =>
  n.toString().replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ",");

function runTest(name, Queue, iterations) {
  console.log(`\nStarting ${name} ${iterations}`);
  // global.gc?.();
  // const m1 = os.freemem();
  const start = process.hrtime();
  const q = new Queue();
  for (var i = 0; i < iterations; i++) {
    q.enqueue(i);
  }
  // const m2 = os.freemem();
  for (var i = 0; i < iterations; i++) {
    assert.strictEqual(q.peek(), i);
    assert.strictEqual(q.dequeue(), i);
  }
  const end = process.hrtime(start);
  // global.gc?.();
  // const m3 = os.freemem();
  console.log(`    ${end[0]}s ${(end[1] / 1000000).toFixed(4)}ms`);
  // console.log(`    peak : ${formatNum(m1 - m2)}`);
  // console.log(`    after: ${formatNum(m1 - m3)}`);
  // console.log(`    freed: ${formatNum(m3 - m2)}`);
}

(function (_, __, name, iterations) {
  const Queue = require(`./${name}.js`);
  runTest(name, Queue, ~~iterations);
})(...process.argv);
