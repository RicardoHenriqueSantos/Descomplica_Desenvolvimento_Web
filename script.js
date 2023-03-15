function PegarValor(){
    var valor = document.getElementById('nome').value;
    document.getElementById('resultado').innerHTML = "Bem Vindo, " + valor + "!";
    document.getElementById('nome').value = "";
}

function RemoverValor(){
    document.getElementById('nome').value = "";
    document.getElementById('resultado').innerHTML = ""
}