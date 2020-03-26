require("./others/customPrototype");

const key = 47;

class Rot47 {

  encrypt(text) {
    let result = "";

    for (let x of text) {
      if (x.isAlpha() || x.isDigit() || x.isPunctuation()) {
        let char = x.charCodeAt() + key;

        if (x.charCodeAt() == 32) {
          result += " "
        }
        else if (char > 126) {
          result += String.fromCharCode(char - 94);
        }
        else {
          result += String.fromCharCode(char)
        }
      }
      else {
        result += x
      }
    }

    return result;
  }

  decrypt(text) {
    let result = "";

    for (let x of text) {
      if (x.isAlpha() || x.isDigit() || x.isPunctuation()) {
        let char = x.charCodeAt() - key;

        if (x.charCodeAt() == 32) {
          result += " "
        }
        else if (char < 32) {
          result += String.fromCharCode(char + 94);
        }
        else {
          result += String.fromCharCode(char)
        }
      }
      else {
        result += x
      }
    }

    return result;
  }

}

module.exports = Rot47