let url = 'https://swapi.co/api/people';

loadData(url);


// Example POST method implementation:
async function postData(url = '', data = {}) {
    // Default options are marked with *
    const response = await fetch(url, {
      method: 'GET', // *GET, POST, PUT, DELETE, etc.
      mode: 'cors', // no-cors, *cors, same-origin
      cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
      credentials: 'same-origin', // include, *same-origin, omit
      headers: {
        'Content-Type': 'application/json'
        // 'Content-Type': 'application/x-www-form-urlencoded',
      },
      redirect: 'follow', // manual, *follow, error
      referrerPolicy: 'no-referrer', // no-referrer, *client
      body: JSON.stringify(data) // body data type must match "Content-Type" header
    });
    return await response.json(); // parses JSON response into native JavaScript objects
  }
  
  postData('https://example.com/answer', { answer: 42 })
    .then((data) => {
      console.log(data); // JSON data parsed by `response.json()` call
    });


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
