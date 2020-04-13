let obj = {
	a:"M",
	b:"Y",
	c:"R"}
let s = Symbol();
obj [s] = function () {document.write('!');}
for (let key in obj){
	document.write(obj[key]+" ");
}