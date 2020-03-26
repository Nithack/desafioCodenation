require("./others/customPrototype");

const range = n => Array.from(Array(n).keys());



const alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";


const generateDict = (keyword) => {
  let result = {}
  let letters = alphabet + range(10).join("")

  keyword = keyword.removeDuplicate();
  letters = letters.replaceStringDuplicate(keyword);

  let keyAlphabet = keyword + letters;
  let alphaValues = Array.from("ABCDEFGHIJKLMNOPQRSTUVWXYZ");

  for (let x of alphaValues) {
    let char = keyAlphabet[0]
    result[x] = [char]
    keyAlphabet = keyAlphabet.replace(char, "");
  }

  while (keyAlphabet != "") {
    let rangeLen = Math.floor(Math.random() * 3) + 1;

    if (rangeLen >= keyAlphabet.length) {
      rangeLen = keyAlphabet.length;
    }

    let dictChar = alphaValues[Math.floor(Math.random() * alphaValues.length)]

    let selected = result[dictChar];

    if (selected.length < 3) {
      for (let _ of range(rangeLen)) {
        selected.push(keyAlphabet[0]);
        result[dictChar] = selected;
        keyAlphabet = keyAlphabet.replace(keyAlphabet[0], "")
      }
    }
  }

  return result;
}





class Homophonic {
  constructor(keyword = "keyword") {
    this.keyword = keyword.toUpperCase().replace(" ", "");
    this.cipherDict = generateDict(this.keyword);
    this.reverseCipherDict = this.cipherDict.swapDict();
  }

  encrypt(plaintext) {
    let result = "";

    for (let x of plaintext) {
      if (x.isAlpha()) {
        let selected = this.cipherDict[x.toUpperCase()]
        result += selected[Math.floor(Math.random() * selected.length)]
      }
      else {
        if (!x.isDigit()) {
          result += x
        }
      }
    }

    return result
  }

  decrypt(cipherText) {
    let result = "";

    let dictKeys = Object.keys(this.reverseCipherDict);

    for (let x of cipherText) {

      if (x.isAlpha() || x.isDigit()) {
        for (let char of dictKeys) {
          if (char.includes(x)) {
            result += this.reverseCipherDict[char]
          }
        }
      }
      else {
        result += x;
      }
    }

    return result;
  }
}


module.exports = Homophonic