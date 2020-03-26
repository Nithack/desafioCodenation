require("./others/customPrototype")

const alphabet = "abcdefghijklmnopqrstuvwxyz".toUpperCase();

const letters = Array.from(alphabet).toDict(Array.from(alphabet).reverse())

class Atbash {
  constructor(maintainCase = true) {
    this.cipherDict = letters;
    this.reverseDict = this.cipherDict.swapDict();
    this.maintainCase = maintainCase;
  }

  encrypt(text) {
    let result = "";

    for (let x of text.toUpperCase()) {
      if (x.isAlpha()) {
        result += this.cipherDict[x]
      }
      else {
        result += x
      }
    }

    return ((this.maintainCase) ? result.matchCase(text) : result)
  }

  decrypt(text) {
    let result = "";

    for (let x of text.toUpperCase()) {
      if (x.isAlpha()) {
        result += this.reverseDict[x]
      }
      else {
        result += x
      }
    }

    return ((this.maintainCase) ? result.matchCase(text) : result)
  }
}

module.exports = Atbash