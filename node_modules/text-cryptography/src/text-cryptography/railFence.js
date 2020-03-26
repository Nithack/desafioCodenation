require("./others/customPrototype");

const range = n => Array.from(Array(n).keys())

class RailFence {
  constructor(key = 3) {
    this.key = (key <= 0 || key > 9) ? 3 : key;
  }

  encrypt(text) {
    let fence = [];
    let key = this.key;
    if (key == 1) return text;

    for (let _ of range(key)) {
      fence.push(Array(text.length).fill(null))
    }

    let result = ""

    let row = 0;
    let direction = 1;
    for (let w of range(text.length)) {
      fence[row][w] = text[w]

      if (row == key - 1 && direction == 1) {
        direction = -direction;
      }
      else if (row == 0 && direction == -1) {
        direction = -direction;
      }
      row += direction;
    }

    for (let r of range(key)) {
      for (let i of range(text.length)) {
        result += fence[r][i] != null ? fence[r][i] : ""
      }
    }

    return result
  }

  decrypt(text) {
    let key = this.key;
    if (key == 1) return text

    let fence = [];
    for (let _ of range(key)) {
      fence.push(Array(text.length).fill(null))
    }

    let result = "";

    let direction = null;
    let d = direction
    let row = 0, col = 0;

    for (let _ of range(text.length)) {
      d = direction
      direction = row == 0 ? true : (row == key - 1 ? false : d);

      fence[row][col] = "#";

      col += 1;
      row += direction ? 1 : -1
    }

    let index = 0;
    for (let i of range(key)) {
      for (let j of range(text.length)) {
        if (fence[i][j] == "#" && index < text.length) {
          fence[i][j] = text[index];
          index += 1
        }
      }
    }

    row = 0, col = 0;
    for (let _ of range(text.length)) {
      d = direction
      direction = row == 0 ? true : (row == key - 1 ? false : d);

      if (fence[row][col] != "#") {
        result += fence[row][col]
        col += 1
      }
      row += direction ? 1 : -1
    }
    return result
  }

}

module.exports = RailFence