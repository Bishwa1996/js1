
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
for (var i = 0; i < arr.length; i++){
    if(i==2){
        // break;
        continue;
    }
    console.log(arr[i]);
}


