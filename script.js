function calcularSimples() {
    let capital = parseFloat(document.getElementById("capital").value);
    let taxa = parseFloat(document.getElementById("taxa").value) / 100;
    let tempo = parseFloat(document.getElementById("tempo").value);
    let naoPreenchida = ''
    
    // Este código verifica se os dados foram preenchidos
    // vazio .. '' , null , undefined

    if (document.getElementById("capital").value == ''){ // Se condição
        naoPreenchida = '"Capital"'; // faça isso
    }
    else if (document.getElementById("taxa").value == '') { // Senão Se
        naoPreenchida = '"Taxa"'; // faça isso
    }
    else if (document.getElementById("tempo").value == ''){
        naoPreenchida = '"Tempo"';
    }

    // if (naoPreenchida != ''){
    //     alert('Não preencheu ' + naoPreenchida);
    // }

    // Estrutura condicionel
    // & = and
    // || = or
    
    if (naoPreenchida != ''){
        document.getElementById("resultado_falha").innerHTML = 
        `Dados não preenchidos ${naoPreenchida}`;  
        
        document.getElementById("resultado").innerHTML = "";
    }
    else{
        let montante = capital + (capital * taxa * tempo);
        document.getElementById("resultado").innerHTML = 
        `Montante com Juros Simples: R$ ${montante.toFixed(2)}`;

        document.getElementById("resultado_falha").innerHTML = "";
    } 
}

function calcularComposto() {
    let capital = parseFloat(document.getElementById("capital").value);
    let taxa = parseFloat(document.getElementById("taxa").value) / 100;
    let tempo = parseFloat(document.getElementById("tempo").value);
    let naoPreenchida = ''

    // Este código verifica se os dados foram preenchidos
    // vazio .. '' , null , undefined

    if (document.getElementById("capital").value == ''){ // Se condição
        naoPreenchida = '"Capital"'; // faça isso
    }
    else if (document.getElementById("taxa").value == '') { // Senão Se
        naoPreenchida = '"Taxa"'; // faça isso
    }
    else if (document.getElementById("tempo").value == ''){
        naoPreenchida = '"Tempo"';
    }

    // if (naoPreenchida != ''){
    //     alert('Não preencheu ' + naoPreenchida);
    // }

    // Estrutura condicionel
    // & = and
    // || = or
    
    if (naoPreenchida != ''){
        document.getElementById("resultado_falha").innerHTML = 
        `Dados não preenchidos ${naoPreenchida}`;  
        
        document.getElementById("resultado").innerHTML = "";
    }
    else{
        let montante = capital * Math.pow((1 + taxa), tempo);
        document.getElementById("resultado").innerHTML = 
        `Montante com Juros Compostos: R$ ${montante.toFixed(2)}`;

        document.getElementById("resultado_falha").innerHTML = "";
    } 

    document.getElementById("resultado").innerHTML = 
        `Montante com Juros Compostos: R$ ${montante.toFixed(2)}`;

}