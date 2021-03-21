# Testing Queue Implementations

Was curious about the performance of a few different queue implementation options.

## Queue Implementations

#### SplicingQueue

- store: `Array`
- index: natural
- dequeue: `splice()` method

#### DeletingQueue ([link](https://dmitripavlutin.com/javascript-queue/))

- store: `Object`
- index: manual
- dequeue: `delete o[index]`

#### UndefinedQueue

- store: `Object`
- index: manual
- dequeue: `o[index] = undefined`

#### MapQueue

- store: `Map`
- index: manual
- dequeue: `m.delete(index)`

#### MapUndefQueue

- store: `Map`
- index: manual
- dequeue: `m.set(index, undefined)`

<br />

## Results

| Implementation     | 10000    | 100000   |
| ------------------ | -------- | -------- |
| SplicingQueue      | 10.07    | 3,054.83 |
| DeletingQueue      | 5.78     | 13.26    |
| **UndefinedQueue** | **5.28** | **9.25** |
| MapQueue           | 6.72     | 19.55    |
| MapUndefQueue      | 6.67     | 17.27    |

<br />

#### System

- CPU: Ryzen R9 3950X
- RAM: 32GB DDR4 @ 3200mhz
- Windows Desktop with misc background applications.

#### Environment

- WSL2 (Windows 10)
- Ubuntu 20.04 LTS
- Node 14.16.0

<br />

### Raw

```
❯ node test UndefinedQueue 10000 \
  && node test UndefinedQueue 10000 \
  && node test UndefinedQueue 10000 \
  && node test UndefinedQueue 100000 \
  && node test UndefinedQueue 100000 \
  && node test UndefinedQueue 100000 \
  && node test DeletingQueue 10000 \
  && node test DeletingQueue 10000 \
  && node test DeletingQueue 10000 \
  && node test DeletingQueue 100000 \
  && node test DeletingQueue 100000 \
  && node test DeletingQueue 100000 \
  && node test MapUndefQueue 10000 \
  && node test MapUndefQueue 10000 \
  && node test MapUndefQueue 10000 \
  && node test MapUndefQueue 100000 \
  && node test MapUndefQueue 100000 \
  && node test MapUndefQueue 100000 \
  && node test MapQueue 10000 \
  && node test MapQueue 10000 \
  && node test MapQueue 10000 \
  && node test MapQueue 100000 \
  && node test MapQueue 100000 \
  && node test MapQueue 100000 \
  && node test SplicingQueue 10000 \
  && node test SplicingQueue 10000 \
  && node test SplicingQueue 10000 \
  && node test SplicingQueue 100000 \
  && node test SplicingQueue 100000 \
  && node test SplicingQueue 100000

Starting UndefinedQueue 10000
    0s 5.3198ms

Starting UndefinedQueue 10000
    0s 5.2588ms

Starting UndefinedQueue 10000
    0s 5.2547ms

Starting UndefinedQueue 100000
    0s 9.3543ms

Starting UndefinedQueue 100000
    0s 9.1768ms

Starting UndefinedQueue 100000
    0s 9.2075ms

Starting DeletingQueue 10000
    0s 5.8258ms

Starting DeletingQueue 10000
    0s 5.8019ms

Starting DeletingQueue 10000
    0s 5.6946ms

Starting DeletingQueue 100000
    0s 13.1500ms

Starting DeletingQueue 100000
    0s 13.3311ms

Starting DeletingQueue 100000
    0s 13.2906ms

Starting MapUndefQueue 10000
    0s 6.6675ms

Starting MapUndefQueue 10000
    0s 6.8331ms

Starting MapUndefQueue 10000
    0s 6.5056ms

Starting MapUndefQueue 100000
    0s 18.1364ms

Starting MapUndefQueue 100000
    0s 16.8714ms

Starting MapUndefQueue 100000
    0s 16.8159ms

Starting MapQueue 10000
    0s 6.6567ms

Starting MapQueue 10000
    0s 6.7161ms

Starting MapQueue 10000
    0s 6.7881ms

Starting MapQueue 100000
    0s 20.0687ms

Starting MapQueue 100000
    0s 19.3000ms

Starting MapQueue 100000
    0s 19.2826ms

Starting SplicingQueue 10000
    0s 10.0839ms

Starting SplicingQueue 10000
    0s 10.0796ms

Starting SplicingQueue 10000
    0s 10.0315ms

Starting SplicingQueue 100000
    3s 51.1512ms

Starting SplicingQueue 100000
    3s 60.5138ms

Starting SplicingQueue 100000
    3s 52.8187ms
```

## Licenses

[ISC](https://www.isc.org/licenses/) license.

Copyright © 2021, Dmitri Pavlutin<br/>
Copyright © 2021, Michael J. Ryan

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted, provided that the above
copyright notice and this permission notice appear in all copies.

THE SOFTWARE IS PROVIDED “AS IS” AND ISC DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL ISC BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING
FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT,
NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH
THE USE OR PERFORMANCE OF THIS SOFTWARE.
