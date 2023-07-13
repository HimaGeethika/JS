const names = ['kiran','hima', 'rat', 'cat']

// push, pop, slice, splice, concat, map, filter, find, reduce, forEach, sort, reverse.....
// includes, indexOf, findIndex

names.push('villa') // push
console.log('push', names)

names.pop() // pop
console.log('pop', names)

names.unshift('dathu') // add at first place
console.log('unshift', names)

names.shift() // shift
console.log('shift', names)

// slice
newNames = names.slice(0, 2)
console.log('newNames', newNames)
console.log('names', names)

//splice
let names1= ['dog','cat','rat']
newNames1 =names1.splice(0,2,'goat');

console.log("originalstring-splice", names1)

names.splice(2,1,'xyz');
console.log(names);

console.log('kiran'.split('').reverse().join(''));

let otherNames = ['dog', 'rat', 'blacky']
otherNames = otherNames.concat(names)
// otherNames = [...otherNames, ...names]
console.log('concated', otherNames)

console.log("names==> ", names)
console.log(names.includes('rat'))//false
console.log("includes ", names);

console.log("indexOf ",names.indexOf('cat'));

// reverse
names.reverse() // ['cat','rat',.....]
