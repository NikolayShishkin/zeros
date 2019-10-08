module.exports = function zeros(expression) {
  const splitExpression = expression.split('*');
  const factorialsArr = [];
  const doubleFactorialsArr = [];
  for (let i = 0; i < splitExpression.length; i += 1){
    if(splitExpression[i].endsWith('!!')){
      doubleFactorialsArr.push(+splitExpression[i].slice(0,-2));
    } else {
      factorialsArr.push(+splitExpression[i].slice(0, -1));
    }
  }
}
