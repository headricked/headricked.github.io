// function doSomething() {
//     console.log("Something happened!");
// }

// function doSomething(event) {
//     console.log(event.type);
// }

// function doSomething(event){
//     console.log(event.target);
// }

// function doSomething(event){
//     console.log(`   
//                     screen: (${event.screenX},${event.screenY}),
//                     page: (${event.pageX},${event.pageY}),
//                     client: (${event.screenX},${event.screenY})
//                 `)
// }

// addEventListener("click", doSomething);

// track single click using event listener
const clickParagraph = document.getElementById('click');
clickParagraph.addEventListener('click',() => console.log('click') );
clickParagraph.addEventListener('mousedown',() => console.log('down') );
clickParagraph.addEventListener('mouseup',() => console.log('up') );

// track double-click event using event listener
const dblclickParagraph = document.getElementById('dblclick');
dblclickParagraph.addEventListener('dblclick', highlight);
function highlight(event){
    event.target.classList.toggle('highlight');
}

// track hover event using event listener
const mouseParagraph = document.getElementById('mouse');
mouseParagraph.addEventListener('mouseover', highlight);
mouseParagraph.addEventListener('mouseout', highlight);

// keydown event listener
addEventListener('keydown',highlight);

// keyup event listener
addEventListener('keyup', (event) => console.log(`You stopped pressing the key on ${new Date}`));

// keypress event listener
addEventListener('keypress', (event) => console.log(`You pressed the ${event.key} character`));

// modifier key event listener
addEventListener('keydown', (event) => console.log(`You pressed the ${event.key} character`));

// using the remove event listener
const onceParagraph = document.getElementById('once');
onceParagraph.addEventListener('click', remove);
function remove(event) {
    console.log('Enjoy this while it lasts!');
    onceParagraph.style.backgroundColor = 'pink';
    onceParagraph.removeEventListener('click',remove);
}
