// Your code here
function saturdayFun(fun="roller-skate") {
    return `This Saturday, I want to ${fun}!`
}

function mondayWork (activity="go to the office") {
    return `This Monday, I will ${activity}.`
}

let wrapAdjective= function(pizazz="*") {
     return function(adjective="special"){
        return `You are ${pizazz}${adjective}${pizazz}!`
    }
}

//this is a calculator object with keys of add, subtract, multiply, divide-
// each key holds the associated function as it's value, so when calling Obj.value
// example: Calculator.add
//the code performs the function stored in the add key of the Calculator object
const Calculator = {
    add:function(x, y) {
        return x + y;
    },
    subtract:function(x,y) {
        return x - y;
    },
    multiply:function(x,y) {
        return x * y;
    },
    divide:function(x,y) {
        return x / y;
    },
}

// function actionApplyer (startingInt, arrayFunc) {
// ////what the f-r-e-n-c-h ????
// }

//code below from solution branch, no clue how to solve this one
let actionApplyer = function(start, ray) {
    let a = start
  
    for (let i = 0; i < ray.length; i++ ){
      a = ray[i](a)
    }
  
    return a
  }