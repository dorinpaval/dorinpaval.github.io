//  Question 4
for(let i=1;i<=5;i++)   //first pattern
{
   let row='';
   for(let j=1;j<=5;j++)
{
        row += j;
}
console.log(row);
}
console.log('');



for(let i=1;i<=5;i++)   //second patern
{
   let row='';
   for(let j=1;j<=i;j++)
{
        row += i;
}
console.log(row);
}
console.log('');



for(let i=5;i>=1;i--)   //third pattern
{
   let row='';
   for(let j=i;j>=1;j--)
{
        row += i;
}
console.log(row);
}
