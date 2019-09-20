function processData(input) {
  // Enter your code here
  // Sample input '[{()}]'
  
  // Define variables
  const openParenthesis = '(';
  const closeParentesis = ')';
  const parentesisSequence = '()';
  const openBracket = '{';
  const closeBracket = '}';
  const bracketSequence = '{}';
  const openSquare ='[';
  const closeSquare = ']';
  const squareSequence = '[]';
  
  const lengthOfArray = input.length;
  const arrayOfString = input.split('');
  
  const output = '';
  
  const miniArray = [];
      
  const error = 0;
  const matching = 1;
  
  // Throw error if the number of characters are odd
  if(lengthOfArray % 2 !== 0) return error;
  
  // Throw error if the beginning of the string in a closing brace, bracket or parenthesis
  if(arrayOfString[0] === closeBracket || arrayOfString === closeSquare || arrayOfString === closeBracket) return error;
  
  // Sort the array of individual characters to have corresponding closing brackets next to them
  // Create mini arrays with corresponding indexes and compare with correct string sequence
  
  for (i = 0; i < arrayOfString.length; i++) {
      for (j = arrayOfString.length; j > 0 ; j--) {
          miniArray.push(arrayOfString[i], arrayOfString[j])
          if(miniArray.toString() !== parentesisSequence || miniArray.toString() !== bracketSequence || miniArray.toString() !== squareSequence) {
              output = error;
          } else {
            output = matching;
            continue;
          }
      }
  }
  return output;
} 