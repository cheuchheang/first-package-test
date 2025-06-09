# times-table

A simple and reusable multiplication table generator for JavaScript and Node.js.

## 📦 Installation

``
npm install times-table``

## 🔧 Usage

```bash
const generateMultiplicationTable = require('simple-times-table');

console.log(generateMultiplicationTable(5, 12));
/*
[
  '5 × 1 = 5',
  '5 × 2 = 10',
  ...
  '5 × 12 = 60'
]
*/
```

## 🧠 API
generateMultiplicationTable(base: number, limit?: number): string[]
base — Number you want the multiplication table of (e.g., 5)

limit (optional) — How far to go (default: 10)

## 💡 Example
 
 ```bash
 generateMultiplicationTable(2);
// [
//   '2 × 1 = 2',
//   '2 × 2 = 4',
//   ...
//   '2 × 10 = 20'
// ]
```
