String.prototype.isAlpha = function () {
  return (this.match(/^[a-z]+$/i) ? true : false)
}

String.prototype.isUpper = function () {
  return (this.match(/^[A-Z]+$/) ? true : false)
}

String.prototype.isLower = function () {
  return (this.match(/^[a-z]+$/) ? true : false)
}

String.prototype.isDigit = function () {
  return (this.match(/^[0-9]+$/) ? true : false)
}

String.prototype.isSpace = function () {
  return (this.match(/^\s+$/) ? true : false)
}

String.prototype.isEmpty = function () {
  return (this == "" ? true : false)
}

String.prototype.isPunctuation = function(){
  return (this.match(/[!"#$%&'()*+,-./:;<=>?@[\]^_`{|}~\\"]/) ? true : false)
}

String.prototype.removeDuplicate = function () {
  return [...new Set(Array.from(this))].join("");
}

String.prototype.reverse = function () {
  return Array.from(this).reverse().join("")
}

String.prototype.replaceStringDuplicate = function (string) {
  let s = this.toUpperCase();
  for (let x of string.toUpperCase()) {
    s = s.replace(x, "")
  }
  return s
}

String.prototype.toArray = function (removeSpace = false) {
  return Array.from(removeSpace ? this.replace(" ", "") : this)
}

String.prototype.shuffle = function () {
  let array = Array.from(this)
  for (let i = array.length - 1; i > 0; i--) {
    let j = Math.floor(Math.random() * (i + 1));
    let temp = array[i];
    array[i] = array[j];
    array[j] = temp;
  }
  return array.join("")
}

String.prototype.matchCase = function (oldtext) {
  let thisText = Array.from(this.replace(/[^\w\s]|[0-9]|\s/g, ""));

  let t = ""
  for (let x of oldtext) {
    if (x.isAlpha()) {
      if (x.isUpper()) {
        t += thisText[0].toUpperCase();
      } else {
        t += thisText[0].toLowerCase();
      }
      thisText.shift()
    } else {
      t += x
    }
  }

  return t
}


// arrays prototype
Array.prototype.toDict = function (array2) {
  let keys = this;
  let values = array2;

  let dict = Object.assign(...keys.map((k, i) => ({ [k]: values[i] })));

  return dict
}



// object dictionary prototype
Object.prototype.swapDict = function(){
  let dict = {}
  Object.keys(this).forEach((k) => {
    let v = this[k]
    if(Array.isArray(v)){
      v = v.join("")
    }
    dict[v] = k;
  });
  return dict
}


// number prototype
Number.prototype.negativeMod = function (m) {
  return ((this % m) + m) % m;
}

Number.prototype.isNegative = function () {
  return ((Math.sign(this) == -1) ? true : false);
}

Number.prototype.isPositive = function () {
  return ((Math.sign(this) == 1) ? true : false);
}

Number.prototype.isZero = function () {
  return ((Math.sign(this) == 0) ? true : false);
}