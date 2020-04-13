let summ = Symbol.for('summ');
function Random(){
	let arr = [];
	for (let i=0;i<25;i++){
		arr[i]= Math.floor(Math.random()*25+1);
	}
	arr[summ] = function(){
		let sum = 0;
		for (let elem of this){
			sum+=elem;
		}
		return sum;
	}
	return arr;
}
function ElemsArr(arr1,arr2){
	let el = [];
	for (let elem1 of arr1){
		for (let elem2 of arr2){		
		}
	}
	el[summ] = function(){
		let sum = 0;
		for (let elem of this){
			sum+=elem;
		}
		return sum;
	}
	return el;
}
let array1 = Random();
let array2 = Random();
let resul = ElemsArr(array1,array2);

document.write('Первый случайный массив: [' + array1 + ']<br>');
document.write('Второй случайный массив: [' + array2 + ']<br>');
document.write('Одинаковые элементы: [' + resul + ']<br>');


document.write('Сумма элементов первого массива: ' + array1[summ]() + '<br>');
document.write('Сумма элементов второго массива: ' + array2[summ]() + '<br>');
document.write('Сумма одинаковых эллементов: ' + resul[summ]());