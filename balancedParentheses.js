function processData(input) {
    // Sample input '[{()}]'
    
    const openParentheses = '(';
    const closeParenteses = ')';
    const parentesesSequence = '(,)';
    const openBracket = '{';
    const closeBracket = '}';
    const bracketSequence = '{,}';
    const openSquare ='[';
    const closeSquare = ']';
    const squareSequence = '[,]';
    const lengthOfArray = input.length;
    const arrayOfString = input.split('');
    const error = 0;
    const matching = 1;
    let output = '';
    let miniArray = [];
        
    
    
    if(lengthOfArray % 2 !== 0) return error;
    
    if(arrayOfString[0] === closeParenteses || arrayOfString === closeSquare || arrayOfString === closeBracket) return error;
    
    for (let i = 0; i < arrayOfString.length / 2; i++) {
      miniArray = []
      let j = (arrayOfString.length - 1) - i;
      miniArray.push(arrayOfString[i], arrayOfString[j]);
      console.log(miniArray.toString());
      if((miniArray.toString() === parentesesSequence) || (miniArray.toString() === bracketSequence) || (miniArray.toString() === squareSequence)) {
        output = matching;
      } else {
        output = error;
        break;
      }
    }
    return output;
};

console.log(processData('[{()}]'));
