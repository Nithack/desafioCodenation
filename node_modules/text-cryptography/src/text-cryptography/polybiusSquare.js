require("./others/customPrototype");

const range = n => Array.from(Array(n).keys());
const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"


const generateTable = (keyword, iOrJ) => {
  let table = [];
  for(let _ of range(5)){
    table.push(Array(5).fill(null))
  }

  let alphabet = (iOrJ == "I") ? letters.replace("J", "") : letters.replace("I", "");

  keyword = keyword.toUpperCase().removeDuplicate();
  alphabet = alphabet.replaceStringDuplicate(keyword);

  for(let y of range(5)){
    for(let x of range(5)){
      if(keyword != ""){
        table[y][x] = keyword[0];
        keyword = keyword.replace(keyword[0], "")
      }
      else{
        let char = alphabet[0]
        table[y][x] = char;
        alphabet = alphabet.replace(char, "");
      }
    }
  }

  return table
}



class PolybiusSquare{
  constructor(keyword){
    this.keyword = keyword;
    this.useIorJ = "I";
    this.table = generateTable(this.keyword, this.useIorJ);
  }

  encrypt(text){
    let table = this.table;
    let ij = this.useIorJ;
    let notToUse = (ij == "I") ? "J" : "I"; 

    let result = "";

    for(let x of text.toUpperCase().replace(notToUse, ij)){
      if(x.isSpace()){
        result += " ";
      }
      else if(x.isAlpha()){
        for(let row of range(table.length)){
          if(table[row].includes(x)){
            let r = ((table[row].indexOf(x) + 1)).toString();
            let y = (row + 1).toString();

            result += r+y
          }
        }
      }
      else{
        result += " " + x + " ";
      }
    }

    return result;
  }


  decrypt(text){
    let table = this.table

    let textSp = text.split(" ");
    let textArr = []
    for(let x of textSp){
      if(x != ""){
        textArr.push(x)
      }
    }


    let result = "";
    for(let num of textArr){
      if(num.length % 2 == 0){
        let prevIndex = 1;

        for(let n of range(num.length / 2)){
          let chars = num.substring(prevIndex-1, prevIndex+1);
          prevIndex += 2
          let y = parseInt(chars[0])
          let x = parseInt(chars[1])

          result += table[x-1][y-1]
        }
        result += " "
      }
      else{
        result += num + " ";
      }
    }

    return result;
  }
}


module.exports = PolybiusSquare