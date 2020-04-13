let arr = [1,2,3,4,5]
let summ = Symbol();
arr[summ] = function() {
	let summK = 0;
	for (let elem of this){
		summK+=elem;
	}
	document.write('Сумма элементов массивов = ' + summK);
}
arr[summ]();