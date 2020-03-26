require("./others/customPrototype");

class Reverse{
  encrypt(text){
    return text.reverse();
  }

  decrypt(text){
    return text.reverse();
  }
}

module.exports = Reverse