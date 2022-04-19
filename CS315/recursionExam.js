"node strict";

let company = { // the same object, compressed for brevity
    sales: [{ name: 'John', salary: 1000 }, { name: 'Alice', salary: 1600 }],
    development: {
        sales: [{ name: 'Peter', salary: 2000 }, { name: 'Alex', salary: 1800 }],
        internals: [{ name: 'Jack', salary: 1300 }]
    }
};


let inc = 0;
function getSalaries(obj) {
    let sum = 0;
    if (Array.isArray(obj)) {
        for (let elem of obj) {
            sum += elem.salary;
            inc++;
        }
        return sum;
    }
    else {
        for (let child in obj)
            sum += getSalaries(obj[child]);
        console.log("Inc is", inc)
    }
    return sum;
}
// let avg=getSalaries(company) / inc;
//   console.log( "Avg is",avg);

let salesInc = 0;
function getSalesSalaries(obj) {
    let sum = 0;
    if (Array.isArray(obj)) {
        for (let elem of obj) {
            sum += elem.salary;
            salesInc++;
        }
        console.log("sum is", sum);
        return sum;
    }
    else {
        for (let child in obj) {
            if (child == "sales") {
                sum += getSalesSalaries(obj[child]);
            }
            else if (typeof obj[child] == 'object') {
                for (let key in obj[child]) {

                    if (key == "sales") {
                        console.log("key is", obj[child][key])
                        sum += getSalesSalaries(obj[child][key]);

                    }
                }
                return sum;
            }
        }
    }
    return sum;
}
//console.log("Sales dept salaries", getSalesSalaries(company));



function getNameSalary(obj){
    let objectArr=[];
    if(Array.isArray(obj)){
        let result= obj.map(function (item){
            let newObj={};
            newObj[item.name]=item.salary;
            return newObj;
        });
       // console.log("Return is", result);
        return result;
    }
    else{
        for(let key in obj){
            //console.log("obj[key] is ", obj[key])
            objectArr=objectArr.concat(getNameSalary(obj[key]));
        }
    }
    return objectArr;
}

//console.log("result is", getNameSalary(company));


function getNames(obj){
    let objectArr=[];
    if(Array.isArray(obj)){
        let result= obj.map( item => item.name);
        console.log("Return is", result);
        return result;
    }
    else{
        for(let key in obj){
            //console.log("obj[key] is ", obj[key])
            objectArr=objectArr.concat(getNames(obj[key]));
        }
    }
    return objectArr;
}

console.log("result is 23", getNames(company));