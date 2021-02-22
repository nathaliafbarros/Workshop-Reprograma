var inputValorHora = document.querySelector("#valor-hora")

var inputHorasProjeto = document.querySelector("#horas-projeto")

var spanResposta = document.querySelector("#resposta")

function calcular(){
    var qtdHoraProjeto = inputValorHora.valueAsNumber*inputHorasProjeto.valueAsNumber
    
    spanResposta.innerHTML = "R$" + qtdHoraProjeto.toFixed(2).replace(".", ",")

}



