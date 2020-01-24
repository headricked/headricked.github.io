// function doSomething() {
//     console.log("Something happened!");
// }

// function doSomething(event) {
//     console.log(event.type);
// }

// function doSomething(event){
//     console.log(event.target);
// }

function doSomething(event){
    console.log(`   
                    screen: (${event.screenX},${event.screenY}),
                    page: (${event.pageX},${event.pageY}),
                    client: (${event.screenX},${event.screenY})
                `)
}

addEventListener("click", doSomething);