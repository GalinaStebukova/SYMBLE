let obj = {'numm1': 3, 'numm2':7, 'numm3': 9, 'numm4': 1}
let summ = Symbol();
obj[summ] = function () {
	let summK = 0;
	for (let key in this){
		summK+=this[key];
	}
	document.write('Сумма = ' + summK)
}
obj [summ]();