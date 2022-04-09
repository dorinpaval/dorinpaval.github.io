"use strict";

// let company = {
//     sales: [{ name: 'John', salary: 1000 }, { name: 'Alice', salary: 600 }],
//     development: {
//         sites: [{ name: 'Peter', salary: 2000 }, { name: 'Alex', salary: 1800 }], //subdepartments
//         internals: [{ name: 'Jack', salary: 1300 }]
//     }
// };

// function sumSalaries(department) {
//     if (Array.isArray(department)) {
//         console.log(department);
//         return 1;//department.map(function(item){ return {item.salary:item.name }}); 
//     } else {
//         let names = [];
//         for (let subdep of Object.values(department)) {
//             let newArr = sumSalaries(subdep);
//             //console.log(newArr);
//             names = names.concat(newArr);
//             //console.log(names);
//         }
//         return names;
//     }
// }
// console.log(sumSalaries(company));


// let c = {
//     value: "C",
//     next: null
// };
// let b = {
//     value: "B",
//     next: c
// };
// let a = {
//     value: "A",
//     next: b
// };


//remove b
// a.next=a.next.next; //or a.next=c;

// //move b at the end
// b.next=null;
// c.next=b;


//insert z between b and C

// let z={ value:"Z"};
// b.next=z;
// z.next=c;

// console.log(a);


let node4 = {
    name: "label",
    value: "Name",
    children: null
};
let node5 = {
    name: "input",
    value: "this was typed by a user",
    children: null
};
let node3 = {
    name: "p",
    value: "This is text in the a paragraph",
    children: null
};
let node2 = {
    name: "div",
    value: null,
    children: [node4, node5]
};
let node1 = {
    name: "body",
    children: [node2, node3],
    value: null,
};


function counting(node) {
    if (node.children == null){
        console.log("I am in", node.name);
        return 1;
    }
    else {
        for (let child of node.children){
            console.log("I am in", child.name);
            return 1 + counting(child);
        }
    }
}

console.log(counting(node1));