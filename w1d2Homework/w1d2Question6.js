// Question 6

function calcDistance(x1, y1, x2, y2)
{
    let x=(x2-x1)**2;
    let y=(y2-y1)**2;
    let dist= Math.sqrt(x + y);
    return dist.toFixed(2);
}

console.log('expect 7.07: - - - ', calcDistance(0,0,5,5));
