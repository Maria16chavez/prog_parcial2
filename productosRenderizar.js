/* ==============================================================
    TEMA 8: Plantillas de vista
    Este archivo va de la mano del archivo productos.ejs

    En este archivo va la ruta con en la que se renderizara la
    vista.
=================================================================*/
const express = require('express');
const app = express();

// Configurar EJS (entorno de plantillas)
app.set('view engine', 'ejs');
app.set('views', './views');

// Ruta que renderiza la lista de productos
app.get('/productos', (req, res) => {
    const productos = [
        { nombre: 'Laptop', precio: 2500000 },
        { nombre: 'Mouse', precio: 80000 },
        { nombre: 'Teclado', precio: 120000 },
        { nombre: 'Monitor', precio: 900000 },
        { nombre: 'Tablet', precio: 980000 },
        { nombre: 'BACALAOO', precio: 93480000 }
    ];

    res.render('productos', { productos });
});

const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Servidor en http://localhost:${PORT}`);
});


