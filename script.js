const key = "0afd8ecbf155654d31880811afba4b5b"

function buttonClick(){
    const cidade = document.querySelector(".input-city").value
    buscarCidade(cidade)
}

async function buscarCidade(cidade){
    const dados = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cidade}&appid=${key}&lang=pt_br&units=metric`).then( resposta => resposta.json( ))
    colocarDadosNaTela(dados)
}

function colocarDadosNaTela(dados){
    document.querySelector(".cidade").innerHTML = "Tempo em " + dados.name
    document.querySelector(".temperatura").innerHTML = Math.floor(dados.main.temp) + "ºC"
    document.querySelector(".texto-previsao").innerHTML = dados.weather[0].description   
    document.querySelector(".umidade").innerHTML = "Umidade " + dados.main.humidity + "%"
    document.querySelector(".img-previsao").src = `https://openweathermap.org/img/wn/${dados.weather[0].icon}.png`
}