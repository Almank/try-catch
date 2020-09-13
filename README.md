<h1 align="center" style="border-bottom: none;">@almank/try-catch</h1>
<h3 align="center">Try/Catch made simple</h3>

<p align="center">
  <a href="#install">Install</a> •
  <a href="#overview">Overview</a> •
  <a href="#usage">Usage</a> •
  <a href="#development">Development</a>
</p>

**@almank/try-catch** provides helpers to try catch your functions and promises.

## Install

Using npm

```
npm install trycatch-wrapper
```

Using yarn

```
yarn add trycatch-wrapper
```

## Overview
```js
import { tryCatch, tryCatchPromise } from "@almank/try-catch";

const [result, error] = tryCatch(method, ...args);

const [result, error] = await tryCatchPromise(method, ...args);
```

## Usage 

### tryCatch

```js
import { tryCatch } from "@almank/try-catch";

const someFunction = name => {
  if (name === "Christoffer") {
    throw new Error("Oh no!");
  }

  return name;
};

const [result, error] = tryCatch(someFunction, "Christoffer");

console.log(result); // null
console.log(error); // "Error: Oh no!"

const [result, error] = tryCatch(someFunction, "Mathias");

console.log(result); // "Mathias"
console.log(error); // null
```

### tryCatchPromise

```js
import { tryCatchPromise } from "@almank/try-catch";

const getResult = fail =>
  new Promise((resolve, reject) => {
    setTimeout(() => {
        if (fail) {
            reject(Error("Failed"));
        }
      resolve("results arrived");
    }, 1000);
  });


const someFunction = async () => {
  const [result, error] = await tryCatchPromise(getResult);

  console.log(result); // "results arrived"
  console.log(error); // null

  const [result, error] = await tryCatchPromise(getResult, true);

  console.log(result); // null
  console.log(error); // Error: Failed
};
```


## Development

Installing dependencies

```
npm i
```

Running tests

```
npm test
```
