require("./others/customPrototype");

const range = n => Array.from(Array(n).keys());

const letters = Array.from("abcdefghijklmnopqrstuvwxyz".toUpperCase());
const numbers = range(26).map(n => n + 1);

const cipherDict = letters.toDict(numbers)


class LatinAlphabet {
  constructor(removeSpace = false) {
    this.cipherDict = cipherDict;
    this.removeSpace = removeSpace
  }

  encrypt(text) {
    let result = "";

    for (let x of text.toUpperCase().replace(/[0-9]/g, "")) {
      if (x.isAlpha()) {
        result += this.cipherDict[x].toString() + " "
      } else if (x.isSpace()) {
        result += (this.removeSpace) ? "" : "-- "
      } else {
        result += x + " "
      }
    }
    return result;
  }

  decrypt(text) {
    let dict = this.cipherDict.swapDict();
    let result = "";

    for (let x of text.split(" ")) {
      if (x == "--") {
        result += " "
      }
      else if (x.isDigit()) {
        result += dict[parseInt(x)]
      }
      else {
        result += x
      }
    }
    return result
  }
}

module.exports = LatinAlphabet