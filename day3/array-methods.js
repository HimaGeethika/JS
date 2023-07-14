// push, pop, slice, splice, concat, map, filter, find, reduce, forEach, sort, reverse.....
// includes, indexOf, findIndex, some, every

// for of, for in

// map // Array.map()
// map creates  a new array based on given array
const phones=['Nokia',  'samsung', 'blackberry'];
let example=phones.map(function(item, index) {
    console.log(item,index);
    return `${item}-${index}`;
})
console.log(example);

// problems

const nums = [3,4,5,6,7,8]
let multi=nums.map(function(item,index){
    return item*5;
})
console.log("multi ",multi);

const users = [
    {
        name: 'kiran',
        age: 28,
    },
    {
        name: 'Hima',
        age: 20,
    },
    {
        name: 'dathi',
        age: 24,
    },
]

const ageEx=users.map(function(item){
    // return {
    //     ...item,
    //     age:item.age>25 ? 30 : (item.age>=20 && item.age<25)? 20: item.age
    // }
    if (item.age>=25 && item.age<30) {
        return {
            ...item,
            age:30
        }
    } else if(item.age>=20  && item.age<25){
        return{
            ...item,
            age:20
        }
    }
    else{
        return item
    }
})
console.log("ageEx ",ageEx);


let genderEx=users.map(function(item){
//    return {
//         name: item.name,
//         age: item.age,
//         gender: 'unknown'
//    }
    return {
      ...item,
      gender: 'unkonwn'
    } 
})
console.log("genderEx ", genderEx);
// filter
// filters creates a new array based on given input
const numbers=[25,40,20,35];
let ex1=numbers.filter(function(item){
    return item>25;
})
console.log(ex1);

const ageFilter=users.filter(function(item){
    return item.age>25
})
console.log("ageFilter ",ageFilter)

const products = [
    {
        item: 'shirt',
        price: 450,
    },
    {
        item: 'jeans',
        price: 800,
    },
    {
        item: 'cap',
        price: 300,
    },
    {
        item: 'chunni',
        price: 600,
        
    }
]

let percent= products.map(function(item){
    let price=item.price
    return{
        ...item,
        price:price-(price*10/100),
        dicountedPrice: price-(price*50/100)
    }
})

let p=products.map((item)=>{
    let price=item.price
    return{
        ...item,
        price:price-(price*10/100),
        dicountedPrice: price-(price*50/100)
    }
})
console.log("p new ",p)

const num1=[2,34,54,34];
let x=num1.find((item,index)=>{
  
    return item>30
})
console.log("find-number array ",x)

const movies=[
    {
        mvname: 'svsc',
        hero: 'Mahesh Babu'
    },
    {
        mvname: 'Bahubali',
        hero: 'Prabhas'
    },
    {
        mvname: 'kaleja',
        hero: 'Mahesh Babu'
    }
]

//some
let someEX=movies.some((item)=>{
    return item.mvname==='kaleja'//return true or false
})
console.log("someEXample ",someEX);

//Every
let everyEx=movies.every((item)=>{
    return item.hero==='Mahesh Babu'
})
console.log("EveryEXample ",everyEx);

//find Index
let indexFind=movies.findIndex((item)=>{
    return item.mvname==='ssfd'///if its not there then -1
})
console.log("findIndex ",indexFind)
let m=movies.find(item=>{
    return item.hero=== 'Mahesh Babu' && item.mvname=== 'kaleja'
})

console.log("movies ", m);

movies.forEach((item, index) => {
    printName(item.hero)
})

function printName(name) {
    console.log(name)
}

// reduce
const marks = [60, 20, 79, 30, 80, 60];
const total = marks.reduce((sum, current) => {
    return sum+current
}, 0);
console.log('total ', total)

const studentmarks = [
    {
        subject: 'telugu',
        marks: 90,
    },
    {
        subject: 'english',
        marks: 60,
    },
    {
        subject: 'social',
        marks: 70,
    }
]

let subjEx=studentmarks.reduce((obj, current)=>{
    obj[current.subject] = current
    return obj
}, {})

let hash = {}
let withForEach = studentmarks.forEach((item, index) => {
    hash[item.subject] = item
})

console.log('hash', hash)

let output = {
    telugu: {
        subject: 'telugu',
        marks: 90,
    },
    english: {
        subject: 'english',
        marks: 60,
    },
}
console.log("subEx  ", subjEx)


let marksEX=studentmarks.reduce((sum,current)=>{
    return sum+current.marks
    
}, 0)
console.log(marksEX);

let y = 'name';

let obj = {
    name : 'kiran'
}

console.log('obj.name', obj.name)
console.log('obj["name"]', obj["name"])
console.log('name', obj[y])
