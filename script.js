document.getElementById("form2").addEventListener("submit", async function(event) {
    event.preventDefault(); // Evita o envio padrão do formulário

    const CEP = document.getElementById("CEP").value;
    const latitude = document.getElementById("Latitude").value;
    const longitude = document.getElementById("Longitude").value;

    try {
        // Requisição para API de CEP
        const cepResponse = await fetch(`https://viacep.com.br/ws/${CEP}/json/`);
        const cepData = await cepResponse.json();
        console.log(cepData);
        document.getElementById("Rua").value = cepData.logradouro;
        document.getElementById("Bairro").value = cepData.bairro;
        document.getElementById("Cidade").value = cepData.localidade;
    } catch (error) {
        alert("Erro ao obter dados do CEP.");
    }

    try {
        // Requisição para API de clima
        const weatherResponse = await fetch(`https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&hourly=temperature_2m`);
        const weatherData = await weatherResponse.json();
        console.log(weatherData);

        document.getElementById("resposta").innerHTML = "";
        for (let index = 0; index < weatherData.hourly.temperature_2m.length; index++) {
            document.getElementById("resposta").innerHTML += `<div>${weatherData.hourly.time[index]} - ${weatherData.hourly.temperature_2m[index]}</div>`;
        }
    } catch (error) {
        alert("Erro ao obter dados do clima.");
    }

    const primeiroNome = document.getElementById("Nome").value;
    const email = document.getElementById("E-mail").value;

    // Envie os dados para o servidor usando fetch ou outra técnica
    const formData = new FormData();
    formData.append("PrimeiroNome", primeiroNome);
    formData.append("Email", email);

    try {
        const response = await fetch("https://api.sheetmonkey.io/form/mrhU2o5hkdhnidhLiHAKKV", {
            method: "POST",
            body: formData
        });
        const data = await response.json();
        console.log(data);
    } catch (error) {
        alert("Erro ao enviar dados para o servidor.");
    }
});
