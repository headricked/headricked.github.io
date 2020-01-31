const form = document.forms['hero'];
form.addEventListener('submit', makeHero, false);

function makeHero(event) {
    event.preventDefault(); // prevent the form from being submitted
    const hero = {}; // create an empty object
    hero.name = form.heroName.value; // create a name property based on the input field's value
    hero.realName = form.realName.value; // create a real name property based on the input field's value

    // create a super powers property based on the checked checkbox values
    hero.powers = [];
    for (let i = 0; i < hero.powers.length; i++) {
        if (hero.powers[i].checked) {
            hero.powers.push(form.powers[i].value);    
        }
    };

    alert(JSON.stringify(hero)); // convert object to JSON string and display in alert dialog
    return hero;
}