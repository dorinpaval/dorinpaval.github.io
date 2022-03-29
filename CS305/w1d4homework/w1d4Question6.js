"use strict";
/**
 * 
 * @param {number} row the number of rows
 * @param {number} colomn the number of colomns
 * @returns {number} the generated matrix
 */
function generateArray(row, colomn){
    let elem=1;
    let matrix = [];
    
    for(let i=0;i<row;i++){
    matrix.push([]);
    
    for(let j=0;j<colomn;j++)
            {
                matrix[i][j] = elem;
                elem += 1;
            }
        }
    return matrix;        
}

console.log("expect[[1,2,3],[4,5,6],[7,8,9]]: ", generateArray(3,3));


