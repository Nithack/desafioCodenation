require("./others/customPrototype");
const Caesar = require("./caesar")
let c = new Caesar(13);

class Rot13{
  encrypt(text){
    return c.encrypt(text)
  }

  decrypt(text){
    return c.decrypt(text);
  }
}

module.exports = Rot13