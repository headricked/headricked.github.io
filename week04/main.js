// const form = document.forms[0];
// const form = document.getElementsByTagname('form')[0];
// const form = document.forms.search;
// const form = document.forms['search'];
// const [input,button] = form.elements;
// const [input,button] = form.elements;
// console.log("form: " + form);

const input = form.elements.searchInput;
input.addEventListener('focus', () => alert('focused'), false);