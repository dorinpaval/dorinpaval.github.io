"use strict"

/* You need the module.exports when testing in node.  Comment it out when you send your file to the browser */
//module.exports = { groupById, unique, filterRangeInPlace, filterRange, Calculator ,copySorted, sortByAge,shuffle, getAverageAge }; //add all of your function names here that you need for the node mocha tests

/**
 * 
 * @param {number} arr array of elements
 * @param {number} a  first elem 
 * @param {number} b  second elem
 * @returns {array} the result is an array with elements grater than a and less than b
 */
function filterRange(arr, a, b) {
    let copyArr=[];
    for(let elem of arr)
        {
          if(elem>=a && elem <= b)
            copyArr.push(elem);
        }
    return copyArr;
}

 /**
  * 
  @param {number} arr array of elements
 * @param {number} a  first elem 
 * @param {number} b  second elem
 * @returns {array} the result is an array with elements grater than a and less than b
  */
  function filterRangeInPlace(arr, a, b) {
    let copyArr=arr;
    for(let i=0;i<copyArr.length;i++)
    {
      if(copyArr[i]<a || copyArr[i]>b)
      {
        copyArr.splice(i,1);
        i--;
      }
    }
    if(copyArr!==arr)
      return copyArr;
  }
 

function Calculator() {

      this.methods = {
        "-": (a, b) => a - b,
        "+": (a, b) => a + b
      };
    
      this.calculate = function(str) {
    
        let split = str.split(' '),
          first = +split[0],
          sign = split[1],
          second = +split[2];
    
        if (!this.methods[sign] || isNaN(first) || isNaN(second)) {
          return NaN;
        }
    
        return this.methods[sign](first, second);
      };
    
      this.addMethod = function(name, func) {
        this.methods[name] = func;
      };
    }


  function unique(arr) {
    let result = [];

  for (let str of arr) {
    if (!result.includes(str)) {
      result.push(str);
    }
  }
  return result;

  }


  function groupById(array) {
    return array.reduce((obj, value) => {
      obj[value.id] = value;
      return obj;
    }, {})
  }

  function copySorted(arr) {
    return arr.slice().sort();
  }

  function sortByAge(arr) {
    if(!arr)
        return {};
    else
        return arr.sort((a, b) => a.age - b.age);
  }


  function shuffle(array) {
    if(array.length===0)
      return false;
    else{
      const copy= array.sort(() => Math.random() - 0.5);
      copy.sort();
      if(copy===array)
         return true;
    }
    return false;
  }

  function getAverageAge(users) {
    if(users.length===0)
      return {};
    else
      return users.reduce((prev, user) => prev + user.age, 0) / users.length;
  }

  let users = [
    {id: 'john', name: "John", age: 20},
    {id: 'pete', name: "Pete", age: 30},
    {id: 'mary', name: "Mary", age: 28},
  ];

console.log(getAverageAge([]));