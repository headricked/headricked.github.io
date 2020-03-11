let url = 'https://swapi.co/api/people';

fetch(url)
    .then((response) => {
        return response.json();
    })
    .then((data) => {
        console.log(data);


        let table = '<table>';

        data.results.forEach(result => {
            table += '<tr>';
            table += '<td class="name">' + result.name + '</td>';
            table += '<td class="hideable">' + result.height + '</td>';
            table += '<td class="hideable">' + result.mass + '</td>';
            table += '<td class="hideable">' + result.hair_color + '</td>';
            table += '<td class="hideable">' + result.skin_color + '</td>';
            table += '<td class="hideable">' + result.eye_color + '</td>';
            table += '<td class="hideable">' + result.birt_hyear + '</td>';
            table += '<td class="hideable">' + result.gender + '</td>';
            table += '</tr>'
        })
        
        table += '</table>';


    });

