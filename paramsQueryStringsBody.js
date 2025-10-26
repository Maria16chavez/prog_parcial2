const express = require('express');
const app = express();
app.use(express.json());

// Ejemplo que usa Params, Query y Body
app.put('/tiendas/:tiendaId/productos/:productoId', (req, res) => {
    // Parámetros de ruta
    const { tiendaId, productoId } = req.params;
    
    // Query strings
    const { usuario, token } = req.query;
    
    // Body
    const { nombre, precio, stock } = req.body;
    
    res.json({
        mensaje: 'Producto actualizado',
        datos: {
            parametros: { tiendaId, productoId },
            query: { usuario, token },
            body: { nombre, precio, stock }
        }
    });
});