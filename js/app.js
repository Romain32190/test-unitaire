var my_array = new Array();
my_array[0] = 1;

for (var i = 1; i <= 99; i++){
	my_array.push(i + 1);
}

console.log(my_array);

// for (var i = 0; i <= my_array.length; i++){
// 	switch(my_array[i]) {
// 		case (my_array[i] % 3 === 0) :
// 		console.log('Fizz');
// 		break;
// 		case (my_array[i] % 5 === 0) :
// 		console.log('Buzz');
// 		break;
// 		case (my_array[i] % 15 === 0) :
// 		console.log('FizzBuzz');
// 		break;
// 		default :
// 		console.log(my_array[i]);
// 	}
// };

for (var i = 0; i <= my_array.length; i++){
	if(my_array[i] % 3 === 0 && my_array[i] % 5 === 0){
		console.log('FizzBuzz');
	} else if (my_array[i] % 3 === 0){
		console.log('Fizz');
	} else if (my_array[i] % 5 === 0) {
		console.log('Buzz');
	} else {
		console.log(my_array[i]);
	}
};
