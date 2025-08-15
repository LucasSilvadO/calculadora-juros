function calcularSimples() {
    let capital = parseFloat(document.getElementById("capital").value);
    let taxa = parseFloat(document.getElementById("taxa").value) / 100;
    let tempo = parseFloat(document.getElementById("tempo").value);

    let montante = capital + (capital * taxa * tempo);
    document.getElementById("resultado").innerHTML = 
        `Montante com Juros Simples: R$ ${montante.toFixed(2)}`;
}

function calcularComposto() {
    let capital = parseFloat(document.getElementById("capital").value);
    let taxa = parseFloat(document.getElementById("taxa").value) / 100;
    let tempo = parseFloat(document.getElementById("tempo").value);

    let montante = capital * Math.pow((1 + taxa), tempo);
    document.getElementById("resultado").innerHTML = 
        `Montante com Juros Compostos: R$ ${montante.toFixed(2)}`;
}
