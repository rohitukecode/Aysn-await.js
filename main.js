console.log("This is prac.of async js");

async function tom() {
    console.log('Inside harry function');
    const response = await fetch('https://api.github.com/users');
    console.log('before response');
    const users = await response.json();
    console.log('users resolved')
    return users;

    // return "tom";
}

console.log("Before calling tom")
let a = tom();
console.log("After calling tom")
console.log(a);
a.then(data => console.log(data))
console.log("Last line of this js file")