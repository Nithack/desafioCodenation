require("./others/customPrototype")


class Caesar {
  constructor(shiftNum = 2) {
    this.shiftNum = (shiftNum <= 0 || shiftNum > 26) ? 1 : shiftNum;
  }

  encrypt(text) {
    if (!text) throw new Error("Text parameters is Required!");

    let shiftNum = this.shiftNum;
    let result = "";
    for (let x of text) {
      if (x.isLower()) {
        result += String.fromCharCode((x.charCodeAt() + shiftNum - 97) % 26 + 97);
      } else if (x.isUpper()) {
        result += String.fromCharCode((x.charCodeAt() + shiftNum - 65) % 26 + 65);
      } else {
        result += x
      }
    }
    return result;
  }

  decrypt(cipherText) {
    if (!cipherText) throw new Error("cipherText parameters is Required!");

    let shiftNum = this.shiftNum;
    let result = "";
    for (let x of cipherText) {
      if (x.isLower()) {
        let char = ((x.charCodeAt() - shiftNum - 97).negativeMod(26)) + 97;

        result += String.fromCharCode(char);
      } else if (x.isUpper()) {
        let char = ((x.charCodeAt() - shiftNum - 65).negativeMod(26)) + 65;

        result += String.fromCharCode(char)
      } else {
        result += x
      }
    }
    return result;
  }
}


module.exports = Caesar