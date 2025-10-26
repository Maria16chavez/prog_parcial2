# Proyecto parcial 2 - Programación III - S6A
## Descripción
🏆 En el siguiente proyecto desarrollamos una aplicación web funcional que integre los conocimientos 
adquiridos durante el semestre: HTML5, CSS, JavaScript, Node.js con Express, y conexión a base de datos MySQL.
## Contenido📚
- [⚠ Requisitos previos](#1️⚠-requisitos-previos) 
- [📲 Instalación](#📲-instalación)
- [🛠 Estructura del proyecto](#🛠-estructura-del-proyecto)
- [1️⃣ Tema 1: HTML5](#1️⃣-tema-1-HTML5) 
- [2️⃣ Tema 2: CSS](#2️⃣-tema-2-CSS) 
- [3️⃣ Tema 3: JavaScript y fundamentos](#3️⃣-tema-3-javaScript-y-fundamentos) 
- [4️⃣ Tema 4: JavaScript POO y eventos](#4️⃣-tema-4-JavaScript-POO-y-eventos) 
- [5️⃣ Tema 5: Introducción a Node.js y Express](#5️⃣-tema-5-introducción-a-Node.js-y-Express)
- [6️⃣ Tema 6: Rutas y controladores](#6️⃣-tema-6-rutas-y-controladores)
- [7️⃣ Tema 7: Ciclo Petición-Respuesta](#7️⃣-tema-7-ciclo-petición-respuesta)
- [8️⃣ Tema 8: Plantillas de Vista (EJS)](#8️⃣-tema-8-plantillas-de-vista-ejs)
- [9️⃣ Tema 9: Sesiones y cookies](#9️⃣-tema-9-sesiones-y-cookies)
- [🔟 Tema 10: Conexión a base de datos](#🔟-tema-10-conexión-a-base-de-datos)
- [👩‍💻 Team](#👩‍💻-team)

## ⚠ Requisitos previos
- [Node.js](https://nodejs.org/) (v18 o superior)
- [npm](https://www.npmjs.com/) (gestor de paquetes)
- Editor de código (VS Code recomendado)
- Extensión **Thunder Client** o **Postman** para probar endpoints
## 📲 Instalación
1. Clona o descarga este proyecto.  
2. Abre una terminal en la carpeta del proyecto.  
3. Instala las dependencias:
   npm install
## 🛠 Estructura del proyecto
<img width="243" height="357" alt="image" src="https://github.com/user-attachments/assets/20d55169-6e83-43d7-bc50-5956e1d02333" />

## 1️⃣ Tema 1: Ciclo Petición-Respuesta
Objetivo: crear una página HTML5 que contenga:
· Un encabezado principal con el nombre de los participantes
· Una lista ordenada con 3 tecnologías web
· Una imagen con atributo alt
· Un formulario con campos: nombre, email y botón envia

## 2️⃣ Tema 2: CSS
Objetivo: Crear estilos CSS para un diseño responsive que:
· Tenga un contenedor centrado de máximo 1000px
· Use Flexbox para organizar 3 tarjetas en fila
· En pantallas menores a 768px, las tarjetas se apilen verticalmente

## 3️⃣ Tema 3: JavaScript y fundamentos
Objetivo: Escribe una función en JavaScript que:
· Reciba un array de números
· Retorne la suma de todos los números pares
· Use el método filter() y reduce()

## 4️⃣ Tema 4: JavaScript POO y eventos
Objetivo: Crea una clase Producto con:
· Propiedades: nombre, precio, stock
· Método para calcular el precio con IVA (19%)
· Método para verificar si hay stock disponible

## 5️⃣ Tema 5: Introducción a Node.js y Express
Objetivo: Crea una aplicación Express que:
· Tenga una ruta /inicio que responda con "Bienvenido"
· Una ruta /api/hora que retorne la hora actual en formato JSON
· Configure el puerto 3000

## 6️⃣ Tema 6: Rutas y controladores
Objetivo: Implementa un CRUD completo para "productos" con rutas:
· GET /productos - Listar todos
· GET /productos/:id - Obtener uno
· POST /productos - Crear
· PUT /productos/:id - Actualizar
· DELETE /productos/:id - Elimina

## 7️⃣ Tema 7: Ciclo Petición-Respuesta
Objetivo: Comprender cómo Express maneja las solicitudes (req) y respuestas (res).

Archivo: middlewareActualizado.js

🔹 Endpoint /registro

Valida los campos nombre, email y password.
Si faltan datos → responde con código 400 Bad Request.
Si todo está correcto → responde con 201 Created.

Ejemplo de prueba en Thunder Client:
Método: POST
URL: http://localhost:3000/registro
Body (JSON):

<img width="318" height="143" alt="image" src="https://github.com/user-attachments/assets/44c6c3cf-5e6c-460e-9adb-b74306a1ccaa" />

Respuesta esperada:

<img width="1077" height="296" alt="image" src="https://github.com/user-attachments/assets/e01d6c39-982b-4451-8a28-da68f1c33f2a" />

## 8️⃣ Tema 8: Plantillas de Vista (EJS)
Objetivo: Usar el motor de plantillas EJS para renderizar vistas dinámicas.
Archivo: views/productos.ejs

🔹 Ruta /productos

Renderiza una tabla con una lista de productos y precios formateados en pesos colombianos.


Ejemplo de datos:

<img width="396" height="219" alt="image" src="https://github.com/user-attachments/assets/a0d8ffd2-b0f0-4414-b24e-f9cc46bbfc36" />

🔹 Resultado visual:

<img width="831" height="415" alt="image" src="https://github.com/user-attachments/assets/fa990b7c-7f7d-4d3c-83d1-745382061c74" />





Una tabla HTML con los productos renderizados dinámicamente.
## 9️⃣ Tema 9: Sesiones y cookies
Objetivo: Implementar un sistema de login que:
· Guarde el usuario en sesión al hacer login
· Cree un middleware que verifique si hay sesión activa
· Proteja una ruta /admin que solo usuarios autenticados puedan acceder

## 🔟 Tema 10: Conexión a base de datos
Objetivo: Implementar funciones para:
· Obtener todos los productos de la tabla productos
· Buscar un producto por ID
· Actualizar el precio de un producto
· Usar async/await y manejo de errores

## 👩‍💻 Team
- Esteban Suárez
- Natalia Cifuentes
- Mariangel Beltrán
- Carolina Gutiérrez
- María Chávez
