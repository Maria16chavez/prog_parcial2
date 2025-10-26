/* EJERCICIO 5.1 - Introducción a Node */

const express = require('express');
const app = express();
const PORT = 3000;

// Middleware para parsear JSON
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Archivos estáticos
app.use(express.static('public'));

// Ruta básica
app.get('/', (req, res) => {
    res.send('¡Hola desde Node.js!');
});

// Ruta /inicio que responde con "Bienvenido"
app.get('/inicio', (req, res) => {
    res.send('Bienvenido');
});

// Ruta /api/hora que retorna la hora actual en formato JSON
app.get('/api/hora', (req, res) => {
    const horaActual = new Date().toLocaleTimeString();
    res.json({ 
        hora: horaActual,
        timestamp: new Date().toISOString()
    });
});

// Iniciar servidor en puerto 3000
app.listen(PORT, () => {
    console.log(`Servidor corriendo en http://localhost:${PORT}`);
});