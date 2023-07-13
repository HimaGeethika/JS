console.log('this', this)

let pen = {
    name: 'Reynolds',
    color: 'white',
    ink: 'blue',
    // getCost(rate) {
    //     return `Cost is ${rate}`
    // },
    getCost: function (rate) {
        return `Cost is ${rate}`
    },
    getPenDetails: function () {
        console.log('this in pen', this.name)
        console.log('this in pen', this.color)
        console.log('this in pen', this.ink)
        console.log('this in pen', this.getCost(30))
        console.log("name of pen is", pen.name);
        console.log("pen stock is", pen.penStock());
    },
    penStock:()=>{
        console.log("number of pens", pen.getCost(30));
    }
}
pen.penStock();
pen.getPenDetails();
// console.log(pen.getPenDetails());

let cost = pen.getCost(20)
console.log(pen);
console.log(cost);

// get object keys
const keys = Object.keys(pen)
console.log('keys', keys)

const values = Object.values(pen)
console.log('values', values)

Object.freeze(pen)
pen.ink = 'black'
console.log(pen)

let list1=[1,2,3,4];
let list2=list1;
list2[4]=5
console.log("list1  ",list1);

let set1=[1,2,3,4]
let set2=set1.splice
console.log("set1",set1)

let tree1=[1,2,3,4]
let tree2=[...tree1];
console.log("tree1 "+ tree1)

function iphone(){
    ram= '4GB';
    console.log(this)
    screenguard= 'gorilla';
    return ram
    // cost= rate;
}
iphone();
console.log(iphone());

function x(...arg){
console.log(arg);
arg[0]='hima'
console.log(arg);
}

x('kirana kottu',40);