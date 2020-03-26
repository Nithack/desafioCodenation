require("./others/customPrototype");

const range = n => Array.from(Array(n).keys());

const letters = Array.from("ABCDEFGHIJKLMNOPQRSTUVWXYZ");
const numbers = range(26).map(n => n + 1);


class A1Z26 {
  constructor(separator = "-", ignoreSpaces = false) {
    this.separator = ("!@#$%^&*()_+-".includes(separator)) ? separator : "-";
    this.ignoreSpaces = ignoreSpaces;
    this.cipherDict = letters.toDict(numbers);
    this.reverseCipherDict = this.cipherDict.swapDict();
  }

  encrypt(plainText) {
    let result = "";

    for (let x of plainText) {
      if (x.isAlpha()) {
        result += this.cipherDict[x.toUpperCase()] + this.separator;
      }
      else if (x.isSpace()) {
        if (!this.ignoreSpaces) {
          result = result.substring(0, result.length - 1);
          result += " -- "
        }
      }
      else {
        if (!x.isDigit()) {
          result += x
        }
      }
    }

    if (this.ignoreSpaces) {
      result = result.replace(/\s/g, "")
    }

    return (result.endsWith(this.separator) ? result = result.substring(0, result.length - 1) : result);
  }

  decrypt(cipherText) {
    let result = "";

    for (let i of cipherText.split("--")) {
      let current = i.replace(/\s/g, "").split(this.separator);

      for (let x of current) {
        if (x.isDigit()) {
          result += this.reverseCipherDict[x];
        }
        else {
          result += x;
        }
      }

      result += " "
    }

    if (this.ignoreSpaces) {
      result = result.replace(/\s/g, "")
    }

    return result;
  }
}

module.exports = A1Z26