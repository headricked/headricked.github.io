// ADD EVENT LISTENERS
document.querySelector('#btn-screen-dimensions').addEventListener('click', showScreenDimensions, false);
document.querySelector('#btn-make-cookie').addEventListener('click', makeCookie, false);


function showScreenDimensions() {
    
    let screenHeight, screenWidth;

    screenHeight = window.screen.height;
    screenWidth = window.screen.width;

    alert(`Screen height: ${screenHeight}, Screen width: ${screenWidth}`);
}

function makeCookie() {
    
}

window.alert('Hi. After you click OK, you may see a pop-up to the home page of the Church of Jesus Christ of Latter-day Saints.');

const popup = window.open('https://www.churchofjesuschrist.org/?lang=eng','Church of Jesus Christ of Latter-day Saints','width=400,height=400,resizable=yes');



document.cookie = 'name=Batman'
document.cookie = 'city=Gotham'

