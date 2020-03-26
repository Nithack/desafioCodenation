require("./others/customPrototype");

const letters = Array.from("ABCDEFGHIJKLMNOPQRSTUVWXYZ");
const values = Array.from("52-†81346,709*‡.$();?¶]¢:[");


class GoldBug {
  constructor() {
    this.cipherDict = letters.toDict(values);
    this.reverseCipherDict = this.cipherDict.swapDict();
  }

  encrypt(plainText) {
    let result = "";

    for (let x of plainText) {
      if (x.isAlpha()) {
        result += this.cipherDict[x.toUpperCase()];
      }
      else {
        if (x.isSpace()) {
          result += " ";
        }
      }
    }

    return result;
  }

  decrypt(cipherText) {
    let result = "";

    for (let x of cipherText) {
      if (x == " ") {
        result += " ";
      }
      else {
        result += this.reverseCipherDict[(x).toString()]
      }
    }

    return result;
  }
}

module.exports = GoldBug