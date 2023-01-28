

function Gerar() { 
    
    let nivelSenha = document.getElementById('inputNivel');

    if(nivelSenha.value == 0){
        alert("Selecione um nível de segurança")
    }else{
        gerarSenha(nivelSenha.value)
    }
    
}

function gerarSenha(nivel){
    document.getElementById('container-password').style = "display: block"

    let txtSenha = document.getElementById('container-password')

    function gerarDigito(numMin, numMax) {
        return Math.floor(Math.random() * (numMax - numMin + 1)) + numMin
    }
    
    switch(nivel) {
        case '1':
            txtSenha.innerHTML = gerarDigito(000,999)
          break;
        case '2':
            txtSenha.innerHTML = gerarDigito(00000,99999)
          break;
        case '3':
            txtSenha.innerHTML = gerarDigito(00000000,99999999)
        break;
        
    }
}



