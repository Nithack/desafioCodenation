require("./others/customPrototype");

const range = n => Array.from(Array(n).keys())

let cipherDict = {
  'A': 'aaaaa',
  'B': 'aaaab',
  'C': 'aaaba',
  'D': 'aaabb',
  'E': 'aabaa',
  'F': 'aabab',
  'G': 'aabba',
  'H': 'aabbb',
  'I': 'abaaa',
  'J': 'abaab',
  'K': 'ababa',
  'L': 'ababb',
  'M': 'abbaa',
  'N': 'abbab',
  'O': 'abbba',
  'P': 'abbbb',
  'Q': 'baaaa',
  'R': 'baaab',
  'S': 'baaba',
  'T': 'baabb',
  'U': 'babaa',
  'V': 'babab',
  'W': 'babba',
  'X': 'babbb',
  'Y': 'bbaaa',
  'Z': 'bbaab'
}


class Baconian {
  constructor() {
    this.cipherDict = cipherDict
    this.reverseCipherDict = this.cipherDict.swapDict();
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
    return result
  }

  decrypt(text) {
    let result = "";

    for (let word of text.replace(/[^\w\s]|[0-9]/g, "").split(" ")) {
      if (!word.isAlpha()) {
        result += word
      }
      else {
        for (let i of range(word.length / 5)) {
          result += this.reverseCipherDict[word.substring(i * 5, (i + 1) * 5)]
        }
      }
      result += " "
    }
    return result
  }
}

module.exports = Baconian