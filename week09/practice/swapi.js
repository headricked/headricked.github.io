let url = 'https://swapi.co/api/people';

loadData(url);

function loadData(url) {
    fetch(url)
    .then((response) => {
        console.log(response);
        return response.json();
    })
    .then((data) => {


        let table = '<table>';

        data.results.forEach(result => {
            table += '<tr>';
            table += '<td class="name">' + result.name + '</td>';
            table += '<td class="hideable">' + result.height + '</td>';
            table += '</tr>'
        })
        
        table += '</table>';

        console.log(data);
        // let json = JSON.stringify(data);
        // document.getElementById('demo').innerHTML = json;
        document.getElementById('demo').innerHTML = table;

        if (data.next !== null) {
            saveNext(data.next);
        }

        if (data.previous !== null) {
            savePrev(data.previous);
        }
});
}

function loadNext() {
    nextUrl = localStorage.getItem('nextItem');
    loadData(nextUrl);
}

function loadPrev() {
    prevUrl = localStorage.getItem('prevItem');
    loadData(prevUrl);
}

function savePrev(prevUrl) {
    localStorage.setItem('prevItem', prevUrl);

}

function saveNext(nextUrl) {
    localStorage.setItem('nextItem', nextUrl);

}


function toggleHide() {
    let elements = document.querySelectorAll(".hideable");

    for(let i = 0; i < elements.length; i++) {
        if (elements[i].style.visibility === 'hidden') {
            elements[i].style.visibility = 'visible'
        }

        else {
            elements[i].style.visibility = 'hidden'
        }
    }

}