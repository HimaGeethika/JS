let name = 'kiran';
let age = 20;

let combo = "name is " +name+" age is "+ age;
console.log(combo);

// template literals
combo = `Name is ${name} and age is ${age}`
console.log(combo);

// terenary operators
text = name === 'kiran' ? 'villa kiran' : name;

let paragraph = `lasd,
    fas`;

let phone = {
    brand: 'Nokia',
    ram: '4GB',
    screenSize: 5,
}

let phone1 = null

// if
// if else if
// if esle

console.log(phone.price)

if (name === 'kiran') {
    console.log('if ==>', name)
}

if (phone && (phone.brand==="Nokia" || phone.screenSize===6)) {
    console.log('if  ||-->', phone.brand)
}

if (phone?.brand) {
    console.log('if  -->', phone.brand)
}

if (!phone1 || !phone1?.price) {
    console.log('no price')
}

if(phone?.xyz){
    console.log('if-->xyz', phone.xyz);
}
else if(phone?.ram){
    console.log('else if-->ram', phone.ram);
}
else {
    console.log('no data found here');
}
