/*
  Problem : From A To Z
  Link: https://www.codewars.com/kata/6512b3775bf8500baea77663/train/javascript

  Instructions :
  Given a string indicating a range of letters,
  return a string which includes all the letters in that range,
  including the last letter.

  Note:
  that if the range is given in capital letters,
  return the string in capitals also!
  A hyphen will separate the two letters in the string.

  Examples:
  "a-z" ➞ "abcdefghijklmnopqrstuvwxyz"
  "h-o" ➞ "hijklmno"
  "Q-Z" ➞ "QRSTUVWXYZ"
  "J-J" ➞ "J"
*/

function gimmeTheLetters(sp) {
  let alphabet = "abcdefghijklmnopqrstuvwxyz".split("");
  sp = sp.split("-");
  for (let i = 0; i < alphabet.length; i++) {
    if (sp[0] == alphabet[i]) {
      for (let e = 0; e < alphabet.length; e++) {
        if (sp[1] == alphabet[e]) {
          return alphabet.slice(i, e + 1).join("");
        }
      }
    } else if (sp[0].toUpperCase() == alphabet[i].toUpperCase()) {
      for (let e = 0; e < alphabet.length; e++) {
        if (sp[1].toUpperCase() == alphabet[e].toUpperCase()) {
          return alphabet
            .slice(i, e + 1)
            .join("")
            .toUpperCase();
        }
      }
    }
  }
}

console.log(gimmeTheLetters("A-Z"));
