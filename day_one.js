// strings
let name = 'kiran';
let fullName = 'Hima Geethika';

// numbers
let total = 100;
let marks = 35;
let percentage = 87.56

// booleans
let isAdmin = false;
let isLoggedIn = true;

// null, undefined,
let x;
let y = null;
console.log('hello world -->');

// dates
const date = new Date();
console.log('time--->', date.getHours() + ':' + date.getMinutes())

// objects, arrays --> reference type
let list = ['kiran', 'hima'];
let numbers = [1,2,3,4];
// arrayof objects
let users = [
    {
        fullName: 'kiran villa',
        email: 'kvilla@gmail.com',
        id: 12345
    },
    {
        fullName: 'Hima villa',
        email: 'hvilla@gmail.com',
        id: 1234
    }
]

let phones = [
    {
        brand: 'Nokia',
        ram: '4GB',
        screenSize: 5
    },
    {
        brand: 'Samsung',
        ram: '4GB',
        screenSize: 5
    }
]

console.log('phones', phones)


// objects --> key: value
let phone = {
    brand: 'Nokia',
    ram: '4GB',
    screenSize: 5,
}

console.log('single phone --> ', phone.screenSize)


// object creation
function User(name, email, phone) {
    this.name = name;
    this.email = email;
    this.phone = phone;
}

let geethika = new User('Hima', 'emai.com', 2134567)
let kiran = new User('Kiran')
console.log('kiran', kiran)