"use strict";

let simpleObject = {
    a: 1,
    b: 2,
    c: {
        a:[3, 4],
        g: 9,
        asd: 'dar'
    },
    f: 9
};

// COUNT  THE  KEYS    Question 1
function countKeys(node) {
    let result = 1;
    for(let elem in node){
        if(typeof node[elem]!='object' || Array.isArray(node[elem]))
        {
            result++;
        }
        else{
            result += countKeys(node[elem]) ;
        }
    }



    // if (typeof node != 'object'){
    //     console.log("node is", node)
    //     return 1;
    // }
    // else {
    //     for (let elem in node){
    //         let sum;
    //         //console.log("i am here", node[elem])
    //             if(typeof node[elem]=='object' && !Array.isArray(elem)){
                    
    //                 sum=countKeys(node[elem])
    //             }
    //             else
    //                 sum= countKeys(elem);
    //         console.log("sum is", sum, "for", elem)
    //         result +=sum;
    //     }
       
    // }
    return result;
}
 console.log(countKeys(simpleObject));


//  LIST ALL THE LEAFS NODES   QUESTION2
function listLeafs(node) {
    let leafs = [];
    if (typeof node != 'object') {
        return;
    }
    else
        for (let key in node) {
            if(typeof node[key]=='object' && !Array.isArray(node[key])){
                leafs.push(listLeafs(node[key]));
            }
            else{
            let myObj={};
            myObj[key]=node[key];
            leafs.push(myObj);
            }
        }
    return leafs;
}
//console.log("Leafs are", listLeafs(simpleObject));



//List all the keys with given value Question 3
function findKeysWithGivenValue(node,givenVal){
    let prop = [];
    if (typeof node != 'object') {
        return;
    }
    else
        for (let key in node) {
            if(typeof node[key]=='object' && !Array.isArray(node[key])){
                let result=findKeysWithGivenValue(node[key],givenVal);
                if(result.length>0){
                    prop=prop.concat(result);
                }
            }
            else{
                 if(node[key]==givenVal)
                 prop.push(key);
            }
        }
    return prop;
}
//console.log("Array with keys that have a given value", findKeysWithGivenValue(simpleObject,'9'));


//  LIST  ALL  THE  KEYS  Question4
function matchKeys(node, keySearch) {
    if (typeof node != 'object') {
        return;
    }
    else {
        let result = [];
        for (let key in node) {
            if( typeof node[key]=='object' && !Array.isArray(node[key])){
                let arr= matchKeys(node[key], keySearch);
                //console.log("i am is some", arr);
                if(arr.length>0){
                   // console.log("i am is some", arr);
                   result=result.concat(arr);
                }
            }
            else{
                if(key==keySearch)
                    result.push(node[key]);
            }
            //console.log(node[elem])
        }
        return result;
    }
}

    // if( node==keySearch)
    //     return node;
    // else{
    //     let result=[];
    //     for(let elem in Object.keys(node))
    //         result=result.concat(matchKeys(elem,keySearch))
    //     return result;



//console.log(matchKeys(simpleObject,'a'));
