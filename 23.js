const cars = ["Volvo", "Ood", "Benz"];
document.getElementById("demo").innerHTML = cars.length + cars;
//empty array
const cars1 = [];
cars1[0] = "ood";
cars1[1] = "benz";
cars1[2] = "mini cooper";
cars1[3] = "civic";
document.getElementById("demo1").innerHTML = cars1.length + cars1;
//using new keyword 
const cars2 = new Array("jana", "Volvo", "BMW");
document.getElementById("demo2").innerHTML = cars2;
//accessing array element
const names1 = ["shanzay", "emaan", "saad", "saleem"]
document.getElementById("demo3").innerHTML = names1[0];
//changing an array element
const saad = ["shanzay", "emaan", "saad", "saleem"]
saad[0] = "tadow";
document.getElementById("dem04").innerHTML = saad;
//to string method
const fruits = ["Banana", "Orange", "Apple", "Mango", 15];
document.getElementById("demo5").innerHTML = fruits.toString();
console.log(typeof (fruits.toString()));
//lenght property
const fruits1 = ["Banana", "Orange", "Apple", "Mango", 15];
document.getElementById("demo6").innerHTML = fruits1.length;
//acces the first aaray
const fruits2 = ["Banana", "Orange", "Apple", "Mango", 15];
document.getElementById("demo7").innerHTML = fruits2[0];
//access the last array
const fruits3 = ["Banana", "Orange", "Apple", "Mango", 15];
document.getElementById("demo8").innerHTML = fruits3[fruits3.length - 2];