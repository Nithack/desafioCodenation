require("./others/customPrototype");

const range = n => Array.from(Array(n).keys())

//generate vigenere table
let generateTable = () => {
  let table = []
  for(let _ in range(24)){
    table.push([])
  }

  for(let row of range(26)){
    for(let col of range(26)){

      if(((row + 65) + col) > 90){
        let char = (row + 65) + col - 26
        table[row].push(String.fromCharCode(char))
      }
      else{
        let char = (row + 65) + col
        table[row].push(String.fromCharCode(char))
      }
    }
  }
  return table
}


//mapped key and text
let generateKey = (key, text) => {
  key = key.toUpperCase();
  text = text.toUpperCase();
  let result = ""

  let j = 0;
  for(let x of range(text.length)){
    if(text[x].isSpace()){
      result += " "
    }
    else if(j < key.length){
      result += key[j]
      j += 1
    }
    else{
      if(!text[x].isAlpha()){
        result += text[x]
      }else{
        j = 0;
        result += key[j]
        j += 1
      }
    }
  }
  return result
}




class Vigenere{
  constructor(keyword, maintainCase=true){
    this.keyword = keyword;
    this.table = generateTable();
    this.maintainCase = maintainCase;
  }

  encrypt(text){
    let key = generateKey(this.keyword, text);
    let table = this.table;
    let textToCipher = text.toUpperCase();

    let result = "";
    for(let x of range(textToCipher.length)){
      if(textToCipher[x].isAlpha()){
        let row = textToCipher[x].charCodeAt() - 65;
        let col = key[x].charCodeAt() - 65;

        result += table[row][col]
      }
      else{
        result += textToCipher[x]
      }
    }
    return (this.maintainCase ? result.matchCase(text) : result)
  }

  decrypt(text){
    let key = generateKey(this.keyword, text);
    
    let cipherText = text.toUpperCase();
    let result = "";

    for(let x of range(cipherText.length)){
      if(cipherText[x].isAlpha()){
        let ch = (cipherText[x].charCodeAt() - key[x].charCodeAt() + 26) % 26 + 65;
        result += String.fromCharCode(ch)
      }
      else{
        result += cipherText[x]
      }
    }

    return (this.maintainCase ? result.matchCase(text) : result)
  }
}


module.exports = Vigenere