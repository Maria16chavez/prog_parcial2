const express = require('express');
const app = express();
const PORT = 3000;

// Middleware que se ejecuta en cada petición
app.use((req, res, next) => {
    console.log(`📨 Nueva petición: ${req.method} ${req.url}`);
    next(); // Pasa al siguiente middleware o ruta
});

// Ruta normal
app.get('/', (req, res) => {
    res.send('¡Página de inicio!');
});

// Otra ruta
app.get('/usuarios', (req, res) => {
    res.send('Lista de usuarios');
});

app.listen(PORT, () => {
    console.log(`Servidor en http://localhost:${PORT}`);
});