# Text Cryptography
Encrypt and Decrypt text using classical ciphers. 
## Install
npm 
```
npm i text-cryptography
```
yarn
```
yarn add text-cryptography
```

## Table of Contents
  - [Quick Start](#quick-start)
  - [List of Current Ciphers](#ciphers-list)
  - [Docs](#docs)
  - [Examples](#examples)

## Quick Start
> Quick example using Affine cipher
- Affine takes two keys(a and b)
-- a:- (0-5)odd number only 
--b:- Between 0-25
--maintainCase(optional boolean): Default true
```js
const crypto = require("text-cryptography");

let affine =  new crypto.Affine(3,  5);

let en = affine.encrypt("Hold the Door 12!!!");
let de = affine.decrypt(en)

console.log(en)
console.log(de)
```
> <b>Encryption text</b>:- Avmo kar Ovve 12!!!
> <b>Decryption text</b>:- Hold the Door 12!!!


## Current Ciphers <a name="ciphers-list"></a>
Total Ciphers: 17

- A1Z26
- Affine
- Atbase
- Baconian
- Caesar
- GoldBug
- Homophonic
- Latin Alphabet
- Mixed Alphabet
- Polybius Square
- Prime Numbers
- Rail Fence
- Reverse
- Rot 5
- Rot 13
- Rot 18
- Rot 47
- Vigenere


## [Docs](https://github.com/Badvillain01/Text-Cryptography/tree/master/docs)<a name="docs">

## [Examples](https://github.com/Badvillain01/Text-Cryptography/tree/master/examples)<a name="examples">