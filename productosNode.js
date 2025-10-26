const express = require('express');
const app = express();

// Middleware para parsear JSON
app.use(express.json());

// Array temporal para simular una base de datos
let productos = [
    { id: 1, nombre: 'Laptop', precio: 999.99, categoria: 'Tecnología' },
    { id: 2, nombre: 'Mouse', precio: 29.99, categoria: 'Tecnología' },
    { id: 3, nombre: 'Teclado', precio: 59.99, categoria: 'Tecnología' }
];

// GET /productos - Listar todos los productos
app.get('/productos', (req, res) => {
    res.json({
        mensaje: 'Lista de productos obtenida exitosamente',
        total: productos.length,
        datos: productos
    });
});

// GET /productos/:id - Obtener un producto por ID
app.get('/productos/:id', (req, res) => {
    const id = parseInt(req.params.id);
    const producto = productos.find(p => p.id === id);
    
    if (!producto) {
        return res.status(404).json({
            mensaje: 'Producto no encontrado',
            error: `No existe un producto con ID: ${id}`
        });
    }
    
    res.json({
        mensaje: 'Producto obtenido exitosamente',
        datos: producto
    });
});

// POST /productos - Crear un nuevo producto
app.post('/productos', (req, res) => {
    const { nombre, precio, categoria } = req.body;
    
    // Validación básica
    if (!nombre || !precio) {
        return res.status(400).json({
            mensaje: 'Datos incompletos',
            error: 'El nombre y precio son obligatorios'
        });
    }
    
    // Crear nuevo producto
    const nuevoProducto = {
        id: productos.length > 0 ? Math.max(...productos.map(p => p.id)) + 1 : 1,
        nombre,
        precio: parseFloat(precio),
        categoria: categoria || 'General'
    };
    
    productos.push(nuevoProducto);
    
    res.status(201).json({
        mensaje: 'Producto creado exitosamente',
        datos: nuevoProducto
    });
});

// PUT /productos/:id - Actualizar un producto existente
app.put('/productos/:id', (req, res) => {
    const id = parseInt(req.params.id);
    const { nombre, precio, categoria } = req.body;
    
    const productoIndex = productos.findIndex(p => p.id === id);
    
    if (productoIndex === -1) {
        return res.status(404).json({
            mensaje: 'Producto no encontrado',
            error: `No existe un producto con ID: ${id}`
        });
    }
    
    // Actualizar el producto
    productos[productoIndex] = {
        ...productos[productoIndex],
        ...(nombre && { nombre }),
        ...(precio && { precio: parseFloat(precio) }),
        ...(categoria && { categoria })
    };
    
    res.json({
        mensaje: 'Producto actualizado exitosamente',
        datos: productos[productoIndex]
    });
});

// DELETE /productos/:id - Eliminar un producto
app.delete('/productos/:id', (req, res) => {
    const id = parseInt(req.params.id);
    const productoIndex = productos.findIndex(p => p.id === id);
    
    if (productoIndex === -1) {
        return res.status(404).json({
            mensaje: 'Producto no encontrado',
            error: `No existe un producto con ID: ${id}`
        });
    }
    
    const productoEliminado = productos.splice(productoIndex, 1)[0];
    
    res.json({
        mensaje: 'Producto eliminado exitosamente',
        datos: productoEliminado
    });
});

// Puerto del servidor
const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Servidor de productos corriendo en http://localhost:${PORT}`);
});