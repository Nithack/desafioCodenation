require("./others/customPrototype");

class Rot5{
  encrypt(digits){
    let result = "";

    for(let x of digits){
      
      if(x.isDigit()){
        let n = (parseInt(x) + 5).toString();
        let num = (n.length == 2) ? Array.from(n)[1] : n;
        result += num;
      }else{
        result += x;
      }
    }
    return result;
  }

  decrypt(cipherText){
    let result = "";

    for(let x of cipherText){
      if(x.isDigit()){
        let int = parseInt(x);
        if(int <= 4){
          result += (int + 5).toString()
        }else{
          result += (int - 5).toString()
        }
      }else{
        result += x
      }
    }
    return result;
  }
}


module.exports = Rot5