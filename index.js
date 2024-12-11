function iniciarContagemRegressiva() {
    const agora = new Date();
    
    const meiaNoite = new Date(agora.getFullYear(), agora.getMonth(), agora.getDate() + 1);

    const intervalo = setInterval(() => {
        const agora = new Date();
        const distancia = meiaNoite - agora;

        let horas = Math.floor(distancia / (1000 * 60 * 60));
        let minutos = Math.floor(distancia % (1000 * 60 * 60) / (1000 * 60));
        let segundos = Math.floor(distancia % (1000 * 60) / 1000);

        if(horas < 10){
            horas = `0${horas}`;
        }
        if(minutos < 10){
            minutos = `0${minutos}`;
        }
        if(segundos < 10){
            segundos = `0${segundos}`;
        }
    
        document.getElementById("contador").innerHTML = `As ofertas exclusivas terminam em: ${horas}:${minutos}:${segundos}`;

        if (distancia < 0) {
            clearInterval(intervalo);
            document.getElementById("contador").innerHTML = "As ofertas exclusivas terminaram!";
        }
    }, 1000);
}

iniciarContagemRegressiva();