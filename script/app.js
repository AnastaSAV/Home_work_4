const firstNumber = +prompt('Enter any number');
const secondNumber = +prompt('Enter any number again');
let sumOperation = '+';
let subOperation = '-';
let multiOperation = '*';
let divisionOperation = '/';
let operation = prompt(`Enter the operation you want to do: ${sumOperation} ${subOperation} ${multiOperation} ${divisionOperation}`);

if (operation === sumOperation) {
	sum(firstNumber, secondNumber);
}
else if (operation === subOperation) {
	sub(firstNumber, secondNumber);
}
else if (operation === multiOperation) {
	multi(firstNumber, secondNumber);
}
else if (operation === divisionOperation) {
	division(firstNumber, secondNumber);
}
else {
	alert('Make youre choice!');
}

function sum(firstNum, secondNum) {
	let result = firstNum + secondNum;
	alert(`Результат: ${firstNum} + ${secondNum} = ${result}`);
	return result;
}
function sub(firstNum, secondNum) {
	let result = firstNum - secondNum;
	alert(`Результат: ${firstNum} - ${secondNum} = ${result}`);
	return result;
}
function multi(firstNum, secondNum) {
	let result = firstNum * secondNum;
	alert(`Результат: ${firstNum} * ${secondNum} = ${result}`);
	return result;
}
function division(firstNum, secondNum) {
	let result = firstNum / secondNum;
	alert(`Результат: ${firstNum} / ${secondNum} = ${result}`);
	return result;
}