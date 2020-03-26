const index = require("./index");


// ciphers
const affine = new index.Affine();
const atbash = new index.Atbash();
const baconian = new index.Baconian();
const caesar = new index.Caesar();
const latinAlphabet = new index.LatinAlphabet(true);
const railFence = new index.RailFence(5);
const reverse = new index.Reverse();
const rot13 = new index.Rot13();
const rot5 = new index.Rot5();
const rot18 = new index.Rot18();
const rot47 = new index.Rot47();
const vigenere = new index.Vigenere("hello");
const mixAlphabet = new index.MixedAlphabet("hello");
const polybiusSquare = new index.PolybiusSquare("hello");
const homophonic = new index.Homophonic("keyword69");
const a1z26 = new index.A1Z26();
const goldBug = new index.GoldBug();
const primeNum = new index.PrimeNumbers();


// plain text
const text = "The things I do for love. —Jaime Lannister --Season 1 Episode 1";

// ecryption and decryption
let affineEncrypt = affine.encrypt(text);
let affineDecrypt = affine.decrypt(affineEncrypt);

let atbashEncrypt = atbash.encrypt(text);
let atbashDecrypt = atbash.decrypt(atbashEncrypt);

let baconianEncrypt = baconian.encrypt(text);
let baconianDecrypt = baconian.decrypt(baconianEncrypt);

let caesarEncrypt = caesar.encrypt(text);
let caesarDecrypt = caesar.decrypt(caesarEncrypt);

let latinAlphabetEncrypt = latinAlphabet.encrypt(text);
let latinAlphabetDecrypt = latinAlphabet.decrypt(latinAlphabetEncrypt);

let railFenceEncrypt = railFence.encrypt(text);
let railFenceDecrypt = railFence.decrypt(railFenceEncrypt);

let reverseEncrypt = reverse.encrypt(text);
let reverseDecrypt = reverse.decrypt(reverseEncrypt);

let rot13Encrypt = rot13.encrypt(text);
let rot13Decrypt = rot13.decrypt(rot13Encrypt);
 
let rot5Encrypt = rot5.encrypt("0123456789");
let rot5Decrypt = rot5.decrypt(rot5Encrypt);

let rot18Encrypt = rot18.encrypt(text);
let rot18Decrypt = rot18.decrypt(rot18Encrypt);

let rot47Encrypt = rot47.encrypt(text);
let rot47Decrypt = rot47.decrypt(rot47Encrypt);

let vigenereEncrypt = vigenere.encrypt(text);
let vigenereDecrypt = vigenere.decrypt(vigenereEncrypt);

let mixAlphabetEncrypt = mixAlphabet.encrypt(text);
let mixAlphabetDecrypt = mixAlphabet.decrypt(mixAlphabetEncrypt);

let polybiusSquareEncrypt = polybiusSquare.encrypt(text);
let polybiusSquareDecrypt = polybiusSquare.decrypt(polybiusSquareEncrypt); 

let homophonicEncrypt = homophonic.encrypt(text);
let homophonicDecrypt = homophonic.decrypt(homophonicEncrypt);

let a1z26Encrypt = a1z26.encrypt(text);
let a1z26Decrypt = a1z26.decrypt(a1z26Encrypt);

let goldBugEncrypt = goldBug.encrypt(text);
let goldBugDecrypt = goldBug.decrypt(goldBugEncrypt);

let primeNumEncrypt = primeNum.encrypt(text);
let primeNumDecrypt = primeNum.decrypt(primeNumEncrypt);


// test

// Affine
test("AFFINE:- Encrypt", () => {
  expect(affineEncrypt).toBe("Kar kadsxh D ov uve mvqr. —Gfdpr Mfssdhkre --Hrfhvs 1 Rydhvor 1");
})

test("AFFINE:- Decrypt", () => {
  expect(affineDecrypt).toBe(text);
})

// Atbash
test("ATBASH:- Encrypt", () => {
  expect(atbashEncrypt).toBe("Gsv gsrmth R wl uli olev. —Qzrnv Ozmmrhgvi --Hvzhlm 1 Vkrhlwv 1");
})

test("ATBASH:- Decrypt", () => {
  expect(atbashDecrypt).toBe(text);
})

// Baconian 
test("BACONIAN:- Encrypt", () => {
  expect(baconianEncrypt).toBe("baabbaabbbaabaa baabbaabbbabaaaabbabaabbabaaba abaaa aaabbabbba aabababbbabaaab ababbabbbabababaabaa. —abaabaaaaaabaaaabbaaaabaa ababbaaaaaabbababbababaaabaababaabbaabaabaaab --baabaaabaaaaaaabaabaabbbaabbab 1 aabaaabbbbabaaabaabaabbbaaaabbaabaa 1")
})

test("BACONIAN:- Decrypt", () => {
  expect(baconianDecrypt).toBe("THE THINGS I DO FOR LOVE JAIME LANNISTER SEASON  EPISODE  ")
})

// Caesar
test("CAESAR:- Encrypt", () => {
  expect(caesarEncrypt).toBe("Vjg vjkpiu K fq hqt nqxg. —Lckog Ncppkuvgt --Ugcuqp 1 Grkuqfg 1");
})

test("CAESAR: Decrypt", () => {
  expect(caesarDecrypt).toBe(text);
})

// LatinAlphabet
test("LATINALPHABET:- Encrypt(removeSpace=true)", () => {
  expect(latinAlphabetEncrypt).toBe("20 8 5 20 8 9 14 7 19 9 4 15 6 15 18 12 15 22 5 . — 10 1 9 13 5 12 1 14 14 9 19 20 5 18 - - 19 5 1 19 15 14 5 16 9 19 15 4 5 ")
})

test("LATINALPHABET:- Decrypt(removeSpace=true)", () => {
  expect(latinAlphabetDecrypt).toBe("THETHINGSIDOFORLOVE.—JAIMELANNISTER--SEASONEPISODE");
})

latinAlphabet.removeSpace = false
let latinAlphabetEncryptSF = latinAlphabet.encrypt(text);
let latinAlphabetDecryptSF = latinAlphabet.decrypt(latinAlphabetEncryptSF)

test("LATINALPHABET:- Encrypt(removeSpace=false)", () => {
  expect(latinAlphabetEncryptSF).toBe("20 8 5 -- 20 8 9 14 7 19 -- 9 -- 4 15 -- 6 15 18 -- 12 15 22 5 . -- — 10 1 9 13 5 -- 12 1 14 14 9 19 20 5 18 -- - - 19 5 1 19 15 14 -- -- 5 16 9 19 15 4 5 -- ")
})

test("LATINALPHABET:- Decrypt(removeSpace=false)", () => {
  expect(latinAlphabetDecryptSF).toBe("THE THINGS I DO FOR LOVE. —JAIME LANNISTER --SEASON  EPISODE ");
})

// RailFence
test("RAILFENCE:- Encrypt", () => {
  expect(railFenceEncrypt).toBe("Tgf. esihns oe eLtraopsei orv—mas enEo1 hId oJini-S  d t lan-1e");
})

test("RAILFENCE:- Decrypt", () => {
  expect(railFenceDecrypt).toBe(text);
})

// Reverse
test("REVERSE:- Encrypt", () => {
  expect(reverseEncrypt).toBe("1 edosipE 1 nosaeS-- retsinnaL emiaJ— .evol rof od I sgniht ehT");
})

test("REVERSE:- Decrypt", () => {
  expect(reverseDecrypt).toBe(text);
})

// Rot13
test("ROT13:- Encrypt", () => {
  expect(rot13Encrypt).toBe("Gur guvatf V qb sbe ybir. —Wnvzr Ynaavfgre --Frnfba 1 Rcvfbqr 1");
})

test("ROT13:- Decrypt", () => {
  expect(rot13Decrypt).toBe(text);
})

// Rot5
test("ROT5:- Encrypt", () => {
  expect(rot5Encrypt).toBe("5678901234");
})

test("ROT5:- Decrypt", () => {
  expect(rot5Decrypt).toBe("0123456789");
})

// Rot18
test("ROT18:- Encrypt", () => {
  expect(rot18Encrypt).toBe("Gur guvatf V qb sbe ybir. —Wnvzr Ynaavfgre --Frnfba 6 Rcvfbqr 6");
})

test("ROT18:- Decrypt", () => {
  expect(rot18Decrypt).toBe(text);
})

// Rot47
test("ROT47:- Encrypt", () => {
  expect(rot47Encrypt).toBe("%96 E9:?8D x 5@ 7@C =@G6] —y2:>6 {2??:DE6C \\\\$62D@? ` tA:D@56 `");
})

test("ROT47:- Decrypt", () => {
  expect(rot47Decrypt).toBe(text);
})

// Vigenere
test("VIGENERE:- Encrypt", () => {
  expect(vigenereEncrypt).toBe("Alp evprrd W ks qzf ssgp. —Qetxs Seyywzxpc --Zildcu 1 Pawzsop 1");
})

test("VIGENERE:- Decrypt", () => {
  expect(vigenereDecrypt).toBe(text);
})

// MixedAlphabet
test("MIXEDALPHABET:- Encrypt", () => {
  expect(mixAlphabetEncrypt).toBe("Tda tdfmcs F on bnr jnva. —Ghfka Jhmmfstar --Sahsnm 1 Apfsnoa 1");
})

test("MIXEDALPHABET:- Decrypt", () => {
  expect(mixAlphabetDecrypt).toBe(text);
})

// PolybiusSquare
test("POLYBIUSSQUARE:- Encrypt", () => {
  expect(polybiusSquareEncrypt).toBe("441121 441113435234 13 3241 424124 31411521 .   — 1351133321 315143431334442124  -  - 342151344143  1  21531334413221  1 ");
})

test("POLYBIUSSQUARE:- Decrypt", () => {
  expect(polybiusSquareDecrypt).toBe("THE THINGS I DO FOR LOVE . — IAIME LANNISTER - - SEASON 1 EPISODE 1 ");
})

// Homophonic
// test("HOMOPHONIC:- Encrypt", () => {
//   expect(homophonicEncrypt).toBe("N6O N69Z8M 9 WH 1HL CHQO. —AK9FO CKGX9MNOL --MOKMHG  O29MHWO ");
// })

test("HOMOPHONIC:- Decrypt", () => {
  expect(homophonicDecrypt).toBe("THE THINGS I DO FOR LOVE. —JAIME LANNISTER --SEASON  EPISODE ");
})

// A1Z26
test("A1Z26:- Encrypt", () => {
  expect(a1z26Encrypt).toBe("20-8-5 -- 20-8-9-14-7-19 -- 9 -- 4-15 -- 6-15-18 -- 12-15-22-5- -- —10-1-9-13-5 -- 12-1-14-14-9-19-20-5-18 -- --19-5-1-19-15-14 -- -- 5-16-9-19-15-4-5 -- ");
})

test("A1Z26:- Decrypt", () => {
  expect(a1z26Decrypt).toBe("THE THINGS I DO FOR LOVE —10AIME LANNISTER  SEASON  EPISODE  ");
})

// GoldBug
test("GOLDBUG:- Encrypt", () => {
  expect(goldBugEncrypt).toBe(";48 ;46*3) 6 †‡ 1‡( 0‡¶8 ,5698 05**6);8( )85)‡*  8.6)‡†8 ");
})

test("GOLDBUG:- Decrypt", () => {
  expect(goldBugDecrypt).toBe("THE THINGS I DO FOR LOVE JAIME LANNISTER SEASON  EPISODE ");
})

// PrimeNumbers
test("PRIMENUMBERS:- Encrypt", () => {
  expect(primeNumEncrypt).toBe("71-19-11 -- 71-19-23-43-17-67 -- 23 -- 7-47 -- 13-47-61 -- 37-47-79-11- -- —29-2-23-41-11 -- 37-2-43-43-23-67-71-11-61 -- --67-11-2-67-47-43 -- -- 11-53-23-67-47-7-11 -- ");
})

test("PRIMENUMBERS:- Decrypt", () => {
  expect(primeNumDecrypt).toBe("THE THINGS I DO FOR LOVE —29AIME LANNISTER  SEASON  EPISODE  ");
})