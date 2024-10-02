document.addEventListener("DOMContentLoaded", function () {
    fetch('/api/telemetria')  // Rota do backend para obter os dados
        .then(response => response.json())
        .then(data => {
            // Ambiente
            const ambienteTemp = data.ambiente.temperatura;
            const ambienteUmid = data.ambiente.umidade;
            const ambientePress = data.ambiente.pressao;
            
            document.getElementById('amb-temp').style.width = `${ambienteTemp}%`;
            document.getElementById('amb-temp-value').textContent = `${ambienteTemp} °C`;

            document.getElementById('amb-umid').style.width = `${ambienteUmid}%`;
            document.getElementById('amb-umid-value').textContent = `${ambienteUmid} %`;

            document.getElementById('amb-press').style.width = `${ambientePress}%`;
            document.getElementById('amb-press-value').textContent = `${ambientePress} hPa`;

            // Caixa 9
            const caixa9Temp = data.caixa9.temperatura;
            const caixa9Umid = data.caixa9.umidade;
            const caixa9Press = data.caixa9.pressao;
            
            document.getElementById('caixa9-temp').style.width = `${caixa9Temp}%`;
            document.getElementById('caixa9-temp-value').textContent = `${caixa9Temp} °C`;

            document.getElementById('caixa9-umid').style.width = `${caixa9Umid}%`;
            document.getElementById('caixa9-umid-value').textContent = `${caixa9Umid} %`;

            document.getElementById('caixa9-press').style.width = `${caixa9Press}%`;
            document.getElementById('caixa9-press-value').textContent = `${caixa9Press} hPa`;

            // Caixa 10
            const caixa10Temp = data.caixa10.temperatura;
            const caixa10Umid = data.caixa10.umidade;
            const caixa10Press = data.caixa10.pressao;
            
            document.getElementById('caixa10-temp').style.width = `${caixa10Temp}%`;
            document.getElementById('caixa10-temp-value').textContent = `${caixa10Temp} °C`;
            
            document.getElementById('caixa10-umid').style.width = `${caixa10Umid}%`;
            document.getElementById('caixa10-umid-value').textContent = `${caixa10Umid} %`;
            
            document.getElementById('caixa10-press').style.width = `${caixa10Press}%`;
            document.getElementById('caixa10-press-value').textContent = `${caixa10Press} hPa`;
            // Caixa 12
            const caixa12Temp = data.caixa12.temperatura;
            const caixa12Umid = data.caixa12.umidade;
            const caixa12Press = data.caixa12.pressao;
            
            document.getElementById('caixa12-temp').style.width = `${caixa12Temp}%`;
            document.getElementById('caixa12-temp-value').textContent = `${caixa12Temp} °C`;

            document.getElementById('caixa12-umid').style.width = `${caixa12Umid}%`;
            document.getElementById('caixa12-umid-value').textContent = `${caixa12Umid} %`;

            document.getElementById('caixa12-press').style.width = `${caixa12Press}%`;
            document.getElementById('caixa12-press-value').textContent = `${caixa12Press} hPa`;

            // Adicione outras caixas da mesma forma...
        })
        .catch(err => console.error(err));
});
