var  inputGanhoPorMes = document.querySelector("#ganho-mes")

var inputHorasPorDia = document.querySelector("#horas-dia")

var spanHora = document.querySelector("#resposta")

function calcularValorHora(){
    var qtdDeHorasMes = inputHorasPorDia.valueAsNumber*22
    var valorDaHora = (inputGanhoPorMes.valueAsNumber/qtdDeHorasMes).toFixed(2)

    spanHora.innerHTML = "R$" + valorDaHora.replace(".", ",")
}
