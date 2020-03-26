require("./others/customPrototype");

const range = n => Array.from(Array(n).keys())

let letterIndex = Array.from("abcdefghijklmnopqrstuvwxyz").toDict(range(26))


let egcd = (a, b) => {
  let x = 0, y = 1, u = 1, v = 0;

  while (a != 0) {
    let q = Math.floor(b / a)
    let r = b % a;


    let m = x - u * q;
    let n = y - v * q;

    b = a;
    a = r;

    x = u;
    y = v

    u = m
    v = n
  }
  let gcd = b;
  return [gcd, x, y]
}


let modinv = (a, m) => {

  let [gcd, x, y] = egcd(a, m)
  if (gcd != 1) {
    return null
  }
  else {
    return x % m
  }
}

// finding remainder for negative num
let mod = (n, m) => {
  return ((n % m) + m) % m;
}



class Affine {
  constructor(a = 3, b = 5, maintainCase = true) {
    this.a = (a <= 0) ? 3 : a;
    this.b = b;
    this.letterIndex = letterIndex;
    this.reverseLetterIndex = this.letterIndex.swapDict();
    this.maintainCase = maintainCase;
  }

  encrypt(text) {
    let a = this.a, b = this.b;

    let result = "";

    for (let x of text.toLowerCase()) {
      if (x.isAlpha()) {
        result += this.reverseLetterIndex[String(((a * this.letterIndex[x]) + b) % 26)]
      }
      else {
        result += x
      }
    }

    return (this.maintainCase ? result.matchCase(text) : result);
  }

  decrypt(text) {
    let a = this.a, b = this.b;

    let result = "";

    for (let x of text.toLowerCase()) {
      if (x.isAlpha()) {
        let ch = mod((modinv(a, 26) * (this.letterIndex[x] - b)), 26)

        result += this.reverseLetterIndex[ch]
      }
      else {
        result += x
      }
    }
    return (this.maintainCase ? result.matchCase(text) : result);
  }
}

module.exports = Affine