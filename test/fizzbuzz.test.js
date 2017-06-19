var fizzbuzz = require('../fizzbuzz');

test('fizzbuzz', function(){
  expect(fizzbuzz(30)).toBe('FizzBuzz');
  expect(fizzbuzz(10)).toBe('Buzz');
  expect(fizzbuzz(6)).toBe('Fizz');
});
