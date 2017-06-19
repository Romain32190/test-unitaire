var fizzbuzz = function(a) {
  if(a % 15 === 0){
    return 'FizzBuzz';
  }
  else if ( a % 5 === 0){
    return 'Buzz';
  }
  else if (a % 3 === 0){
    return 'Fizz';
  }
  return 'Yop';
};


module.exports = fizzbuzz;
