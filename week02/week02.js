/********************************************
 *  function expression
 *******************************************/
const goodbye = function bye(){
    console.log('Using function expression: Goodbye World!');
};
seeya = goodbye;
seeya();

/********************************************
 * function invocation
 *******************************************/
function howdy(){
    return 'Function invocation: Howdy World!';
}
const message = howdy();
console.log(howdy());
console.log(message);

/********************************************
 * parameters and arguments
 *******************************************/
function square(x) {
    return x * x
}
const squaredNumber = square(4);
console.log("Squared number = " + squaredNumber);


/********************************************
 * get user input and store in array
 *******************************************/
let numArray = [];
// get the user input
function addTo() { 
    numArray.push(document.getElementById("userinput").value);
    console.log("numArray = " + numArray);
}

/********************************************
 * find the mean
 *******************************************/
// function mean(...numArray) {
//     let total = 0;
//     for(const value of numArray) {
//         total += numArray;
//     }
//     // return total/numArray.length;
//     let average = total/numArray.length;
//     console.log("Average = " + average);
// }

// function mean(...values) {
//     let total = 0;
//     for(const value of values) {
//         total += value;
//     }
//     return total/values.length;
// }


/*******************************************
 * ARROW FUNCTION
 ******************************************/
let y = 5;
const squared = y => y * y;
console.log(`Result of arrow function: 'const squared = y => y * y: ` + y)


/*******************************************
 * CALLBACK FUNCTION
 ******************************************/
function sing(song) {
    console.log(`I'm singing along to ${song}`);
}
sing(`"Let It Go"`)


/*******************************************
 * CALLBACK FUNCTION
 ******************************************/
function first(){
    // Simulate a five-second code delay
    setTimeout( function(){
      console.log(`Result of function first(): ` + 1);
    }, 5000 );
  }
  function second(){
    console.log(`Result of function second(): ` + 2);
  }
  first();
  second();


/*******************************************
 * CALLBACK FUNCTION
 ******************************************/
function doHomework(subject) {
    console.log(`I'm doing my ${subject} homework.`);
    console.log(`I'm doing my ` + subject + ` homework.`)
}

// doHomework('javascript');


/*******************************************
 * FOR LOOP THROUGH ARRAY
 ******************************************/
const colors = ['Red', 'Green', 'Blue']
for(let i = 0, max = colors.length ; i < max ; i++ ) {
    console.log(`Color at position ${i} is ${colors[i]}`);
}

/*******************************************
 * FOR LOOP THROUGH ARRAY
 ******************************************/
const states = [
    'Alabama', 'Alaska', 'Arizona', 'Arkansas', 'California', 'Colorado', 'Connecticut', 'Delaware', 'Florida', 'Georgia', 'Hawaii', 'Idaho', 'Illinois', 'Indiana', 'Iowa', 'Kansas', 'Kentucky', 'Louisiana','Maine', 'Maryland', 'Massachussetts', 'Michigan', 'Minnesota', 'Mississippi', 'Missouri', 'Montana', 'Nebraska', 'Nevada', 'New Hampshire', 'New Jersey', 'New Mexico', 'New York', 'North Carolina', 'North Dakota', 'Ohio', 'Oklahoma', 'Oregon', 'Pennsylvania', 'Rhode Island', 'South Carolina', 'South Dakota', 'Tennessee', 'Texas', 'Utah', 'Vermont', 'Virginia', 'Washington', 'West Virginia', 'Wisconsin', 'Wyoming'
]
states.forEach( (states,index) =>
    console.log(`USING FOREACH AND ARROW FUNCTION: State at position ${index} is ${states}`) );

/*******************************************
 * map()
 ******************************************/
// [1,2,3].map( square )
// console.log(square(2));

// [1,2,3].map( x => 5 * x);

let mapResult = [1,2,3].map( x => 5 * x);
console.log(mapResult);

// ['red','green','blue'].map( color => `<p> ${color.toUpperCase()}</p>` );

let mapColorsLower = ['RED','grEen','BluE'].map( color => `<p> ${color.toLowerCase()}</p>` );
console.log(`mapColorsLower = ${mapColorsLower}`);

let mapColorsUpper = ['red','green','blue'].map( color => `<p> ${color.toUpperCase()}</p>` );
console.log(`mapColorsUpper = ${mapColorsUpper}`);


/*******************************************
 * reduce()
 ******************************************/
// let acc = 10;
let prev = 0;
let reduction = [4,2,3,4].reduce( (_acc,val) => prev + val );
console.log(`Result of 'reduction' = ${reduction}`);


/*******************************************
 * filter()
 ******************************************/
const numbers = [ 2, 7, 6, 5, 11, 23, 12 ]
let filteredNums = numbers.filter(x => x%2 === 0 ); // this returns true if the number is even
console.log(`Result of 'filteredNums' = ${filteredNums}`);


/*******************************************
 * mean(): find the mean of an array of numbers
 ******************************************/
let array = [01,02,03,04,05,06,07,08,09,10,11,12,13,14,15,16,17,18,19];

// function mean(array) {
//     const total = array.reduce((a, b) => a + b);
//     return total/array.length;
// }
// let resultMeanArray = mean(array);


// function mean(numArray) {
//     const total = numArray.reduce((a, b) => a + b);
//     return total/numArray.length;
// }
// let resultMeanArray = mean(numArray);

function mean(array,callback) {
    if (callback) {
        array.map( callback );
    } 
    const total = array.reduce((a, b) => a + b);
    return total/array.length;
}
let resultMeanArray = mean(array);
console.log(`Result of 'resultMeanArray' = ${resultMeanArray}`);


/*******************************************
 * QUIZ
 ******************************************/
const quiz = [
    ["What is Superman's real name?","Clark Kent"],
    ["What is Wonder Woman's real name?","Diana Prince"],
    ["What is Batman's real name?","Bruce Wayne"]
];

function start(quiz){
    let score = 0;
    // main game loop
    for(const [question,answer] of quiz){
        const response = ask(question);
        check(response,answer);
    }
    // end of main game loop
    gameOver();
    // function declarations
    function ask(question){
        return prompt(question);
    }
    function check(response,answer){
        if(response === answer){
        alert('Correct!');
        score++;
        } else {
        alert(`Wrong! The correct answer was ${answer}`);
        }
    }
    function gameOver(){
        alert(`Game Over, you scored ${score} point${score !== 1 ? 's' : ''}`);
    }
}
start(quiz);
