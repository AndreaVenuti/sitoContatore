var valore = 0;

function aggiungi(){
    valore++;
    document.getElementById("number").innerHTML = valore;
}

function togli(){
    valore--;
    document.getElementById("number").innerHTML = valore;
}

function reset (){
    valore = 0;
    document.getElementById("number").innerHTML = valore;
}

function togli10(){
    valore -= 10;
    document.getElementById("number").innerHTML = valore;
}

function aggiungi10(){
    valore += 10;
    document.getElementById("number").innerHTML = valore;
}