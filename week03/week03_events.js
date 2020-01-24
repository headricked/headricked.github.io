// function doSomething() {
//     console.log("Something happened!");
// }

function doSomething(event) {
    console.log(event.type);
}

addEventListener("click", doSomething);