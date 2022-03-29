"use strict";
/**
 * 
 * @param {number} studAnswers the array of students' answers 
 * @param {number} correctAnswers the array of correct answers
 * @returns {number} the array of score exam
 */
function scoreExams(studAnswers,correctAnswers){
    //let scoreExam=[0];
    let studScore=[];
    //let noElem=correctAnswers.length;
    for(let i=0;i<studAnswers.length;i++)
    {
        let ans=0;
        studScore.push([]);
        for(let j=0;j<correctAnswers.length;j++){
            if(studAnswers[i][j]===correctAnswers[j]){
                ans +=1;
                studScore[i] = ans;
            }
           // console.log(studScore[j]);
        }

    }   
    return studScore; 
}
const studentAnswers= [[1,1,2,4],[2,1,2,2],[3,1,3,4]];
const correctAnswers= [3,1,2,4];
console.log(scoreExams(studentAnswers,correctAnswers));
