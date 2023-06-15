//Given a integer n, return a counter function. Initiallly this funtion returns n and then returns 1 more than the previous value every subsequent time it is called (n , n+1, n+2).
const createCounter =(n)=>{
return function (){
     return n++;
    };
};
//
const counter = createCounter(10);
//testing purposes and visualizing data in console
// let array = [];
//closure to invoke the annonymous function and return the n++;

// array.push(counter());
// array.push(counter());
// array.push(counter());

// console.log(array);




