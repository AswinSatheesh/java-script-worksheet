function myFun() {
    var a = 10;
    // console.log(a);
    return a;
}


var newValue = myFun();
var total = null;

total = newValue + 100;

console.log(total);

// alert("Blocked"); // to create alert box


let user = {
    firstName: "Aswin",
    lastName: "Satheesh"
};


console.log(user.lastName);
console.log(user.firstName);
console.log(user);


//Array


let myArray = [1, 2, 3, 4, 5]

console.log(myArray);

let nameArray = ["Aswin", "Satheesh"]
console.log(nameArray[1]);

let n = "aswin";
console.log(n.length);

console.log(n.indexOf('w'));

let b = "name";
let z = b.slice(0, 3); //slice function
console.log(z);


for (let i = 0; i < 5; i++) {
    console.log(i);
}


let arr = ["Aswin", "Kannan", "Kuttu"];

for (let i = 0; i < arr.length; i++) {
    document.write(arr[i] + "<br>");

}


for (let x of arr) { //  for of loop
    document.write(x + " ");
}

let myobj = {
    firstN: "Anu",
    lastN: " Raj",
    age: 23
};
let x = 0;
for (x in myobj) { //for in loop 
    document.write(myobj[x] + " ");
}


function alertFun() {
    alert("You have clicked this button!");
}