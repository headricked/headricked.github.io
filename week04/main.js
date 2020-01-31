// const form = document.forms[0];
// const form = document.getElementsByTagname('form')[0];
// const form = document.forms.search;
const form = document.forms['search'];
// const [input,button] = form.elements;
// console.log("form: " + form);

const input = form.elements.searchInput;

// form events
input.addEventListener('focus',  () => console.log('focused'), false);
input.addEventListener('blur',   () => console.log('blurred'), false);
input.addEventListener('change', () => console.log('changed'), false);


// submitting a form
form.addEventListener ('submit', search, false);

// function search() {
//     alert("Form Submitted");
//     event.preventDefault();
// };

function search(event) {
    alert(`You Searched for: ${input.value}`);
    event.preventDefault();
}

input.value = 'Search Here';

input.addEventListener(
    // first param
    'focus',
    
    // second param
    function(){
        if (input.value==='Search Here') {
            input.value = ''
        }
    },
    
    // third param
    false
);

input.addEventListener(
    // first param
    'blur', 
    
    // second param
    function(){
        if(input.value === '') {
            input.value = 'Search Here';
        }
    },
    
    // third param
    false
);