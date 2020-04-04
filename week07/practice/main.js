const textButton = document.getElementById('person');
const outputDiv = document.getElementById('output');

// const textURL = 'http://numbersapi.com/random';
const textURL = 'https://randomuser.me/api/?results=1';

// textButton.addEventListener('click', () => {
//     fetch(textURL)
//     .then( response => {
//         outputDiv.innerHTML = 'Waiting for response...';
//     if(response.ok) {
//         return response;
//     }
//         throw Error(response.statusText);
//     })
//     .then( response => response.text() )
//     .then( text => outputDiv.innerText = text )
//     .catch( error => console.log('There was an error:', error))
// },false);

textButton.addEventListener('click', () => {
    fetch(textURL)
    .then( response => {
        outputDiv.innerHTML = 'Waiting for response...';
    if(response.ok) {
        return response;
    }
        throw Error(response.statusText);
    })
    .then( response => response.text() )
    .then( text => outputDiv.innerText = text )
    .catch( error => console.log('There was an error:', error))
},false);


// apiButton.addEventListener('click', () => {
//     fetch(apiURL)
//     .then( response => {
//         outputDiv.innerHTML = 'Waiting for response...';
//     if(response.ok) {
//         console.log(response);
//         return response;
//     }
//     throw Error(response.statusText);
//     })
//     .then( response => response.json() )
//     .then( data => outputDiv.innerText = data.value )
//     .catch( error => console.log('There was an error:', error))
// },false);