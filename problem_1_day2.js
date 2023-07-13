//1
console.log("this is a new javascript file");

//2
let x=20;
console.log("x= ", x);

//3
let y='kirana kottu';
console.log("y= ", y);

//4
function getFullName(firstName, lastName='v'){
console.log(`My fullName is ${firstName} ${lastName}`);
}
getFullName('kiran','Villa');
getFullName('kiran');

//5
let x1=25;
function sum(){
return x1*25;
}
let out=sum();
console.log("output ", out);

//6
let x2=[1,2,3,4];
console.log(x2);

//7
let User=[
    {
        userName:'kiran',
        phNo:67889
    },
    {
        userName:'Hima',
        phNo:657889
    }

]

//8 and 9
let laptop={
 
    ram:'4GB',
    color:'Black',
    mouse: function(){
        return 'mouse';
    }
}
console.log(laptop.mouse());

//10
let arrow= ()=>{
    console.log("this is an arrow function");
}
arrow();

//11
function norm(){
return x1* 20;
}
console.log("this is a normal function ",norm());

//12
let list1=[1,3,4,2];
let list2=[...list1];
list2[4]=8;
console.log("this is list2 ",list2);
console.log("list1 ",list1);

//13
let str="kiran villa";
let charSet={};
let str2=" ";
for(let i=0;i<str.length;i++){
    if(charSet[str[i]] && str[i]!=" "){
        charSet[str[i]] = charSet[str[i]]+1;
    }
    else if(str[i]!=" "){
        charSet[str[i]]=1;
    }
}
console.log("character count is  ", charSet);