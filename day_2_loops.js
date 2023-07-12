//while, for 

let x = 5
let val = 1

for (let i = 1; i <= x; i++) {
    val = val * i;
}

console.log('val', val)

let y = 5
let val2 = 1

for (let i = 1; i <= x; i++) {
    if (i === 4) {
        break; // continue;
    }
    val2 = val2 * i;
}

console.log('val2', val2)

let nums = [1,2,3,4,5,7,8,9]
let total = 0
for(let i=0;i<nums.length;i++){
    total=total+nums[i];
}
console.log(total);

let str="hello";
let rev="";
// for(let i=str.length-1;i>=0;i--){
// rev=rev+str[i];
// }
// console.log("rev   ", rev);

for (let i = 0; i<str.length; i++)  {
    rev = rev + str[str.length - (i + 1)]
}
console.log("rev   ", rev);

let charSet = {}

for (i = 0; i < str.length; i++) {
    if (charSet[str[i]]) {
        charSet[str[i]] = charSet[str[i]] + 1
    } else {
        charSet[str[i]] = 1
    }
}
console.log(charSet)