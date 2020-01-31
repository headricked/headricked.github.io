const form = document.forms['hero'];
form.addEventListener('submit', makeHero, false);

function makeHero(event) {
    event.preventDefault(); // prevent the form from being submitted
    const hero = {}; // create an empty object
    hero.name = form.heroName.value; // create a name property based on the input field's value
    hero.realName = form.realName.value; // create a real name property based on the input field's value

    // create a super powers property based on the checked checkbox values
    hero.powers = [];
    for (let i = 0; i < form.powers.length; i++) {
        if (form.powers[i].checked) {
            // push the checked value onto the hero.powers array
            hero.powers.push(form.powers[i].value);
        }
    };

    // more succinct way of writing the loop
    // hero.powers = [...form.powers].filter(box => box.checked).map(box => box.value);

    // create a person type property based on the checked checkbox values
    hero.category = [];
    for (let i = 0; i < form.category.length; i++) {
        if (form.category[i].checked) {
            // push the checked value onto the hero.powers array
            hero.category.push(form.category[i].value);
        }
    };

    // more succinct way of writing the loop
    // hero.category = [...form.category].filter(box => box.checked).map(box => box.value);

    // create an age property based on the input field's value
    hero.age = form.age.value;

    alert(JSON.stringify(hero)); // convert object to JSON string and display in alert dialog
    return hero;
}