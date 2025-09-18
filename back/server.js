const express = require('express');
const cors = require('cors');
const app = express();
const port = 3001;

// Configura CORS para permitir a origem do frontend
app.use(cors({
  origin: ['http://localhost:3000', 'http://localhost:3002'], // Adicione as portas usadas pelo frontend
  methods: ['GET', 'POST', 'PUT', 'DELETE'], // Métodos permitidos
  allowedHeaders: ['Content-Type', 'Authorization'] // Headers permitidos
}));

app.get('/', (req, res) => {
  res.send('Hello from Node.js backend!');
});

const frasesEngracadas = [
  "Você conhece a piada do pônei? -Po nei eu",
  "O que o pagodeiro foi fazer na igreja? -Cantar pá God",
  "O que o pato falou para a pata? -Vem quá",
  "Você sabe qual é o rei dos queijos? -O reiqueijão",
  "O que acontece quando chove na Inglaterra? -Vira Inglalama"
];

// Rota para retornar uma frase aleatória
app.get('/frase', (req, res) => {
  const indiceAleatorio = Math.floor(Math.random() * frasesEngracadas.length);
  res.send(frasesEngracadas[indiceAleatorio]);
});

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});