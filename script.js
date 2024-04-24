document.getElementById("form2").addEventListener("submit", async function(event) {
    event.preventDefault(); // Evita o envio padrão do formulário

    const CEP = document.getElementById("CEP").value;
    try {
        const response = await fetch(`http://viacep.com.br/ws/${CEP}/json/`);
        const data = await response.json();
        console.log(data);
        document.getElementById("Rua").value = data.logradouro;
        document.getElementById("Bairro").value = data.bairro;
        document.getElementById("Cidade").value = data.localidade;
    } catch (error) {
        alert(error.message);
    }
});

    document.getElementById("form2").addEventListener("submit", async function(event) {
        event.preventDefault(); 
        const latitude = document.getElementById("Latitude").value;
        const longitude = document.getElementById("Longitude").value;
        const apiUrl = `https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&hourly=temperature_2m&daily=rain_sum`;

        try {
            const response = await fetch(apiUrl);
            const data = await response.json();
            console.log(data);

            document.getElementById("resposta").innerHTML = "";
            for (let index = 0; index < data.hourly.temperature_2m.length; index++) {
                document.getElementById("resposta").innerHTML += `<div>${data.hourly.time[index]} - ${data.hourly.temperature_2m[index]}</div>`;
            }
        } catch (error) {
            alert(error.message);
        }
    });

    document.getElementById("form2").addEventListener("submit", async function(event) {
        event.preventDefault(); // Evita o envio padrão do formulário

        const primeiroNome = document.getElementById("primeiroNome").value;
        const email = document.getElementById("email").value;

        // Aqui você pode enviar os dados para o servidor usando fetch ou outra técnica
        // Exemplo de envio dos dados para o servidor usando fetch:
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
            alert(error.message);
        }
    });