/*========================================================
    Tema 7 
    Haciendo uso del archivo middlewareUse.js vamos a
    realizar unas actualizaciones para hacer posible el
    ejercicio del tema 7, creando un endpoint /registro 
==========================================================*/
const express = require('express');
const app = express();
const PORT = 3000;

// Middleware para parsear JSON
app.use(express.json());

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

// ✅ Endpoint /registro
app.post('/registro', (req, res) => {
    const { nombre, email, password } = req.body;

    // Validar campos
    if (!nombre || !email || !password) {
        return res.status(400).json({
            error: 'Faltan datos. Todos los campos son obligatorios (nombre, email, password).'
        });
    }

    // Si todo está correcto
    res.status(201).json({
        mensaje: 'Registro exitoso',
        usuario: nombre,
        email: email
    });
});

// Manejo básico de errores
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).json({ error: 'Error interno del servidor' });
});

// Iniciar servidor
app.listen(PORT, () => {
    console.log(`Servidor en http://localhost:${PORT}`);
});
