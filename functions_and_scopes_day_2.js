let fullName = 'Hima Geethika' // global variable

// named function
function printName() {
    console.log('hima')
}
printName()

console.log('this', this) // window object

function printFullName() {
    let fullName = 'kiran villa' // local variable
    console.log('fullName', fullName)
}

printFullName()

function getFullName(firstName, lastName='hima') {
    console.log(`${firstName} ${lastName}`)
}

getFullName('Kiran', 'Villa')
getFullName('Kiran')

function getModifiedName(name) {
    name = 'hima villa'
    console.log(`${name}`)
}

getModifiedName('kiran')

// anonomus function
let division = function() {
    console.log(2/4)
}

division()

let anynm=function(greet, hi='Hi'){
    console.log(greet,hi,"this is a anonymous function");
}
anynm('hello','How are u');

function normalFunc(){
    console.log("this is a normal function");
}

normalFunc();

// arrow function
let getSum = () => {
    return 2 + 2
}

getSum()