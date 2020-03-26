require("./others/customPrototype");

const Rot13 = require("./rot13");
const Rot5 = require("./rot5");

let rot13 = new Rot13();
let rot5 = new Rot5();


class Rot18 {
  constructor() {

  }

  encrypt(text) {
    let result = "";

    for (let x of text) {
      if (x.isAlpha()) {
        result += rot13.encrypt(x)
      }
      else if (x.isDigit()) {
        result += rot5.encrypt(x)
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
      if (x.isAlpha()) {
        result += rot13.decrypt(x)
      }
      else if (x.isDigit()) {
        result += rot5.decrypt(x)
      }
      else {
        result += x
      }
    }

    return result;
  }
}

module.exports = Rot18