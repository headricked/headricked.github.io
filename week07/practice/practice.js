// function party(){
//     alert('Wow this is amazing!');
//     party = function(){
//         alert('Been there, got the T-Shirt');
//     }
// }

function party() {
    console.log('Wow this is amazing!');
    
    party = function(){
        console.log('Been there, got the T-Shirt');
    }
}

party.music = 'Classical Jazz'; // set a property of the function

party();

party.music; // function has now been redefined, so the property doesn't exist

function ride(){
    if (window.unicorn) { 
        ride = function(){
        // some code that uses the brand new and sparkly unicorn methods
        return 'Riding on a unicorn is the best!';
        }
    } else {
        ride = function(){
        // some code that uses the older pony methods
        return 'Riding on a pony is still pretty good';
        }
    }
    return ride();
}


function returnHello() {
    console.log('returnHello() called');
    return function() {
        console.log('Hello World!');
    }
}