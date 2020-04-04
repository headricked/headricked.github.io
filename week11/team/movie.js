// let url = `http://www.omdbapi.com/?apikey=d681bfc6`;

// function searchMovie() {
//     console.log(`searchMovie`);
//     let movie = document.getElementById('movie').value;
//     console.log(`movie: ${movie}`);

//     let newUrl = url + `&s=${movie}`

//     loadData(newUrl);

//     // let xhr = new XMLHttpRequest();
//     // xhr.onreadystatechange = function () {
//     //     if (this.readyState == 4 && this.status == 200) {
//     //         document.getElementById("movieResults").innerHTML =
//     //             this.responseText;
//     //     }
//     // };
//     // xhr.open("GET", newUrl, true);
//     // xhr.send();

//     // console.log(`newUrl: ${newUrl}`);

// }

function searchMovie() {
    // Get the value from the search box
    var searchString = document.getElementById('movie').value;
    console.log('Searching for: ' + searchString);

    // Set up the parameters to send to the API
    var params =
        '?apikey=d681bfc6&s=' + encodeURIComponent(searchString);
    var url = 'http://www.omdbapi.com/' + params;

    //call fetch with our url...remember that fetch returns a Promise
    //that must be processed with a call to the .then() method.
    fetch(url)
        .then(function (response) {
            // fetch also returns a stream as the result...we have to tell it
            // how to format the stream...our choices are: json, text, or blob (binary data)
            return response.json();
            // the json() method also returns a promise...so we need
            //to call .then() on it as well (shown on the next line)
        })
        .then(function (data) {
            // we now have our data and can use it to update our page.
            updateResultList(data);
        });
}

function updateResultList(data) {
    console.log('UpdateResultList');
    console.log(data);

    if (data.Search && data.Search.length > 0) {
        const resultList = document.getElementById('movieResults');
        resultList.innerHTML = '';

        let table = '<table>';
        // you could use a forEach here as well...it would change the following line like this:
        // data.Search.forEach(function(item){ ...process each item here })
        for (let i = 0; i < data.Search.length; i++) {
            const title = data.Search[i].Title;
            const poster = data.Search[i].Poster;

            // console.log('Adding: ' + title);
            // const content = `<li><p>${title}</p></li>`;
            // resultList.innerHTML += content;

            table += `<tr>`;
            table += `<td class="title">${title}</td>`;
            table += `<td class="poster"><img src="${poster}" /></td>`;
        }
        table += `</tr>`;
        resultList.innerHTML += table;
    }
}