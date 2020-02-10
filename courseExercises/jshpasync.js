/////////////////
//             //
// CHALLENGE 1 //
//             //
/////////////////

/* <<<=== Remove the first two slashes (//) to comment out this challenge when finished
console.log('Start of Challenge 1');
// ...your code below
console.log('I am at the beginning of the code');


setTimeout(function(){console.log("I am in the setTimeout callback function");}, 3000);



console.log('End of Challenge 1');
// */// (do not alter this line)




/////////////////
//             //
// CHALLENGE 2 //
//             //
/////////////////

/* <<<=== Remove the first two slashes (//) to comment out this challenge when finished
console.log('Start of Challenge 2');
// ...your code below

function intervalHello(){
  var myInterval = setInterval(function(){
    setTimeout(function(){clearInterval(myInterval);}, 10000)
    console.log("Interval Hello!");}, 2000)
}
intervalHello();


// ...your code above
function clearAllIntervals() {
  for (let i = 0; i < 1000; i++) {
    clearInterval(i);
  }
}
console.log('End of Challenge 2');
// */// (do not alter this line)



/////////////////
//             //
// CHALLENGE 3 //
//             //
/////////////////

/* <<<=== Remove the first two slashes (//) to comment out this challenge when finished
console.log('Start of Challenge 3');
// ...your code below

function everyXsecsforYsecs(f, x, y){
  var myInterval = setInterval(function(){
    setTimeout(function(){clearInterval(myInterval);}, (1000 * y));
    f();}, (1000 * x))
}

function sayHowdy(){
  console.log("Howdy");
}

everyXsecsforYsecs(sayHowdy, 1, 5)

console.log('End of Challenge 3');
// */// (do not alter this line)




/////////////////
//             //
// CHALLENGE 4 //
//             //
/////////////////

// /* <<<=== Remove the first two slashes (//) to comment out this challenge when finished
console.log('Start of Challenge 4');
// ...your code below

function forEach(arr, cb){
  for (let i = 0; i < arr.length; i++){
    return cb(arr[i]);
  }
}

var delays = [2000, 5000, 0, 3500];

function delayLog(delayTime, i){
  setTimeout(function(){console.log(`printing element ${i}`);}, delayTime);
}

forEach(delays, delayLog);

console.log('End of Challenge 4');
// */// (do not alter this line)



/////////////////
//             //
// CHALLENGE 5 //
//             //
/////////////////

// /* <<<=== Remove the first two slashes (//) to comment out this challenge when finished
console.log('Start of Challenge 5');
// ...your code below




// ...your code above
document.body.style.background = '#def';
console.log('End of Challenge 3');
// */// (do not alter this line)



/////////////////
//             //
// CHALLENGE 6 //
//             //
/////////////////

// /* <<<=== Remove the first two slashes (//) to comment out this challenge when finished
console.log('Start of Challenge 6');
var dataReceived;

function ajaxSimulate(id, callback) {
  var database = ['Aaron', 'Barbara', 'Chris'];

}
// ...your code below



console.log('End of Challenge 6');
// */// (do not alter this line)



/////////////////
//             //
// CHALLENGE 7 //
//             //
/////////////////

// /* <<<=== Remove the first two slashes (//) to comment out this challenge when finished
console.log('Start of Challenge 7');
// ...your code below





console.log('End of Challenge 7');
// */// (do not alter this line)



/////////////////
//             //
// CHALLENGE 8 //
//             //
/////////////////

// /* <<<=== Remove the first two slashes (//) to comment out this challenge when finished
console.log('Start of Challenge 8');
// ...your code below






console.log('End of Challenge 8');
// */// (do not alter this line)



/////////////////
//             //
// CHALLENGE 9 //
//             //
/////////////////

// /* <<<=== Remove the first two slashes (//) to comment out this challenge when finished
console.log('Start of Challenge 9');
// ...your code below







console.log('End of Challenge 9');
// */// (do not alter this line)

