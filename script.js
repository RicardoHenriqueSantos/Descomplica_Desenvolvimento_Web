function PegarValor(){
    var valor = document.getElementById('nome').value;
    document.getElementById('resultado').innerHTML = "Bem Vindo, " + valor + "!";
}

function RemoverValor(){
    document.getElementById('nome').value = "";
    document.getElementById('resultado').innerHTML = ""
}