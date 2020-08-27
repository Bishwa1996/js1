
// function in js:-

function avg(a, b) {
    return (a + b) / 2;
}
// DRY= do not repeat yourself
c = avg(4, 6);
// console.log(c);

// conditionals in js:-
var age = 34;
if (age > 18) {
    // console.log('you can vote');
}
else {
    // console.log('you can not vote');
}
var arr = [1, 2, 3, 4, 5, 6, 7];
// console.log(arr);
for (var i = 0; i < arr.length; i++) {
    // console.log(arr[i]);
}
//   OR
arr.forEach(function (element) {
    // console.log(element);
})

/*let j = 0;
const ac = 0;
ac++;*/

let j = 0;
while (j < arr.length) {
    // console.log(arr[j]);
    j++;
}
for (var i = 0; i < arr.length; i++) {
    if (i == 2) {
        // break;
        continue;
    }
    // console.log(arr[i]);
}
let myArr = ["fan", "camera", 34, null, true];
// console.log(myArr.length);
// myArr.pop();
// myArr.push("Bishwa");
// myArr.shift()
myArr.unshift("bishwa")
// console.log(myArr);

// String methods in js
let mylovelystring = "Bishwa is a good boy";
/*console.log(mylovelystring.length)
console.log(mylovelystring.indexOf("good"))
console.log(mylovelystring.slice(1,5))*/

// let myDate= new Date;
// console.log(myDate.getTime());

// DOM Manipulation:-
let elem = document.getElementById('click');
// console.log(elem);

let elemClass = document.getElementsByClassName("container")
// console.log(elemClass);
elemClass[0].style.background = "yellow";

/*tn = document.getElementsByTagName('div')
console.log(tn);*/

// selecting using query
sel = document.querySelector('.container')
// console.log(sel)
sel = document.querySelectorAll('.container')
// console.log(sel)

// Events in js
/*function clicked(){
console.log("The button was clicked");
}
firstContainer.addEventListener('click',function(){
    console.log("click hua")
})*/

// Settimeout and setinterval =?
// Local storage =?

// Json
/*obj = { name: "Bishwa", length: 1, a: { this: "that" } }
jso = JSON.stringify(obj);
console.log(jso)
parsed = JSON.parse(`{"name":"Bishwa","length":1,"a":{"this":"that"}}`);
console.log(parsed);*/
/*a = 12;
console.log(`this is my ${a}`);*/

// js versions= ECMA script





