let obj = {a:"L",b: "O",c: "V",d: "E"}
let s = Symbol();
obj[s] = "yes, it's symbol";
//проверяем
for (let key in obj){
	document.write(obj[key]+" ");
}