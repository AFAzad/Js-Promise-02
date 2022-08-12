/*Complete the function checkCanIVote

Takes 2 arguments

1st argument time, which is the number of milliseconds after the function will resolve or reject

Second argument is the age upon (also a number) which you will use to return the string based on logic mentioned below

Resolves to "You can vote" after x milliseconds if age is greater than or equal to 18

Rejects with "You can not vote" after x milliseconds if age less than 18 */

function checkCanIVote(time, age) {

    // return the output using return keyword
    // do not console.log it
    return new Promise((resolve,reject)=> {
     setTimeout(()=>{
         if( age >= 18){
             resolve("You can vote");
         }else{
             reject("You can not vote");
         }
     },time);
 });

}
