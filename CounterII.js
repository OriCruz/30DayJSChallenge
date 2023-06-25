// Write a function createCounter. It should accept an initial integer init. It should return an object with three functions.

// The three functions are:

// increment() increases the current value by 1 and then returns it.
// decrement() reduces the current value by 1 and then returns it.
// reset() sets the current value to init and then returns it.

const createCounter = function (init) {
    //storage the current value without going back to the initial params
    let currentValue = init;
    //prefix increment operatior (++init)imcrements the value and returns the value AFTER the increment
    //pastfix increment operator (init++)increments the value and returns the value before the increment
    let increment= ()=>++currentValue;//returning the 1+init value 
    let decrement =()=>(--currentValue)
    let reset =()=>(currentValue=init)
   return {
    increment, decrement, reset}
}
//testing purposes
let counter =createCounter(0)
counter.increment()
console.log(counter.increment());




