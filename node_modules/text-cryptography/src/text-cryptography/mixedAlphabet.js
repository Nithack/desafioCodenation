require("./others/customPrototype")

let cipherDict = (keyword) => {
  let alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  keyword = keyword.removeDuplicate();

  alphabet = alphabet.replaceStringDuplicate(keyword);
  
  let keyAlphabet = keyword.toUpperCase() + alphabet
  let dict = Array.from("ABCDEFGHIJKLMNOPQRSTUVWXYZ").toDict(Array.from(keyAlphabet))

  return dict
}


class MixedAlphabet{
  constructor(keyword, maintainCase=true){
    this.keyword = keyword
    this.cipherDict = cipherDict(keyword)
    this.maintainCase = maintainCase
  }

  encrypt(text){
    if(!text) throw new Error("Text parameters is Required!");

    let dict = this.cipherDict

    let result = "";
    for(let x of text){
      if(x.isAlpha()){
        result += dict[x.toUpperCase()]
      }else{
        result += x
      }
    }

    return (this.maintainCase ? result.matchCase(text) : result)
  }


  decrypt(cipherText){
    if(!cipherText) throw new Error("cipherText parameters is Required!");

    let dict = this.cipherDict.swapDict();

    let result = "";
    for(let x of cipherText){
      if(x.isAlpha()){
        result += dict[x.toUpperCase()]
      }else{
        result += x
      }
    }

    return (this.maintainCase ? result.matchCase(cipherText) : result)
  }
}


module.exports = MixedAlphabet