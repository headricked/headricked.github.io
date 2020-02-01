var i = 1;

function touchCell(cell){
    if(cell.innerHTML == 'X' || cell.innerHTML == 'O'){
        return;
    }

    if(i % 2 == 0) {
        cell.innerHTML = 'O';
    } else {
        cell.innerHTML = 'X';
    }

    i++;
}

function reset(){
    var j = 1;

    for(var j; j < 10; j++){
        document.getElementById(j).innerHTML = '';
    }
}