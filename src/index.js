module.exports = function zeros(expression) {
  const splitExpression = expression.split('*');
  const factorialsArr = [];
  const doubleFactorialsArr = [];
  let counterOf2 = 0;
  let counterOf5 = 0;
  const countPrimeFactor = function(primeFactor, num){ 
    let totalCounter = 0;
    let currentCounter = 0;
    let power = 1;
    currentCounter = Math.floor(num / Math.pow(primeFactor, power));
    totalCounter += currentCounter;
    while (currentCounter >= primeFactor){
        power += 1;
        currentCounter = Math.floor(num / Math.pow(primeFactor, power));
        totalCounter += currentCounter;
    }
    return totalCounter;
  }
  const count5OddFactorial = function(num){
    let totalCounter = 0;
    let currentCounter = 0;
    let power = 1;
    currentCounter = Math.floor(num / Math.pow(5, power));
    totalCounter += Math.ceil(currentCounter / 2);
    while (currentCounter >= 5){
        power += 1;
        currentCounter = Math.floor(num / Math.pow(5, power));
        totalCounter += Math.ceil(currentCounter / 2);
    }
    return totalCounter;
  }
  const count5EvenFactorial = function(num){
    let totalCounter = 0;
    let currentCounter = 0;
    let power = 1;
    currentCounter = Math.floor(num / Math.pow(5, power));
    totalCounter += Math.floor(currentCounter / 2);
    while (currentCounter >= 5){
        power += 1;
        currentCounter = Math.floor(num / Math.pow(5, power));
        totalCounter += Math.floor(currentCounter / 2);
    }
    return totalCounter;
  }
  splitExpression.forEach(function(item){
    if(item.endsWith('!!')){
        doubleFactorialsArr.push(+item.slice(0, -2));
    } else {
        factorialsArr.push(+item.slice(0, -1));
    }
  });

factorialsArr.forEach(function(item){
    counterOf2 += countPrimeFactor(2, item);
    counterOf5 += countPrimeFactor(5, item);
});
doubleFactorialsArr.forEach(function(item){
    if (item % 2 === 0){
        counterOf2 += countPrimeFactor(2, item);
        counterOf5 += count5EvenFactorial(item);
    } else {
        counterOf5 += count5OddFactorial(item);
    }
})

  return Math.min(counterOf2, counterOf5);
}

