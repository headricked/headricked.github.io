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
            table += '<tr>';
            table += '<th>Name</th>';
            table += '<th>Height</th>';
            table += '<th>Mass</th>';
            table += '<th>Hair</th>';
            table += '<th>Skin</th>';
            table += '<th>Eyes</th>';
            table += '<th>Born</th>';
            table += '<th>Gender</th>';
            table += '</tr>';

            data.results.forEach(result => {
                table += '<tr>';
                table += '<td class="name">' + result.name + '</td>';
                table += '<td class="hideable">' + result.height + '</td>';
                table += '<td class="hideable">' + result.mass + '</td>';
                table += '<td class="hideable">' + result.hair_color + '</td>';
                table += '<td class="hideable">' + result.skin_color + '</td>';
                table += '<td class="hideable">' + result.eye_color + '</td>';
                table += '<td class="hideable">' + result.birth_year + '</td>';
                table += '<td class="hideable">' + result.gender + '</td>';
                table += '</tr>'
            })

            table += '</table>';

            document.getElementById('demo').innerHTML = table;

        });
}
