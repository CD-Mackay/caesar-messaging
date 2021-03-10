const encrypt = function(text, key, alphabet, sym) {
  console.log(alphabet, key)
  key = parseInt(key);
  let number = 0;
  let result = "";
  let spaceRegex = /\s/
  for (let i = 0; i < text.length; i++) {
    if (spaceRegex.test(text[i])) {
      result += " ";
    } else {
    number = alphabet.indexOf(text[i]);
    if(sym === "+") {
      number = number + key;
    } else if(sym === "-") {
      number = number - key;
    }
    if (number > 25) {
      let difference = (number) - 25;
      number = difference;
    } else if (number < 0) {
      let difference =  number;
      number = 26 - difference;
    } 
    result += alphabet.charAt(number);
  }
  } 
  return result;
};

export default encrypt;