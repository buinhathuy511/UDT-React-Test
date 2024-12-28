# Explains Typescript compile workflow

### Step 1: Start

- Install Typescript

```bash
npm install -g typescript
```

- Initialize Typescript in the project

```bash
tsc --init
```

### Step 2: Create a Typescript file

- Create a `.ts` file and write your code, example `test.ts` file:

```js
const sum = (number1: number, number2: number) => {
  return number1 + number2;
};
console.log(sum(1, 2));
```

### Step 3 : Compile the Typescript code

- Open command line in the folder containing your `.ts` file. Run:

```bash
tsc test.ts
```

- When run this command, this process will convert Typescript code into Javascript code compatible with browser or Node.js. Result:

  + `test.ts` file:

```js
const test = (name: string) => {
  return `Hello ${name}!`;
};
console.log(test("world"));
```

  + `test.js` file:

```js
var sum = function (number1, number2) {
  return number1 + number2;
};
console.log(sum(1, 2));
```

### Step 4: Run the Javascript code

- You can run a Javascript file `test.js` using a web browser or Node.Js. Result:

```js
3
```
