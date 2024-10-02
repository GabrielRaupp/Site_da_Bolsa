const express = require('express');
const mysql = require('mysql2');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;

// Configuração da conexão com o banco de dados MySQL
const connection = mysql.createConnection({
    host: '194.195.213.74',
    user: 'ifc',
    password: 'ifcs0mbrio',
    database: 'abelhas'
});

// Verifica a conexão
connection.connect((err) => {
    if (err) {
        console.error('Erro ao conectar ao banco de dados:', err);
        return;
    }
    console.log('Conectado ao banco de dados MySQL');
});
// Rota para obter dados de telemetria
app.get('/api/telemetria', (req, res) => {
    connection.query('SELECT * FROM telemetria', (err, results) => {
        if (err) {
            return res.status(500).json({ error: err });
        }

        const data = {
            ambiente: {
                temperatura: results[0].temperatura,
                umidade: results[0].umidade,
                pressao: results[0].pressao
            },
            caixa9: {
                temperatura: results[1].temperatura,
                umidade: results[1].umidade,
                pressao: results[1].pressao
            },
            caixa10: {
                temperatura: results[2].temperatura,
                umidade: results[2].umidade,
                pressao: results[2].pressao
            },
            caixa12: {
                temperatura: results[3].temperatura,
                umidade: results[3].umidade,
                pressao: results[3].pressao
            }
        };

        res.json(data);
    });
});

// Rota para servir a página principal
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'main.html')); // Altere para o seu arquivo HTML
});

// Middleware para servir arquivos estáticos
app.use(express.static(path.join(__dirname, 'public')));

// Inicia o servidor
app.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`);
});
