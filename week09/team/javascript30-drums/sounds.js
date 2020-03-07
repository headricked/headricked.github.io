// var timesPressed = 0

// window.addEventListener('keydown', function(e) {
//     const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
//     if (!audio)
//         return;
//     audio.currentTime = 0
//     audio.play()

//     var div = this.document.querySelector(`div[data-key="${e.keyCode}"]`)
//     div.classList.add('playing')

//     this.console.log(div.style.transform)

//     timesPressed++

//     if (timesPressed > 10)
//         timesPressed = 0

//     div.style.transform = `translate(0px, ${timesPressed * 1}px)`

//     audio.onended = () => {
//         div.classList.remove('playing')
//         div.style.transform = `translate(0px, 0px)`
//     }
// })

function removeTransition(e) {
    if (e.propertyName !== 'tansform') return;
    e.target.classList.remove('playing');
}

function playSound(e) {
    const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
    const key   = document.querySelector(`div[data-key="${e.keyCode}"]`);

    if (!audio) return;

    key.classList.add('playing');
    audio.currentTime = 0;
    audio.play();
}

const keys = Array.from(document.querySelectorAll('.key'));
keys.forEach(key => key.addEventListener('transitioned', removeTransition));
window.addEventListener('keydown', playSound);